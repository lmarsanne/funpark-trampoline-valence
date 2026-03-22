import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from "react-helmet-async";

interface PopupConfig {
  id: string;
  enabled: boolean;
  title: string;
  subtitle: string;
  placeholder: string;
  button_text: string;
  reassurance_text: string;
  success_title: string;
  success_description: string;
  delay_seconds: number;
}

const AdminPopup = () => {
  const { toast } = useToast();
  const [config, setConfig] = useState<PopupConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const fetchConfig = async () => {
      const { data, error } = await supabase
        .from("newsletter_popup_config")
        .select("*")
        .limit(1)
        .single();

      if (error) {
        console.error(error);
        toast({ title: "Erreur", description: "Impossible de charger la configuration.", variant: "destructive" });
      } else if (data) {
        setConfig(data as PopupConfig);
      }
      setLoading(false);
    };
    fetchConfig();
  }, []);

  const handleSave = async () => {
    if (!config) return;
    setSaving(true);
    const { error } = await supabase
      .from("newsletter_popup_config")
      .update({
        enabled: config.enabled,
        title: config.title,
        subtitle: config.subtitle,
        placeholder: config.placeholder,
        button_text: config.button_text,
        reassurance_text: config.reassurance_text,
        success_title: config.success_title,
        success_description: config.success_description,
        delay_seconds: config.delay_seconds,
      })
      .eq("id", config.id);

    if (error) {
      console.error(error);
      toast({ title: "Erreur", description: "Impossible de sauvegarder.", variant: "destructive" });
    } else {
      toast({ title: "✅ Sauvegardé", description: "La configuration a été mise à jour." });
    }
    setSaving(false);
  };

  const update = (key: keyof PopupConfig, value: string | boolean | number) => {
    setConfig((prev) => prev ? { ...prev, [key]: value } : prev);
  };

  if (loading) return <div className="flex items-center justify-center min-h-screen text-lg">Chargement…</div>;
  if (!config) return <div className="flex items-center justify-center min-h-screen text-lg text-red-500">Aucune configuration trouvée.</div>;

  const fields: { key: keyof PopupConfig; label: string }[] = [
    { key: "title", label: "Titre" },
    { key: "subtitle", label: "Sous-titre" },
    { key: "placeholder", label: "Placeholder email" },
    { key: "button_text", label: "Texte du bouton" },
    { key: "reassurance_text", label: "Texte de réassurance" },
    { key: "success_title", label: "Titre de succès" },
    { key: "success_description", label: "Description de succès" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-gray-900">⚙️ Configuration Pop-up Newsletter</h1>

        <div className="flex items-center justify-between p-4 bg-gray-100 rounded-xl">
          <Label htmlFor="enabled" className="text-base font-medium">Pop-up activée</Label>
          <Switch
            id="enabled"
            checked={config.enabled}
            onCheckedChange={(v) => update("enabled", v)}
          />
        </div>

        {fields.map(({ key, label }) => (
          <div key={key} className="space-y-1.5">
            <Label htmlFor={key} className="text-sm font-medium text-gray-700">{label}</Label>
            <Input
              id={key}
              value={config[key] as string}
              onChange={(e) => update(key, e.target.value)}
              className="h-11"
            />
          </div>
        ))}

        <div className="space-y-1.5">
          <Label htmlFor="delay" className="text-sm font-medium text-gray-700">Délai d'apparition (secondes)</Label>
          <Input
            id="delay"
            type="number"
            min={0}
            value={config.delay_seconds}
            onChange={(e) => update("delay_seconds", parseInt(e.target.value) || 0)}
            className="h-11 w-32"
          />
        </div>

        <Button
          onClick={handleSave}
          disabled={saving}
          className="w-full h-12 text-base font-bold bg-gradient-to-r from-[#FFBD0B] to-[#FF6B35] hover:from-[#FFD000] hover:to-[#FF8B55] text-black rounded-xl"
        >
          {saving ? "Sauvegarde…" : "💾 Sauvegarder"}
        </Button>
      </div>
    </div>
  );
};

export default AdminPopup;
