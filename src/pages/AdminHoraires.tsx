import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

interface HoraireRow {
  id: string;
  day_name: string;
  day_order: number;
  is_closed: boolean;
  time_ranges: string;
}

interface NoteRow {
  id: string;
  note_type: string;
  note_text: string;
  enabled: boolean;
}

const NOTE_LABELS: Record<string, string> = {
  holidays: "🎄 Note jours fériés",
  school_holidays: "📚 Note vacances scolaires",
  exceptional: "⚠️ Fermeture / horaires exceptionnels",
};

const AdminHoraires = () => {
  const { toast } = useToast();
  const [hours, setHours] = useState<HoraireRow[]>([]);
  const [notes, setNotes] = useState<NoteRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const [hRes, nRes] = await Promise.all([
        supabase.from("opening_hours").select("*").order("day_order"),
        supabase.from("opening_hours_notes").select("*"),
      ]);
      if (hRes.error || nRes.error) {
        console.error(hRes.error, nRes.error);
        toast({ title: "Erreur", description: "Impossible de charger les données.", variant: "destructive" });
      } else {
        setHours(hRes.data as HoraireRow[]);
        setNotes(nRes.data as NoteRow[]);
      }
      setLoading(false);
    };
    fetch();
  }, []);

  const updateHour = (id: string, field: keyof HoraireRow, value: string | boolean) => {
    setHours((prev) =>
      prev.map((h) => (h.id === id ? { ...h, [field]: value } : h))
    );
  };

  const updateNote = (id: string, field: keyof NoteRow, value: string | boolean) => {
    setNotes((prev) =>
      prev.map((n) => (n.id === id ? { ...n, [field]: value } : n))
    );
  };

  const handleSave = async () => {
    setSaving(true);

    const hourUpdates = hours.map((h) =>
      supabase
        .from("opening_hours")
        .update({ is_closed: h.is_closed, time_ranges: h.time_ranges, updated_at: new Date().toISOString() })
        .eq("id", h.id)
    );

    const noteUpdates = notes.map((n) =>
      supabase
        .from("opening_hours_notes")
        .update({ note_text: n.note_text, enabled: n.enabled, updated_at: new Date().toISOString() })
        .eq("id", n.id)
    );

    const results = await Promise.all([...hourUpdates, ...noteUpdates]);
    const hasError = results.some((r) => r.error);

    if (hasError) {
      toast({ title: "Erreur", description: "Une erreur est survenue lors de la sauvegarde.", variant: "destructive" });
    } else {
      toast({ title: "✅ Sauvegardé", description: "Les horaires ont été mis à jour avec succès." });
    }
    setSaving(false);
  };

  if (loading)
    return <div className="flex items-center justify-center min-h-screen text-lg">Chargement…</div>;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">🕐 Administration des horaires</h1>
        <p className="text-sm text-gray-500">
          Ces valeurs sont affichées dans le footer du site. Modifiez-les ici et cliquez sur Sauvegarder.
        </p>

        <div className="space-y-4">
          {hours.map((h) => (
            <div
              key={h.id}
              className="flex flex-col sm:flex-row sm:items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200"
            >
              <div className="flex items-center gap-3 min-w-[140px]">
                <Switch
                  checked={!h.is_closed}
                  onCheckedChange={(open) => updateHour(h.id, "is_closed", !open)}
                />
                <Label className="text-base font-semibold text-gray-800 whitespace-nowrap">
                  {h.day_name}
                </Label>
              </div>

              {h.is_closed ? (
                <span className="text-sm font-medium text-red-500 italic">Fermé</span>
              ) : (
                <Input
                  value={h.time_ranges}
                  onChange={(e) => updateHour(h.id, "time_ranges", e.target.value)}
                  placeholder="ex : 14:00 – 00:00"
                  className="h-10 flex-1"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h2 className="text-xl font-bold text-gray-900">📝 Notes spéciales</h2>
        <p className="text-sm text-gray-500">
          Activez et rédigez des notes qui s'afficheront sous les horaires dans le footer.
        </p>

        {notes.map((n) => (
          <div key={n.id} className="space-y-2 p-4 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex items-center justify-between">
              <Label className="text-base font-semibold text-gray-800">
                {NOTE_LABELS[n.note_type] || n.note_type}
              </Label>
              <Switch
                checked={n.enabled}
                onCheckedChange={(v) => updateNote(n.id, "enabled", v)}
              />
            </div>
            {n.enabled && (
              <Textarea
                value={n.note_text}
                onChange={(e) => updateNote(n.id, "note_text", e.target.value)}
                placeholder="Ex : Fermé le 25 décembre"
                className="min-h-[60px]"
              />
            )}
          </div>
        ))}
      </div>

      <Button
        onClick={handleSave}
        disabled={saving}
        className="w-full h-12 text-base font-bold bg-gradient-to-r from-[#FFBD0B] to-[#FF6B35] hover:from-[#FFD000] hover:to-[#FF8B55] text-black rounded-xl"
      >
        {saving ? "Sauvegarde…" : "💾 Sauvegarder les horaires"}
      </Button>
    </div>
  );
};

export default AdminHoraires;
