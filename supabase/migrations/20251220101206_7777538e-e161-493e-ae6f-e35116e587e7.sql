-- Create newsletter popup configuration table
CREATE TABLE public.newsletter_popup_config (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  enabled boolean NOT NULL DEFAULT true,
  title text NOT NULL DEFAULT '🎉 Rejoignez le Club Fun Park !',
  subtitle text NOT NULL DEFAULT 'Recevez en avant-première nos offres et invitations VIP 🎳🤸🎤',
  placeholder text NOT NULL DEFAULT 'Votre adresse email',
  button_text text NOT NULL DEFAULT '👉 Je rejoins le Club',
  reassurance_text text NOT NULL DEFAULT 'Pas de spam. Désinscription en 1 clic.',
  success_title text NOT NULL DEFAULT '🎉 Bienvenue au Club Fun Park !',
  success_description text NOT NULL DEFAULT 'Surveillez votre boîte mail…',
  delay_seconds integer NOT NULL DEFAULT 7,
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.newsletter_popup_config ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read the config (public data)
CREATE POLICY "Anyone can read popup config"
ON public.newsletter_popup_config
FOR SELECT
USING (true);

-- Insert default configuration
INSERT INTO public.newsletter_popup_config (
  enabled,
  title,
  subtitle,
  placeholder,
  button_text,
  reassurance_text,
  success_title,
  success_description,
  delay_seconds
) VALUES (
  true,
  '🎉 Rejoignez le Club Fun Park !',
  'Recevez en avant-première nos offres et invitations VIP 🎳🤸🎤',
  'Votre adresse email',
  '👉 Je rejoins le Club',
  'Pas de spam. Désinscription en 1 clic.',
  '🎉 Bienvenue au Club Fun Park !',
  'Surveillez votre boîte mail…',
  7
);