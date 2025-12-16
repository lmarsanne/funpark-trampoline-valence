import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "À partir de quel âge peut-on accéder au trampoline park ?",
    answer: "Notre parc accueille les enfants dès 3 ans ! Nous avons une zone spéciale Baby Jumper (3-5 ans) adaptée aux tout-petits, avec des trampolines sécurisés et une surveillance constante.",
  },
  {
    question: "Combien de temps dure une session ?",
    answer: "Chaque session dure 1 heure ou 2 heures.",
  },
  {
    question: "Les accompagnateurs doivent-ils payer ?",
    answer: "Non, l'accès est GRATUIT pour les accompagnateurs qui ne sautent pas. Pour l'hygiène, nous vous PRÊTONS une paire de sur-chaussettes 'Visiteurs' à l'entrée (à déposer dans le bac prévu à la sortie). Interdiction formelle de monter sur les toiles.",
  },
  {
    question: "Que dois-je apporter pour ma visite ?",
    answer: "Venez en tenue confortable (jogging, t-shirt). Les chaussettes antidérapantes sont obligatoires pour des raisons de sécurité et sont INCLUSES dans le tarif !",
  },
  {
    question: "Peut-on organiser un anniversaire ?",
    answer: "Absolument ! Nous proposons des formules anniversaire complètes avec espace privatisé et animations. Découvrez nos offres sur notre page dédiée.",
    link: "https://valence-trampoline.com/anniversaire-enfant",
  },
  {
    question: "Comment réserver ma session ?",
    answer: "La réservation se fait directement en ligne sur notre site. Sélectionnez votre formule, choisissez votre créneau horaire et le nombre de participants. Nous vous recommandons de réserver à l'avance, surtout pour les week-ends.",
  },
  {
    question: "Quelles sont les mesures de sécurité ?",
    answer: "La sécurité est notre priorité absolue. Notre parc est équipé de matériel dernière génération, nos trampolines sont régulièrement contrôlés, et notre personnel est formé aux premiers secours. Des règles de sécurité sont affichées et expliquées avant chaque session.",
  },
  {
    question: "Y a-t-il un parking ?",
    answer: "Oui, un parking gratuit est disponible sur place pour tous nos visiteurs.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Questions{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Fréquentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de venir
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                  {faq.link && (
                    <a 
                      href={faq.link} 
                      className="block mt-2 text-primary hover:underline font-medium"
                    >
                      → Voir nos formules anniversaire
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
