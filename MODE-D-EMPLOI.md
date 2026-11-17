# Mode d'emploi du site de Karim Ngosso

Ce guide explique comment ajouter une page, une vidéo ou changer vos coordonnées, **sans écrire de code**. Tout se fait dans votre navigateur, gratuitement.

---

## Comment marche le site, en deux phrases

Chaque page du site est un petit fichier texte. Quand vous enregistrez une modification dans l'éditeur, le site se met à jour tout seul en ligne en une ou deux minutes.

---

## 1. Mise en place (une seule fois, on la fait ensemble)

1. Créer un compte gratuit sur **GitHub** (github.com). C'est là que les fichiers du site sont rangés.
2. On y dépose le dossier du site (Claude s'en charge si vous le lui demandez).
3. On relie ce dépôt à **Netlify**, l'hébergeur gratuit : chaque modification met le site à jour automatiquement.
4. Vous vous connectez à l'éditeur **Pages CMS** sur **app.pagescms.org** avec votre compte GitHub, et vous choisissez le site. C'est fait : vous verrez le menu « Vidéos », « Pages des activités », « Autres pages » et « Coordonnées et réseaux ».

---

## 2. Ajouter une vidéo YouTube

1. Sur YouTube, ouvrez la vidéo, cliquez sur **Partager**, puis **Copier**.
2. Dans l'éditeur, cliquez sur **Vidéos**, puis **Ajouter**.
3. Remplissez :
   - **Titre de la vidéo** ;
   - **Lien YouTube** : collez l'adresse copiée ;
   - **Activité** : choisissez dans la liste (La Petite Chevalerie, 9 mois en forme…) ;
   - **Émission ou chaîne** : par exemple « La Maison des Maternelles (France Télévisions) » ;
   - **Une phrase de présentation**.
4. **Lire la vidéo directement sur le site** : cochez cette case **uniquement pour vos propres vidéos**. Pour les émissions de France Télévisions, laissez-la décochée : la vidéo s'ouvrira sur YouTube (on ne reprend pas d'extraits sans l'accord de la chaîne).
5. Cliquez sur **Enregistrer**. La vidéo apparaît dans la page « Vidéos » dans une ou deux minutes.

---

## 3. Ajouter une page à une activité

1. Cliquez sur **Pages des activités**, puis sur l'activité (par exemple « Les contes sportifs »).
2. Cliquez sur **Ajouter**.
3. Remplissez :
   - **Titre de la page** ;
   - **Nom court dans le menu** (facultatif, par exemple « Tarifs ») ;
   - **Phrase d'introduction** ;
   - **Position dans le menu** : 1 = en premier ; mettez 10, 20, 30… pour ranger les pages ;
   - **Contenu de la page** : écrivez comme dans un traitement de texte (titres, gras, listes, liens).
4. **Brouillon** : cochez la case si la page n'est pas prête. Elle n'apparaîtra pas sur le site public.
5. Cliquez sur **Enregistrer**. La page prend automatiquement les couleurs de l'activité et apparaît dans son menu.

Pour **modifier** une page existante : ouvrez-la dans la liste, changez le texte, **Enregistrer**.

---

## 4. Remplir une activité « à venir » (Fitness, Développement personnel…)

Ouvrez **Pages des activités** > l'activité > la page « Présentation » (fichier `index`), remplacez le texte « À venir », puis **Enregistrer**.

Pour changer le résumé qui apparaît sur la carte de la page d'accueil, demandez à Claude (fichier `src/_data/activites.json`).

---

## 5. Changer vos coordonnées

**Coordonnées et réseaux** : e-mail, téléphone, liens Facebook, YouTube, Instagram. Tant qu'un champ est vide, le site affiche « À venir ».

---

## 6. Les règles à garder en tête

- **Aucun chiffre sans source.** Si vous citez une étude, mettez le lien.
- **La Petite Chevalerie** : « le jiu-jitsu », « faire un tap », « l'ours », jamais « apprendre à se battre », « chevalier ou chevalière ».
- **Sortez vos griffes** : jamais « zéro frappe », ni « vous irez en prison » ; le lieu et les horaires ne sont jamais publiés.
- **Périnée Flow** : on dit « accompagner », jamais « traitement » ni « guérir » ; tutoiement pour les mamans, vouvoiement pour les professionnels.
- **Photos** : aucune photo d'enfant sans autorisation écrite des parents, aucun visage de participante sans son accord écrit.

---

## 7. Plus tard

- **Nom de domaine** (la seule dépense, payée chaque année) : on l'achète, puis on le relie à Netlify en quelques clics. Pensez ensuite à remplir « Adresse du site » dans Coordonnées et réseaux : c'est ce qui autorise Google à référencer le site.
- **Espace premium** : il sera hébergé sur une plateforme de cours en ligne, et le site renverra vers elle.

En cas de doute, demandez à Claude dans le projet : il peut faire la modification pour vous.
