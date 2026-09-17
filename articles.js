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
    titre: "Déguerpissements urbains à Libreville : Entre brutalité étatique et absence de gouvernance foncière durable",
    date: "2025-06-04",
    fichier: "articles/2025-04-06-Deguerpissement-a-Libreville.pdf",
    resume: "Les démolitions à Libreville révèlent les défaillances de la régularisation foncière et le manque de protection des habitants. Cette note examine les responsabilités publiques et propose six étapes pour un aménagement respectueux des droits des populations."
  },
  {
    titre: "Décentralisation au Gabon : Un tournant graduel à réussir pour bâtir une gouvernance de proximité",
    date: "2025-06-20",
    fichier: "articles/2025-06-20-Decentralisation-au-gabon.pdf",
    resume: "Le Gabon affiche depuis juin 2025 une volonté de concrétiser la décentralisation. Mais sans moyens financiers, humains et réglementaires, le transfert de compétences risque de maintenir une autonomie purement symbolique des collectivités."
  },
    {
    titre: "Des outils pleins les tiroirs,mais des villes sans mode d'emploi : Ce que valent vraiment les instruments d'aménagement du territoire au Gabon",
    date: "2025-06-26",
    fichier: "articles/2025-06-26-Amenagement-outils.pdf",
    resume: "Les déguerpissements à Libreville et à Port-Gentil révèlent le décalage entre les outils d’aménagement affichés et la réalité urbaine. Malgré les plans existants, l’urbanisation improvisée et les inondations persistent."
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
  {
    titre: "Le Centre International des Mangroves : Une promesse de plus pour des racines déjà noyées",
    date: "2025-10-24",
    fichier: "articles/24-10-2025-CIM-mangroves.pdf",
    resume: "Le projet d’adhésion du Gabon au Centre international des mangroves soulève une question : quels moyens pour traduire cet engagement en actions concrètes ? Cette note interroge le risque d’une nouvelle institution sans impact réel sur la protection des mangroves."
  },
  {
    titre: "l'argent du Gabon en 2026 ? :Un budget record entre ambition et déséquilibres persistants",
    date: "2025-12-10",
    fichier: "articles/2025-12-10-PLF2026-argent-public.pdf",
    resume: "Le PLF 2026 du Gabon privilégie les grands investissements, largement financés par la dette, au détriment des secteurs sociaux. Une masse salariale élevée accentue le déséquilibre entre priorités politiques et besoins des services publics."
  },
  {
    titre: "Une gestion des risques d'inondation, inondée d'incohérences : Libreville face à l'illusion de l'action publique",
    date: "2026-01-29",
    fichier: "articles/2026-01-29-gestion-des-risques-Inondations.pdf",
    resume: "Les inondations à Libreville révèlent une gestion des risques centrée sur l’urgence et la communication. Malgré des causes connues, les réponses restent ponctuelles, sans prévention durable ni réforme de la gouvernance territoriale."
  },
   {
    titre: "Régularisation foncière massive (RFM) : Sécurité juridique ou piège à risques naturels ?",
    date: "2026-02-23",
    fichier: "articles/2026-02-23-RFM-risques-naturels.pdf",
    resume: "La régularisation foncière annoncée dans le Grand Libreville promet de sécuriser plus de 5 100 familles, mais risque de légaliser des occupations en zones dangereuses. Sans diagnostic préalable des risques, qui assumera la responsabilité des futurs dommages ?"
  },
  {
    titre: "Libreville 2 L'illusion d'une ville ex nihilo face aux réalités d'un système vivant",
    date: "2026-05-12",
    fichier: "articles/2026-05-12-Libreville2-illusion.pdf",
    resume: "Le projet « Libreville 2 » à Andem privilégie le symbole architectural au détriment des réalités territoriales et sociales. Cette note interroge une planification qui risque de produire une ville coûteuse et déconnectée des besoins des habitants."
  },
  {
    titre: "Potasse de Mayumba : Que devient vraiment le projet signé en fanfare à Washington ?",
    date: "2026-08-24",
    fichier: "articles/22026-08-24-Potasse-Mayumba-un-an-apres.pdf",
    resume: "Malgré l’accord annoncé de 500 millions de dollars, le projet de potasse de Mayumba reste au stade des études, sans financement de construction bouclé ni permis d’exploitation. Cette note analyse l’écart entre les annonces et l’avancement réel du projet."
  },
  {
    titre: "Quatre-vingts mètres de flou : Déguerpissements autour de la Cité de la Démocratie : sur quelle base juridique, pour quel projet, et à quel prix humain ?",
    date: "2026-08-26",
    fichier: "articles/2026-08-26-Deguerpissements-Cite-Democratie.pdf",
    resume: "Autour de la Cité de la Démocratie, une opération de libération d’emprise menace des habitations sans périmètre clairement publié ni garanties d’indemnisation. La consultation tardive des habitants révèle une procédure opaque, à l’approche de la rentrée scolaire."
  },
  {
    titre: "Quatorze outils pour le territoire gabonais : La boîte à outils de l'aménagement du territoire au Gabon, et ce qui lui manque pour servir",
    date: "2026-09-13",
    fichier: "articles/2026-09-13-Boite-Outils-DGAT.pdf",
    resume: "Le Gabon dispose de 14 outils d’aménagement du territoire, mais leur portée reste limitée par des bases juridiques insuffisantes, des documents peu accessibles et des collectivités sans moyens. Cette note examine l’écart entre les outils annoncés et leur application réelle."
  },
];
