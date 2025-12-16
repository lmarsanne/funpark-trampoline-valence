-- Make the video bucket public
UPDATE storage.buckets SET public = true WHERE id = 'video';

-- Create policy for public read access
CREATE POLICY "Public video access" ON storage.objects
FOR SELECT USING (bucket_id = 'video');