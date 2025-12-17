import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { trackFormSubmit } from "@/lib/analytics";
const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Le nom complet est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().max(20).optional(),
  participants: z.string().trim().max(10).optional(),
  message: z.string().trim().min(1, "Le message est requis").max(1000)
});
export const ContactSection = () => {
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    participants: "",
    message: ""
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Validate form data
      contactSchema.parse(formData);
      setIsSubmitting(true);
      const {
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: formData
      });
      if (error) throw error;
      
      trackFormSubmit('contact_form');
      
      toast({
        title: "Merci !",
        description: "Notre équipe vous recontactera très bientôt."
      });

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        participants: "",
        message: ""
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Erreur",
          description: error.errors[0].message,
          variant: "destructive"
        });
      } else {
        toast({
          title: "Erreur",
          description: "Une erreur est survenue. Veuillez réessayer.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section className="py-12 px-4 bg-gradient-to-b from-background to-muted/20">
      
    </section>;
};