/**
 * Rappels islamiques pour chaque jour du Ramadan (jeûne et mérites du mois).
 */
export const RAMADAN_DAY_MESSAGES: string[] = [
  "Le Ramadan : mois du Coran et du repentir. Accueille-le avec un cœur pur.",
  "Le jeûne est une protection. Le jeûneur a deux joies : à la rupture et quand il rencontre son Seigneur.",
  "Les portes du Paradis s'ouvrent, celles du Feu se ferment, et les diables sont enchaînés.",
  "La nuit du Destin vaut mieux que mille mois. Invoque Allah et demande le pardon.",
  "Le Prophète (صلى الله عليه وسلم) redoublait de générosité en Ramadan. Donne et soutiens les nécessiteux.",
  "Le Suhoor est une bénédiction. Prends un repas avant l'aube, ne le délaisse pas.",
  "Pendant le jeûne, évite la médisance et les paroles vaines. Que ton jeûne soit un jeûne du cœur.",
  "La prière de Tarawih : une sunna qui illumine les nuits de Ramadan.",
  "Le jeûne n'est pas seulement s'abstenir de manger et de boire : c'est s'abstenir de tout ce qu'Allah a interdit.",
  "Quiconque jeûne le Ramadan avec foi et en espérant la récompense, ses péchés passés lui sont pardonnés.",
  "Donne l'Iftar à un jeûneur : tu auras une récompense semblable à la sienne.",
  "Les dix derniers jours : le Prophète s'isolait pour l'adoration. Recherche la Nuit du Destin.",
  "Le jeûne apprend la patience et la gratitude. Sois patient et reconnaissant.",
  "L'aumône en Ramadan multiplie les récompenses. Sois généreux.",
  "Pendant le jeûne, le croyant se rapproche d'Allah. Saisis cette proximité.",
  "La récitation du Coran en Ramadan : le Coran descendait en ce mois. Lis et médite.",
  "Le jeûne est une armure. Celui qui jeûne ne prononce pas de paroles vaines.",
  "À la rupture du jeûne, invoque : « Dhahaba al-zama'... » et demande à Allah.",
  "Le mois du pardon. Demande pardon à Allah et pardonne à autrui.",
  "Les anges invoquent pour le jeûneur jusqu'à ce qu'il rompe. Sois de ceux qu'ils invoquent.",
  "Le jeûne du corps et du cœur : garde ton regard et ta langue.",
  "Ramadan : école de la discipline. Que cette discipline reste après le mois.",
  "Chaque nuit de Ramadan, Allah libère des gens du Feu. Espère en Sa miséricorde.",
  "L'Iftar en commun : partage le repas avec la famille et les voisins.",
  "La Nuit du Destin : une nuit de paix jusqu'à l'aube. Prie, invoque, repens-toi.",
  "Le Prophète jeûnait et priait. Allie le jeûne à la prière et à l'invocation.",
  "Ne gaspille pas le Ramadan en divertissements. Chaque instant compte.",
  "Le jeûne sincère efface les péchés. Que ton intention soit pure pour Allah seul.",
  "À la fin du mois, acquitte la Zakat al-Fitr avant la prière de l'Aïd.",
  "Que les œuvres de Ramadan te accompagnent toute l'année. Que ce mois soit un nouveau départ.",
];

export function getRamadanMessageForDay(dayNumber: number): string {
  const index = Math.max(0, Math.min(dayNumber - 1, RAMADAN_DAY_MESSAGES.length - 1));
  return RAMADAN_DAY_MESSAGES[index] ?? RAMADAN_DAY_MESSAGES[0];
}
