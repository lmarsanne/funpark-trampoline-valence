import { Helmet } from "react-helmet-async";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Briefcase, Heart, PartyPopper, HelpCircle } from "lucide-react";
import { useForceScrollTop } from "@/hooks/useForceScrollTop";

const QuizGameValence = () => {
  useForceScrollTop();

  return (
    <>
      <Helmet>
        <title>Quiz Game Valence | Quiz Room immersive, jeu plateau TV &amp; team building – Valence Fun Park</title>
        <meta
          name="description"
          content="Découvrez notre Quiz Game à Valence chez Valence Fun Park : une Quiz Room immersive comme sur un jeu plateau TV. Idéal entre amis, pour un EVG / EVJF activité Valence ou un Team building original Valence. Réservation en ligne."
        />
        <link rel="canonical" href="https://www.valence-trampoline.com/quiz-game-valence" />
        <meta property="og:title" content="Quiz Game Valence | Quiz Room immersive & team building – Valence Fun Park" />
        <meta property="og:description" content="Découvrez notre Quiz Game à Valence : une Quiz Room immersive comme sur un jeu plateau TV. Idéal entre amis, EVG/EVJF ou team building. Réservation en ligne." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.valence-trampoline.com/quiz-game-valence" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Valence Fun Park – Quiz Boxing",
            "description": "Quiz Game immersif à Valence : vivez un jeu plateau TV grandeur nature entre amis, en EVG/EVJF ou en team building.",
            "url": "https://www.valence-trampoline.com/quiz-game-valence",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "30 Rue de la Roche",
              "addressLocality": "Saint-Marcel-lès-Valence",
              "postalCode": "26320",
              "addressCountry": "FR"
            },
            "telephone": "+33769482714",
            "email": "valencebowling@gmail.com",
            "openingHoursSpecification": [],
            "sameAs": []
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Qu'est-ce qu'une Quiz Room à Valence ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Une Quiz Room Valence est une salle immersive dans laquelle vous vivez un jeu de quiz grandeur nature, inspiré des plateaux télé, en groupe." }
              },
              {
                "@type": "Question",
                "name": "Est-ce une bonne activité entre amis ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui, c'est une excellente option si vous cherchez un Jeu de quiz entre amis valence avec de l'ambiance et de l'interaction." }
              },
              {
                "@type": "Question",
                "name": "Est-ce vraiment comme un jeu télé ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui, le concept officiel est présenté comme un Jeu TV Grandeur Nature, avec rounds, thèmes, jokers et ambiance immersive." }
              },
              {
                "@type": "Question",
                "name": "Peut-on venir pour un EVG ou EVJF ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui, c'est une très bonne EVG / EVJF activité Valence, car l'expérience est collective, simple à comprendre et très vivante." }
              },
              {
                "@type": "Question",
                "name": "Est-ce adapté aux entreprises ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui, le format est particulièrement pertinent pour un Team building original Valence. Le site officiel met clairement en avant cet usage." }
              },
              {
                "@type": "Question",
                "name": "Peut-on choisir les thèmes ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Oui, les thèmes sont choisis à l'arrivée selon les goûts du groupe." }
              },
              {
                "@type": "Question",
                "name": "Combien de joueurs peuvent participer ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Le concept officiel prévoit jusqu'à 12 joueurs par Quiz Box, avec binômes à partir du 7e joueur." }
              },
              {
                "@type": "Question",
                "name": "À partir de quel âge peut-on jouer ?",
                "acceptedAnswer": { "@type": "Answer", "text": "Chez Valence Fun Park, le Quiz Game est accessible à partir de 12 ans, avec adulte accompagnateur pour les mineurs." }
              },
              {
                "@type": "Question",
                "name": "Comment réserver ?",
                "acceptedAnswer": { "@type": "Answer", "text": "La réservation se fait uniquement en ligne." }
              },
              {
                "@type": "Question",
                "name": "Que se passe-t-il en cas de retard ?",
                "acceptedAnswer": { "@type": "Answer", "text": "La session peut être écourtée selon le planning." }
              }
            ]
          })}
        </script>
        <script defer src="https://valence-trampoline.com/~flock.js" data-proxy-url="https://valence-trampoline.com/~api/analytics"></script>
      </Helmet>

      <div className="min-h-screen">
        <Navigation />

        {/* Hero / Intro – above the fold */}
        <section className="relative pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 leading-tight">
                Quiz Game à Valence : Vivez l'expérience Quiz Boxing !{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Comme sur un plateau TV.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-4 max-w-3xl mx-auto">
                Envie d'une activité originale à Valence qui change vraiment des sorties classiques ?
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
                Découvrez notre Quiz Game à Valence chez Valence Fun Park : une Quiz Room Valence immersive, fun et rythmée, pensée pour vous faire vivre les sensations d'un Jeu plateau TV Valence entre amis, en EVG / EVJF ou en entreprise.
              </p>

              <a href="/quiz-boxing">
                <Button size="lg" className="group text-lg px-8 py-6">
                  Découvrir le Quiz Boxing
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Section 1 – Quiz Game à Valence : une Quiz Room immersive */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quiz Game à Valence : une <span className="text-primary">Quiz Room immersive</span> pour jouer comme sur un plateau TV
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Si vous cherchez une activité originale, conviviale et vraiment mémorable, notre Quiz Game à Valence est l'une des meilleures options pour une sortie en groupe. Chez Valence Fun Park, nous avons voulu proposer une expérience qui ne ressemble ni à un simple quizz, ni à une animation classique, ni à un jeu passif. Ici, vous entrez dans une Quiz Room Valence conçue pour recréer l'énergie d'un jeu plateau TV, avec du rythme, de la stratégie, de l'ambiance et surtout beaucoup d'interactions entre les joueurs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Le concept repose sur une idée simple : faire vivre à votre groupe une expérience immersive où chacun participe vraiment. Vous buzzez, vous répondez, vous vous challengez, vous choisissez des thèmes, vous profitez de manches variées et vous vous laissez entraîner dans une dynamique de jeu qui rappelle les grandes émissions télé. Le site officiel Quiz Boxing présente justement l'expérience comme un Jeu TV Grandeur Nature, avec plusieurs rounds, des jokers, des thèmes choisis selon les goûts du groupe et une session d'environ 60 minutes.
              </p>

              <div className="bg-muted/50 rounded-xl p-6 my-8 border border-border">
                <p className="text-sm text-muted-foreground font-medium mb-2">Cette page est pensée pour répondre à plusieurs intentions de recherche locales :</p>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>Quiz room valence</li>
                  <li>Jeu de quiz entre amis valence</li>
                  <li>Jeu plateau TV valence</li>
                  <li>EVG / EVJF activité Valence</li>
                  <li>Team building original Valence</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2 – Qu'est-ce qu'un Quiz Game à Valence ? */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Qu'est-ce qu'un <span className="text-primary">Quiz Game</span> à Valence ?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Un Quiz Game à Valence, dans notre approche, est une activité immersive où plusieurs joueurs s'affrontent dans une ambiance inspirée des plateaux télévisés. Il ne s'agit pas d'un simple questionnaire. Il s'agit d'une expérience vivante, rythmée, où les joueurs doivent répondre, réagir, choisir, parfois bluffer, parfois miser sur la stratégie, et surtout partager un moment collectif très fort.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site officiel Quiz Boxing décrit des rounds de quiz, de vrai/faux, de blind test et d'autres mécaniques fun, avec une sélection de thèmes selon les goûts du groupe et différents jokers comme Uppercut, Parier ou Voler. Cela renforce fortement l'idée de jeu télévisé grandeur nature, bien plus engageant qu'un simple quizz digital.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                À Valence Fun Park, cette promesse prend tout son sens parce qu'elle s'inscrit dans un vrai lieu de loisirs. Vous ne venez pas seulement répondre à des questions. Vous venez vivre une expérience de groupe. C'est cette dimension qui fait la différence entre une activité correcte et une activité dont on se souvient vraiment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 – Quiz Room Valence : pourquoi ça plaît autant */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Quiz Room Valence : pourquoi cette activité <span className="text-primary">plaît autant</span> ?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le succès d'une Quiz Room Valence repose sur plusieurs éléments.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                D'abord, l'activité est immédiatement compréhensible. Tout le monde sait ce qu'est un quiz, tout le monde comprend les codes d'un jeu télévisé, et chacun peut se projeter dans l'ambiance. Il n'y a pas besoin d'un long apprentissage, ni d'une préparation spéciale, ni d'une compétence physique particulière.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ensuite, le format est très social. Dès les premières minutes, les joueurs réagissent, se parlent, se défient, se surprennent. Il y a des moments de tension, de rire, de revanche, de surprise. Le groupe vit quelque chose ensemble. C'est l'une des grandes forces d'une Quiz Room : elle crée de l'interaction réelle.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Enfin, le jeu n'est pas réservé à ceux qui ont une énorme culture générale. Le site officiel insiste d'ailleurs sur la stratégie, les jokers et la personnalisation des thèmes. Cela rend l'expérience beaucoup plus accessible et beaucoup plus fun pour des groupes aux profils variés.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 – Jeu de quiz entre amis Valence */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <Users className="inline-block mr-3 text-primary" size={32} />
                Jeu de quiz entre amis Valence : une vraie <span className="text-primary">bonne idée de sortie</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Si vous tapez Jeu de quiz entre amis Valence, c'est probablement parce que vous cherchez une activité qui change des habitudes. Un restaurant, un bowling, un cinéma ou un bar peuvent très bien fonctionner, mais ils ne créent pas forcément ce petit supplément d'énergie qui fait qu'une sortie devient vraiment mémorable.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le Quiz Game à Valence répond très bien à cette attente. Entre amis, il fonctionne particulièrement bien parce qu'il crée immédiatement une ambiance. On se challenge, on se chambre, on rit, on tente des coups tactiques, on se surprend sur certaines questions et on découvre souvent que les plus discrets ne sont pas toujours les moins redoutables.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                C'est aussi une activité idéale pour :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-6">
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>une sortie du week-end</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>un anniversaire adulte</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>une soirée entre amis</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>un moment avant un restaurant</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>un plan original quand on veut faire autre chose qu'une sortie classique</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                La force du concept, c'est qu'il met tout le monde dans le jeu. Personne ne reste spectateur très longtemps. Cette énergie collective, c'est précisément ce qui fait qu'un jeu de quiz entre amis à Valence peut devenir une vraie expérience de groupe.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 – Jeu plateau TV Valence */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Jeu plateau TV Valence : l'expérience immersive que les <span className="text-primary">groupes recherchent</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                L'expression Jeu plateau TV Valence est très forte, parce qu'elle décrit immédiatement l'imaginaire de l'activité. On ne parle pas simplement d'un quizz. On parle d'une ambiance. On parle d'un décor mental. On parle du plaisir de buzzer, d'avoir un round qui s'accélère, de voir le groupe monter en tension, de ressentir cette petite adrénaline qui rend le jeu plus vivant.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site officiel met clairement en avant cette promesse de Jeu TV Grandeur Nature, avec show de lumières, musique, bornes de jeu, rounds variés et déroulé immersif.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                À Valence, cette approche est particulièrement pertinente parce qu'il y a une vraie place pour des activités indoor plus qualitatives, capables de répondre à plusieurs besoins :
              </p>
              <ul className="space-y-2 text-muted-foreground mb-4">
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>sortie entre amis</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>activité de groupe</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>idée pour un EVG ou EVJF</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>animation d'équipe</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>plan indoor quand la météo ne suit pas</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 6 – EVG / EVJF activité Valence */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <Heart className="inline-block mr-3 text-primary" size={32} />
                EVG / EVJF activité Valence : une option <span className="text-primary">originale, simple et mémorable</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Trouver une bonne EVG / EVJF activité Valence n'est pas toujours simple. Beaucoup d'idées sont soit déjà vues, soit trop compliquées à organiser, soit trop passives. Pour ce type de moment, il faut une activité qui lance immédiatement une bonne dynamique de groupe, qui mette tout le monde à l'aise et qui crée rapidement des souvenirs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le Quiz Game à Valence est parfait pour cela. Dès le début, le groupe entre dans une logique de jeu. Il y a des rires, des surprises, de la compétition légère et un vrai sentiment de participation collective. Personne n'a besoin d'être "bon" à un quiz pour passer un excellent moment. Ce qui compte, c'est l'ambiance.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site officiel Quiz Boxing mentionne d'ailleurs explicitement un jeu 100% Love réservé à un public majeur et particulièrement apprécié lors des EVG/EVJF.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Concrètement, si vous cherchez une EVG / EVJF activité Valence, cette expérience a plusieurs avantages :
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>elle est simple à comprendre</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>elle convient à des groupes mixtes</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>elle ne demande pas de condition physique</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>elle fonctionne avant un repas ou une soirée</li>
                <li className="flex items-start"><span className="text-primary mr-2 font-bold">•</span>elle crée du rythme dès les premières minutes</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour un enterrement de vie de célibataire, c'est souvent exactement ce qu'il faut : une activité fédératrice, fun, originale et facile à intégrer dans un programme plus large.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 – Team building original Valence */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                <Briefcase className="inline-block mr-3 text-primary" size={32} />
                Team building original Valence : pourquoi le Quiz Game <span className="text-primary">fonctionne très bien</span> pour les entreprises
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Le site officiel Quiz Boxing positionne clairement le concept comme une activité de team building immersive et fédératrice. Il insiste sur sa capacité à plaire à toutes les générations, à créer une vraie cohésion, à favoriser les échanges et à permettre la participation de tous. Il explique aussi que chaque Quiz Box peut accueillir jusqu'à 12 collaborateurs, avec des alliances possibles à partir du 7e joueur, et que l'activité peut s'intégrer à une journée plus large de cohésion d'équipe.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Une activité accessible à tous</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Le Quiz Game est accessible, inclusif et participatif. Il ne demande pas d'être sportif, ni extraverti, ni spécialiste d'un domaine particulier.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">De vraies interactions</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Le Quiz Game à Valence favorise naturellement l'échange, l'écoute, la coordination, la prise de décision et le soutien entre collègues.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Pour des équipes variées</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Chacun peut apporter quelque chose. Certains seront rapides, d'autres bons sur la musique, d'autres sur le cinéma, d'autres sur la stratégie. Cela valorise les complémentarités.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="text-xl font-bold text-foreground mb-3">Plus vivant qu'un format passif</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Un Team building original Valence doit mettre les gens dans une action commune. C'est exactement ce que permet la Quiz Room Valence.
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Le Quiz Boxing peut être prolongé par d'autres expériences et s'intégrer dans une logique de journée ou de soirée plus complète. C'est un point très fort pour Valence Fun Park, qui permet aux entreprises d'imaginer une vraie sortie conviviale et fluide.
              </p>
            </div>
          </div>
        </section>

        {/* Section 8 – Déroulement */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Comment se déroule <span className="text-primary">une session</span> ?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La réservation se fait uniquement en ligne. Nous recommandons d'arriver 10 minutes avant votre horaire afin de démarrer dans de bonnes conditions.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Une fois sur place, le groupe est accueilli puis se prépare à entrer dans l'expérience. Le concept officiel précise que les joueurs peuvent choisir leurs thèmes selon leurs goûts à l'arrivée, ce qui rend la session beaucoup plus personnalisée.
              </p>
              <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                <li>Entrée dans l'univers du jeu</li>
                <li>Choix des thèmes</li>
                <li>Lancement des manches</li>
                <li>Enchaînement de rounds variés</li>
                <li>Usage de jokers et moments de stratégie</li>
                <li>Montée en intensité au fil de la session</li>
              </ol>
              <p className="text-sm text-muted-foreground mt-4">
                En cas de retard, la session peut être écourtée. Nous faisons au mieux selon le planning.
              </p>
            </div>
          </div>
        </section>

        {/* Section 9 – À qui s'adresse cette Quiz Room */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                À qui s'adresse cette <span className="text-primary">Quiz Room</span> à Valence ?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <Users className="mx-auto text-primary mb-3" size={36} />
                  <h3 className="text-xl font-bold text-foreground mb-2">Entre amis</h3>
                  <p className="text-muted-foreground text-sm">Pour une sortie fun et originale.</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <PartyPopper className="mx-auto text-primary mb-3" size={36} />
                  <h3 className="text-xl font-bold text-foreground mb-2">EVG / EVJF</h3>
                  <p className="text-muted-foreground text-sm">Pour lancer l'ambiance avec une activité simple, immersive et mémorable.</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <Briefcase className="mx-auto text-primary mb-3" size={36} />
                  <h3 className="text-xl font-bold text-foreground mb-2">Entreprises</h3>
                  <p className="text-muted-foreground text-sm">Pour organiser un Team building original Valence qui crée vraiment de l'interaction.</p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border text-center">
                  <Heart className="mx-auto text-primary mb-3" size={36} />
                  <h3 className="text-xl font-bold text-foreground mb-2">Groupes</h3>
                  <p className="text-muted-foreground text-sm">Pour tous ceux qui veulent vivre une activité collective dans un lieu de loisirs à Valence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
                <HelpCircle className="inline-block mr-3 text-primary" size={32} />
                FAQ – Quiz Room Valence, Quiz Game et <span className="text-primary">Team Building</span>
              </h2>

              <div className="space-y-6">
                {[
                  { q: "Qu'est-ce qu'une Quiz Room à Valence ?", a: "Une Quiz Room Valence est une salle immersive dans laquelle vous vivez un jeu de quiz grandeur nature, inspiré des plateaux télé, en groupe." },
                  { q: "Est-ce une bonne activité entre amis ?", a: "Oui, c'est une excellente option si vous cherchez un Jeu de quiz entre amis valence avec de l'ambiance et de l'interaction." },
                  { q: "Est-ce vraiment comme un jeu télé ?", a: "Oui, le concept officiel est présenté comme un Jeu TV Grandeur Nature, avec rounds, thèmes, jokers et ambiance immersive." },
                  { q: "Peut-on venir pour un EVG ou EVJF ?", a: "Oui, c'est une très bonne EVG / EVJF activité Valence, car l'expérience est collective, simple à comprendre et très vivante." },
                  { q: "Est-ce adapté aux entreprises ?", a: "Oui, le format est particulièrement pertinent pour un Team building original Valence. Le site officiel met clairement en avant cet usage." },
                  { q: "Peut-on choisir les thèmes ?", a: "Oui, les thèmes sont choisis à l'arrivée selon les goûts du groupe." },
                  { q: "Combien de joueurs peuvent participer ?", a: "Le concept officiel prévoit jusqu'à 12 joueurs par Quiz Box, avec binômes à partir du 7e joueur." },
                  { q: "À partir de quel âge peut-on jouer ?", a: "Chez Valence Fun Park, le Quiz Game est accessible à partir de 12 ans, avec adulte accompagnateur pour les mineurs." },
                  { q: "Comment réserver ?", a: "La réservation se fait uniquement en ligne." },
                  { q: "Que se passe-t-il en cas de retard ?", a: "La session peut être écourtée selon le planning." },
                ].map((item, i) => (
                  <div key={i} className="bg-card rounded-xl p-6 border border-border">
                    <h3 className="text-lg font-bold text-foreground mb-2">{item.q}</h3>
                    <p className="text-muted-foreground">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Réservez votre <span className="text-primary">Quiz Game</span> à Valence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Que vous cherchiez une Quiz Room Valence, un Jeu de quiz entre amis valence, un Jeu plateau TV valence, une EVG / EVJF activité Valence ou un Team building original Valence — vous êtes au bon endroit.
              </p>
              <p className="text-lg text-foreground font-semibold mb-8">
                Réservez votre session en ligne chez Valence Fun Park et venez vivre un vrai Quiz Game à Valence.
              </p>
              <a href="/quiz-boxing">
                <Button size="lg" className="group text-lg px-10 py-6">
                  Voir les tarifs et réserver
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default QuizGameValence;
