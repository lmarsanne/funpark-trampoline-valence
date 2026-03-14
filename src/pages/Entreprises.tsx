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
  Users, 
  ChevronDown,
  Zap,
  Target,
  Mic2,
  Beer,
  Pizza,
  Clock,
  UserCheck,
  MapPin,
  Sparkles,
  PartyPopper,
  Trophy,
  Star,
  Check,
  ArrowRight,
  Briefcase,
  Heart,
  Calendar,
  Gift,
  Rocket,
  GlassWater
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
    question: "Combien de temps dure un événement d'entreprise ?",
    answer: "Cela dépend de la formule choisie. Le Pack Afterwork Express dure 1h30 à 2h, le Pack Défi Team Building de 2h30 à 3h, et le Pack Soirée Grand Chelem 4h et plus. Nous nous adaptons à vos contraintes horaires."
  },
  {
    question: "Peut-on mixer les activités entre les formules ?",
    answer: "Absolument ! Nos formules sont des bases que nous pouvons adapter. Contactez-nous pour un devis personnalisé si vous souhaitez combiner différentes activités."
  },
  {
    question: "Quelle tenue prévoir pour le trampoline ?",
    answer: "Une tenue de sport légère et confortable (T-shirt, short/legging). Les jeans sont déconseillés. Les chaussettes antidérapantes sont fournies et chacun repart avec !"
  },
  {
    question: "Peut-on venir si on ne participe pas aux activités sportives ?",
    answer: "Bien sûr ! Les accompagnateurs peuvent profiter de l'espace Lounge, du bar ou des activités calmes (billard, arcade) pendant que les collègues s'amusent."
  },
  {
    question: "Quelle est la capacité d'accueil maximale ?",
    answer: "Le Valence Fun Park peut accueillir jusqu'à 200 personnes en simultané entre toutes les activités. Pour les très grands groupes ou les privatisations complètes, précisez-le dans votre demande."
  },
  {
    question: "Peut-on organiser un repas ou un buffet sur place ?",
    answer: "Oui ! Le Pack Soirée Grand Chelem inclut un cocktail dînatoire complet. Pour les autres formules, des options traiteur sont disponibles sur devis."
  },
  {
    question: "Y a-t-il un parking accessible aux bus ?",
    answer: "Oui, nous disposons d'un grand parking gratuit attenant au complexe, parfaitement accessible et manœuvrable pour les bus et autocars."
  },
  {
    question: "Comment réserver et confirmer notre événement ?",
    answer: "Vous pouvez réserver directement en ligne via notre page de réservation ou nous contacter pour un devis personnalisé. Un acompte de 30 % est demandé pour bloquer la date, le solde est à régler le jour de l'événement."
  }
];

const formules = [
  {
    emoji: "🍻",
    title: "Pack Afterwork Express",
    intro: "Une formule simple et conviviale pour décompresser entre collègues après le travail.",
    duration: "1h30 à 2h",
    minPersons: "4 personnes",
    activities: [
      "1 partie de Bowling (chaussures incluses)",
      "+ 1h de Karaoké privatif OU 1h de Trampoline"
    ],
    drinks: "1 boisson au choix par personne (bière pression 25cl, verre de vin ou soft)",
    food: "1 pizza à partager pour 4 personnes + assortiment biscuits apéro",
    price: "20",
    color: "from-blue-500/20 to-blue-600/20",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-400",
    bgAccent: "bg-blue-500/10"
  },
  {
    emoji: "🏆",
    title: "Pack Défi Team Building",
    intro: "Une expérience complète pour renforcer la cohésion et créer un vrai moment d'équipe.",
    duration: "2h30 à 3h",
    minPersons: "6 personnes",
    activities: [
      "1 session de Quiz Boxing",
      "1h de Trampoline",
      "1 partie de Bowling"
    ],
    drinks: "2 boissons au choix par personne (bière pression 25cl, verre de vin ou soft)",
    food: "1 pizza à partager pour 2 personnes + assortiment biscuits apéro",
    price: "40",
    color: "from-[#f97316]/20 to-[#ea580c]/20",
    borderColor: "border-[#f97316]/30",
    accentColor: "text-[#f97316]",
    bgAccent: "bg-[#f97316]/10",
    popular: true
  },
  {
    emoji: "🌟",
    title: "Pack Soirée Grand Chelem",
    intro: "La formule idéale pour les grands événements d'entreprise, séminaires ou fêtes de fin d'année.",
    duration: "4h et +",
    minPersons: "20 personnes",
    activities: [
      "Accès illimité aux tables de Billard",
      "Tournoi de Bowling organisé",
      "Accès aux salles de Karaoké"
    ],
    drinks: "3 consommations incluses par personne",
    food: "Cocktail dînatoire complet (pièces salées et sucrées) + assortiment biscuits apéro",
    price: "60",
    color: "from-purple-500/20 to-purple-600/20",
    borderColor: "border-purple-500/30",
    accentColor: "text-purple-400",
    bgAccent: "bg-purple-500/10"
  }
];

