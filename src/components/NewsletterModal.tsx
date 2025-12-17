import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const newsletterSchema = z.object({
  email: z.string().trim().email({ message: "Adresse email invalide" }).max(255),
});

type NewsletterFormValues = z.infer<typeof newsletterSchema>;

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NewsletterModal = ({ open, onOpenChange }: NewsletterModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: NewsletterFormValues) => {
    setIsSubmitting(true);
    try {
      // Save to Supabase
      const { error: dbError } = await supabase
        .from("newsletter_subscribers")
        .insert({ email: data.email });

      if (dbError && dbError.code !== "23505") {
        throw dbError;
      }

      // Send to Brevo
      const { error: brevoError } = await supabase.functions.invoke("subscribe-brevo", {
        body: { email: data.email },
      });

      if (brevoError) {
        console.error("Brevo error:", brevoError);
        // Continue anyway - at least we saved to DB
      }

      toast({
        title: "Inscription réussie !",
        description: "Bienvenue dans le Club Fun Park !",
      });
      form.reset();
      onOpenChange(false);
      localStorage.setItem("newsletter_subscribed", "true");
    } catch (error) {
      console.error("Newsletter subscription error:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <DialogTitle className="text-2xl font-bold text-center">
            Rejoignez le Club Fun Park !
          </DialogTitle>
          <DialogDescription className="text-center text-base">
            Recevez nos offres exclusives et des invitations VIP pour les soirées.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Votre adresse email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Inscription..." : "M'inscrire"}
            </Button>
          </form>
        </Form>

        <p className="text-center text-xs text-muted-foreground mt-2">
          Pas de spam, désinscription en 1 clic.
        </p>
      </DialogContent>
    </Dialog>
  );
};

// Hook pour gérer l'ouverture automatique
export const useNewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSubscribed = localStorage.getItem("newsletter_subscribed");
    const hasDismissed = sessionStorage.getItem("newsletter_dismissed");
    
    if (!hasSubscribed && !hasDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      sessionStorage.setItem("newsletter_dismissed", "true");
    }
  };

  return {
    isOpen,
    setIsOpen,
    handleOpenChange,
  };
};
