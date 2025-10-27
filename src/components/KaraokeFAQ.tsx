import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Combien de personnes peuvent participer à une session karaoké ?",
    answer: "Notre salle karaoké privative peut accueillir de 4 à 12 personnes. C'est l'effectif idéal pour profiter pleinement de l'expérience tout en laissant chacun chanter !",
  },
  {
    question: "Dois-je réserver à l'avance ?",
    answer: "Oui, la réservation est indispensable. Nous vous recommandons de réserver votre créneau au moins quelques jours à l'avance, surtout pour les week-ends et soirées.",
  },
  {
    question: "Combien de chansons sont disponibles ?",
    answer: "Nous disposons d'un catalogue de centaines de titres : variété française, pop internationale, rock, rap, tubes des années 80, génériques cultes... Il y en a pour tous les goûts et tous les âges !",
  },
  {
    question: "Peut-on apporter nos propres boissons et nourriture ?",
    answer: "Vous pouvez commander des boissons et snacks directement pendant votre session grâce à notre service sur place. Pour toute question spécifique, n'hésitez pas à nous contacter.",
  },
  {
    question: "La salle est-elle vraiment insonorisée ?",
    answer: "Oui ! La salle est totalement insonorisée pour que vous puissiez chanter à fond sans gêner ni être gêné. Vous serez dans votre bulle pour profiter pleinement de l'expérience.",
  },
  {
    question: "Faut-il savoir chanter ?",
    answer: "Absolument pas ! Que vous chantiez juste ou pas, ce qui compte c'est de s'amuser et passer un moment inoubliable. Notre karaoké est fait pour se décontracter et rigoler entre amis ou en famille.",
  },
  {
    question: "Y a-t-il un tarif réduit pour les étudiants ?",
    answer: "Oui ! Les étudiants bénéficient d'un tarif réduit : 8€ pour 1h et 14€ pour 2h, sur présentation d'une carte étudiante en cours de validité.",
  },
  {
    question: "Peut-on organiser un événement spécial (anniversaire, EVJF/EVG) ?",
    answer: "Bien sûr ! Notre salle karaoké est parfaite pour les anniversaires, enterrements de vie de jeune fille/garçon et team building. N'hésitez pas à nous prévenir lors de votre réservation pour que nous puissions préparer au mieux votre événement.",
  },
];

export const KaraokeFAQ = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Questions{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Fréquentes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tout ce que vous devez savoir avant de réserver votre session karaoké
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
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
