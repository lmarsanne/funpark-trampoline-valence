CREATE POLICY "Anyone can update popup config"
ON public.newsletter_popup_config
FOR UPDATE
TO public
USING (true)
WITH CHECK (true);