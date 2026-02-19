# 📚 Guide d'Importation - Base de Données Complète Sahih al-Bukhari

## 🎯 Objectif
Importer les **7563 hadiths complets** de Sahih al-Bukhari dans l'application Bukhari AI.

---

## ⚠️ IMPORTANT - Authenticité

**Avant toute importation, vous DEVEZ vérifier:**
- ✅ Les textes arabes proviennent de sources authentiques
- ✅ Les traductions françaises sont vérifiées par des savants qualifiés
- ✅ Les chaînes de narration (Isnad) sont correctes
- ✅ La numérotation correspond aux éditions standards

---

## 📥 Sources Recommandées

### Option 1: Sunnah.com (Recommandé - Source la plus fiable)

**API officielle:**
```
https://api.sunnah.com/v1/collections/bukhari/hadiths
```

**Avantages:**
- ✅ Source la plus authentique
- ✅ Vérifiée par des érudits
- ✅ Mise à jour régulière
- ✅ API bien documentée

**Documentation:**
https://sunnah.com/developers

---

### Option 2: GitHub - Base de données SQL

**Dépôt GitHub:**
```
https://github.com/halimbahae/Hadith
```

**Contenu:**
- Sahih al-Bukhari complet (صحيح البخاري)
- Base de données SQL
- Avec diacritiques arabes
- Commentaires (Sharh)

---

### Option 3: Hadith API

**URL de l'API:**
```
https://hadithapi.pages.dev/collection/bukhari
```

**Endpoint pour tous les hadiths:**
```
GET https://hadithapi.pages.dev/api/hadiths?collection=bukhari
```

---

## 🛠️ Instructions d'Importation

### Étape 1: Télécharger les données

```bash
# Exemple avec sunnah.com API
curl https://api.sunnah.com/v1/collections/bukhari/hadiths \
  -H "X-API-Key: VOTRE_CLE_API" \
  > bukhari-data.json
```

### Étape 2: Convertir au format TypeScript

Les données doivent respecter l'interface:

```typescript
interface Hadith {
  id: number;          // 1 à 7563
  bookId: number;      // 1 à 97
  number: string;      // Ex: "1.1", "59.123"
  titleAr: string;     // Titre en arabe
  titleFr: string;     // Titre en français
  textAr: string;      // Texte arabe complet
  textFr: string;      // Traduction française
  narrator: string;    // Chaîne de narration
}
```

### Étape 3: Créer le fichier de données

Créez le fichier `src/data/bukhari-complete.ts`:

```typescript
import { Hadith } from './bukhari-hadiths';

export const bukhariComplete: Hadith[] = [
  {
    id: 1,
    bookId: 1,
    number: "1.1",
    titleAr: "كيف كان بدء الوحي",
    titleFr: "Comment la Révélation a commencé",
    textAr: "حدثنا الحميدي...",
    textFr: "Les actions ne valent que...",
    narrator: "D'après 'Omar ibn al-Khattab (qu'Allah l'agrée)"
  },
  // ... 7562 hadiths suivants
];
```

### Étape 4: Mettre à jour les exports

Dans `src/data/bukhari-hadiths.ts`, remplacez:

```typescript
// Ancien
export const bukhariHadiths: Hadith[] = [
  // 10 exemples
];

// Nouveau
import { bukhariComplete } from './bukhari-complete';
export const bukhariHadiths = bukhariComplete;
```

---

## 🔍 Vérification de la Qualité

Avant de publier, vérifiez:

```typescript
// Script de vérification
const totalHadiths = bukhariHadiths.length;
console.log(`Total hadiths: ${totalHadiths}`); // Doit être 7563

const totalBooks = new Set(bukhariHadiths.map(h => h.bookId)).size;
console.log(`Total books: ${totalBooks}`); // Doit être 97

// Vérifier qu'aucun hadith n'est vide
const invalid = bukhariHadiths.filter(h => 
  !h.textAr || !h.textFr || !h.titleAr || !h.titleFr
);
console.log(`Hadiths invalides: ${invalid.length}`); // Doit être 0
```

---

## 📊 Répartition des Hadiths par Livre

| Livre | Titre | Nombre de Hadiths |
|-------|-------|-------------------|
| 1 | La Révélation | 7 |
| 2 | La Foi | 53 |
| 3 | La Science | 76 |
| ... | ... | ... |
| 97 | L'Unicité | 50 |

**Total:** 7563 hadiths

---

## 🔐 Sécurité et Droits d'Auteur

**Important:**
- ⚠️ Les hadiths sont du domaine public
- ⚠️ Les traductions peuvent être protégées par des droits d'auteur
- ⚠️ Vérifiez les licences avant utilisation commerciale
- ⚠️ Mentionnez toujours vos sources

**Traductions françaises recommandées:**
- Traduction du Dr. Al-Hilali & Dr. Khan
- Traduction de Fawzi Chaaban
- Traductions vérifiées par des institutions islamiques reconnues

---

## 📝 Exemple de Script d'Importation

```javascript
// import-hadiths.js
const fs = require('fs');

// 1. Charger les données JSON
const rawData = fs.readFileSync('bukhari-source.json');
const sourceData = JSON.parse(rawData);

// 2. Convertir au format TypeScript
const hadiths = sourceData.map((item, index) => ({
  id: index + 1,
  bookId: item.book_number,
  number: `${item.book_number}.${item.hadith_number}`,
  titleAr: item.chapter_title_ar,
  titleFr: item.chapter_title_fr,
  textAr: item.hadith_text_ar,
  textFr: item.hadith_text_fr,
  narrator: item.narrator || "Non spécifié"
}));

// 3. Générer le fichier TypeScript
const tsContent = `
import { Hadith } from './bukhari-hadiths';

export const bukhariComplete: Hadith[] = ${JSON.stringify(hadiths, null, 2)};
`;

fs.writeFileSync('src/data/bukhari-complete.ts', tsContent);

console.log(`✅ ${hadiths.length} hadiths importés avec succès!`);
```

---

## ✅ Checklist Finale

Avant de déployer:

- [ ] 7563 hadiths importés
- [ ] 97 livres couverts
- [ ] Textes arabes vérifiés
- [ ] Traductions françaises vérifiées
- [ ] Chaînes de narration présentes
- [ ] Numérotation correcte
- [ ] Tests de recherche effectués
- [ ] Performance vérifiée
- [ ] Source mentionnée
- [ ] Licence vérifiée

---

## 📞 Support

Si vous rencontrez des difficultés:

1. Vérifiez la documentation de l'API utilisée
2. Consultez les issues GitHub des dépôts sources
3. Assurez-vous que les données sont au bon format
4. Testez avec un petit échantillon d'abord

---

## 📚 Ressources Supplémentaires

- [Sunnah.com](https://sunnah.com/bukhari)
- [Hadith API Documentation](https://hadithapi.pages.dev/)
- [IslamicFinder Hadith](https://www.islamicfinder.org/hadith/bukhari/)
- [GitHub Hadith Projects](https://github.com/topics/hadith)

---

**Note:** Cette application est un outil d'étude. Pour des questions de jurisprudence (Fiqh), consultez toujours des savants qualifiés.

**Avertissement IA:** L'Intelligence Artificielle peut faire des erreurs. Vérifiez toujours les informations avec les sources originales.
