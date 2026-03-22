
CREATE TABLE public.opening_hours (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  day_name text NOT NULL,
  day_order integer NOT NULL,
  is_closed boolean NOT NULL DEFAULT false,
  time_ranges text NOT NULL DEFAULT '',
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.opening_hours ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read opening hours" ON public.opening_hours FOR SELECT TO public USING (true);
CREATE POLICY "Anyone can update opening hours" ON public.opening_hours FOR UPDATE TO public USING (true) WITH CHECK (true);

INSERT INTO public.opening_hours (day_name, day_order, is_closed, time_ranges) VALUES
  ('Lundi', 1, true, ''),
  ('Mardi', 2, true, ''),
  ('Mercredi', 3, false, '14:00 – 00:00'),
  ('Jeudi', 4, false, '18:00 – 00:00'),
  ('Vendredi', 5, false, '18:00 – 02:00'),
  ('Samedi', 6, false, '14:00 – 02:00'),
  ('Dimanche', 7, false, '14:00 – 20:00');

CREATE TABLE public.opening_hours_notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  note_type text NOT NULL,
  note_text text NOT NULL DEFAULT '',
  enabled boolean NOT NULL DEFAULT false,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.opening_hours_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read opening hours notes" ON public.opening_hours_notes FOR SELECT TO public USING (true);
CREATE POLICY "Anyone can update opening hours notes" ON public.opening_hours_notes FOR UPDATE TO public USING (true) WITH CHECK (true);

INSERT INTO public.opening_hours_notes (note_type, note_text, enabled) VALUES
  ('holidays', '', false),
  ('school_holidays', '', false),
  ('exceptional', '', false);
