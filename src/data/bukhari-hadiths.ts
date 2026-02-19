export interface Hadith {
  id: number;
  bookId: number;
  number: string; // Numéro complet (ex: "1.1", "2.47")
  titleAr: string;
  titleFr: string;
  textAr: string;
  textFr: string;
  narrator: string; // Chaîne de narration
}

// ============================================================================
// BASE DE DONNÉES SAHIH AL-BUKHARI - VERSION DE DÉMONSTRATION
// ============================================================================
// IMPORTANT: Cette version contient seulement un échantillon de hadiths.
// Pour obtenir les 7563 hadiths complets de Sahih al-Bukhari:
//
// 📥 SOURCES RECOMMANDÉES:
// -------------------------
// 1. Sunnah.com (Source la plus authentique):
//    https://sunnah.com/bukhari
//    API: https://api.sunnah.com/v1/collections/bukhari/hadiths
//
// 2. GitHub - Base SQL complète:
//    https://github.com/halimbahae/Hadith
//
// 3. Hadith API:
//    https://hadithapi.pages.dev/collection/bukhari
//
// 📋 FORMAT REQUIS:
// -----------------
// Chaque hadith doit respecter l'interface Hadith ci-dessus.
// Les traductions françaises DOIVENT provenir de sources vérifiées.
//
// ⚠️ AVERTISSEMENT:
// ----------------
// Assurez-vous que toutes les traductions sont vérifiées par des savants
// qualifiés avant de les utiliser dans une application publique.
// ============================================================================

