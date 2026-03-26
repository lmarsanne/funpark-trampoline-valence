ALTER TABLE public.newsletter_popup_config
  ADD COLUMN mode text NOT NULL DEFAULT 'newsletter',
  ADD COLUMN redirect_url text NOT NULL DEFAULT '';