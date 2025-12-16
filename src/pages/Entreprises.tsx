import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { 
  Trophy, 
  Users, 
  Battery, 
  Footprints,
  Pizza,
  Lock,
  ParkingCircle,
  ChevronDown,
  Zap,
  Target,
  Dumbbell,
  Gamepad2,
  Mic2,
  Circle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

import heroEntreprise from "@/assets/quiz-boxing-colleagues.jpg";
import trampoImage from "@/assets/hero-trampoline.jpg";

const devisSchema = z.object({
  entreprise: z.string().trim().min(1, "Le nom de l'entreprise est requis").max(100),
  contact: z.string().trim().min(1, "Le nom du contact est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(1, "Le téléphone est requis").max(20),
  date: z.string().optional(),
  participants: z.string().optional(),
  activites: z.array(z.string()).optional(),
  message: z.string().trim().max(2000).optional()
});

const faqData = [
  {
    question: "Quelle tenue prévoir ?",
    answer: "Une tenue de sport légère et confortable (T-shirt, short/legging). On a vite chaud ! Les jeans sont déconseillés."
  },
  {
    question: "Les chaussettes sont-elles fournies ?",
    answer: "Oui et ils repartent avec !"
  },
  {
    question: "Peut-on venir si on ne saute pas ?",
    answer: "Bien sûr ! Les accompagnateurs peuvent profiter de l'espace Lounge, du Bar ou des autres activités (Bowling, Billard) pendant que les collègues sautent."
  },
  {
    question: "Y a-t-il des douches ?",
    answer: "Non, nous disposons de vestiaires pour se changer, mais pas de douches."
  },
  {
    question: "Quelle est la capacité d'accueil maximale pour un événement ?",
    answer: "Le Fun Park peut accueillir jusqu'à 200 personnes en simultané entre toutes les activités. Pour les très grands groupes ou les privatisations complètes, merci de nous le préciser dans votre demande de devis."
  },
  {
    question: "Peut-on organiser un repas ou un buffet sur place ?",
    answer: "Oui ! Nous proposons des formules \"Clé en main\" avec options traiteur (buffet froid, cocktail dinatoire, pizzas party...). Nous disposons également d'un espace snacking et d'un bar."
  },
  {
    question: "Y a-t-il un parking accessible aux autocars ?",
    answer: "Oui, nous disposons d'un grand parking gratuit attenant au complexe, parfaitement accessible et manœuvrable pour les bus et autocars scolaires."
  },
  {
    question: "Comment valider notre réservation ?",
    answer: "Une fois le devis accepté, un acompte de 30% est demandé pour bloquer la date. Le solde est à régler le jour de l'événement."
  }
];

const activitesAnnexes = [
  {
    icon: Circle,
    title: "Bowling",
    emoji: "🎳",
    description: "Le classique indémodable pour se poser autour d'un verre et débriefer la session de saut.",
    link: "https://www.valence-bowling.com",
    external: true
  },
  {
    icon: Target,
    title: "Quiz Boxing",
    emoji: "🥊",
    description: "Le défi intellectuel après le défi physique. Buzzez comme à la télé !",
    link: "/quiz-boxing",
    external: false
  },
  {
    icon: Mic2,
    title: "Karaoké Box",
    emoji: "🎤",
    description: "Chantez à tue-tête dans nos box privés insonorisés.",
    link: "/karaoke",
    external: false
  },
  {
    icon: Gamepad2,
    title: "Espace Arcade",
    emoji: "🎱",
    description: "Billards, Baby-foot et détente pour récupérer tranquillement.",
    link: null,
    external: false
  }
];

const Entreprises = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    entreprise: "",
    contact: "",
    email: "",
    phone: "",
    date: "",
    participants: "",
    activites: [] as string[],
    message: ""
  });

  const handleActivityChange = (activity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      activites: checked 
        ? [...prev.activites, activity]
        : prev.activites.filter(a => a !== activity)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      devisSchema.parse(formData);
      setIsSubmitting(true);
      
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          fullName: `${formData.entreprise} - ${formData.contact}`,
          email: formData.email,
          phone: formData.phone,
          participants: formData.participants,
          message: `
Date souhaitée: ${formData.date || "Non précisée"}
Nombre de participants: ${formData.participants || "Non précisé"}
Activités souhaitées: ${formData.activites.length > 0 ? formData.activites.join(", ") : "Non précisées"}

Message:
${formData.message || "Aucun message"}
          `.trim()
        }
      });
      
      if (error) throw error;
      
      toast({
        title: "Demande envoyée !",
        description: "Notre équipe vous recontactera très bientôt avec un devis personnalisé."
      });
      
      setFormData({
        entreprise: "",
        contact: "",
        email: "",
        phone: "",
        date: "",
        participants: "",
        activites: [],
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

  const scrollToDevis = () => {
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Team Building Entreprises | Fun Park Valence - Trampoline, Bowling, Karaoké</title>
        <meta name="description" content="Organisez votre team building au Fun Park Valence : trampoline, bowling, karaoké, quiz boxing. Activités sportives et ludiques pour renforcer la cohésion d'équipe." />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-[#0f172a]">
        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroEntreprise} 
              alt="Team building trampoline" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
              Le Team Building qui{" "}
              <span className="text-gradient-title">fait bouger les lignes</span> !
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Oubliez les séminaires assis. Ici, on crée de la cohésion par l'action, le rire et le défi sportif.
            </p>
            <Button 
              onClick={scrollToDevis}
              size="xl" 
              className="bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all"
            >
              <Zap className="mr-2 h-5 w-5" />
              Demander un devis
            </Button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </section>

        {/* SECTION FOCUS TRAMPOLINE */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img 
                  src={trampoImage} 
                  alt="Trampoline parc team building" 
                  className="rounded-3xl shadow-2xl w-full aspect-[4/3] object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#f97316] text-white font-bold text-xl px-6 py-3 rounded-2xl shadow-lg">
                  🏆 N°1 Team Building
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white mb-8">
                  <span className="text-gradient-title">Activez l'énergie</span> de votre équipe
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <div className="p-3 bg-[#f97316]/20 rounded-xl">
                      <Trophy className="h-7 w-7 text-[#f97316]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">L'Esprit de Défi</h3>
                      <p className="text-white/70">Tournois de Dodgeball (Balle aux prisonniers) et concours de Dunk pour stimuler la compétition saine.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <div className="p-3 bg-blue-500/20 rounded-xl">
                      <Users className="h-7 w-7 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Cohésion Immédiate</h3>
                      <p className="text-white/70">Rien ne brise la glace plus vite que de voir son manager tenter un salto (ou tomber dans la mousse !).</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <div className="p-3 bg-green-500/20 rounded-xl">
                      <Battery className="h-7 w-7 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Zéro Stress</h3>
                      <p className="text-white/70">Une heure de saut pour évacuer les tensions et recharger les batteries.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
                    <div className="p-3 bg-purple-500/20 rounded-xl">
                      <Footprints className="h-7 w-7 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Accessible à tous</h3>
                      <p className="text-white/70">Pas besoin d'être un athlète, nos zones sont adaptées à tous les niveaux.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION ACTIVITÉS ANNEXES */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                ...Et pour <span className="text-gradient-title">prolonger l'expérience</span> ?
              </h2>
              <p className="text-xl text-white/70 max-w-2xl mx-auto">
                Après le sport, la détente ! Combinez votre session Trampoline avec nos autres univers.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {activitesAnnexes.map((activite, index) => (
                <Card 
                  key={index} 
                  className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-4">{activite.emoji}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{activite.title}</h3>
                    <p className="text-white/60 text-sm mb-4">{activite.description}</p>
                    {activite.link && (
                      activite.external ? (
                        <a 
                          href={activite.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#f97316] hover:text-[#fb923c] font-medium text-sm inline-flex items-center gap-1"
                        >
                          Découvrir →
                        </a>
                      ) : (
                        <Link 
                          to={activite.link}
                          className="text-[#f97316] hover:text-[#fb923c] font-medium text-sm inline-flex items-center gap-1"
                        >
                          Découvrir →
                        </Link>
                      )
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION SERVICES */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-12">
              Une organisation <span className="text-gradient-title">clé en main</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-[#f97316]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Pizza className="h-8 w-8 text-[#f97316]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Restauration & Snacking</h3>
                <p className="text-white/60">Pizzas, planches à partager, boissons fraîches ou traiteur sur mesure après l'effort.</p>
              </div>
              
              <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Lock className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Confort & Vestiaires</h3>
                <p className="text-white/60">Casiers sécurisés et espace pour se changer.</p>
              </div>
              
              <div className="text-center p-8 bg-white/5 rounded-3xl border border-white/10">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <ParkingCircle className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Facilité d'accès</h3>
                <p className="text-white/60">Grand parking gratuit (voitures & bus) à Saint-Marcel-lès-Valence.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULAIRE DE DEVIS */}
        <section id="devis" className="py-20 px-4 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Prêts à <span className="text-gradient-title">sauter le pas</span> ?
              </h2>
              <p className="text-white/70">Remplissez ce formulaire et recevez votre devis personnalisé sous 24h.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="entreprise" className="text-white">Entreprise / Association *</Label>
                  <Input
                    id="entreprise"
                    value={formData.entreprise}
                    onChange={(e) => setFormData({ ...formData, entreprise: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    placeholder="Nom de votre structure"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-white">Nom du contact *</Label>
                  <Input
                    id="contact"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    placeholder="Votre nom"
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    placeholder="email@entreprise.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Téléphone *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    placeholder="06 XX XX XX XX"
                    required
                  />
                </div>
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-white">Date souhaitée</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="participants" className="text-white">Nombre de sauteurs</Label>
                  <Input
                    id="participants"
                    type="number"
                    value={formData.participants}
                    onChange={(e) => setFormData({ ...formData, participants: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                    placeholder="Ex: 25"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <Label className="text-white">Activités annexes souhaitées</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["Bowling", "Karaoké", "Quiz Boxing", "Restauration"].map((activity) => (
                    <div key={activity} className="flex items-center space-x-3 bg-white/5 p-3 rounded-xl">
                      <Checkbox
                        id={activity}
                        checked={formData.activites.includes(activity)}
                        onCheckedChange={(checked) => handleActivityChange(activity, checked as boolean)}
                        className="border-white/30 data-[state=checked]:bg-[#f97316] data-[state=checked]:border-[#f97316]"
                      />
                      <Label htmlFor={activity} className="text-white/80 cursor-pointer">{activity}</Label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message libre</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                  placeholder="Précisez vos besoins, contraintes ou questions..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold text-lg py-6 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </form>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-12">
              Questions <span className="text-gradient-title">fréquentes</span>
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white/5 border border-white/10 rounded-2xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-white hover:text-[#f97316] text-left py-5 font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-white/70 pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Entreprises;
