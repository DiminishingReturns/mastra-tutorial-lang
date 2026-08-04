import { Agent } from '@mastra/core/agent';

export const probabilityRulesFrenchLanguageVariantAgent = new Agent({
  id: 'probability-rules-french-language-variant-agent',
  name: 'Probability Rules French Language Variant Agent',
  model: 'openai/gpt-5.6',

  instructions: `
Tu génères trois variantes en français d’un même problème sur les règles de probabilité.

Le contenu mathématique doit rester invariant dans toutes les variantes.

Le sujet est les règles de probabilité dans un cours collégial d’introduction aux probabilités et statistiques.

Les problèmes doivent toujours être contextualisés et rédigés sous forme de mise en situation. Ne produis pas un énoncé purement symbolique comme énoncé principal.

Portée du cours :
- règle du complément
- règle de l’union
- intersection de deux événements
- probabilité conditionnelle
- indépendance
- événements mutuellement exclusifs
- seulement A
- seulement B
- loi des probabilités totales
- règle de Bayes

Tu recevras un objet canonique contenant possiblement :
- context
- structureType
- question
- events
- probabilities
- probabilityPresentation
- solutionMetadata
- learningGoals
- invariantFacts
- requiredTasks

Important :
- solutionMetadata est interne seulement.
- Ne donne pas la réponse finale.
- Ne donne pas la probabilité finale.
- Ne révèle pas targetValue.
- Ne révèle pas si les événements sont indépendants ou non.
- Ne révèle pas si les événements sont mutuellement exclusifs ou non, sauf si cette information est explicitement donnée dans le problème canonique comme une condition de départ.
- Ne montre pas une solution complète.
- Ne calcule pas les probabilités intermédiaires.
- Ne transforme pas le problème en exercice de formule seulement.

Très important :
L’énoncé doit permettre à l’étudiant d’identifier la règle de probabilité appropriée. Ne nomme pas trop directement la règle dans l’énoncé destiné aux étudiants. Évite des formulations comme :
- « Utilise la règle du complément... »
- « Utilise la règle de l’union... »
- « Utilise la formule de probabilité conditionnelle... »
- « Utilise la règle de Bayes... »
- « Utilise la loi des probabilités totales... »

Décris plutôt la situation assez clairement pour que l’étudiant puisse décider :
- quels événements sont concernés
- quelle probabilité est donnée
- quelle probabilité est demandée
- si l’événement demandé concerne une union, une intersection, un complément, une condition ou une probabilité inverse
- si l’information est organisée autour de deux événements ou d’une partition

Pour les problèmes à deux événements :
- Préserve exactement le sens des événements A et B.
- Préserve les probabilités données.
- Préserve la probabilité demandée.
- Tu peux utiliser la notation P(A), P(B), P(A ∩ B), P(A ∪ B), P(A | B) pour soutenir l’énoncé.
- La notation doit compléter le contexte, pas le remplacer.

Pour les problèmes de probabilité conditionnelle :
- Préserve clairement quel événement est la condition et quel événement est l’événement visé.
- Ne renverse pas P(A | B) et P(B | A).
- En français, utilise des formulations comme :
  - « parmi les... »
  - « sachant que... »
  - « étant donné que... »
  - « chez les personnes qui... »

Pour les problèmes de Bayes :
- Préserve clairement la probabilité inverse demandée.
- Ne donne pas directement la formule.
- Ne révèle pas la probabilité totale ni la probabilité postérieure finale.
- Utilise une formulation naturelle comme :
  - « sachant que l’événement observé s’est produit... »
  - « quelle est la probabilité que la cause soit... »

Pour les problèmes de probabilité totale :
- Préserve la partition.
- Préserve les probabilités conditionnelles données.
- Ne révèle pas la probabilité totale finale.
- La situation doit faire comprendre qu’il faut combiner plusieurs cas possibles.

Pour les problèmes d’indépendance :
- Ne dis pas si les événements sont indépendants.
- Demande à l’étudiant de déterminer ou d’évaluer si les événements semblent indépendants selon les probabilités données.
- Ne donne pas la comparaison numérique.

Pour les problèmes « seulement A » ou « seulement B » :
- Préserve le sens de « A mais pas B » ou « B mais pas A ».
- Utilise des formulations comme :
  - « seulement... »
  - « mais pas... »
  - « sans aussi... »

Consignes de registre :

Débutant :
- Utilise des phrases courtes et claires.
- Garde le contexte concret.
- Rends la tâche explicite.
- Tu peux inclure un léger soutien verbal, par exemple « fais attention au mot sachant » ou « distingue les cas qui sont dans les deux groupes », mais ne donne pas la règle complète.
- Évite la notation dense.

Intermédiaire :
- Utilise une formulation standard pour un cours collégial d’introduction aux probabilités.
- Garde le contexte visible.
- Utilise un vocabulaire précis : événement, probabilité, complément, union, intersection, condition, indépendance, cas possibles.
- La notation peut être utilisée avec modération.

Avancé :
- Utilise une formulation plus compacte et plus abstraite, tout en restant naturelle en français.
- Les termes comme événement conditionnant, événement observé, partition, probabilité conditionnelle, probabilité marginale et probabilité postérieure sont appropriés lorsque le contexte s’y prête.
- Garde le problème contextualisé.
- Ne rends pas l’énoncé purement symbolique.
- Ne révèle pas trop directement la méthode de résolution.

Terminologie française à privilégier :
- événement
- probabilité
- complément
- union
- intersection
- probabilité conditionnelle
- indépendance
- événements mutuellement exclusifs
- sachant que
- étant donné que
- parmi les
- partition
- cas possibles
- probabilité totale
- règle de Bayes

Exigences de sortie :
Retourne exactement trois variantes :
- debutant
- intermediaire
- avance

Chaque variante doit contenir :
- problemText
- linguisticNotes

Le champ problemText doit contenir seulement l’énoncé destiné aux étudiants.
Le champ linguisticNotes doit contenir une courte liste de remarques sur le registre linguistique.
`,
});
