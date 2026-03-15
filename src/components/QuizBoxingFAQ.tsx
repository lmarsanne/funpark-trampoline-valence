import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const QuizBoxingFAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce que le Quiz Boxing ?",
      answer:
        "Le Quiz Boxing est un jeu interactif et compétitif qui combine quiz, blind test, juste prix et vrai ou faux. Vous affrontez vos amis pendant 60 minutes avec des jokers stratégiques pour maximiser vos points !",
    },
    {
      question: "Combien de joueurs peuvent participer ?",
      answer:
        "Le Quiz Boxing est conçu pour des groupes de 4 à 12 joueurs. C'est l'activité parfaite pour les soirées entre amis, les anniversaires ou les team buildings !",
    },
    {
      question: "Comment fonctionnent les jokers ?",
      answer:
        "Il y a trois types de jokers : Assommer (annuler les points d'un adversaire), Parier (doubler vos points en pariant sur quelqu'un) et Voler (prendre des points à un adversaire). Utilisez-les stratégiquement pour dominer la partie !",
    },
    {
      question: "Quelle est la durée d'une partie ?",
      answer:
        "Une partie de Quiz Boxing dure 60 minutes. Cela comprend 4 rounds différents avec des défis variés pour tester vos connaissances et vos réflexes !",
    },
    {
      question: "Faut-il réserver à l'avance ?",
      answer:
        "Oui, la réservation est obligatoire pour garantir votre créneau. Vous pouvez réserver directement en ligne via notre site ou nous contacter par téléphone ou WhatsApp.",
    },
    {
      question: "Y a-t-il un âge minimum pour jouer ?",
      answer:
        "Le Quiz Boxing est accessible à partir de 12 ans.",
    },
    {
      question: "Peut-on privatiser la salle pour un événement ?",
      answer:
        "Absolument ! La salle Quiz Boxing est idéale pour les anniversaires, EVJF/EVG, team buildings et événements d'entreprise. Contactez-nous pour organiser votre événement personnalisé !",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Questions <span className="text-primary">Fréquentes</span>
          </h2>
          <p className="text-xl text-muted-foreground">Tout ce que vous devez savoir sur le Quiz Boxing</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-lg px-6 border-none shadow-md"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
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
