import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
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

interface PopupConfig {
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

const defaultConfig: PopupConfig = {
  enabled: true,
  title: "🎉 Rejoignez le Club Fun Park !",
  subtitle: "Recevez en avant-première nos offres et invitations VIP 🎳🤸🎤",
  placeholder: "Votre adresse email",
  button_text: "👉 Je rejoins le Club",
  reassurance_text: "Pas de spam. Désinscription en 1 clic.",
  success_title: "🎉 Bienvenue au Club Fun Park !",
  success_description: "Surveillez votre boîte mail…",
  delay_seconds: 7,
};

interface NewsletterModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  config?: PopupConfig;
}

export const NewsletterModal = ({ open, onOpenChange, config = defaultConfig }: NewsletterModalProps) => {
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
      }

      toast({
        title: config.success_title,
        description: config.success_description,
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
      <DialogContent className="sm:max-w-md p-0 overflow-hidden border-0 rounded-3xl shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-br from-[#FFBD0B] via-[#FF6B35] to-[#E91E63] p-6 pb-8 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-2 left-4 text-3xl opacity-80 animate-bounce">🎳</div>
          <div className="absolute top-4 right-6 text-2xl opacity-80 animate-bounce" style={{ animationDelay: "0.2s" }}>🤸</div>
          <div className="absolute bottom-2 left-8 text-2xl opacity-80 animate-bounce" style={{ animationDelay: "0.4s" }}>🎤</div>
          <div className="absolute bottom-4 right-4 text-3xl opacity-80 animate-bounce" style={{ animationDelay: "0.6s" }}>🎯</div>
          
          <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg mb-3 relative z-10">
            {config.title}
          </h2>
          <p className="text-white/95 text-base sm:text-lg font-medium relative z-10">
            {config.subtitle}
          </p>
        </div>

        {/* Form section */}
        <div className="p-6 pt-8 bg-white">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder={config.placeholder}
                        className="h-14 text-lg rounded-xl border-2 border-gray-200 focus:border-[#FFBD0B] focus:ring-[#FFBD0B] px-4 transition-all duration-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-sm" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-lg font-bold rounded-xl bg-gradient-to-r from-[#FFBD0B] to-[#FF6B35] hover:from-[#FFD000] hover:to-[#FF8B55] text-black shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-200"
              >
                {isSubmitting ? "Inscription..." : config.button_text}
              </Button>
            </form>
          </Form>

          <p className="text-center text-sm text-gray-500 mt-4">
            {config.reassurance_text}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Hook pour gérer l'ouverture automatique avec configuration depuis la DB
export const useNewsletterModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<PopupConfig>(defaultConfig);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const { data, error } = await supabase
          .from("newsletter_popup_config")
          .select("*")
          .limit(1)
          .single();

        if (error) {
          console.error("Error fetching popup config:", error);
          return;
        }

        if (data) {
          setConfig(data as PopupConfig);
        }
      } catch (error) {
        console.error("Error fetching popup config:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchConfig();
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (!config.enabled) return;

    const hasSubscribed = localStorage.getItem("newsletter_subscribed");
    const hasDismissed = sessionStorage.getItem("newsletter_dismissed");
    
    if (!hasSubscribed && !hasDismissed) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, config.delay_seconds * 1000);
      
      return () => clearTimeout(timer);
    }
  }, [isLoading, config.enabled, config.delay_seconds]);

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
    config,
    isLoading,
  };
};