const eventTypes = [
  { icon: Beer, label: "Afterwork" },
  { icon: Trophy, label: "Team building" },
  { icon: Briefcase, label: "Séminaire" },
  { icon: PartyPopper, label: "Soirée de fin d'année" },
  { icon: Rocket, label: "Lancement produit" },
  { icon: Star, label: "Célébration d'équipe" },
  { icon: Gift, label: "Pot de départ" },
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

  const scrollToContact = () => {
    document.getElementById("devis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Afterwork & Team Building Entreprise à Valence | Valence Fun Park</title>
        <meta name="description" content="Organisez votre afterwork, team building ou soirée d'entreprise à Valence. Bowling, Quiz Boxing, Karaoké, Trampoline, Billard — 3 formules clé en main dès 20€/pers. Réservez en ligne." />
        <link rel="canonical" href="https://funpark-trampoline-valence.lovable.app/entreprises" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-[#0f172a]">
        {/* ==================== HERO ==================== */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroEntreprise} 
              alt="Team building entreprise Valence Fun Park" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]" />
          </div>
          
          <div className="relative z-10 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 text-white leading-tight">
              Afterwork, Team Building et{" "}
              <span className="text-gradient-title">Soirées d'Entreprise</span> à Valence
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto mb-10 leading-relaxed">
              Offrez à vos équipes un moment original chez Valence Fun Park, à Saint-Marcel-lès-Valence. Bowling, Quiz Boxing, Karaoké, Trampoline, Billard et bar : tout est réuni pour organiser un afterwork ou un événement d'entreprise simple à mettre en place et vraiment mémorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/guidap-reservation-entreprise.html" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-full font-bold shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all"
                  style={{ backgroundColor: '#FFBD0B', color: '#000000' }}
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Réserver une formule entreprise
                </Button>
              </a>
              <Button 
                onClick={scrollToContact}
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 rounded-full font-bold border-white/30 text-black hover:bg-white/10"
              >
                Demander des informations
              </Button>
            </div>
          </div>
          
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/60" />
          </div>
        </section>

        {/* ==================== POURQUOI ==================== */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-6">
              Pourquoi organiser votre événement d'entreprise{" "}
              <span className="text-gradient-title">chez Valence Fun Park ?</span>
            </h2>
            <p className="text-white/60 text-center max-w-3xl mx-auto mb-12 text-lg">
              Le meilleur team building à Valence, c'est celui où l'on oublie qu'on est collègues pour redevenir une équipe.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Users, title: "Renforcer la cohésion d'équipe", desc: "Rien ne soude une équipe comme un défi sportif ou un fou rire au karaoké. Créez des souvenirs qui durent." },
                { icon: Heart, title: "Favoriser les échanges informels", desc: "Sortir du cadre professionnel pour se retrouver dans un environnement détendu et convivial." },
                { icon: Sparkles, title: "Un moment fédérateur", desc: "Afterwork, séminaire ou fête de fin d'année : chaque formule est pensée pour rassembler." },
                { icon: Trophy, title: "Récompenser vos équipes", desc: "Offrez une sortie originale que vos collaborateurs n'oublieront pas de sitôt." },
                { icon: Calendar, title: "Simple à organiser", desc: "Nos formules clé en main incluent activités, boissons et snacks. Vous n'avez rien à gérer." },
                { icon: MapPin, title: "Local et convivial", desc: "À 10 minutes de Valence centre, accessible depuis Romans, Bourg-de-Péage, Tain-l'Hermitage et toute la Drôme." },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="p-3 bg-[#f97316]/20 rounded-xl shrink-0">
                    <item.icon className="h-6 w-6 text-[#f97316]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-white/60 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== UN LIEU UNIQUE ==================== */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4">
              Un seul lieu, plusieurs activités,{" "}
              <span className="text-gradient-title">zéro complication</span>
            </h2>
            <p className="text-white/60 text-center max-w-3xl mx-auto mb-12 text-lg">
              Tout est sur place pour un événement d'entreprise réussi à Valence. Pas besoin de courir entre plusieurs adresses.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { emoji: "🎳", label: "Bowling" },
                { emoji: "🥊", label: "Quiz Boxing" },
                { emoji: "🎤", label: "Karaoké privatif" },
                { emoji: "🤸", label: "Trampoline" },
                { emoji: "🎱", label: "Billard" },
                { emoji: "🕹️", label: "Arcade" },
                { emoji: "🍕", label: "Bar & Snacking" },
                { emoji: "🅿️", label: "Parking gratuit" },
              ].map((item, i) => (
                <div key={i} className="text-center p-5 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                  <div className="text-4xl mb-2">{item.emoji}</div>
                  <p className="text-white font-semibold text-sm">{item.label}</p>
                </div>
              ))}
            </div>
            
            <p className="text-white/50 text-center mt-8 text-sm">
              Accès facile depuis Valence, Romans-sur-Isère, Bourg-de-Péage, Livron-sur-Drôme et les communes alentour. Grand parking gratuit accessible aux bus et autocars.
            </p>
          </div>
        </section>

        {/* ==================== 3 FORMULES ==================== */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4">
              Nos <span className="text-gradient-title">3 formules entreprise</span>
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-14 text-lg">
              Afterwork express, team building sportif ou grande soirée : choisissez la formule qui correspond à votre événement.
            </p>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {formules.map((formule, index) => (
                <div 
                  key={index} 
                  className={`relative bg-gradient-to-b ${formule.color} rounded-3xl border ${formule.borderColor} p-8 flex flex-col ${formule.popular ? 'lg:scale-105 shadow-[0_0_40px_rgba(249,115,22,0.2)]' : ''}`}
                >
                  {formule.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#f97316] text-white text-sm font-bold px-5 py-1.5 rounded-full">
                      ⭐ Le plus populaire
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3">{formule.emoji}</div>
                    <h3 className="text-2xl font-black text-white mb-2">{formule.title}</h3>
                    <p className="text-white/60 text-sm">{formule.intro}</p>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4 mb-6">
                    <div className={`flex items-center gap-2 ${formule.bgAccent} px-3 py-1.5 rounded-full`}>
                      <Clock className={`h-4 w-4 ${formule.accentColor}`} />
                      <span className="text-white text-sm font-medium">{formule.duration}</span>
                    </div>
                    <div className={`flex items-center gap-2 ${formule.bgAccent} px-3 py-1.5 rounded-full`}>
                      <UserCheck className={`h-4 w-4 ${formule.accentColor}`} />
                      <span className="text-white text-sm font-medium">Min. {formule.minPersons}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 flex-1">
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${formule.accentColor} mb-2`}>Activités incluses</p>
                      <ul className="space-y-1.5">
                        {formule.activities.map((act, i) => (
                          <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                            <Check className={`h-4 w-4 ${formule.accentColor} shrink-0 mt-0.5`} />
                            {act}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${formule.accentColor} mb-2`}>Boissons incluses</p>
                      <p className="text-white/80 text-sm flex items-start gap-2">
                        <GlassWater className={`h-4 w-4 ${formule.accentColor} shrink-0 mt-0.5`} />
                        {formule.drinks}
                      </p>
                    </div>
                    
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-wider ${formule.accentColor} mb-2`}>Snack & restauration</p>
                      <p className="text-white/80 text-sm flex items-start gap-2">
                        <Pizza className={`h-4 w-4 ${formule.accentColor} shrink-0 mt-0.5`} />
                        {formule.food}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="text-center mb-4">
                      <span className="text-4xl font-black text-white">{formule.price} €</span>
                      <span className="text-white/50 text-sm"> / personne</span>
                    </div>
                    <a href="/guidap-reservation-entreprise.html" className="block">
                      <Button 
                        className="w-full font-bold text-base py-5 rounded-xl transition-all"
                        style={{ backgroundColor: '#FFBD0B', color: '#000000' }}
                      >
                        Réserver cette formule
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== POUR QUI ? ==================== */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-4">
              Des formules adaptées à{" "}
              <span className="text-gradient-title">tous vos événements</span> d'entreprise
            </h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12 text-lg">
              Quelle que soit l'occasion, nous avons la formule qui correspond à votre projet.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {eventTypes.map((event, i) => (
                <div key={i} className="flex flex-col items-center gap-3 bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all text-center">
                  <div className="p-3 bg-[#f97316]/15 rounded-xl">
                    <event.icon className="h-6 w-6 text-[#f97316]" />
                  </div>
                  <p className="text-white font-semibold text-sm">{event.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== LOCAL SEO ==================== */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-6">
              Un lieu idéal pour les entreprises de{" "}
              <span className="text-gradient-title">Valence et alentours</span>
            </h2>
            
            <div className="bg-white/5 p-8 md:p-10 rounded-3xl border border-white/10">
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Situé à <strong className="text-white">Saint-Marcel-lès-Valence</strong>, le Valence Fun Park est le lieu de référence pour les afterworks et événements d'entreprise dans la Drôme. À seulement 10 minutes du centre de <strong className="text-white">Valence</strong>, notre complexe est facilement accessible pour les entreprises de <strong className="text-white">Romans-sur-Isère</strong>, <strong className="text-white">Bourg-de-Péage</strong>, <strong className="text-white">Livron-sur-Drôme</strong>, <strong className="text-white">Tain-l'Hermitage</strong>, <strong className="text-white">Crest</strong> et <strong className="text-white">Saint-Donat-sur-l'Herbasse</strong>.
              </p>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                Que vous cherchiez un afterwork original à Valence, un team building sportif dans la Drôme ou un lieu pour votre séminaire d'entreprise, le Valence Fun Park réunit tout sous un même toit : bowling, trampoline, quiz boxing, karaoké, billard, arcade, bar et restauration.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Grand parking gratuit accessible aux bus et autocars. Un espace idéal pour accueillir de 4 à 200 collaborateurs, avec des formules clé en main adaptées à tous les budgets.
              </p>
            </div>
          </div>
        </section>

        {/* ==================== FORMULAIRE DE CONTACT ==================== */}
        <section id="devis" className="py-20 px-4 bg-gradient-to-b from-[#1e293b] to-[#0f172a]">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Une question ? Un <span className="text-gradient-title">devis personnalisé</span> ?
              </h2>
              <p className="text-white/70">Remplissez ce formulaire et recevez une réponse sous 24h.</p>
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
                  <Label htmlFor="participants" className="text-white">Nombre de participants</Label>
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
                <Label className="text-white">Formule(s) qui vous intéresse(nt)</Label>
                <div className="grid sm:grid-cols-2 gap-3">
                  {["Pack Afterwork Express", "Pack Défi Team Building", "Pack Soirée Grand Chelem", "Devis sur mesure"].map((activity) => (
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
                className="w-full font-bold text-lg py-6 rounded-xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] transition-all"
                style={{ backgroundColor: '#FFBD0B', color: '#000000' }}
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </Button>
            </form>
          </div>
        </section>

        {/* ==================== FAQ ==================== */}
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

        {/* ==================== FINAL CTA ==================== */}
        <section className="py-20 px-4 bg-gradient-to-b from-[#0f172a] to-[#1e293b]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Réservez votre{" "}
              <span className="text-gradient-title">événement d'entreprise</span>
            </h2>
            <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
              Choisissez votre formule et réservez directement en ligne via notre page dédiée.
            </p>
            <a href="/guidap-reservation-entreprise.html">
              <Button 
                size="lg"
                className="text-lg px-12 py-7 rounded-full font-bold shadow-[0_0_30px_rgba(249,115,22,0.5)] hover:shadow-[0_0_40px_rgba(249,115,22,0.7)] transition-all"
                style={{ backgroundColor: '#FFBD0B', color: '#000000' }}
              >
                <Zap className="mr-2 h-5 w-5" />
                Réserver sur Guidap
              </Button>
            </a>
          </div>
        </section>
      </main>
      
      {/* Sticky CTA */}
      <a
        href="/guidap-reservation-entreprise.html"
        className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center py-4 px-6 font-bold text-lg shadow-lg transition-all hover:opacity-90"
        style={{ backgroundColor: '#FFBD0B', color: '#000000' }}
      >
        🏢 Réserver une formule entreprise
      </a>

      <Footer />
    </>
  );
};

export default Entreprises;