export const bukhariHadiths: Hadith[] = [
  // Livre 1: La Révélation (7 hadiths)
  {
    id: 1,
    bookId: 1,
    number: "1.1",
    titleAr: "كيف كان بدء الوحي",
    titleFr: "Comment la Révélation a commencé",
    textAr: "حدثنا الحميدي عبد الله بن الزبير قال حدثنا سفيان قال حدثنا يحيى بن سعيد الأنصاري قال أخبرني محمد بن إبراهيم التيمي أنه سمع علقمة بن وقاص الليثي يقول سمعت عمر بن الخطاب رضي الله عنه على المنبر قال سمعت رسول الله صلى الله عليه وسلم يقول إنما الأعمال بالنيات وإنما لكل امرئ ما نوى فمن كانت هجرته إلى دنيا يصيبها أو إلى امرأة ينكحها فهجرته إلى ما هاجر إليه",
    textFr: "Les actions ne valent que par les intentions et chacun n'a pour lui que ce qu'il a eu réellement l'intention de faire. Celui qui émigre pour Allah et Son messager, son émigration lui sera comptée comme étant pour Allah et Son messager. Celui qui émigre pour acquérir des biens de ce monde ou pour épouser une femme, son émigration ne lui sera comptée que pour ce vers quoi il a émigré.",
    narrator: "D'après 'Omar ibn al-Khattab (qu'Allah l'agrée)"
  },
  {
    id: 2,
    bookId: 1,
    number: "1.2",
    titleAr: "باب كيف كان بدء الوحي إلى رسول الله صلى الله عليه وسلم",
    titleFr: "Comment la Révélation est venue au Messager d'Allah",
    textAr: "حدثنا يحيى بن بكير قال حدثنا الليث عن عقيل عن ابن شهاب عن عروة بن الزبير عن عائشة أم المؤمنين أنها قالت أول ما بدئ به رسول الله صلى الله عليه وسلم من الوحي الرؤيا الصالحة في النوم فكان لا يرى رؤيا إلا جاءت مثل فلق الصبح",
    textFr: "La première chose par laquelle a commencé la Révélation au Messager d'Allah fut les rêves véridiques pendant le sommeil. Il ne voyait pas un rêve sans qu'il ne se réalise avec l'évidence de l'aube naissante.",
    narrator: "D'après 'Aïcha (qu'Allah l'agrée)"
  },
  {
    id: 3,
    bookId: 1,
    number: "1.3",
    titleAr: "باب بدء الوحي",
    titleFr: "Le début de la Révélation",
    textAr: "حدثنا عبد الله بن يوسف قال أخبرنا مالك عن هشام بن عروة عن أبيه عن عائشة أم المؤمنين رضي الله عنها أن الحارث بن هشام رضي الله عنه سأل رسول الله صلى الله عليه وسلم فقال يا رسول الله كيف يأتيك الوحي فقال رسول الله صلى الله عليه وسلم أحيانا يأتيني مثل صلصلة الجرس وهو أشده علي فيفصم عني وقد وعيت عنه ما قال",
    textFr: "Al-Harith ibn Hisham demanda au Messager d'Allah : 'Ô Messager d'Allah, comment te vient la Révélation ?' Le Messager d'Allah répondit : 'Parfois elle me vient comme le tintement d'une cloche, et c'est la plus dure pour moi. Puis cela cesse et j'ai alors retenu ce qui a été dit.'",
    narrator: "D'après 'Aïcha (qu'Allah l'agrée)"
  },
  {
    id: 4,
    bookId: 1,
    number: "1.4",
    titleAr: "باب كيف كان بدء الوحي",
    titleFr: "Comment était le début de la Révélation",
    textAr: "قال ابن عباس رضي الله عنهما المهيمن الأمين والقرآن مهيمن على كل كتاب قبله",
    textFr: "Ibn 'Abbas dit : 'Al-Mouhaymin (le Vigilant) signifie le Digne de confiance, et le Coran est vigilant sur tous les Livres qui l'ont précédé.'",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  },
  {
    id: 5,
    bookId: 1,
    number: "1.5",
    titleAr: "باب قول النبي صلى الله عليه وسلم بني الإسلام على خمس",
    titleFr: "Les cinq piliers de l'Islam",
    textAr: "حدثنا عبيد الله بن موسى قال أخبرنا حنظلة بن أبي سفيان عن عكرمة بن خالد عن ابن عمر رضي الله عنهما قال قال رسول الله صلى الله عليه وسلم بني الإسلام على خمس شهادة أن لا إله إلا الله وأن محمدا رسول الله وإقام الصلاة وإيتاء الزكاة والحج وصوم رمضان",
    textFr: "Le Messager d'Allah a dit : 'L'Islam est bâti sur cinq piliers : le témoignage qu'il n'y a de divinité qu'Allah et que Muhammad est le Messager d'Allah, l'accomplissement de la prière, l'acquittement de la Zakât, le pèlerinage à la Maison et le jeûne du mois de Ramadan.'",
    narrator: "D'après Ibn 'Omar (qu'Allah l'agrée)"
  },
  {
    id: 6,
    bookId: 1,
    number: "1.6",
    titleAr: "باب أمور الإيمان",
    titleFr: "Les affaires de la foi",
    textAr: "وقول الله تعالى ليس البر أن تولوا وجوهكم قبل المشرق والمغرب ولكن البر من آمن بالله واليوم الآخر والملائكة والكتاب والنبيين",
    textFr: "Allah dit : 'La bonté pieuse ne consiste pas à tourner vos visages vers le Levant ou le Couchant. Mais la bonté pieuse est de croire en Allah, au Jour dernier, aux Anges, au Livre et aux Prophètes.'",
    narrator: "Verset coranique (sourate al-Baqara)"
  },
  {
    id: 7,
    bookId: 1,
    number: "1.7",
    titleAr: "باب من الإيمان أن يحب لأخيه ما يحب لنفسه",
    titleFr: "La foi implique d'aimer pour son frère ce qu'on aime pour soi-même",
    textAr: "حدثنا مسدد قال حدثنا يحيى عن شعبة عن قتادة عن أنس رضي الله عنه عن النبي صلى الله عليه وسلم قال لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
    textFr: "Le Prophète (paix et bénédictions sur lui) a dit : 'Aucun d'entre vous ne sera véritablement croyant tant qu'il n'aimera pas pour son frère ce qu'il aime pour lui-même.'",
    narrator: "D'après Anas (qu'Allah l'agrée)"
  },

  // Livre 2: La Foi (53 hadiths) - Exemples des premiers hadiths
  {
    id: 8,
    bookId: 2,
    number: "2.1",
    titleAr: "باب أمور الإيمان",
    titleFr: "Les questions de foi",
    textAr: "وقول النبي صلى الله عليه وسلم بني الإسلام على خمس",
    textFr: "Le Prophète (paix et bénédictions sur lui) a dit : 'L'Islam est construit sur cinq piliers.'",
    narrator: "Hadith du Prophète"
  },
  {
    id: 9,
    bookId: 2,
    number: "2.2",
    titleAr: "باب الإيمان وقول النبي صلى الله عليه وسلم",
    titleFr: "La foi et la parole du Prophète",
    textAr: "حدثنا أبو اليمان قال أخبرنا شعيب عن الزهري قال أخبرني عبيد الله بن عبد الله بن عتبة أن أبا هريرة قال كان النبي صلى الله عليه وسلم بارزا يوما للناس فأتاه جبريل",
    textFr: "Abou Hourayra a dit : 'Un jour, le Prophète était parmi les gens quand l'ange Gabriel vint à lui.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },

  // Livre 3: La Science (76 hadiths)
  {
    id: 10,
    bookId: 3,
    number: "3.1",
    titleAr: "فضل العلم",
    titleFr: "Le mérite de la science",
    textAr: "وقول الله تعالى يرفع الله الذين آمنوا منكم والذين أوتوا العلم درجات",
    textFr: "Allah dit : 'Allah élèvera en degrés ceux d'entre vous qui auront cru et ceux qui auront reçu le savoir.'",
    narrator: "Verset coranique"
  },

  // NOTE: Ceci est une base de démonstration avec des exemples de hadiths
  // Pour obtenir la collection complète des 7563 hadiths de Sahih al-Bukhari:
  // 1. Visitez https://sunnah.com/bukhari pour accéder à la source authentique
  // 2. Utilisez l'API sunnah.com pour télécharger les données complètes
  // 3. Ou importez depuis des bases de données JSON vérifiées disponibles sur GitHub
  
  // Structure recommandée pour l'importation:
  // - Chaque hadith doit inclure: id, bookId, number, titleAr, titleFr, textAr, textFr, narrator
  // - Assurez-vous que les traductions françaises proviennent de sources authentiques
];

// Fonction pour obtenir les hadiths d'un livre spécifique
export const getHadithsByBook = (bookId: number): Hadith[] => {
  return bukhariHadiths.filter(hadith => hadith.bookId === bookId);
};

// Fonction pour obtenir un hadith par son ID
export const getHadithById = (id: number): Hadith | undefined => {
  return bukhariHadiths.find(hadith => hadith.id === id);
};
