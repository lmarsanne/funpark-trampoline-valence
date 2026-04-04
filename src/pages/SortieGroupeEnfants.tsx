import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useForceScrollTop } from "@/hooks/useForceScrollTop";
import { MapPin, Phone, Mail } from "lucide-react";
import { trackPhoneClick, trackEmailClick } from "@/lib/analytics";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const devisGroupeSchema = z.object({
  structure: z.string().trim().min(1, "Le nom de la structure est requis").max(100),
  contact: z.string().trim().min(1, "Le nom du contact est requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(1, "Le téléphone est requis").max(20),
  participants: z.string().trim().optional(),
  ages: z.string().trim().optional(),
  date: z.string().trim().optional(),
  message: z.string().trim().max(2000).optional(),
});

const SortieGroupeEnfants = () => {
  useForceScrollTop();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    structure: "",
    contact: "",
    email: "",
    phone: "",
    participants: "",
    ages: "",
    date: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      devisGroupeSchema.parse(formData);
      setIsSubmitting(true);

      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          fullName: `${formData.structure} - ${formData.contact}`,
          email: formData.email,
          phone: formData.phone,
          participants: formData.participants,
          message: `
[DEMANDE DEVIS GROUPE / CENTRE AÉRÉ]
Structure : ${formData.structure}
Contact : ${formData.contact}
Nombre d'enfants : ${formData.participants || "Non précisé"}
Tranches d'âge : ${formData.ages || "Non précisé"}
Date souhaitée : ${formData.date || "Non précisée"}

Message :
${formData.message || "Aucun message"}
          `.trim(),
        },
      });

      if (error) throw error;

      toast({
        title: "Demande envoyée !",
        description: "Notre équipe vous recontactera sous 24h avec un devis personnalisé.",
      });

      setFormData({ structure: "", contact: "", email: "", phone: "", participants: "", ages: "", date: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({ title: "Erreur", description: error.errors[0].message, variant: "destructive" });
      } else {
        toast({ title: "Erreur", description: "Une erreur est survenue. Veuillez réessayer.", variant: "destructive" });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    { emoji: "🤸", title: "400m² de trampolines", desc: "Freestyle, parcours ninja, airbag géant, slam dunk. Un terrain de jeu immense où chaque enfant trouve son bonheur." },
    { emoji: "🛡️", title: "Sécurité renforcée pour les groupes", desc: "Sols amortissants, filets de protection, briefing sécurité obligatoire. Nos animateurs sont formés à l'accueil de groupes de mineurs." },
    { emoji: "🔄", title: "Rotations d'activités fluides", desc: "On organise les rotations pour vous : pendant qu'un groupe saute, l'autre fait du bowling ou du karaoké. Zéro temps mort." },
    { emoji: "📋", title: "Organisation clé-en-main", desc: "Vous arrivez, on s'occupe de tout. Accueil dédié, vestiaires, espace goûter, encadrement. Vos animateurs peuvent souffler." },
  ];

  const activities = [
    { emoji: "🎳", title: "Bowling 12 pistes", desc: "Bumpers pour les petits, compétition pour les grands. L'activité qui rassemble tout le groupe." },
    { emoji: "🥊", title: "Quiz Boxing", desc: "Jeu TV grandeur nature en équipe. Parfait pour les plus de 8 ans." },
    { emoji: "🎤", title: "Karaoké", desc: "Salles privatives, ambiance garantie. Les enfants adorent." },
    { emoji: "🕹️", title: "Arcade", desc: "Machines rétro et jeux à jetons. Idéal en rotation libre." },
    { emoji: "🎱", title: "Billard", desc: "Pour les ados et les accompagnateurs." },
  ];

  const formules = [
    { title: "Formule Jump", desc: "1h30 de trampoline avec briefing sécurité et échauffement encadré. Le format idéal pour une sortie de demi-journée en centre aéré." },
    { title: "Formule Jump + Fun", desc: "1h de trampoline + 1h d'activité au choix (bowling, karaoké ou quiz boxing). Le combo préféré des centres de loisirs de la Drôme." },
    { title: "Formule Journée Fun Park", desc: "Demi-journée ou journée complète avec rotation sur 3 à 4 activités, pauses incluses. Parfait pour les colonies, sorties de fin d'année et groupes MJC." },
  ];

  const useCases = [
    { emoji: "🏕️", title: "Centres aérés & ALSH", desc: "Sorties demi-journée ou journée. Activités adaptées de 3 à 14 ans. Fréquence possible : hebdomadaire ou ponctuelle. On connaît vos contraintes et on s'y adapte." },
    { emoji: "🏫", title: "Sorties scolaires & périscolaires", desc: "De la maternelle au collège. Le trampoline développe la motricité, l'équilibre et la confiance en soi — objectifs pédagogiques validés. On fournit le projet pédagogique sur demande." },
    { emoji: "⚽", title: "Clubs sportifs & associations", desc: "Séances trampoline pour compléter l'entraînement, récompenser les jeunes sportifs ou organiser une sortie de cohésion de fin de saison." },
  ];

  const faqItems = [
    { q: "Comment réserver une sortie de groupe ?", a: "Contactez-nous par email à valencebowling@gmail.com ou par téléphone au 07.69.48.27.14. Nous vous enverrons un devis personnalisé sous 24h. Réservation conseillée au moins 2 semaines à l'avance, surtout pendant les vacances scolaires." },
    { q: "À partir de combien de participants pour un tarif groupe ?", a: "Les tarifs groupe s'appliquent dès 10 participants. Tarifs dégressifs : plus vous êtes nombreux, plus le tarif par enfant baisse." },
    { q: "Quels âges accueillez-vous ?", a: "De 3 à 17 ans pour le trampoline (Baby Jump 3-5 ans, Open Jump 6+). Les autres activités (bowling, karaoké, quiz boxing) ont leurs propres âges minimum. On adapte le programme à votre tranche d'âge." },
    { q: "Combien d'animateurs faut-il prévoir ?", a: "Nous recommandons 1 animateur pour 8-10 enfants. Les accompagnateurs qui ne participent pas aux activités ne paient pas et disposent d'un espace détente." },
    { q: "Les enfants peuvent-ils apporter leur goûter ?", a: "Oui, un espace est prévu pour les goûters. Nous proposons aussi des formules snack et boissons sur place." },
    { q: "Le parking peut-il accueillir un bus ?", a: "Oui, notre parking à Saint-Marcel-lès-Valence est adapté aux bus et minibus. Accès gratuit." },
    { q: "Proposez-vous un projet pédagogique pour les sorties scolaires ?", a: "Oui, nous pouvons fournir un document décrivant les objectifs pédagogiques du trampoline (motricité, équilibre, confiance, dépassement de soi) et des activités collectives (esprit d'équipe, stratégie). Demandez-le lors de votre prise de contact." },
  ];

  return (
    <>
      <Helmet>
        <title>Sortie groupe & centre aéré trampoline à Valence (26) | Fun Park Valence</title>
        <meta name="description" content="Sortie centre aéré, groupe scolaire ou club au trampoline park de Valence. 400m² indoor, parcours ninja, airbag géant + bowling, karaoké, arcade. Tarifs groupe, devis sur-mesure. Saint-Marcel-lès-Valence, Drôme." />
        <link rel="canonical" href="https://www.valence-trampoline.com/sortie-groupe-enfants" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Navigation />

      <main className="pt-16">
        {/* HERO */}
        <section className="bg-gradient-to-br from-primary via-accent to-secondary py-16 md:py-24 text-primary-foreground">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-6">
              Sortie Trampoline pour Centres Aérés et Groupes d'Enfants à Valence
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Un parc de trampoline indoor de 400m² pensé pour accueillir vos groupes en toute sécurité. Combinez avec bowling, karaoké et quiz boxing pour une journée inoubliable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollTo('contact-groupe')}
                className="px-8 py-4 rounded-full text-lg font-bold shadow-xl hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#FFBD0B', color: '#000' }}
              >
                Demander un devis groupe
              </button>
              <button
                onClick={() => scrollTo('formules-groupe')}
                className="px-8 py-4 rounded-full text-lg font-bold border-2 border-white/80 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
              >
                Nos formules multi-activités
              </button>
            </div>
          </div>
        </section>

        {/* WHY TRAMPOLINE */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Le trampoline park idéal pour les sorties collectives
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12">
              Le trampoline est l'activité parfaite pour les groupes d'enfants. En centre aéré, en sortie scolaire ou en club, les enfants se défoulent, développent leur motricité, apprennent l'entraide et repoussent leurs limites dans un cadre sécurisé et encadré. Notre espace trampoline à Valence est adapté aux groupes de 10 à 60 enfants, avec des zones séparées par âge : Baby Jump pour les 3-5 ans et Open Jump pour les 6 ans et plus. Que vous cherchiez une activité trampoline centre aéré à Valence, une sortie scolaire trampoline en Drôme ou une activité groupe enfants indoor, le Fun Park Valence est le lieu idéal pour une sortie réussie.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((f, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-3">{f.emoji}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
                  <p className="text-muted-foreground text-sm">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MULTI-ACTIVITIES */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Au-delà du trampoline : un complexe multi-activités complet
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-12 text-center max-w-3xl mx-auto">
              Le Fun Park n'est pas qu'un trampoline park — c'est un complexe de 9 activités sous un même toit. L'avantage pour les groupes : construire un programme varié qui plaît à tous les âges et tous les goûts, sans changer de lieu. Un véritable complexe loisirs indoor à Valence pour des sorties multi-activités enfants complètes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {activities.map((a, i) => (
                <div key={i} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-2">{a.emoji}</div>
                  <h3 className="text-sm font-bold text-foreground mb-1">{a.title}</h3>
                  <p className="text-muted-foreground text-xs">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULES */}
        <section id="formules-groupe" className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Formules packagées pour les groupes
            </h2>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {formules.map((f, i) => (
                <div key={i} className="rounded-2xl border-2 border-primary/20 bg-card p-6 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all">
                  <div className="text-sm font-semibold text-primary mb-2">Formule {i + 1}</div>
                  <h3 className="text-lg font-bold text-foreground mb-3">{f.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
                  <div className="mt-4 text-xs font-medium text-secondary">Devis sur-mesure →</div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-muted/50 border border-border p-6 text-center">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Chaque formule inclut : accueil personnalisé, briefing sécurité, vestiaires, chaussettes antidérapantes pour le trampoline (fournies gratuitement), et parking gratuit. Tarifs dégressifs selon la taille du groupe.
              </p>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10 text-center">
              Des sorties adaptées à chaque structure
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((u, i) => (
                <div key={i} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <div className="text-4xl mb-3">{u.emoji}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{u.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              FAQ — Sorties de groupe au Fun Park Valence
            </h2>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-foreground font-semibold">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CONTACT FORM */}
        <section id="contact-groupe" className="py-16 bg-gradient-to-br from-primary via-accent to-secondary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Demandez votre devis groupe
            </h2>
            <p className="text-center text-sm opacity-80 mb-10">Réponse sous 24h — Devis gratuit et sans engagement</p>

            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <p className="font-semibold">Téléphone</p>
                <a href="tel:0769482714" onClick={trackPhoneClick} className="text-sm opacity-80 hover:opacity-100 transition-opacity">07.69.48.27.14</a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <p className="font-semibold">Email</p>
                <a href="mailto:valencebowling@gmail.com" onClick={trackEmailClick} className="text-sm opacity-80 hover:opacity-100 transition-opacity">valencebowling@gmail.com</a>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <p className="font-semibold">Adresse</p>
                <p className="text-sm opacity-80">Saint-Marcel-lès-Valence (26)</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm p-8 rounded-3xl border border-white/20 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="structure" className="text-white">Nom de la structure *</Label>
                  <Input id="structure" placeholder="Centre aéré, école, club..." value={formData.structure} onChange={e => setFormData(p => ({ ...p, structure: e.target.value }))} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact" className="text-white">Nom du contact *</Label>
                  <Input id="contact" placeholder="Prénom Nom" value={formData.contact} onChange={e => setFormData(p => ({ ...p, contact: e.target.value }))} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">Email *</Label>
                  <Input id="email" type="email" placeholder="email@structure.fr" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white">Téléphone *</Label>
                  <Input id="phone" type="tel" placeholder="06 XX XX XX XX" value={formData.phone} onChange={e => setFormData(p => ({ ...p, phone: e.target.value }))} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="participants" className="text-white">Nombre d'enfants</Label>
                  <Input id="participants" placeholder="Ex : 25" value={formData.participants} onChange={e => setFormData(p => ({ ...p, participants: e.target.value }))} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ages" className="text-white">Tranches d'âge</Label>
                  <Input id="ages" placeholder="Ex : 6-10 ans" value={formData.ages} onChange={e => setFormData(p => ({ ...p, ages: e.target.value }))} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="text-white">Date souhaitée</Label>
                <Input id="date" placeholder="Ex : semaine du 14 juillet, mercredi après-midi..." value={formData.date} onChange={e => setFormData(p => ({ ...p, date: e.target.value }))} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message" className="text-white">Message / précisions</Label>
                <Textarea id="message" placeholder="Dites-nous en plus sur votre projet de sortie..." rows={4} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))} className="bg-white/20 border-white/30 text-white placeholder:text-white/50" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full py-6 text-lg font-bold rounded-full shadow-xl" style={{ backgroundColor: '#FFBD0B', color: '#000' }}>
                {isSubmitting ? "Envoi en cours..." : "✉️ Envoyer ma demande de devis"}
              </Button>
            </form>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-10 bg-muted/20">
          <div className="container mx-auto px-4 max-w-3xl text-center">
            <p className="text-muted-foreground text-sm mb-4">Découvrez aussi nos autres activités :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { to: "/", label: "Trampoline" },
                { to: "/karaoke", label: "Karaoké" },
                { to: "/quiz-boxing", label: "Quiz Boxing" },
                { to: "/entreprises", label: "Entreprises" },
                { to: "/anniversaire-enfant", label: "Anniversaire Enfant" },
              ].map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-4 py-2 rounded-full border border-border bg-card text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Sticky CTA */}
      <a
        href="#contact-groupe"
        onClick={(e) => { e.preventDefault(); scrollTo('contact-groupe'); }}
        className="fixed bottom-4 left-4 right-4 z-50 flex items-center justify-center py-4 text-lg font-bold text-black rounded-full shadow-2xl hover:opacity-90 transition-opacity"
        style={{ backgroundColor: '#FFBD0B' }}
      >
        🎉 Demander un devis groupe
      </a>
    </>
  );
};

export default SortieGroupeEnfants;
