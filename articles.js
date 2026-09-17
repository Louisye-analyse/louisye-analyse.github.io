// =============================================================
//  LISTE DE MES ARTICLES
//  Pour ajouter un article : copie le modèle ci-dessous,
//  colle-le juste après la ligne « const ARTICLES = [ »,
//  puis remplace le titre, la date, le fichier et le résumé.
//
//  Modèle à copier (sans les deux barres // au début des lignes) :
//
//  {
//    titre: "Titre de mon article",
//    date: "2026-09-15",
//    fichier: "articles/2026-09-15-titre-de-mon-article.pdf",
//    resume: "Une ou deux phrases pour donner envie de lire."
//  },
//
//  Règles à respecter :
//  - la date s'écrit toujours ANNÉE-MOIS-JOUR (ex : 2026-09-15)
//  - chaque article se termine par une virgule après « } »
//  - le texte reste entre guillemets " "
//  - si ton texte contient un guillemet, écris \" à la place
//  - l'ordre n'a pas d'importance : le site trie tout seul
// =============================================================

const ARTICLES = [
  {
    titre: "L'adressage à Libreville : Un défi structurel et sociologique, et pourquoi il faut le refonder sur la donnée",
    date: "2025-01-07",
    fichier: "articles/2025-01-07-adressage-libreville.pdf",
    resume: "Malgré plusieurs relances, l’adressage de Libreville reste à l’arrêt, faute notamment d’une véritable base de données d’adresses. Cette note analyse les échecs passés, souligne la nécessité d’un référentiel géographique et propose un projet chiffré pour le Grand Libreville."
  },
  {
    titre: "La Contribution Foncière Unique : Un impôt qui ne touche qu'une minorité, dans un pays où l'État n'arrive pas à régulariser le foncier des autres",
    date: "2025-04-22",
    fichier: "articles/2025-04-22-contribution-fonciere-unique.pdf",
    resume: "Limitée aux détenteurs d’un titre foncier, la CFU peine à financer les communes gabonaises. Cette note analyse ses limites et propose un référentiel géographique partagé entre cadastre, urbanisme et impôts pour élargir durablement la base fiscale."
  },
  {
    titre: "Découpage électoral et représentativité :Enjeux, déséquilibres et pistes de réforme à la veille des législatives",
    date: "2025-05-16",
    fichier: "articles/2025-05-16-Decoupage-electoral.pdf",
    resume: "Déconnecté des réalités démographiques et géographiques, le découpage électoral gabonais crée des inégalités de représentation. Cette analyse propose deux réformes : un redécoupage fondé sur des critères objectifs ou une pondération des voix parlementaires."
  },
  {
    titre: "La procédure de régularisation foncière : Un long chemin semé d'embûches, et un frein à l'élargissement de l'assiette fiscale",
    date: "2025-05-20",
    fichier: "articles/2025-05-20-Regularisation-fonciere.pdf",
    resume: "Au Gabon, la lenteur, l’opacité et le coût des procédures foncières freinent l’accès à la propriété sécurisée, alimentent les conflits et limitent les recettes fiscales. Malgré les ambitions affichées, une réforme structurelle de la chaîne foncière reste attendue."
  },
  {
    titre: "Cartographie d'un revers territorial : Quand les cartes révèlent l'ampleur des pertes du Gabon face à la Guinée équatoriale",
    date: "2025-05-28",
    fichier: "articles/2025-05-28-Frontieres-Gabon_Guinee-equatoriale.pdf",
    resume: "La décision de la CIJ sur Mbanié, Conga et Cocotiers soulève d’importants enjeux maritimes et économiques pour le Gabon. Cette note en analyse les implications juridiques et le bilan territorial, en mer comme sur terre."
  },
  {
    titre: "Décentralisation au Gabon : Un tournant graduel à réussir pour bâtir une gouvernance de proximité",
    date: "2025-06-20",
    fichier: "articles/2025-06-20-Decentralisation-au-gabon.pdf",
    resume: "Le Gabon affiche depuis juin 2025 une volonté de concrétiser la décentralisation. Mais sans moyens financiers, humains et réglementaires, le transfert de compétences risque de maintenir une autonomie purement symbolique des collectivités."
  },
   {
    titre: "Déguerpissements urbains à Libreville : Entre brutalité étatique et absence de gouvernance foncière durable",
    date: "2025-06-04",
    fichier: "articles/2025-04-06-Deguerpissement-a-Libreville.pdf",
    resume: "Les démolitions à Libreville révèlent les défaillances de la régularisation foncière et le manque de protection des habitants. Cette note examine les responsabilités publiques et propose six étapes pour un aménagement respectueux des droits des populations."
  },
  {
    titre: "Taxe d'habitation : un choix centralisé : Qui collecte, pour quel territoire, et avec quels outils ?",
    date: "2025-09-16",
    fichier: "articles/2025-09-16-Taxe-habitation.pdf",
    resume: "La taxe d’habitation annoncée au Gabon soulève trois questions : à qui iront les recettes, comment la collecter sans cadastre fiable et quelle place accorder aux collectivités dans le cadre de la décentralisation ?"
  },
  {
    titre: "La fragilité de nos données personnelles : Un constat alarmant après la campagne électorale, et ce qu'il faudrait faire pour y remédier",
    date: "2025-10-12",
    fichier: "articles/2025-10-12 -Donnees-personnelles",
    resume: "L’affichage de données personnelles dans les bureaux de vote au Gabon expose les citoyens à l’usurpation d’identité. Cette note examine les failles d’application de la loi et propose sept mesures concrètes pour mieux protéger ces données."
  },
];
