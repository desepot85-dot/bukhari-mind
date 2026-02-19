# Activer « Continuer avec Google » (comme sur l’image)

Pour que le bouton **Continuer avec Google** fonctionne et que l’utilisateur voie **« Choisir un compte » / « pour continuer vers Bukhari »**, il faut activer le fournisseur Google dans Supabase et configurer l’app dans Google Cloud.

---

## 1. Activer Google dans Supabase (obligatoire)

L’erreur **« Unsupported provider: provider is not enabled »** signifie que Google n’est pas encore activé.

1. Va sur [app.supabase.com](https://app.supabase.com) et ouvre ton projet **Bukhari**.
2. Menu **Authentication** → **Providers**.
3. Clique sur **Google**.
4. **Active** le fournisseur (toggle ON).
5. Colle ton **Client ID** Google (ex. `135559713668-xxx.apps.googleusercontent.com`) dans le champ **Client ID**.
6. Colle ton **Client Secret** Google (récupéré dans Google Cloud Console au moment de la création du client OAuth) dans le champ **Client Secret**.
7. Clique sur **Save** / **Enregistrer**.

Puis configure les URLs :

- **Authentication** → **URL Configuration**
  - **Site URL** : en local, mets `http://localhost:5173` (ou ton URL de prod plus tard).
  - **Redirect URLs** : ajoute `http://localhost:5173` et si tu veux `http://localhost:5173/?welcome=1` (optionnel).

---

## 2. Créer l’app OAuth dans Google Cloud (« continuer vers Bukhari »)

Pour avoir l’écran **« Choose an account – to continue to Bukhari »** (comme sur ta capture), il faut créer une application OAuth dans Google et utiliser son nom « Bukhari ».

1. Va sur [Google Cloud Console](https://console.cloud.google.com/).
2. Crée un projet ou sélectionne un projet existant.
3. **APIs & Services** → **OAuth consent screen** :
   - Type : **External** (ou Internal si c’est un workspace).
   - **Application name** : **Bukhari** (c’est ce nom qui apparaît dans « to continue to Bukhari »).
   - Renseigne l’email de support, etc. puis Enregistrer.
4. **APIs & Services** → **Credentials** → **Create credentials** → **OAuth client ID** :
   - Type : **Web application**.
   - **Name** : ex. « Bukhari Web ».
   - **Authorized redirect URIs** : ajoute l’URL de callback Supabase :
     - `https://<TON-PROJECT-REF>.supabase.co/auth/v1/callback`
     - Tu trouves `<TON-PROJECT-REF>` dans Supabase : **Settings** → **API** → **Project URL** (ex. `xxxx.supabase.co` → l’URI est `https://xxxx.supabase.co/auth/v1/callback`).
5. Crée le client et récupère le **Client ID** et le **Client Secret**.
6. Copie-les dans Supabase (étape 1, point 5).

---

## 3. Vérifier le flux

1. Dans ton app, clique sur **Continuer avec Google**.
2. Tu dois voir l’écran Google **« Choose an account »** avec **« to continue to Bukhari »**.
3. Après avoir choisi un compte, tu es redirigé vers ta page d’accueil avec le message de bienvenue (nom ou email).

Si tu as encore **« provider is not enabled »**, revérifie que le fournisseur Google est bien **activé** (toggle vert) dans **Authentication → Providers → Google** et que le Client ID / Secret sont bien enregistrés.
