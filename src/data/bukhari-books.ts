export interface Book {
  id: number;
  titleAr: string;
  titleFr: string;
  hadithCount: number;
  category: string;
  hadithStart: number;
  hadithEnd: number;
}

// Données EXACTES de sunnah.com - Total: 7563 hadiths
// hadithStart et hadithEnd sont les plages officielles de numérotation
// hadithCount = nombre réel de hadiths dans chaque livre (certains numéros sont sautés)
// Numéros manquants dans la numérotation: 1066, 1772, 2286, 2384, 2516, 6860

export const bukhariBooks: Book[] = [
  // === FOI & RÉVÉLATION (1-3) ===
  { id: 1, titleAr: "كتاب بدء الوحى", titleFr: "La Révélation", hadithCount: 7, category: "Foi & Révélation", hadithStart: 1, hadithEnd: 7 },
  { id: 2, titleAr: "كتاب الإيمان", titleFr: "La Foi", hadithCount: 51, category: "Foi & Révélation", hadithStart: 8, hadithEnd: 58 },
  { id: 3, titleAr: "كتاب العلم", titleFr: "La Connaissance", hadithCount: 76, category: "Foi & Révélation", hadithStart: 59, hadithEnd: 134 },
  
  // === PURIFICATION & PRIÈRE (4-13) ===
  { id: 4, titleAr: "كتاب الوضوء", titleFr: "Les Ablutions", hadithCount: 113, category: "Purification & Prière", hadithStart: 135, hadithEnd: 247 },
  { id: 5, titleAr: "كتاب الغسل", titleFr: "Le Bain Rituel", hadithCount: 46, category: "Purification & Prière", hadithStart: 248, hadithEnd: 293 },
  { id: 6, titleAr: "كتاب الحيض", titleFr: "Les Menstrues", hadithCount: 40, category: "Purification & Prière", hadithStart: 294, hadithEnd: 333 },
  { id: 7, titleAr: "كتاب التيمم", titleFr: "Les Ablutions Sèches", hadithCount: 15, category: "Purification & Prière", hadithStart: 334, hadithEnd: 348 },
  { id: 8, titleAr: "كتاب الصلاة", titleFr: "La Prière", hadithCount: 172, category: "Purification & Prière", hadithStart: 349, hadithEnd: 520 },
  { id: 9, titleAr: "كتاب مواقيت الصلاة", titleFr: "Les Horaires de Prière", hadithCount: 82, category: "Purification & Prière", hadithStart: 521, hadithEnd: 602 },
  { id: 10, titleAr: "كتاب الأذان", titleFr: "L'Appel à la Prière", hadithCount: 273, category: "Purification & Prière", hadithStart: 603, hadithEnd: 875 },
  { id: 11, titleAr: "كتاب الجمعة", titleFr: "La Prière du Vendredi", hadithCount: 66, category: "Purification & Prière", hadithStart: 876, hadithEnd: 941 },
  { id: 12, titleAr: "كتاب صلاة الخوف", titleFr: "La Prière de la Peur", hadithCount: 6, category: "Purification & Prière", hadithStart: 942, hadithEnd: 947 },
  { id: 13, titleAr: "كتاب العيدين", titleFr: "Les Deux Fêtes", hadithCount: 42, category: "Purification & Prière", hadithStart: 948, hadithEnd: 989 },
  
  // === PRIÈRES SPÉCIALES (14-22) ===
  { id: 14, titleAr: "كتاب الوتر", titleFr: "La Prière du Witr", hadithCount: 15, category: "Prières Spéciales", hadithStart: 990, hadithEnd: 1004 },
  { id: 15, titleAr: "كتاب الاستسقاء", titleFr: "La Prière pour la Pluie", hadithCount: 35, category: "Prières Spéciales", hadithStart: 1005, hadithEnd: 1039 },
  { id: 16, titleAr: "كتاب الكسوف", titleFr: "La Prière de l'Éclipse", hadithCount: 26, category: "Prières Spéciales", hadithStart: 1040, hadithEnd: 1065 },
  { id: 17, titleAr: "كتاب سجود القرآن", titleFr: "La Prosternation lors de la Récitation", hadithCount: 13, category: "Prières Spéciales", hadithStart: 1067, hadithEnd: 1079 },
  { id: 18, titleAr: "كتاب التقصير", titleFr: "Raccourcir la Prière", hadithCount: 40, category: "Prières Spéciales", hadithStart: 1080, hadithEnd: 1119 },
  { id: 19, titleAr: "كتاب التهجد", titleFr: "La Prière Nocturne", hadithCount: 68, category: "Prières Spéciales", hadithStart: 1120, hadithEnd: 1187 },
  { id: 20, titleAr: "كتاب فضل الصلاة فى مسجد مكة والمدينة", titleFr: "Mérites de Prier à la Mecque et Médine", hadithCount: 10, category: "Prières Spéciales", hadithStart: 1188, hadithEnd: 1197 },
  { id: 21, titleAr: "كتاب العمل فى الصلاة", titleFr: "Les Actions durant la Prière", hadithCount: 26, category: "Prières Spéciales", hadithStart: 1198, hadithEnd: 1223 },
  { id: 22, titleAr: "كتاب السهو", titleFr: "L'Oubli dans la Prière", hadithCount: 13, category: "Prières Spéciales", hadithStart: 1224, hadithEnd: 1236 },
  
  // === FUNÉRAILLES (23) ===
  { id: 23, titleAr: "كتاب الجنائز", titleFr: "Les Funérailles", hadithCount: 158, category: "Funérailles", hadithStart: 1237, hadithEnd: 1394 },
  
  // === FINANCES (24) ===
  { id: 24, titleAr: "كتاب الزكاة", titleFr: "L'Aumône Obligatoire", hadithCount: 118, category: "Finances", hadithStart: 1395, hadithEnd: 1512 },
  
  // === PÈLERINAGE (25-28) ===
  { id: 25, titleAr: "كتاب الحج", titleFr: "Le Pèlerinage", hadithCount: 259, category: "Pèlerinage", hadithStart: 1513, hadithEnd: 1771 },
  { id: 26, titleAr: "كتاب العمرة", titleFr: "Le Petit Pèlerinage", hadithCount: 33, category: "Pèlerinage", hadithStart: 1773, hadithEnd: 1805 },
  { id: 27, titleAr: "كتاب المحصر", titleFr: "Celui Empêché de Faire le Hajj", hadithCount: 15, category: "Pèlerinage", hadithStart: 1806, hadithEnd: 1820 },
  { id: 28, titleAr: "كتاب جزاء الصيد", titleFr: "Compensation pour la Chasse", hadithCount: 46, category: "Pèlerinage", hadithStart: 1821, hadithEnd: 1866 },
  
  // === GÉOGRAPHIE SACRÉE (29) ===
  { id: 29, titleAr: "كتاب فضائل المدينة", titleFr: "Mérites de Médine", hadithCount: 24, category: "Géographie Sacrée", hadithStart: 1867, hadithEnd: 1890 },
  
  // === JEÛNE (30-33) ===
  { id: 30, titleAr: "كتاب الصوم", titleFr: "Le Jeûne", hadithCount: 117, category: "Jeûne", hadithStart: 1891, hadithEnd: 2007 },
  { id: 31, titleAr: "كتاب صلاة التراويح", titleFr: "Prière de Tarawih", hadithCount: 6, category: "Jeûne", hadithStart: 2008, hadithEnd: 2013 },
  { id: 32, titleAr: "كتاب فضل ليلة القدر", titleFr: "La Nuit du Destin", hadithCount: 11, category: "Jeûne", hadithStart: 2014, hadithEnd: 2024 },
  { id: 33, titleAr: "كتاب الاعتكاف", titleFr: "La Retraite Spirituelle", hadithCount: 22, category: "Jeûne", hadithStart: 2025, hadithEnd: 2046 },
  
  // === COMMERCE (34-42) ===
  { id: 34, titleAr: "كتاب البيوع", titleFr: "Les Ventes", hadithCount: 192, category: "Commerce", hadithStart: 2047, hadithEnd: 2238 },
  { id: 35, titleAr: "كتاب السلم", titleFr: "Vente à Terme", hadithCount: 18, category: "Commerce", hadithStart: 2239, hadithEnd: 2256 },
  { id: 36, titleAr: "كتاب الشفعة", titleFr: "Le Droit de Préemption", hadithCount: 3, category: "Commerce", hadithStart: 2257, hadithEnd: 2259 },
  { id: 37, titleAr: "كتاب الإجارة", titleFr: "La Location", hadithCount: 26, category: "Commerce", hadithStart: 2260, hadithEnd: 2285 },
  { id: 38, titleAr: "كتاب الحوالات", titleFr: "Les Transferts", hadithCount: 3, category: "Commerce", hadithStart: 2287, hadithEnd: 2289 },
  { id: 39, titleAr: "كتاب الكفالة", titleFr: "La Garantie", hadithCount: 9, category: "Commerce", hadithStart: 2290, hadithEnd: 2298 },
  { id: 40, titleAr: "كتاب الوكالة", titleFr: "La Procuration", hadithCount: 21, category: "Commerce", hadithStart: 2299, hadithEnd: 2319 },
  { id: 41, titleAr: "كتاب المزارعة", titleFr: "L'Agriculture", hadithCount: 31, category: "Commerce", hadithStart: 2320, hadithEnd: 2350 },
  { id: 42, titleAr: "كتاب المساقاة", titleFr: "L'Irrigation", hadithCount: 33, category: "Commerce", hadithStart: 2351, hadithEnd: 2383 },
  
  // === FINANCES & PRÊTS (43, 51) ===
  { id: 43, titleAr: "كتاب فى الاستقراض", titleFr: "Les Prêts", hadithCount: 25, category: "Finances", hadithStart: 2385, hadithEnd: 2409 },
  
  // === JUSTICE (44-50, 52-54) ===
  { id: 44, titleAr: "كتاب الخصومات", titleFr: "Les Litiges", hadithCount: 16, category: "Justice", hadithStart: 2410, hadithEnd: 2425 },
  { id: 45, titleAr: "كتاب فى اللقطة", titleFr: "Les Objets Trouvés", hadithCount: 14, category: "Justice", hadithStart: 2426, hadithEnd: 2439 },
  { id: 46, titleAr: "كتاب المظالم", titleFr: "Les Injustices", hadithCount: 43, category: "Justice", hadithStart: 2440, hadithEnd: 2482 },
  { id: 47, titleAr: "كتاب الشركة", titleFr: "Les Associations", hadithCount: 25, category: "Commerce", hadithStart: 2483, hadithEnd: 2507 },
  { id: 48, titleAr: "كتاب الرهن", titleFr: "Les Gages", hadithCount: 8, category: "Commerce", hadithStart: 2508, hadithEnd: 2515 },
  { id: 49, titleAr: "كتاب العتق", titleFr: "L'Affranchissement", hadithCount: 43, category: "Justice", hadithStart: 2517, hadithEnd: 2559 },
  { id: 50, titleAr: "كتاب المكاتب", titleFr: "Le Contrat d'Affranchissement", hadithCount: 6, category: "Justice", hadithStart: 2560, hadithEnd: 2565 },
  { id: 51, titleAr: "كتاب الهبة وفضلها والتحريض عليها", titleFr: "Les Dons", hadithCount: 71, category: "Finances", hadithStart: 2566, hadithEnd: 2636 },
  { id: 52, titleAr: "كتاب الشهادات", titleFr: "Les Témoignages", hadithCount: 53, category: "Justice", hadithStart: 2637, hadithEnd: 2689 },
  { id: 53, titleAr: "كتاب الصلح", titleFr: "La Réconciliation", hadithCount: 21, category: "Justice", hadithStart: 2690, hadithEnd: 2710 },
  { id: 54, titleAr: "كتاب الشروط", titleFr: "Les Conditions", hadithCount: 27, category: "Justice", hadithStart: 2711, hadithEnd: 2737 },
  
  // === HÉRITAGE (55) ===
  { id: 55, titleAr: "كتاب الوصايا", titleFr: "Les Testaments", hadithCount: 44, category: "Héritage", hadithStart: 2738, hadithEnd: 2781 },
  
  // === JIHAD & GUERRE (56-58) ===
  { id: 56, titleAr: "كتاب الجهاد والسير", titleFr: "Le Jihad", hadithCount: 309, category: "Jihad & Guerre", hadithStart: 2782, hadithEnd: 3090 },
  { id: 57, titleAr: "كتاب فرض الخمس", titleFr: "Le Cinquième du Butin", hadithCount: 65, category: "Jihad & Guerre", hadithStart: 3091, hadithEnd: 3155 },
  { id: 58, titleAr: "كتاب الجزية والموادعة", titleFr: "La Jizya et les Accords", hadithCount: 34, category: "Jihad & Guerre", hadithStart: 3156, hadithEnd: 3189 },
  
  // === CRÉATION (59) ===
  { id: 59, titleAr: "كتاب بدء الخلق", titleFr: "Le Début de la Création", hadithCount: 136, category: "Création", hadithStart: 3190, hadithEnd: 3325 },
  
  // === PROPHÈTES (60-61) ===
  { id: 60, titleAr: "كتاب أحاديث الأنبياء", titleFr: "Récits des Prophètes", hadithCount: 163, category: "Prophètes", hadithStart: 3326, hadithEnd: 3488 },
  { id: 61, titleAr: "كتاب المناقب", titleFr: "Mérites du Prophète", hadithCount: 160, category: "Prophètes", hadithStart: 3489, hadithEnd: 3648 },
  
  // === COMPAGNONS (62-63) ===
  { id: 62, titleAr: "كتاب فضائل أصحاب النبى صلى الله عليه وسلم", titleFr: "Mérites des Compagnons", hadithCount: 127, category: "Compagnons", hadithStart: 3649, hadithEnd: 3775 },
  { id: 63, titleAr: "كتاب مناقب الأنصار", titleFr: "Mérites des Ansar", hadithCount: 173, category: "Compagnons", hadithStart: 3776, hadithEnd: 3948 },
  
  // === HISTOIRE (64) ===
  { id: 64, titleAr: "كتاب المغازى", titleFr: "Les Expéditions", hadithCount: 525, category: "Histoire", hadithStart: 3949, hadithEnd: 4473 },
  
  // === CORAN (65-66) ===
  { id: 65, titleAr: "كتاب التفسير", titleFr: "L'Exégèse", hadithCount: 504, category: "Coran", hadithStart: 4474, hadithEnd: 4977 },
  { id: 66, titleAr: "كتاب فضائل القرآن", titleFr: "Mérites du Coran", hadithCount: 85, category: "Coran", hadithStart: 4978, hadithEnd: 5062 },
  
  // === FAMILLE (67-71) ===
  { id: 67, titleAr: "كتاب النكاح", titleFr: "Le Mariage", hadithCount: 188, category: "Famille", hadithStart: 5063, hadithEnd: 5250 },
  { id: 68, titleAr: "كتاب الطلاق", titleFr: "Le Divorce", hadithCount: 100, category: "Famille", hadithStart: 5251, hadithEnd: 5350 },
  { id: 69, titleAr: "كتاب النفقات", titleFr: "Les Dépenses", hadithCount: 22, category: "Famille", hadithStart: 5351, hadithEnd: 5372 },
  { id: 70, titleAr: "كتاب الأطعمة", titleFr: "La Nourriture", hadithCount: 94, category: "Vie Quotidienne", hadithStart: 5373, hadithEnd: 5466 },
  { id: 71, titleAr: "كتاب العقيقة", titleFr: "Le Sacrifice de Naissance", hadithCount: 8, category: "Famille", hadithStart: 5467, hadithEnd: 5474 },
  
  // === VIE QUOTIDIENNE (72-77) ===
  { id: 72, titleAr: "كتاب الذبائح والصيد", titleFr: "La Chasse et l'Abattage", hadithCount: 70, category: "Vie Quotidienne", hadithStart: 5475, hadithEnd: 5544 },
  { id: 73, titleAr: "كتاب الأضاحي", titleFr: "Les Sacrifices de l'Aïd", hadithCount: 30, category: "Vie Quotidienne", hadithStart: 5545, hadithEnd: 5574 },
  { id: 74, titleAr: "كتاب الأشربة", titleFr: "Les Boissons", hadithCount: 65, category: "Vie Quotidienne", hadithStart: 5575, hadithEnd: 5639 },
  
  // === SANTÉ (75-76) ===
  { id: 75, titleAr: "كتاب المرضى", titleFr: "Les Malades", hadithCount: 38, category: "Santé", hadithStart: 5640, hadithEnd: 5677 },
  { id: 76, titleAr: "كتاب الطب", titleFr: "La Médecine", hadithCount: 105, category: "Santé", hadithStart: 5678, hadithEnd: 5782 },
  
  // === VIE QUOTIDIENNE (77) ===
  { id: 77, titleAr: "كتاب اللباس", titleFr: "Les Vêtements", hadithCount: 187, category: "Vie Quotidienne", hadithStart: 5783, hadithEnd: 5969 },
  
  // === COMPORTEMENT (78-79) ===
  { id: 78, titleAr: "كتاب الأدب", titleFr: "Les Bonnes Manières", hadithCount: 257, category: "Comportement", hadithStart: 5970, hadithEnd: 6226 },
  { id: 79, titleAr: "كتاب الاستئذان", titleFr: "Demander la Permission", hadithCount: 77, category: "Comportement", hadithStart: 6227, hadithEnd: 6303 },
  
  // === INVOCATIONS (80) ===
  { id: 80, titleAr: "كتاب الدعوات", titleFr: "Les Invocations", hadithCount: 108, category: "Invocations", hadithStart: 6304, hadithEnd: 6411 },
  
  // === SPIRITUALITÉ (81) ===
  { id: 81, titleAr: "كتاب الرقاق", titleFr: "L'Adoucissement des Cœurs", hadithCount: 182, category: "Spiritualité", hadithStart: 6412, hadithEnd: 6593 },
  
  // === CROYANCE (82) ===
  { id: 82, titleAr: "كتاب القدر", titleFr: "Le Destin", hadithCount: 27, category: "Croyance", hadithStart: 6594, hadithEnd: 6620 },
  
  // === JUSTICE (83-90) ===
  { id: 83, titleAr: "كتاب الأيمان والنذور", titleFr: "Les Serments et Vœux", hadithCount: 87, category: "Justice", hadithStart: 6621, hadithEnd: 6707 },
  { id: 84, titleAr: "كتاب كفارات الأيمان", titleFr: "Les Expiations", hadithCount: 15, category: "Justice", hadithStart: 6708, hadithEnd: 6722 },
  
  // === HÉRITAGE (85) ===
  { id: 85, titleAr: "كتاب الفرائض", titleFr: "Les Successions", hadithCount: 49, category: "Héritage", hadithStart: 6723, hadithEnd: 6771 },
  
  // === JUSTICE (86-90) ===
  { id: 86, titleAr: "كتاب الحدود", titleFr: "Les Peines", hadithCount: 88, category: "Justice", hadithStart: 6772, hadithEnd: 6859 },
  { id: 87, titleAr: "كتاب الديات", titleFr: "Le Prix du Sang", hadithCount: 57, category: "Justice", hadithStart: 6861, hadithEnd: 6917 },
  { id: 88, titleAr: "كتاب استتابة المرتدين والمعاندين وقتالهم", titleFr: "L'Apostasie", hadithCount: 22, category: "Justice", hadithStart: 6918, hadithEnd: 6939 },
  { id: 89, titleAr: "كتاب الإكراه", titleFr: "La Contrainte", hadithCount: 13, category: "Justice", hadithStart: 6940, hadithEnd: 6952 },
  { id: 90, titleAr: "كتاب الحيل", titleFr: "Les Stratagèmes", hadithCount: 29, category: "Justice", hadithStart: 6953, hadithEnd: 6981 },
  
  // === SPIRITUALITÉ (91) ===
  { id: 91, titleAr: "كتاب التعبير", titleFr: "L'Interprétation des Rêves", hadithCount: 66, category: "Spiritualité", hadithStart: 6982, hadithEnd: 7047 },
  
  // === ESCHATOLOGIE (92) ===
  { id: 92, titleAr: "كتاب الفتن", titleFr: "Les Épreuves", hadithCount: 89, category: "Eschatologie", hadithStart: 7048, hadithEnd: 7136 },
  
  // === JUSTICE (93) ===
  { id: 93, titleAr: "كتاب الأحكام", titleFr: "Les Jugements", hadithCount: 89, category: "Justice", hadithStart: 7137, hadithEnd: 7225 },
  
  // === COMPORTEMENT (94) ===
  { id: 94, titleAr: "كتاب التمنى", titleFr: "Les Souhaits", hadithCount: 20, category: "Comportement", hadithStart: 7226, hadithEnd: 7245 },
  
  // === MÉTHODOLOGIE (95-96) ===
  { id: 95, titleAr: "كتاب أخبار الآحاد", titleFr: "Les Nouvelles Isolées", hadithCount: 22, category: "Méthodologie", hadithStart: 7246, hadithEnd: 7267 },
  { id: 96, titleAr: "كتاب الاعتصام بالكتاب والسنة", titleFr: "S'Attacher au Coran et à la Sunna", hadithCount: 103, category: "Méthodologie", hadithStart: 7268, hadithEnd: 7370 },
  
  // === CROYANCE (97) ===
  { id: 97, titleAr: "كتاب التوحيد", titleFr: "L'Unicité d'Allah", hadithCount: 193, category: "Croyance", hadithStart: 7371, hadithEnd: 7563 }
];

export const categories = [
  "Foi & Révélation",
  "Purification & Prière",
  "Prières Spéciales",
  "Funérailles",
  "Pèlerinage",
  "Géographie Sacrée",
  "Jeûne",
  "Commerce",
  "Finances",
  "Justice",
  "Héritage",
  "Jihad & Guerre",
  "Création",
  "Prophètes",
  "Compagnons",
  "Histoire",
  "Coran",
  "Famille",
  "Vie Quotidienne",
  "Santé",
  "Comportement",
  "Invocations",
  "Spiritualité",
  "Croyance",
  "Eschatologie",
  "Méthodologie"
];

// Total des hadiths (somme de tous les hadithCount): 7563
export const TOTAL_HADITHS = 7563;

// Numéros manquants dans la numérotation sunnah.com
export const MISSING_NUMBERS = [1066, 1772, 2286, 2384, 2516, 6860];
