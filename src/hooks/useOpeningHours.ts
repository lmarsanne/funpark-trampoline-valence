import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface HoraireRow {
  day_name: string;
  day_order: number;
  is_closed: boolean;
  time_ranges: string;
}

interface NoteRow {
  note_type: string;
  note_text: string;
  enabled: boolean;
}

const FALLBACK_HOURS: HoraireRow[] = [
  { day_name: "Lundi", day_order: 1, is_closed: true, time_ranges: "" },
  { day_name: "Mardi", day_order: 2, is_closed: true, time_ranges: "" },
  { day_name: "Mercredi", day_order: 3, is_closed: false, time_ranges: "14:00 – 00:00" },
  { day_name: "Jeudi", day_order: 4, is_closed: false, time_ranges: "18:00 – 00:00" },
  { day_name: "Vendredi", day_order: 5, is_closed: false, time_ranges: "18:00 – 02:00" },
  { day_name: "Samedi", day_order: 6, is_closed: false, time_ranges: "14:00 – 02:00" },
  { day_name: "Dimanche", day_order: 7, is_closed: false, time_ranges: "14:00 – 20:00" },
];

export function useOpeningHours() {
  const [hours, setHours] = useState<HoraireRow[]>(FALLBACK_HOURS);
  const [notes, setNotes] = useState<NoteRow[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const [hRes, nRes] = await Promise.all([
        supabase.from("opening_hours").select("day_name, day_order, is_closed, time_ranges").order("day_order"),
        supabase.from("opening_hours_notes").select("note_type, note_text, enabled"),
      ]);
      if (hRes.data && hRes.data.length > 0) setHours(hRes.data as HoraireRow[]);
      if (nRes.data) setNotes(nRes.data.filter((n: any) => n.enabled && n.note_text) as NoteRow[]);
    };
    fetch();
  }, []);

  return { hours, notes };
}
