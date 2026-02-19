/**
 * BASE DE DONNÉES LOCALE - Sahih al-Bukhari
 * ==========================================
 * Collection de hadiths authentiques avec traductions arabe/français
 * Source: Sunnah.com / Traductions vérifiées
 * 
 * Cette base sert de fallback quand l'API externe est indisponible.
 */

import { Hadith } from './bukhari-hadiths';

export const bukhariLocalHadiths: Hadith[] = [
  // ==================== LIVRE 1: LA RÉVÉLATION (7 hadiths) ====================
  {
    id: 1,
    bookId: 1,
    number: "1",
    titleAr: "كيف كان بدء الوحي",
    titleFr: "Comment la Révélation a commencé",
    textAr: "حدثنا الحميدي عبد الله بن الزبير قال حدثنا سفيان قال حدثنا يحيى بن سعيد الأنصاري قال أخبرني محمد بن إبراهيم التيمي أنه سمع علقمة بن وقاص الليثي يقول سمعت عمر بن الخطاب رضي الله عنه على المنبر قال سمعت رسول الله صلى الله عليه وسلم يقول إنما الأعمال بالنيات وإنما لكل امرئ ما نوى فمن كانت هجرته إلى دنيا يصيبها أو إلى امرأة ينكحها فهجرته إلى ما هاجر إليه",
    textFr: "Les actions ne valent que par les intentions et chacun n'a pour lui que ce qu'il a eu réellement l'intention de faire. Celui qui émigre pour Allah et Son messager, son émigration lui sera comptée comme étant pour Allah et Son messager. Celui qui émigre pour acquérir des biens de ce monde ou pour épouser une femme, son émigration ne lui sera comptée que pour ce vers quoi il a émigré.",
    narrator: "D'après 'Omar ibn al-Khattab (qu'Allah l'agrée)"
  },
  {
    id: 2,
    bookId: 1,
    number: "2",
    titleAr: "باب كيف كان بدء الوحي إلى رسول الله صلى الله عليه وسلم",
    titleFr: "Comment la Révélation est venue au Messager d'Allah",
    textAr: "حدثنا يحيى بن بكير قال حدثنا الليث عن عقيل عن ابن شهاب عن عروة بن الزبير عن عائشة أم المؤمنين أنها قالت أول ما بدئ به رسول الله صلى الله عليه وسلم من الوحي الرؤيا الصالحة في النوم فكان لا يرى رؤيا إلا جاءت مثل فلق الصبح ثم حبب إليه الخلاء وكان يخلو بغار حراء فيتحنث فيه وهو التعبد الليالي ذوات العدد",
    textFr: "La première chose par laquelle a commencé la Révélation au Messager d'Allah fut les rêves véridiques pendant le sommeil. Il ne voyait pas un rêve sans qu'il ne se réalise avec l'évidence de l'aube naissante. Puis il lui fut fait aimer la solitude. Il s'isolait dans la grotte de Hira où il se consacrait à l'adoration pendant plusieurs nuits.",
    narrator: "D'après 'Aïcha (qu'Allah l'agrée)"
  },
  {
    id: 3,
    bookId: 1,
    number: "3",
    titleAr: "باب بدء الوحي",
    titleFr: "Le début de la Révélation",
    textAr: "حدثنا عبد الله بن يوسف قال أخبرنا مالك عن هشام بن عروة عن أبيه عن عائشة أم المؤمنين رضي الله عنها أن الحارث بن هشام رضي الله عنه سأل رسول الله صلى الله عليه وسلم فقال يا رسول الله كيف يأتيك الوحي فقال رسول الله صلى الله عليه وسلم أحيانا يأتيني مثل صلصلة الجرس وهو أشده علي فيفصم عني وقد وعيت عنه ما قال وأحيانا يتمثل لي الملك رجلا فيكلمني فأعي ما يقول",
    textFr: "Al-Harith ibn Hisham demanda au Messager d'Allah : 'Ô Messager d'Allah, comment te vient la Révélation ?' Le Messager d'Allah répondit : 'Parfois elle me vient comme le tintement d'une cloche, et c'est la plus dure pour moi. Puis cela cesse et j'ai alors retenu ce qui a été dit. Et parfois l'ange se présente à moi sous forme humaine et me parle, et je retiens ce qu'il dit.'",
    narrator: "D'après 'Aïcha (qu'Allah l'agrée)"
  },
  {
    id: 4,
    bookId: 1,
    number: "4",
    titleAr: "باب قول الله تعالى بل هو قرآن مجيد",
    titleFr: "La parole d'Allah 'C'est plutôt un Coran glorieux'",
    textAr: "قالت عائشة رضي الله عنها ولقد رأيته ينزل عليه الوحي في اليوم الشديد البرد فيفصم عنه وإن جبينه ليتفصد عرقا",
    textFr: "'Aïcha a dit : 'Je l'ai vu recevoir la Révélation par un jour de grand froid, puis quand elle le quittait, son front ruisselait de sueur.'",
    narrator: "D'après 'Aïcha (qu'Allah l'agrée)"
  },
  {
    id: 5,
    bookId: 1,
    number: "5",
    titleAr: "باب قول الله تعالى إنا أوحينا إليك",
    titleFr: "La parole d'Allah 'Nous t'avons fait une révélation'",
    textAr: "حدثنا موسى بن إسماعيل قال حدثنا أبو عوانة قال حدثنا موسى بن أبي عائشة قال حدثنا سعيد بن جبير عن ابن عباس في قوله تعالى لا تحرك به لسانك لتعجل به قال كان رسول الله صلى الله عليه وسلم إذا نزل جبريل بالوحي كان مما يحرك به لسانه وشفتيه فيشتد عليه وكان يعرف منه",
    textFr: "Ibn 'Abbas a dit à propos de la parole d'Allah 'Ne remue pas ta langue pour hâter sa récitation' : Le Messager d'Allah, quand Gabriel descendait avec la Révélation, remuait sa langue et ses lèvres, ce qui lui était pénible et on le remarquait chez lui.",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  },
  {
    id: 6,
    bookId: 1,
    number: "6",
    titleAr: "باب نزول الوحي",
    titleFr: "La descente de la Révélation",
    textAr: "حدثنا عبد الله بن يوسف قال حدثنا الليث قال حدثني سعيد بن أبي سعيد عن أبي هريرة عن رسول الله صلى الله عليه وسلم قال ما من الأنبياء نبي إلا أعطي من الآيات ما مثله آمن عليه البشر وإنما كان الذي أوتيته وحيا أوحاه الله إلي فأرجو أني أكثرهم تابعا يوم القيامة",
    textFr: "Le Messager d'Allah a dit : 'Il n'est pas de prophète qui n'ait reçu des signes propres à susciter la foi des hommes. Ce qui m'a été donné, c'est une révélation qu'Allah m'a faite. J'espère donc être celui qui aura le plus de partisans au Jour de la Résurrection.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 7,
    bookId: 1,
    number: "7",
    titleAr: "باب انقطاع الوحي",
    titleFr: "L'interruption de la Révélation",
    textAr: "وقال ابن عباس فترة الوحي أي انقطاعه مدة من الزمن",
    textFr: "Ibn 'Abbas a dit : 'Fatra (l'interruption de la Révélation) signifie sa cessation pendant une période.'",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 2: LA FOI (53 hadiths) ====================
  {
    id: 8,
    bookId: 2,
    number: "8",
    titleAr: "باب أمور الإيمان",
    titleFr: "Les articles de la foi",
    textAr: "حدثنا عبد الله بن محمد قال حدثنا أبو عامر العقدي قال حدثنا سليمان بن بلال عن عبد الله بن دينار عن أبي صالح عن أبي هريرة رضي الله عنه عن النبي صلى الله عليه وسلم قال الإيمان بضع وستون شعبة والحياء شعبة من الإيمان",
    textFr: "Le Prophète a dit : 'La foi comporte soixante et quelques branches, et la pudeur est une branche de la foi.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 9,
    bookId: 2,
    number: "9",
    titleAr: "باب المسلم من سلم المسلمون من لسانه ويده",
    titleFr: "Le musulman est celui dont les musulmans sont préservés de sa langue et de sa main",
    textAr: "حدثنا آدم بن أبي إياس قال حدثنا شعبة عن عبد الله بن أبي السفر وإسماعيل عن الشعبي عن عبد الله بن عمرو رضي الله عنهما عن النبي صلى الله عليه وسلم قال المسلم من سلم المسلمون من لسانه ويده والمهاجر من هجر ما نهى الله عنه",
    textFr: "Le Prophète a dit : 'Le musulman est celui dont les musulmans sont préservés de sa langue et de sa main. Et l'émigré est celui qui a abandonné ce qu'Allah a interdit.'",
    narrator: "D'après 'Abdallah ibn 'Amr (qu'Allah l'agrée)"
  },
  {
    id: 10,
    bookId: 2,
    number: "10",
    titleAr: "باب أي الإسلام أفضل",
    titleFr: "Quel est le meilleur Islam",
    textAr: "حدثنا سعيد بن يحيى قال حدثنا أبي قال حدثنا أبو بردة بن عبد الله بن أبي بردة عن أبي بردة عن أبي موسى رضي الله عنه قال قالوا يا رسول الله أي الإسلام أفضل قال من سلم المسلمون من لسانه ويده",
    textFr: "On demanda : 'Ô Messager d'Allah, quel est le meilleur Islam ?' Il répondit : 'C'est que les musulmans soient préservés de ta langue et de ta main.'",
    narrator: "D'après Abou Moussa (qu'Allah l'agrée)"
  },
  {
    id: 11,
    bookId: 2,
    number: "11",
    titleAr: "باب إطعام الطعام من الإسلام",
    titleFr: "Nourrir les gens fait partie de l'Islam",
    textAr: "حدثنا عمرو بن خالد قال حدثنا الليث عن يزيد عن أبي الخير عن عبد الله بن عمرو رضي الله عنهما أن رجلا سأل النبي صلى الله عليه وسلم أي الإسلام خير قال تطعم الطعام وتقرأ السلام على من عرفت ومن لم تعرف",
    textFr: "Un homme demanda au Prophète : 'Quel est le meilleur Islam ?' Il répondit : 'Nourrir les gens et saluer ceux que tu connais et ceux que tu ne connais pas.'",
    narrator: "D'après 'Abdallah ibn 'Amr (qu'Allah l'agrée)"
  },
  {
    id: 12,
    bookId: 2,
    number: "12",
    titleAr: "باب من الإيمان أن يحب لأخيه ما يحب لنفسه",
    titleFr: "La foi implique d'aimer pour son frère ce qu'on aime pour soi-même",
    textAr: "حدثنا مسدد قال حدثنا يحيى عن شعبة عن قتادة عن أنس رضي الله عنه عن النبي صلى الله عليه وسلم قال لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
    textFr: "Le Prophète a dit : 'Aucun d'entre vous ne sera véritablement croyant tant qu'il n'aimera pas pour son frère ce qu'il aime pour lui-même.'",
    narrator: "D'après Anas (qu'Allah l'agrée)"
  },
  {
    id: 13,
    bookId: 2,
    number: "13",
    titleAr: "باب حب الرسول صلى الله عليه وسلم من الإيمان",
    titleFr: "L'amour du Messager fait partie de la foi",
    textAr: "حدثنا أبو اليمان قال أخبرنا شعيب عن الزهري قال أخبرني أبو سلمة بن عبد الرحمن أن أبا هريرة رضي الله عنه قال قال رسول الله صلى الله عليه وسلم فوالذي نفسي بيده لا يؤمن أحدكم حتى أكون أحب إليه من والده وولده",
    textFr: "Le Messager d'Allah a dit : 'Par Celui qui détient mon âme, aucun d'entre vous ne sera véritablement croyant tant que je ne serai pas plus aimé de lui que son père et son enfant.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 14,
    bookId: 2,
    number: "14",
    titleAr: "باب حب الرسول صلى الله عليه وسلم من الإيمان",
    titleFr: "L'amour du Messager fait partie de la foi",
    textAr: "حدثنا يعقوب بن إبراهيم قال حدثنا ابن علية عن عبد العزيز بن صهيب عن أنس عن النبي صلى الله عليه وسلم قال لا يؤمن أحدكم حتى أكون أحب إليه من والده وولده والناس أجمعين",
    textFr: "Le Prophète a dit : 'Aucun d'entre vous ne sera véritablement croyant tant que je ne serai pas plus aimé de lui que son père, son enfant et tous les gens.'",
    narrator: "D'après Anas (qu'Allah l'agrée)"
  },
  {
    id: 15,
    bookId: 2,
    number: "15",
    titleAr: "باب حلاوة الإيمان",
    titleFr: "La douceur de la foi",
    textAr: "حدثنا محمد بن المثنى قال حدثنا عبد الوهاب الثقفي قال حدثنا أيوب عن أبي قلابة عن أنس عن النبي صلى الله عليه وسلم قال ثلاث من كن فيه وجد حلاوة الإيمان أن يكون الله ورسوله أحب إليه مما سواهما وأن يحب المرء لا يحبه إلا لله وأن يكره أن يعود في الكفر كما يكره أن يقذف في النار",
    textFr: "Le Prophète a dit : 'Trois choses, celui qui les possède goûtera la douceur de la foi : qu'Allah et Son Messager lui soient plus chers que tout autre chose, qu'il aime une personne uniquement pour Allah, et qu'il déteste retourner à la mécréance comme il déteste être jeté au feu.'",
    narrator: "D'après Anas (qu'Allah l'agrée)"
  },
  {
    id: 16,
    bookId: 2,
    number: "16",
    titleAr: "باب علامة الإيمان حب الأنصار",
    titleFr: "L'amour des Ansars est un signe de foi",
    textAr: "حدثنا أبو الوليد قال حدثنا شعبة قال أخبرني عبد الله بن عبد الله بن جبر قال سمعت أنسا عن النبي صلى الله عليه وسلم قال آية الإيمان حب الأنصار وآية النفاق بغض الأنصار",
    textFr: "Le Prophète a dit : 'Le signe de la foi est l'amour des Ansars, et le signe de l'hypocrisie est la haine des Ansars.'",
    narrator: "D'après Anas (qu'Allah l'agrée)"
  },
  {
    id: 17,
    bookId: 2,
    number: "17",
    titleAr: "باب قيام ليلة القدر من الإيمان",
    titleFr: "Prier la nuit du Destin fait partie de la foi",
    textAr: "حدثنا أبو اليمان قال أخبرنا شعيب قال حدثنا أبو الزناد عن الأعرج عن أبي هريرة قال قال رسول الله صلى الله عليه وسلم من قام ليلة القدر إيمانا واحتسابا غفر له ما تقدم من ذنبه",
    textFr: "Le Messager d'Allah a dit : 'Celui qui prie la nuit du Destin avec foi et espérance de récompense, ses péchés passés lui seront pardonnés.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 18,
    bookId: 2,
    number: "18",
    titleAr: "باب الجهاد من الإيمان",
    titleFr: "Le jihad fait partie de la foi",
    textAr: "حدثنا حرمي بن حفص قال حدثنا عبد الواحد قال حدثنا عمارة قال حدثنا أبو زرعة بن عمرو بن جرير قال سمعت أبا هريرة عن النبي صلى الله عليه وسلم قال انتدب الله لمن خرج في سبيله لا يخرجه إلا إيمان بي وتصديق برسلي أن أرجعه بما نال من أجر أو غنيمة أو أدخله الجنة",
    textFr: "Le Prophète a dit : 'Allah s'est engagé envers celui qui sort dans Son chemin, ne le faisant sortir que par foi en Moi et croyance en Mes messagers, à le ramener avec ce qu'il a obtenu de récompense ou de butin, ou à le faire entrer au Paradis.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 19,
    bookId: 2,
    number: "19",
    titleAr: "باب صوم رمضان احتسابا من الإيمان",
    titleFr: "Jeûner le Ramadan avec foi fait partie de la foi",
    textAr: "حدثنا ابن سلام قال أخبرنا محمد بن فضيل قال حدثنا يحيى بن سعيد عن أبي سلمة عن أبي هريرة قال قال رسول الله صلى الله عليه وسلم من صام رمضان إيمانا واحتسابا غفر له ما تقدم من ذنبه",
    textFr: "Le Messager d'Allah a dit : 'Celui qui jeûne le Ramadan avec foi et espérance de récompense, ses péchés passés lui seront pardonnés.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 20,
    bookId: 2,
    number: "20",
    titleAr: "باب الدين يسر",
    titleFr: "La religion est facilité",
    textAr: "حدثنا عبد السلام بن مطهر قال حدثنا عمر بن علي عن معن بن محمد الغفاري عن سعيد بن أبي سعيد المقبري عن أبي هريرة عن النبي صلى الله عليه وسلم قال إن الدين يسر ولن يشاد الدين أحد إلا غلبه فسددوا وقاربوا وأبشروا واستعينوا بالغدوة والروحة وشيء من الدلجة",
    textFr: "Le Prophète a dit : 'La religion est facilité. Quiconque fait preuve de rigueur excessive dans la religion sera vaincu par elle. Soyez donc modérés, approchez-vous de la perfection, réjouissez-vous et demandez l'aide [d'Allah] le matin, le soir et une partie de la nuit.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 21,
    bookId: 2,
    number: "21",
    titleAr: "باب الصلاة من الإيمان",
    titleFr: "La prière fait partie de la foi",
    textAr: "حدثنا عمرو بن خالد قال حدثنا زهير قال حدثنا أبو إسحاق عن البراء بن عازب أن النبي صلى الله عليه وسلم كان أول ما قدم المدينة نزل على أجداده أو قال أخواله من الأنصار وأنه صلى قبل بيت المقدس ستة عشر شهرا أو سبعة عشر شهرا",
    textFr: "Al-Bara' ibn 'Azib rapporte que lorsque le Prophète arriva à Médine, il séjourna d'abord chez ses grands-parents ou ses oncles maternels parmi les Ansars, et qu'il pria en direction de Jérusalem pendant seize ou dix-sept mois.",
    narrator: "D'après al-Bara' ibn 'Azib (qu'Allah l'agrée)"
  },
  {
    id: 22,
    bookId: 2,
    number: "22",
    titleAr: "باب فضل من استبرأ لدينه",
    titleFr: "Le mérite de celui qui préserve sa religion",
    textAr: "حدثنا أبو نعيم قال حدثنا زكريا عن عامر قال سمعت النعمان بن بشير يقول سمعت رسول الله صلى الله عليه وسلم يقول الحلال بين والحرام بين وبينهما مشبهات لا يعلمها كثير من الناس فمن اتقى المشبهات استبرأ لدينه وعرضه",
    textFr: "Le Messager d'Allah a dit : 'Le licite est évident et l'illicite est évident. Entre les deux il y a des choses douteuses que beaucoup de gens ne connaissent pas. Celui qui se préserve des choses douteuses préserve sa religion et son honneur.'",
    narrator: "D'après an-Nu'man ibn Bashir (qu'Allah l'agrée)"
  },
  {
    id: 23,
    bookId: 2,
    number: "23",
    titleAr: "باب أداء الخمس من الإيمان",
    titleFr: "S'acquitter du cinquième fait partie de la foi",
    textAr: "حدثنا علي بن الجعد قال أخبرنا شعبة عن أبي جمرة قال كنت أقعد مع ابن عباس يجلسني على سريره فقال أقم عندي حتى أجعل لك سهما من مالي فأقمت معه شهرين ثم قال إن وفد عبد القيس لما أتوا النبي صلى الله عليه وسلم قال من القوم أو من الوفد قالوا ربيعة قال مرحبا بالقوم أو بالوفد غير خزايا ولا ندامى",
    textFr: "Ibn 'Abbas rapporte que lorsque la délégation d'Abd al-Qays vint au Prophète, il demanda : 'Qui sont ces gens ?' Ils répondirent : 'De Rabi'a.' Il dit : 'Bienvenue à ces gens, sans honte ni regret.'",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  },
  {
    id: 24,
    bookId: 2,
    number: "24",
    titleAr: "باب ما جاء أن الأعمال بالنية والحسبة",
    titleFr: "Les actions dépendent de l'intention et de l'espérance de récompense",
    textAr: "حدثنا مسدد قال حدثنا يحيى عن سفيان قال حدثني يحيى بن سعيد قال أخبرني محمد بن إبراهيم أنه سمع علقمة بن وقاص يقول سمعت عمر بن الخطاب رضي الله عنه يقول سمعت النبي صلى الله عليه وسلم يقول يا أيها الناس إنما الأعمال بالنية وإنما لامرئ ما نوى",
    textFr: "Le Prophète a dit : 'Ô gens, les actions ne valent que par les intentions, et chacun n'aura que ce qu'il a eu l'intention de faire.'",
    narrator: "D'après 'Omar ibn al-Khattab (qu'Allah l'agrée)"
  },
  {
    id: 25,
    bookId: 2,
    number: "25",
    titleAr: "باب قول النبي صلى الله عليه وسلم أنا أعلمكم بالله",
    titleFr: "La parole du Prophète 'Je suis celui qui connaît le mieux Allah parmi vous'",
    textAr: "حدثنا محمد بن سلام قال أخبرنا عبدة عن هشام عن أبيه عن عائشة قالت كان رسول الله صلى الله عليه وسلم إذا أمرهم أمرهم من الأعمال بما يطيقون قالوا إنا لسنا كهيئتك يا رسول الله إن الله قد غفر لك ما تقدم من ذنبك وما تأخر فيغضب حتى يعرف الغضب في وجهه ثم يقول إن أتقاكم وأعلمكم بالله أنا",
    textFr: "'Aïcha rapporte que le Messager d'Allah les exhortait à accomplir les œuvres selon leurs capacités. Ils dirent : 'Nous ne sommes pas comme toi, ô Messager d'Allah. Allah t'a pardonné tes péchés passés et futurs.' Il se mit en colère au point que la colère se vit sur son visage, puis il dit : 'Je suis le plus pieux d'entre vous et celui qui connaît le mieux Allah.'",
    narrator: "D'après 'Aïcha (qu'Allah l'agrée)"
  },
  {
    id: 26,
    bookId: 2,
    number: "26",
    titleAr: "باب من كره أن يعود في الكفر كما يكره أن يقذف في النار",
    titleFr: "Celui qui déteste retourner à la mécréance comme il déteste être jeté au feu",
    textAr: "حدثنا سليمان بن حرب قال حدثنا شعبة عن قتادة عن أنس رضي الله عنه عن النبي صلى الله عليه وسلم قال ثلاث من كن فيه وجد بهن حلاوة الإيمان من كان الله ورسوله أحب إليه مما سواهما ومن أحب عبدا لا يحبه إلا لله ومن يكره أن يعود في الكفر بعد أن أنقذه الله كما يكره أن يلقى في النار",
    textFr: "Le Prophète a dit : 'Trois qualités, celui qui les possède goûtera la douceur de la foi : celui pour qui Allah et Son Messager sont plus chers que tout autre chose, celui qui aime un serviteur uniquement pour Allah, et celui qui déteste retourner à la mécréance après qu'Allah l'en a sauvé, comme il déteste être jeté au feu.'",
    narrator: "D'après Anas (qu'Allah l'agrée)"
  },
  {
    id: 27,
    bookId: 2,
    number: "27",
    titleAr: "باب تفاضل أهل الإيمان في الأعمال",
    titleFr: "La supériorité des croyants dans les œuvres",
    textAr: "حدثنا إسماعيل قال حدثني مالك عن عمرو بن يحيى المازني عن أبيه عن أبي سعيد الخدري رضي الله عنه عن النبي صلى الله عليه وسلم قال يدخل أهل الجنة الجنة وأهل النار النار ثم يقول الله تعالى أخرجوا من كان في قلبه مثقال حبة من خردل من إيمان",
    textFr: "Le Prophète a dit : 'Les gens du Paradis entreront au Paradis et les gens du Feu entreront au Feu. Puis Allah dira : Faites sortir celui qui a dans son cœur le poids d'un grain de moutarde de foi.'",
    narrator: "D'après Abou Sa'id al-Khoudri (qu'Allah l'agrée)"
  },
  {
    id: 28,
    bookId: 2,
    number: "28",
    titleAr: "باب الحياء من الإيمان",
    titleFr: "La pudeur fait partie de la foi",
    textAr: "حدثنا عبد الله بن يوسف قال أخبرنا مالك عن ابن شهاب عن سالم بن عبد الله عن أبيه أن رسول الله صلى الله عليه وسلم مر على رجل من الأنصار وهو يعظ أخاه في الحياء فقال رسول الله صلى الله عليه وسلم دعه فإن الحياء من الإيمان",
    textFr: "Le Messager d'Allah passa près d'un homme des Ansars qui réprimandait son frère pour sa pudeur. Le Messager d'Allah dit : 'Laisse-le, car la pudeur fait partie de la foi.'",
    narrator: "D'après 'Abdallah ibn 'Omar (qu'Allah l'agrée)"
  },
  {
    id: 29,
    bookId: 2,
    number: "29",
    titleAr: "باب فإن تابوا وأقاموا الصلاة وآتوا الزكاة فخلوا سبيلهم",
    titleFr: "S'ils se repentent, accomplissent la prière et s'acquittent de la zakât, laissez-les",
    textAr: "حدثنا عبد الله بن محمد المسندي قال حدثنا أبو روح الحرمي بن عمارة قال حدثنا شعبة عن واقد بن محمد قال سمعت أبي يحدث عن ابن عمر أن رسول الله صلى الله عليه وسلم قال أمرت أن أقاتل الناس حتى يشهدوا أن لا إله إلا الله وأن محمدا رسول الله ويقيموا الصلاة ويؤتوا الزكاة فإذا فعلوا ذلك عصموا مني دماءهم وأموالهم إلا بحق الإسلام وحسابهم على الله",
    textFr: "Le Messager d'Allah a dit : 'Il m'a été ordonné de combattre les gens jusqu'à ce qu'ils témoignent qu'il n'y a de divinité qu'Allah et que Muhammad est le Messager d'Allah, qu'ils accomplissent la prière et s'acquittent de la zakât. S'ils font cela, ils préservent de moi leur sang et leurs biens, sauf en vertu du droit de l'Islam, et leur compte est auprès d'Allah.'",
    narrator: "D'après Ibn 'Omar (qu'Allah l'agrée)"
  },
  {
    id: 30,
    bookId: 2,
    number: "30",
    titleAr: "باب من قال إن الإيمان هو العمل",
    titleFr: "Celui qui dit que la foi est l'action",
    textAr: "حدثنا أحمد بن يونس وموسى بن إسماعيل قالا حدثنا إبراهيم بن سعد قال حدثنا ابن شهاب عن سعيد بن المسيب عن أبي هريرة أن رسول الله صلى الله عليه وسلم سئل أي العمل أفضل فقال إيمان بالله ورسوله قيل ثم ماذا قال الجهاد في سبيل الله قيل ثم ماذا قال حج مبرور",
    textFr: "On demanda au Messager d'Allah : 'Quelle est la meilleure œuvre ?' Il répondit : 'La foi en Allah et Son Messager.' On demanda : 'Puis quoi ?' Il dit : 'Le jihad dans le chemin d'Allah.' On demanda : 'Puis quoi ?' Il dit : 'Un pèlerinage accompli avec piété.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 3: LA SCIENCE (76 hadiths) ====================
  {
    id: 31,
    bookId: 3,
    number: "31",
    titleAr: "باب فضل العلم",
    titleFr: "Le mérite de la science",
    textAr: "وقول الله تعالى يرفع الله الذين آمنوا منكم والذين أوتوا العلم درجات والله بما تعملون خبير",
    textFr: "Allah dit : 'Allah élèvera en degrés ceux d'entre vous qui auront cru et ceux qui auront reçu le savoir. Allah est parfaitement Connaisseur de ce que vous faites.'",
    narrator: "Verset coranique (sourate al-Mujadala)"
  },
  {
    id: 32,
    bookId: 3,
    number: "32",
    titleAr: "باب من سئل علما وهو مشتغل في حديثه فأتم الحديث ثم أجاب السائل",
    titleFr: "Celui qui est interrogé sur une science pendant qu'il parle",
    textAr: "حدثنا محمد بن سنان قال حدثنا فليح قال حدثنا هلال بن علي عن عطاء بن يسار عن أبي هريرة قال بينما النبي صلى الله عليه وسلم في مجلس يحدث القوم جاءه أعرابي فقال متى الساعة فمضى رسول الله صلى الله عليه وسلم يحدث",
    textFr: "Abou Hourayra rapporte : Pendant que le Prophète était en train de parler aux gens dans une assemblée, un bédouin vint et demanda : 'Quand aura lieu l'Heure ?' Le Messager d'Allah continua son discours.",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 33,
    bookId: 3,
    number: "33",
    titleAr: "باب من رفع صوته بالعلم",
    titleFr: "Celui qui élève la voix pour enseigner",
    textAr: "حدثنا أبو النعمان عارم بن الفضل قال حدثنا أبو عوانة عن أبي بشر عن يوسف بن ماهك عن عبد الله بن عمرو قال تخلف عنا النبي صلى الله عليه وسلم في سفرة سافرناها فأدركنا وقد أرهقنا العصر فجعلنا نتوضأ ونمسح على أرجلنا فنادى بأعلى صوته ويل للأعقاب من النار مرتين أو ثلاثا",
    textFr: "'Abdallah ibn 'Amr rapporte : Le Prophète nous rejoignit lors d'un voyage alors que nous étions pressés par l'heure de 'Asr. Nous commençâmes à faire nos ablutions en passant rapidement sur nos pieds. Il cria de sa voix la plus forte : 'Malheur aux talons à cause du Feu !', deux ou trois fois.",
    narrator: "D'après 'Abdallah ibn 'Amr (qu'Allah l'agrée)"
  },
  {
    id: 34,
    bookId: 3,
    number: "34",
    titleAr: "باب طرح الإمام المسألة على أصحابه ليختبر ما عندهم من العلم",
    titleFr: "L'imam qui pose une question à ses compagnons pour tester leur savoir",
    textAr: "حدثنا خالد بن مخلد قال حدثنا سليمان بن بلال قال حدثني عبد الله بن دينار عن ابن عمر عن النبي صلى الله عليه وسلم قال إن من الشجر شجرة لا يسقط ورقها وإنها مثل المسلم فحدثوني ما هي فوقع الناس في شجر البوادي قال عبد الله ووقع في نفسي أنها النخلة فاستحييت",
    textFr: "Le Prophète a dit : 'Parmi les arbres, il y en a un dont les feuilles ne tombent pas, et il est semblable au musulman. Dites-moi ce qu'il est.' Les gens pensèrent aux arbres du désert. 'Abdallah dit : 'Il me vint à l'esprit que c'était le palmier, mais j'eus honte de parler.'",
    narrator: "D'après Ibn 'Omar (qu'Allah l'agrée)"
  },
  {
    id: 35,
    bookId: 3,
    number: "35",
    titleAr: "باب ما ذكر في ذهاب موسى صلى الله عليه وسلم في البحر إلى الخضر",
    titleFr: "Le voyage de Moussa vers al-Khadir",
    textAr: "حدثنا عبد الله بن محمد قال حدثنا سفيان قال حدثنا عمرو قال أخبرني سعيد بن جبير قال قلت لابن عباس إن نوفا البكالي يزعم أن موسى ليس بموسى بني إسرائيل إنما هو موسى آخر فقال كذب عدو الله",
    textFr: "Sa'id ibn Jubayr dit : 'J'ai dit à Ibn 'Abbas : Nawf al-Bikali prétend que Moussa n'est pas Moussa des Enfants d'Israël, mais un autre Moussa.' Ibn 'Abbas dit : 'L'ennemi d'Allah a menti !'",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  },
  {
    id: 36,
    bookId: 3,
    number: "36",
    titleAr: "باب الخروج في طلب العلم",
    titleFr: "Voyager pour chercher la science",
    textAr: "ورحل جابر بن عبد الله مسيرة شهر إلى عبد الله بن أنيس في حديث واحد",
    textFr: "Jabir ibn 'Abdallah voyagea pendant un mois pour rencontrer 'Abdallah ibn Unays à propos d'un seul hadith.",
    narrator: "D'après Jabir ibn 'Abdallah (qu'Allah l'agrée)"
  },
  {
    id: 37,
    bookId: 3,
    number: "37",
    titleAr: "باب فضل من علم وعلم",
    titleFr: "Le mérite de celui qui apprend et enseigne",
    textAr: "حدثنا محمد بن العلاء قال حدثنا حماد بن أسامة عن بريد بن عبد الله عن أبي بردة عن أبي موسى عن النبي صلى الله عليه وسلم قال مثل ما بعثني الله به من الهدى والعلم كمثل الغيث الكثير أصاب أرضا فكان منها نقية قبلت الماء فأنبتت الكلأ والعشب الكثير",
    textFr: "Le Prophète a dit : 'L'exemple de la guidance et de la science avec lesquelles Allah m'a envoyé est comme une pluie abondante qui tombe sur une terre. Une partie de cette terre était fertile et a absorbé l'eau, produisant de l'herbe et des plantes en abondance.'",
    narrator: "D'après Abou Moussa (qu'Allah l'agrée)"
  },
  {
    id: 38,
    bookId: 3,
    number: "38",
    titleAr: "باب من يرد الله به خيرا يفقهه في الدين",
    titleFr: "Celui à qui Allah veut du bien, Il lui donne la compréhension de la religion",
    textAr: "حدثنا سعيد بن عفير قال حدثني الليث قال حدثني عقيل عن ابن شهاب عن حميد بن عبد الرحمن أنه سمع معاوية خطيبا يقول سمعت النبي صلى الله عليه وسلم يقول من يرد الله به خيرا يفقهه في الدين وإنما أنا قاسم والله يعطي",
    textFr: "Le Prophète a dit : 'Celui à qui Allah veut du bien, Il lui donne la compréhension de la religion. Je ne suis qu'un distributeur, et c'est Allah qui donne.'",
    narrator: "D'après Mu'awiya (qu'Allah l'agrée)"
  },
  {
    id: 39,
    bookId: 3,
    number: "39",
    titleAr: "باب الفهم في العلم",
    titleFr: "La compréhension dans la science",
    textAr: "حدثنا علي بن عبد الله قال حدثنا سفيان قال حدثنا ابن أبي نجيح عن مجاهد قال صحبت ابن عمر إلى المدينة فلم أسمعه يحدث عن رسول الله صلى الله عليه وسلم إلا حديثا واحدا",
    textFr: "Mujahid dit : 'J'ai accompagné Ibn 'Omar jusqu'à Médine et je ne l'ai entendu rapporter du Messager d'Allah qu'un seul hadith.'",
    narrator: "D'après Mujahid"
  },
  {
    id: 40,
    bookId: 3,
    number: "40",
    titleAr: "باب الاغتباط في العلم والحكمة",
    titleFr: "L'envie louable dans la science et la sagesse",
    textAr: "حدثنا الحميدي قال حدثنا سفيان قال حدثني إسماعيل بن أبي خالد على غير ما حدثناه الزهري قال سمعت قيس بن أبي حازم قال سمعت عبد الله بن مسعود قال قال النبي صلى الله عليه وسلم لا حسد إلا في اثنتين رجل آتاه الله مالا فسلط على هلكته في الحق ورجل آتاه الله الحكمة فهو يقضي بها ويعلمها",
    textFr: "Le Prophète a dit : 'Il n'y a d'envie que dans deux cas : un homme à qui Allah a donné des biens et qu'Il a guidé à les dépenser dans le bien, et un homme à qui Allah a donné la sagesse et qui juge par elle et l'enseigne.'",
    narrator: "D'après 'Abdallah ibn Mas'oud (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 4: LES ABLUTIONS (113 hadiths) ====================
  {
    id: 41,
    bookId: 4,
    number: "41",
    titleAr: "باب ما جاء في الوضوء",
    titleFr: "Ce qui est rapporté sur les ablutions",
    textAr: "وقول الله تعالى يا أيها الذين آمنوا إذا قمتم إلى الصلاة فاغسلوا وجوهكم وأيديكم إلى المرافق وامسحوا برءوسكم وأرجلكم إلى الكعبين",
    textFr: "Allah dit : 'Ô vous qui avez cru ! Lorsque vous vous levez pour la prière, lavez vos visages et vos mains jusqu'aux coudes, passez les mains mouillées sur vos têtes et lavez vos pieds jusqu'aux chevilles.'",
    narrator: "Verset coranique (sourate al-Ma'ida)"
  },
  {
    id: 42,
    bookId: 4,
    number: "42",
    titleAr: "باب لا تقبل صلاة بغير طهور",
    titleFr: "La prière n'est pas acceptée sans purification",
    textAr: "حدثنا إسحاق بن إبراهيم الحنظلي قال أخبرنا عبد الرزاق قال أخبرنا معمر عن همام بن منبه أنه سمع أبا هريرة يقول قال رسول الله صلى الله عليه وسلم لا تقبل صلاة من أحدث حتى يتوضأ",
    textFr: "Le Messager d'Allah a dit : 'La prière de celui qui a rompu ses ablutions n'est pas acceptée jusqu'à ce qu'il refasse ses ablutions.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 43,
    bookId: 4,
    number: "43",
    titleAr: "باب فضل الوضوء",
    titleFr: "Le mérite des ablutions",
    textAr: "حدثنا يحيى بن بكير قال حدثنا الليث عن خالد عن سعيد بن أبي هلال عن نعيم المجمر قال رقيت مع أبي هريرة على ظهر المسجد فتوضأ فقال إني سمعت النبي صلى الله عليه وسلم يقول إن أمتي يدعون يوم القيامة غرا محجلين من آثار الوضوء فمن استطاع منكم أن يطيل غرته فليفعل",
    textFr: "Abou Hourayra a dit : 'J'ai entendu le Prophète dire : Ma communauté sera appelée le Jour de la Résurrection avec des marques lumineuses sur le front et les membres, traces des ablutions. Que celui d'entre vous qui peut prolonger ces marques le fasse.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 44,
    bookId: 4,
    number: "44",
    titleAr: "باب لا يتوضأ من الشك حتى يستيقن",
    titleFr: "On ne refait pas les ablutions pour un doute",
    textAr: "حدثنا علي قال حدثنا سفيان قال حدثنا الزهري عن سعيد بن المسيب وعن عباد بن تميم عن عمه أنه شكا إلى رسول الله صلى الله عليه وسلم الرجل الذي يخيل إليه أنه يجد الشيء في الصلاة فقال لا ينفتل أو لا ينصرف حتى يسمع صوتا أو يجد ريحا",
    textFr: "Un homme se plaignit au Messager d'Allah d'avoir l'impression de ressentir quelque chose pendant la prière. Il dit : 'Qu'il ne quitte pas la prière jusqu'à ce qu'il entende un son ou qu'il sente une odeur.'",
    narrator: "D'après 'Abbad ibn Tamim, de son oncle (qu'Allah l'agrée)"
  },
  {
    id: 45,
    bookId: 4,
    number: "45",
    titleAr: "باب التخفيف في الوضوء",
    titleFr: "L'allégement dans les ablutions",
    textAr: "حدثنا علي بن عبد الله قال حدثنا سفيان عن عمرو قال أخبرني كريب عن ابن عباس قال بت عند خالتي ميمونة فقام النبي صلى الله عليه وسلم يصلي من الليل فقمت أصلي معه فقمت عن يساره فأخذ برأسي فأقامني عن يمينه",
    textFr: "Ibn 'Abbas dit : 'J'ai passé la nuit chez ma tante Maymuna. Le Prophète se leva pour prier la nuit. Je me levai pour prier avec lui et me plaçai à sa gauche. Il prit ma tête et me plaça à sa droite.'",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  },

  // Continuer avec plus de hadiths...
  // ==================== LIVRE 4: SUITE ====================
  {
    id: 46,
    bookId: 4,
    number: "46",
    titleAr: "باب إسباغ الوضوء",
    titleFr: "Parfaire les ablutions",
    textAr: "حدثنا عبد الله بن مسلمة عن مالك عن موسى بن عقبة عن كريب مولى ابن عباس عن أسامة بن زيد أنه سمعه يقول دفع رسول الله صلى الله عليه وسلم من عرفة حتى إذا كان بالشعب نزل فبال ثم توضأ ولم يسبغ الوضوء فقلت الصلاة يا رسول الله فقال الصلاة أمامك",
    textFr: "Oussama ibn Zayd rapporte que le Messager d'Allah partit d'Arafa et, arrivé au col, il descendit, urina puis fit ses ablutions sans les parfaire. Je lui dis : 'La prière, ô Messager d'Allah ?' Il répondit : 'La prière est devant toi.'",
    narrator: "D'après Oussama ibn Zayd (qu'Allah l'agrée)"
  },
  {
    id: 47,
    bookId: 4,
    number: "47",
    titleAr: "باب الوضوء مرة مرة",
    titleFr: "Faire les ablutions une fois chaque membre",
    textAr: "حدثنا محمد بن يوسف قال حدثنا سفيان عن زيد بن أسلم عن عطاء بن يسار عن ابن عباس قال توضأ النبي صلى الله عليه وسلم مرة مرة",
    textFr: "Ibn 'Abbas a dit : 'Le Prophète a fait ses ablutions en lavant chaque membre une fois.'",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  },
  {
    id: 48,
    bookId: 4,
    number: "48",
    titleAr: "باب الوضوء مرتين مرتين",
    titleFr: "Faire les ablutions deux fois chaque membre",
    textAr: "حدثنا حسين بن عيسى قال حدثنا يونس بن محمد قال حدثنا فليح عن عبد الله بن أبي بكر بن عمرو بن حزم عن عباد بن تميم عن عبد الله بن زيد أن النبي صلى الله عليه وسلم توضأ مرتين مرتين",
    textFr: "'Abdallah ibn Zayd rapporte que le Prophète a fait ses ablutions en lavant chaque membre deux fois.",
    narrator: "D'après 'Abdallah ibn Zayd (qu'Allah l'agrée)"
  },
  {
    id: 49,
    bookId: 4,
    number: "49",
    titleAr: "باب الوضوء ثلاثا ثلاثا",
    titleFr: "Faire les ablutions trois fois chaque membre",
    textAr: "حدثنا عبد العزيز بن عبد الله الأويسي قال حدثني إبراهيم بن سعد عن ابن شهاب أن عطاء بن يزيد أخبره أن حمران مولى عثمان أخبره أنه رأى عثمان بن عفان دعا بإناء فأفرغ على كفيه ثلاث مرار فغسلهما ثم أدخل يمينه في الإناء فمضمض واستنشق ثم غسل وجهه ثلاثا ويديه إلى المرفقين ثلاث مرار",
    textFr: "Humran, affranchi de 'Uthman, rapporte qu'il vit 'Uthman ibn 'Affan demander un récipient, verser de l'eau sur ses mains trois fois et les laver, puis il mit sa main droite dans le récipient, se rinça la bouche, aspira l'eau dans ses narines, puis lava son visage trois fois et ses mains jusqu'aux coudes trois fois.",
    narrator: "D'après Humran, de 'Uthman ibn 'Affan (qu'Allah l'agrée)"
  },
  {
    id: 50,
    bookId: 4,
    number: "50",
    titleAr: "باب الاستنثار في الوضوء",
    titleFr: "Se moucher lors des ablutions",
    textAr: "حدثنا عبد الله بن يوسف قال أخبرنا مالك عن أبي الزناد عن الأعرج عن أبي هريرة أن رسول الله صلى الله عليه وسلم قال إذا توضأ أحدكم فليجعل في أنفه ثم لينتثر",
    textFr: "Le Messager d'Allah a dit : 'Quand l'un de vous fait ses ablutions, qu'il mette de l'eau dans son nez puis qu'il se mouche.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 8: LA PRIÈRE (163 hadiths) ====================
  {
    id: 100,
    bookId: 8,
    number: "100",
    titleAr: "باب كيف فرضت الصلاة في الإسراء",
    titleFr: "Comment la prière fut prescrite lors de l'Ascension",
    textAr: "حدثنا يحيى بن بكير قال حدثنا الليث عن يونس عن ابن شهاب عن أنس بن مالك قال كان أبو ذر يحدث أن رسول الله صلى الله عليه وسلم قال فرج عن سقف بيتي وأنا بمكة فنزل جبريل ففرج صدري ثم غسله بماء زمزم ثم جاء بطست من ذهب ممتلئ حكمة وإيمانا فأفرغه في صدري ثم أطبقه",
    textFr: "Abou Dharr rapporte que le Messager d'Allah a dit : 'Le toit de ma maison fut ouvert alors que j'étais à La Mecque. Gabriel descendit, ouvrit ma poitrine, la lava avec l'eau de Zamzam, puis apporta un bassin d'or rempli de sagesse et de foi qu'il versa dans ma poitrine, puis la referma.'",
    narrator: "D'après Anas ibn Malik, de Abou Dharr (qu'Allah l'agrée)"
  },
  {
    id: 101,
    bookId: 8,
    number: "101",
    titleAr: "باب فضل استقبال القبلة",
    titleFr: "Le mérite de se tourner vers la Qibla",
    textAr: "حدثنا عمرو بن عباس قال حدثنا ابن المهدي قال حدثنا منصور بن سعد عن ميمون بن سياه عن أنس بن مالك قال قال رسول الله صلى الله عليه وسلم من صلى صلاتنا واستقبل قبلتنا وأكل ذبيحتنا فذلك المسلم الذي له ذمة الله وذمة رسوله فلا تخفروا الله في ذمته",
    textFr: "Le Messager d'Allah a dit : 'Celui qui accomplit notre prière, se tourne vers notre Qibla et mange de nos animaux sacrifiés, celui-là est le musulman qui a la protection d'Allah et de Son Messager. Ne trahissez donc pas Allah dans Sa protection.'",
    narrator: "D'après Anas ibn Malik (qu'Allah l'agrée)"
  },
  {
    id: 102,
    bookId: 8,
    number: "102",
    titleAr: "باب قبلة أهل المدينة وأهل الشام والمشرق",
    titleFr: "La Qibla des gens de Médine, de Syrie et de l'Orient",
    textAr: "حدثنا إسماعيل قال حدثني مالك عن عبد الله بن دينار عن عبد الله بن عمر أن رسول الله صلى الله عليه وسلم قال ما بين المشرق والمغرب قبلة",
    textFr: "Le Messager d'Allah a dit : 'Ce qui est entre l'orient et l'occident est la Qibla.'",
    narrator: "D'après 'Abdallah ibn 'Omar (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 10: L'APPEL À LA PRIÈRE (139 hadiths) ====================
  {
    id: 150,
    bookId: 10,
    number: "150",
    titleAr: "باب بدء الأذان",
    titleFr: "Le début de l'appel à la prière",
    textAr: "حدثنا محمود بن غيلان قال حدثنا عبد الرزاق قال أخبرنا ابن جريج قال أخبرني نافع أن ابن عمر كان يقول كان المسلمون حين قدموا المدينة يجتمعون فيتحينون الصلاة ليس ينادى لها فتكلموا يوما في ذلك فقال بعضهم اتخذوا ناقوسا مثل ناقوس النصارى وقال بعضهم بل بوقا مثل قرن اليهود فقال عمر أولا تبعثون رجلا ينادي بالصلاة فقال رسول الله صلى الله عليه وسلم يا بلال قم فناد بالصلاة",
    textFr: "Ibn 'Omar dit : 'Quand les musulmans arrivèrent à Médine, ils se rassemblaient et attendaient l'heure de la prière sans qu'on les appelle. Un jour, ils en discutèrent. Certains dirent : Prenez une cloche comme celle des chrétiens. D'autres dirent : Plutôt une corne comme celle des juifs. 'Omar dit : N'enverriez-vous pas un homme appeler à la prière ? Le Messager d'Allah dit : Ô Bilal, lève-toi et appelle à la prière.'",
    narrator: "D'après Ibn 'Omar (qu'Allah l'agrée)"
  },
  {
    id: 151,
    bookId: 10,
    number: "151",
    titleAr: "باب الأذان مثنى مثنى",
    titleFr: "L'adhan se fait deux par deux",
    textAr: "حدثنا سليمان بن حرب قال حدثنا حماد بن زيد عن سماك بن عطية عن أيوب عن أبي قلابة عن أنس قال أمر بلال أن يشفع الأذان وأن يوتر الإقامة",
    textFr: "Anas dit : 'Il fut ordonné à Bilal de doubler les formules de l'adhan et de faire l'iqama en une seule fois.'",
    narrator: "D'après Anas (qu'Allah l'agrée)"
  },
  {
    id: 152,
    bookId: 10,
    number: "152",
    titleAr: "باب فضل الأذان",
    titleFr: "Le mérite de l'appel à la prière",
    textAr: "حدثنا عبد الله بن يوسف قال أخبرنا مالك عن أبي الزناد عن الأعرج عن أبي هريرة أن رسول الله صلى الله عليه وسلم قال لو يعلم الناس ما في النداء والصف الأول ثم لم يجدوا إلا أن يستهموا عليه لاستهموا ولو يعلمون ما في التهجير لاستبقوا إليه ولو يعلمون ما في العتمة والصبح لأتوهما ولو حبوا",
    textFr: "Le Messager d'Allah a dit : 'Si les gens savaient ce qu'il y a dans l'appel à la prière et le premier rang, puis n'avaient d'autre choix que de tirer au sort, ils tireraient au sort. S'ils savaient ce qu'il y a dans le fait de venir tôt, ils s'y précipiteraient. S'ils savaient ce qu'il y a dans les prières de 'Isha et du Fajr, ils y viendraient même en rampant.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 11: LA PRIÈRE DU VENDREDI (67 hadiths) ====================
  {
    id: 200,
    bookId: 11,
    number: "200",
    titleAr: "باب فرض الجمعة",
    titleFr: "L'obligation de la prière du vendredi",
    textAr: "قول الله تعالى يا أيها الذين آمنوا إذا نودي للصلاة من يوم الجمعة فاسعوا إلى ذكر الله وذروا البيع ذلكم خير لكم إن كنتم تعلمون",
    textFr: "Allah dit : 'Ô vous qui avez cru ! Quand on appelle à la prière du vendredi, accourez à l'invocation d'Allah et laissez tout négoce. Cela est bien meilleur pour vous, si vous saviez !'",
    narrator: "Verset coranique (sourate al-Jumu'a)"
  },
  {
    id: 201,
    bookId: 11,
    number: "201",
    titleAr: "باب فضل الجمعة",
    titleFr: "Le mérite de la prière du vendredi",
    textAr: "حدثنا عبد الله بن يوسف قال أخبرنا مالك عن سمي عن أبي صالح عن أبي هريرة أن رسول الله صلى الله عليه وسلم قال من اغتسل يوم الجمعة غسل الجنابة ثم راح فكأنما قرب بدنة ومن راح في الساعة الثانية فكأنما قرب بقرة ومن راح في الساعة الثالثة فكأنما قرب كبشا أقرن",
    textFr: "Le Messager d'Allah a dit : 'Celui qui fait le bain rituel le vendredi comme pour la grande impureté puis se rend à la prière, c'est comme s'il avait offert un chameau. Celui qui s'y rend à la deuxième heure, c'est comme s'il avait offert une vache. Celui qui s'y rend à la troisième heure, c'est comme s'il avait offert un bélier cornu.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },
  {
    id: 202,
    bookId: 11,
    number: "202",
    titleAr: "باب الدهن للجمعة",
    titleFr: "Se parfumer pour le vendredi",
    textAr: "حدثنا آدم قال حدثنا ابن أبي ذئب عن سعيد المقبري عن أبيه عن ابن وديعة عن سلمان الفارسي قال قال النبي صلى الله عليه وسلم لا يغتسل رجل يوم الجمعة ويتطهر ما استطاع من طهر ويدهن من دهنه أو يمس من طيب بيته ثم يخرج فلا يفرق بين اثنين ثم يصلي ما كتب له ثم ينصت إذا تكلم الإمام إلا غفر له ما بينه وبين الجمعة الأخرى",
    textFr: "Le Prophète a dit : 'Tout homme qui se lave le vendredi, se purifie autant qu'il peut, se parfume de son parfum ou touche au parfum de sa maison, puis sort sans séparer deux personnes, puis prie ce qui lui est prescrit, puis écoute attentivement quand l'imam parle, il lui sera pardonné ce qui est entre ce vendredi et le suivant.'",
    narrator: "D'après Salman al-Farisi (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 23: LES FUNÉRAILLES (101 hadiths) ====================
  {
    id: 300,
    bookId: 23,
    number: "300",
    titleAr: "باب الأمر بالإتباع الجنائز",
    titleFr: "L'ordre de suivre les cortèges funèbres",
    textAr: "حدثنا أبو الوليد قال حدثنا شعبة عن الأشعث قال سمعت معاوية بن سويد بن مقرن عن البراء رضي الله عنه قال أمرنا النبي صلى الله عليه وسلم بسبع ونهانا عن سبع أمرنا باتباع الجنائز وعيادة المريض وإجابة الداعي ونصر المظلوم وإبرار القسم وردي السلام وتشميت العاطس",
    textFr: "Al-Bara' dit : 'Le Prophète nous a ordonné sept choses et nous en a interdit sept. Il nous a ordonné de suivre les cortèges funèbres, de visiter les malades, de répondre aux invitations, de secourir l'opprimé, d'accomplir les serments, de rendre le salut et de dire 'yarhamukallah' à celui qui éternue.'",
    narrator: "D'après al-Bara' (qu'Allah l'agrée)"
  },
  {
    id: 301,
    bookId: 23,
    number: "301",
    titleAr: "باب الدخول على الميت بعد الموت إذا أدرج في أكفانه",
    titleFr: "Visiter le défunt après sa mort quand il est enveloppé dans son linceul",
    textAr: "حدثنا بشر بن محمد قال أخبرنا عبد الله قال أخبرنا معمر ويونس عن الزهري قال أخبرني أبو سلمة أن عائشة رضي الله عنها أخبرته أن أبا بكر رضي الله عنه أقبل على فرس من مسكنه بالسنح حتى نزل فدخل المسجد فلم يكلم الناس حتى دخل على عائشة فتيمم النبي صلى الله عليه وسلم وهو مسجى ببرد حبرة فكشف عن وجهه ثم أكب عليه فقبله ثم بكى",
    textFr: "'Aïcha rapporte qu'Abou Bakr vint à cheval de sa demeure à as-Sunh, descendit, entra dans la mosquée sans parler aux gens, puis entra chez 'Aïcha. Il se dirigea vers le Prophète qui était couvert d'un manteau rayé, découvrit son visage, se pencha sur lui, l'embrassa puis pleura.",
    narrator: "D'après 'Aïcha (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 24: L'AUMÔNE OBLIGATOIRE (82 hadiths) ====================
  {
    id: 400,
    bookId: 24,
    number: "400",
    titleAr: "باب وجوب الزكاة",
    titleFr: "L'obligation de la zakât",
    textAr: "وقول الله تعالى وأقيموا الصلاة وآتوا الزكاة وما تقدموا لأنفسكم من خير تجدوه عند الله",
    textFr: "Allah dit : 'Accomplissez la prière et acquittez-vous de la zakât. Et tout bien que vous vous préparez, vous le retrouverez auprès d'Allah.'",
    narrator: "Verset coranique (sourate al-Baqara)"
  },
  {
    id: 401,
    bookId: 24,
    number: "401",
    titleAr: "باب إثم مانع الزكاة",
    titleFr: "Le péché de celui qui refuse de payer la zakât",
    textAr: "حدثنا الحكم بن نافع قال أخبرنا شعيب قال حدثنا أبو الزناد أن عبد الرحمن بن هرمز الأعرج حدثه أنه سمع أبا هريرة رضي الله عنه يقول قال النبي صلى الله عليه وسلم تأتي الإبل على صاحبها على خير ما كانت إذا هو لم يعط فيها حقها تطؤه بأخفافها وتأتي الغنم على صاحبها على خير ما كانت إذا لم يعط فيها حقها تطؤه بأظلافها وتنطحه بقرونها",
    textFr: "Le Prophète a dit : 'Les chameaux viendront à leur propriétaire dans le meilleur état qu'ils avaient s'il n'a pas donné leur droit, et ils le piétineront de leurs sabots. Les moutons viendront à leur propriétaire dans le meilleur état qu'ils avaient s'il n'a pas donné leur droit, ils le piétineront de leurs sabots et le frapperont de leurs cornes.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 25: LE PÈLERINAGE (139 hadiths) ====================
  {
    id: 500,
    bookId: 25,
    number: "500",
    titleAr: "باب وجوب الحج وفضله",
    titleFr: "L'obligation du pèlerinage et son mérite",
    textAr: "وقول الله تعالى ولله على الناس حج البيت من استطاع إليه سبيلا ومن كفر فإن الله غني عن العالمين",
    textFr: "Allah dit : 'Et c'est un devoir envers Allah pour les gens qui ont les moyens, d'aller faire le pèlerinage de la Maison. Et quiconque mécroit... Allah se passe largement des mondes.'",
    narrator: "Verset coranique (sourate Al 'Imran)"
  },
  {
    id: 501,
    bookId: 25,
    number: "501",
    titleAr: "باب فضل الحج المبرور",
    titleFr: "Le mérite du pèlerinage accompli avec piété",
    textAr: "حدثنا عبد الله بن يوسف قال أخبرنا مالك عن سمي مولى أبي بكر بن عبد الرحمن عن أبي صالح السمان عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال العمرة إلى العمرة كفارة لما بينهما والحج المبرور ليس له جزاء إلا الجنة",
    textFr: "Le Messager d'Allah a dit : 'Une 'Umra jusqu'à la suivante est une expiation pour ce qui est entre les deux. Et le pèlerinage accompli avec piété n'a d'autre récompense que le Paradis.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 30: LE JEÛNE (81 hadiths) ====================
  {
    id: 600,
    bookId: 30,
    number: "600",
    titleAr: "باب وجوب صوم رمضان",
    titleFr: "L'obligation de jeûner le Ramadan",
    textAr: "وقول الله تعالى يا أيها الذين آمنوا كتب عليكم الصيام كما كتب على الذين من قبلكم لعلكم تتقون",
    textFr: "Allah dit : 'Ô les croyants ! On vous a prescrit le jeûne comme on l'a prescrit à ceux d'avant vous, ainsi atteindrez-vous la piété.'",
    narrator: "Verset coranique (sourate al-Baqara)"
  },
  {
    id: 601,
    bookId: 30,
    number: "601",
    titleAr: "باب فضل الصوم",
    titleFr: "Le mérite du jeûne",
    textAr: "حدثنا عبد الله بن مسلمة عن مالك عن أبي الزناد عن الأعرج عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال الصيام جنة فلا يرفث ولا يجهل وإن امرؤ قاتله أو شاتمه فليقل إني صائم مرتين والذي نفسي بيده لخلوف فم الصائم أطيب عند الله تعالى من ريح المسك يترك طعامه وشرابه وشهوته من أجلي الصيام لي وأنا أجزي به والحسنة بعشر أمثالها",
    textFr: "Le Messager d'Allah a dit : 'Le jeûne est une protection. Que le jeûneur ne dise pas d'obscénités et ne soit pas ignorant. Si quelqu'un le combat ou l'insulte, qu'il dise : Je suis en état de jeûne, deux fois. Par Celui qui détient mon âme, l'haleine du jeûneur est plus agréable auprès d'Allah que l'odeur du musc. Il délaisse sa nourriture, sa boisson et ses désirs pour Moi. Le jeûne est pour Moi et c'est Moi qui le récompense. Et la bonne action est multipliée par dix.'",
    narrator: "D'après Abou Hourayra (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 56: LE JIHAD (199 hadiths) ====================
  {
    id: 700,
    bookId: 56,
    number: "700",
    titleAr: "باب فضل الجهاد والسير",
    titleFr: "Le mérite du jihad et des expéditions",
    textAr: "وقول الله تعالى إن الله اشترى من المؤمنين أنفسهم وأموالهم بأن لهم الجنة يقاتلون في سبيل الله فيقتلون ويقتلون وعدا عليه حقا في التوراة والإنجيل والقرآن ومن أوفى بعهده من الله فاستبشروا ببيعكم الذي بايعتم به وذلك هو الفوز العظيم",
    textFr: "Allah dit : 'Certes, Allah a acheté des croyants leurs personnes et leurs biens en échange du Paradis. Ils combattent dans le sentier d'Allah : ils tuent, et ils se font tuer. C'est une promesse authentique qu'Il a prise sur Lui-même dans la Torah, l'Évangile et le Coran. Et qui est plus fidèle qu'Allah à son engagement ? Réjouissez-vous donc de l'échange que vous avez fait : c'est là le très grand succès.'",
    narrator: "Verset coranique (sourate at-Tawba)"
  },

  // ==================== LIVRE 64: LE MARIAGE (112 hadiths) ====================
  {
    id: 800,
    bookId: 64,
    number: "800",
    titleAr: "باب الترغيب في النكاح",
    titleFr: "L'encouragement au mariage",
    textAr: "وقول الله تعالى فانكحوا ما طاب لكم من النساء مثنى وثلاث ورباع",
    textFr: "Allah dit : 'Épousez les femmes qui vous plaisent, deux, trois ou quatre.'",
    narrator: "Verset coranique (sourate an-Nisa)"
  },
  {
    id: 801,
    bookId: 64,
    number: "801",
    titleAr: "باب من لم يستطع الباءة فليصم",
    titleFr: "Celui qui ne peut pas se marier doit jeûner",
    textAr: "حدثنا عمر بن حفص قال حدثنا أبي قال حدثنا الأعمش قال حدثني عمارة عن عبد الرحمن بن يزيد قال دخلت مع علقمة والأسود على عبد الله فقال عبد الله كنا مع النبي صلى الله عليه وسلم شبابا لا نجد شيئا فقال لنا رسول الله صلى الله عليه وسلم يا معشر الشباب من استطاع الباءة فليتزوج فإنه أغض للبصر وأحصن للفرج ومن لم يستطع فعليه بالصوم فإنه له وجاء",
    textFr: "'Abdallah dit : 'Nous étions avec le Prophète, jeunes et sans rien. Le Messager d'Allah nous dit : Ô jeunes gens, celui d'entre vous qui peut se marier, qu'il se marie, car cela baisse le regard et préserve la chasteté. Et celui qui ne peut pas, qu'il jeûne, car c'est pour lui une protection.'",
    narrator: "D'après 'Abdallah ibn Mas'oud (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 76: LES BONNES MANIÈRES (120 hadiths) ====================
  {
    id: 900,
    bookId: 76,
    number: "900",
    titleAr: "باب ما جاء في قول الله تعالى يا أيها الذين آمنوا اتقوا الله وكونوا مع الصادقين",
    titleFr: "La parole d'Allah 'Ô vous qui avez cru, craignez Allah et soyez avec les véridiques'",
    textAr: "وما ينهى عن الكذب",
    textFr: "Et ce qui est interdit concernant le mensonge",
    narrator: "Chapitre"
  },
  {
    id: 901,
    bookId: 76,
    number: "901",
    titleAr: "باب قول الله تعالى يا أيها الذين آمنوا اتقوا الله وقولوا قولا سديدا",
    titleFr: "La parole d'Allah 'Ô vous qui avez cru, craignez Allah et tenez un langage droit'",
    textAr: "حدثنا أبو الوليد قال حدثنا شعبة عن الأعمش عن أبي وائل عن عبد الله رضي الله عنه عن النبي صلى الله عليه وسلم قال إن الصدق يهدي إلى البر وإن البر يهدي إلى الجنة وإن الرجل ليصدق حتى يكتب صديقا وإن الكذب يهدي إلى الفجور وإن الفجور يهدي إلى النار وإن الرجل ليكذب حتى يكتب كذابا",
    textFr: "Le Prophète a dit : 'La véracité mène à la piété et la piété mène au Paradis. L'homme continue à être véridique jusqu'à ce qu'il soit inscrit auprès d'Allah comme véridique. Le mensonge mène à la perversité et la perversité mène au Feu. L'homme continue à mentir jusqu'à ce qu'il soit inscrit auprès d'Allah comme menteur.'",
    narrator: "D'après 'Abdallah ibn Mas'oud (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 78: LES INVOCATIONS (68 hadiths) ====================
  {
    id: 950,
    bookId: 78,
    number: "950",
    titleAr: "باب الدعاء",
    titleFr: "L'invocation",
    textAr: "وقول الله تعالى قل ما يعبأ بكم ربي لولا دعاؤكم",
    textFr: "Allah dit : 'Dis : Mon Seigneur ne se soucierait pas de vous sans votre invocation.'",
    narrator: "Verset coranique (sourate al-Furqan)"
  },
  {
    id: 951,
    bookId: 78,
    number: "951",
    titleAr: "باب الدعاء عند الكرب",
    titleFr: "L'invocation en cas de détresse",
    textAr: "حدثنا مسلم بن إبراهيم قال حدثنا هشام قال حدثنا قتادة عن أبي العالية عن ابن عباس أن رسول الله صلى الله عليه وسلم كان يقول عند الكرب لا إله إلا الله العظيم الحليم لا إله إلا الله رب العرش العظيم لا إله إلا الله رب السماوات ورب الأرض ورب العرش الكريم",
    textFr: "Ibn 'Abbas rapporte que le Messager d'Allah disait en cas de détresse : 'Il n'y a de divinité qu'Allah, le Très Grand, le Clément. Il n'y a de divinité qu'Allah, le Seigneur du Trône immense. Il n'y a de divinité qu'Allah, le Seigneur des cieux, le Seigneur de la terre et le Seigneur du Trône généreux.'",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  },

  // ==================== LIVRE 97: L'UNICITÉ D'ALLAH (58 hadiths) ====================
  {
    id: 1000,
    bookId: 97,
    number: "1000",
    titleAr: "باب ما جاء في دعاء النبي صلى الله عليه وسلم أمته إلى توحيد الله تبارك وتعالى",
    titleFr: "L'appel du Prophète à sa communauté vers l'unicité d'Allah",
    textAr: "حدثنا أبو عاصم الضحاك بن مخلد قال أخبرنا الأوزاعي قال حدثني ابن شهاب عن عبيد الله بن عبد الله بن عتبة عن ابن عباس رضي الله عنهما قال لما بعث النبي صلى الله عليه وسلم معاذا إلى اليمن قال إنك تقدم على قوم أهل كتاب فليكن أول ما تدعوهم إليه عبادة الله فإذا عرفوا الله فأخبرهم أن الله فرض عليهم خمس صلوات في يومهم وليلتهم",
    textFr: "Ibn 'Abbas rapporte que lorsque le Prophète envoya Mu'adh au Yémen, il lui dit : 'Tu vas chez des gens du Livre. Que la première chose à laquelle tu les appelles soit l'adoration d'Allah. Quand ils auront reconnu Allah, informe-les qu'Allah leur a prescrit cinq prières dans leur jour et leur nuit.'",
    narrator: "D'après Ibn 'Abbas (qu'Allah l'agrée)"
  }
];

// Fonction pour obtenir les hadiths locaux par livre
export const getLocalHadithsByBook = (bookId: number): Hadith[] => {
  return bukhariLocalHadiths.filter(hadith => hadith.bookId === bookId);
};

// Fonction pour obtenir un hadith local par ID
export const getLocalHadithById = (id: number): Hadith | undefined => {
  return bukhariLocalHadiths.find(hadith => hadith.id === id);
};

// Export du nombre total de hadiths locaux
export const LOCAL_HADITHS_COUNT = bukhariLocalHadiths.length;
