export interface LocationContent {
  slug: string;
  name: string;
  isPrimary?: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  aboutArea: string;
  localAngle: string;
  highlightServiceSlugs: ("detailing" | "polierung" | "innenreinigung" | "aussenreinigung")[];
}

export const primaryLocation: LocationContent = {
  slug: "recherswil",
  name: "Recherswil",
  isPrimary: true,
  metaTitle: "UNO AutoCare Recherswil – Fahrzeugaufbereitung & Detailing",
  metaDescription:
    "UNO AutoCare in Recherswil: professionelle Autoreinigung, Detailing, Polierung und Innenreinigung für Kundinnen und Kunden aus Recherswil und der Region Solothurn.",
  h1: "Fahrzeugaufbereitung in Recherswil",
  intro:
    "UNO AutoCare hat seinen Standort direkt in Recherswil – im Herzen des Bucheggbergs, nur wenige Autominuten von Solothurn entfernt. Hier arbeiten wir mit Sorgfalt und Handwerk an jedem einzelnen Fahrzeug, das zu uns kommt: von der gründlichen Innenreinigung bis zur feinen Lackpolitur.",
  aboutArea:
    "Recherswil ist unsere Heimat und unser Hauptstandort. Die ruhige Lage im Bucheggberg gibt uns den Raum, jedes Fahrzeug ohne Zeitdruck und mit voller Konzentration aufzubereiten. Kundinnen und Kunden aus Recherswil und den Nachbargemeinden schätzen den kurzen Weg und die persönliche Betreuung direkt vor Ort.",
  localAngle:
    "Als Fahrzeugaufbereitung aus Recherswil kennen wir die Region und ihre Ansprüche – vom Alltagsauto bis zum gepflegten Zweitwagen.",
  highlightServiceSlugs: ["detailing", "polierung", "innenreinigung", "aussenreinigung"],
};

export const locations: LocationContent[] = [
  {
    slug: "solothurn",
    name: "Solothurn",
    metaTitle: "Autoreinigung Solothurn – Fahrzeugaufbereitung von UNO AutoCare",
    metaDescription:
      "Autoreinigung in Solothurn gesucht? UNO AutoCare in Recherswil bietet professionelle Fahrzeugaufbereitung, Detailing und Polierung für Kundinnen und Kunden aus Solothurn.",
    h1: "Autoreinigung in Solothurn",
    intro:
      "Du suchst eine professionelle Autoreinigung in Solothurn? UNO AutoCare in Recherswil bietet Fahrzeugaufbereitung auf hohem Niveau – nur eine kurze Fahrt von der Solothurner Altstadt entfernt.",
    aboutArea:
      "Solothurn ist als Kantonshauptstadt das urbane Zentrum der Region – mit historischer Altstadt, dichtem Verkehr und vielen Pendlerinnen und Pendlern, deren Fahrzeuge entsprechend beansprucht werden. Wer in Solothurn wohnt oder arbeitet, findet in Recherswil einen unkompliziert erreichbaren Partner für die professionelle Fahrzeugpflege.",
    localAngle:
      "Für Solothurner Kundschaft lohnt sich der kurze Ausflug nach Recherswil besonders: mehr Ruhe, mehr Zeit pro Fahrzeug, ein persönlicherer Ablauf als in einer städtischen Waschstrasse.",
    highlightServiceSlugs: ["aussenreinigung", "innenreinigung", "detailing"],
  },
  {
    slug: "zuchwil",
    name: "Zuchwil",
    metaTitle: "Autoreinigung Zuchwil – Fahrzeugaufbereitung von UNO AutoCare",
    metaDescription:
      "Fahrzeugaufbereitung für Zuchwil: UNO AutoCare in Recherswil bietet Autoreinigung, Innen- und Aussenreinigung sowie Detailing für Kundinnen und Kunden aus Zuchwil.",
    h1: "Autoreinigung für Zuchwil",
    intro:
      "Zuchwil zählt zu den grösseren Gemeinden direkt bei Solothurn – mit viel Gewerbe, Industrie und entsprechend vielen Firmen- und Privatfahrzeugen im Alltag. UNO AutoCare in Recherswil ist von Zuchwil aus schnell erreichbar.",
    aboutArea:
      "Durch die Nähe zu Solothurn und die gute Verkehrsanbindung ist Zuchwil ein wichtiger Wohn- und Arbeitsort in der Region. Viele Fahrzeuge sind hier täglich im Einsatz – ob auf dem Arbeitsweg oder im Firmeneinsatz. Genau für diese Beanspruchung eignet sich eine regelmässige, professionelle Aufbereitung.",
    localAngle:
      "Ob Firmenfahrzeug oder Privatwagen aus Zuchwil: Wir bereiten dein Auto so auf, dass es dem täglichen Einsatz wieder gewachsen ist – innen wie aussen.",
    highlightServiceSlugs: ["aussenreinigung", "innenreinigung", "polierung"],
  },
  {
    slug: "derendingen",
    name: "Derendingen",
    metaTitle: "Autoaufbereitung Derendingen – UNO AutoCare Recherswil",
    metaDescription:
      "Autoaufbereitung für Derendingen: UNO AutoCare in Recherswil bietet professionelle Fahrzeugpflege, Detailing und Polierung für Kundinnen und Kunden aus Derendingen.",
    h1: "Autoaufbereitung für Derendingen",
    intro:
      "Derendingen liegt im Bezirk Wasseramt, nicht weit von Recherswil entfernt. Für viele Fahrzeughalterinnen und -halter aus Derendingen ist UNO AutoCare damit ein naheliegender Partner für die professionelle Fahrzeugaufbereitung.",
    aboutArea:
      "Als Wohngemeinde mit ländlichem Charakter und guter Anbindung an Solothurn und Zuchwil ist Derendingen geprägt von Pendlerverkehr und Familienalltag – beides Faktoren, die sich im Innenraum eines Fahrzeugs bemerkbar machen.",
    localAngle:
      "Kindersitze, Haustierhaare, Pendleralltag: Wir kennen die typischen Ansprüche an eine gründliche Innenreinigung und gehen gezielt darauf ein.",
    highlightServiceSlugs: ["innenreinigung", "aussenreinigung", "detailing"],
  },
  {
    slug: "biberist",
    name: "Biberist",
    metaTitle: "Autoreinigung Biberist – Fahrzeugaufbereitung von UNO AutoCare",
    metaDescription:
      "Autoreinigung in Biberist: UNO AutoCare in Recherswil bietet professionelle Fahrzeugaufbereitung, Aussenreinigung und Polierung für Kundinnen und Kunden aus Biberist.",
    h1: "Autoreinigung in Biberist",
    intro:
      "Biberist an der Emme ist über die Jahre stark mit der lokalen Industrie gewachsen und bietet Wohnraum für viele Berufstätige der Region. UNO AutoCare in Recherswil liegt für Biberister Kundschaft bequem in der Nähe.",
    aboutArea:
      "Die Nähe zu Industrie und Gewerbe bedeutet für viele Fahrzeuge aus Biberist eine erhöhte Beanspruchung durch Staub, Pendelstrecken und Aussenlagerung. Eine regelmässige Lack- und Innenpflege macht hier spürbar den Unterschied.",
    localAngle:
      "Für Fahrzeuge aus Biberist, die häufig im Aussenbereich stehen, empfiehlt sich eine Kombination aus Aussenreinigung und Lackpolitur – beides bieten wir in Recherswil an.",
    highlightServiceSlugs: ["aussenreinigung", "polierung", "detailing"],
  },
  {
    slug: "luterbach",
    name: "Luterbach",
    metaTitle: "Fahrzeugaufbereitung Luterbach – UNO AutoCare Recherswil",
    metaDescription:
      "Fahrzeugaufbereitung für Luterbach: UNO AutoCare in Recherswil bietet Autoreinigung, Detailing und Innenreinigung für Kundinnen und Kunden aus Luterbach.",
    h1: "Fahrzeugaufbereitung für Luterbach",
    intro:
      "Luterbach liegt im Wasseramt, nahe der Aare und in unmittelbarer Nähe zu Zuchwil und Solothurn. Für Kundschaft aus Luterbach ist der Weg zu UNO AutoCare in Recherswil kurz und unkompliziert.",
    aboutArea:
      "Die Gemeinde ist geprägt von einer Mischung aus Wohnquartieren und Industriegebiet, was sich in einer vielfältigen Fahrzeugflotte widerspiegelt – vom Familienauto bis zum Lieferwagen.",
    localAngle:
      "Egal ob privates Fahrzeug oder Nutzfahrzeug aus Luterbach: Wir passen die Aufbereitung individuell an Fahrzeugtyp und Zustand an.",
    highlightServiceSlugs: ["detailing", "innenreinigung", "aussenreinigung"],
  },
  {
    slug: "bellach",
    name: "Bellach",
    metaTitle: "Autopflege Bellach – Fahrzeugaufbereitung von UNO AutoCare",
    metaDescription:
      "Autopflege für Bellach: UNO AutoCare in Recherswil bietet professionelle Fahrzeugaufbereitung, Polierung und Innenreinigung für Kundinnen und Kunden aus Bellach.",
    h1: "Autopflege für Bellach",
    intro:
      "Bellach liegt am Fuss des Juras, direkt bei Solothurn. Von hier aus ist UNO AutoCare in Recherswil für eine professionelle Fahrzeugaufbereitung gut erreichbar.",
    aboutArea:
      "Die Lage am Jurasüdfuss bringt für viele Fahrzeuge aus Bellach wechselhafte Wetterbedingungen mit sich – von Streusalz im Winter bis zu Pollen und Staub im Sommer. Beides setzt dem Lack und dem Innenraum zu.",
    localAngle:
      "Wir empfehlen Kundinnen und Kunden aus Bellach eine saisonale Aufbereitung, um Lack und Innenraum über das ganze Jahr in gutem Zustand zu halten.",
    highlightServiceSlugs: ["polierung", "aussenreinigung", "innenreinigung"],
  },
  {
    slug: "langendorf",
    name: "Langendorf",
    metaTitle: "Autoreinigung Langendorf – UNO AutoCare Recherswil",
    metaDescription:
      "Autoreinigung in Langendorf: UNO AutoCare in Recherswil bietet Fahrzeugaufbereitung, Detailing und Aussenreinigung für Kundinnen und Kunden aus Langendorf.",
    h1: "Autoreinigung in Langendorf",
    intro:
      "Langendorf liegt malerisch am Jurasüdfuss, nahe Solothurn. Für Kundinnen und Kunden aus Langendorf ist UNO AutoCare in Recherswil ein naher Anlaufpunkt für die professionelle Fahrzeugpflege.",
    aboutArea:
      "Die ruhige, grüne Lage der Gemeinde bedeutet für viele Fahrzeuge Kontakt mit Naturmaterial wie Pollen, Blütenstaub und Laub – Faktoren, die sich besonders auf Lack und Fensterflächen auswirken.",
    localAngle:
      "Gerade für Fahrzeuge, die häufig unter Bäumen parken, lohnt sich eine gründliche Aussenreinigung mit anschliessender Lackpflege.",
    highlightServiceSlugs: ["aussenreinigung", "polierung", "detailing"],
  },
  {
    slug: "grenchen",
    name: "Grenchen",
    metaTitle: "Fahrzeugaufbereitung Grenchen – UNO AutoCare Recherswil",
    metaDescription:
      "Fahrzeugaufbereitung für Grenchen: UNO AutoCare in Recherswil bietet Autoreinigung, Detailing und Innenreinigung für Kundinnen und Kunden aus Grenchen.",
    h1: "Fahrzeugaufbereitung für Grenchen",
    intro:
      "Grenchen ist als Uhrenstadt eine der grösseren Städte im Kanton Solothurn. Auch von hier aus ist UNO AutoCare in Recherswil eine gute Adresse für die professionelle Aufbereitung deines Fahrzeugs.",
    aboutArea:
      "Als Industrie- und Wohnstadt mit eigenem Flugplatz hat Grenchen eine vielfältige, mobile Bevölkerung – viele Fahrzeuge sind hier täglich in Betrieb und entsprechend stark beansprucht.",
    localAngle:
      "Für Kundschaft aus Grenchen bieten wir eine Fahrzeugaufbereitung, die auf regelmässige, intensive Nutzung ausgelegt ist – gründlich innen wie aussen.",
    highlightServiceSlugs: ["innenreinigung", "detailing", "aussenreinigung"],
  },
  {
    slug: "olten",
    name: "Olten",
    metaTitle: "Autoreinigung Olten – Fahrzeugaufbereitung von UNO AutoCare",
    metaDescription:
      "Autoreinigung in Olten: UNO AutoCare in Recherswil bietet professionelle Fahrzeugaufbereitung, Detailing und Polierung für Kundinnen und Kunden aus Olten und Umgebung.",
    h1: "Autoreinigung in Olten",
    intro:
      "Olten ist als bekannte Eisenbahnerstadt ein wichtiger Verkehrsknotenpunkt der Region. Für Kundinnen und Kunden aus Olten, die Wert auf eine sorgfältige Fahrzeugaufbereitung legen, ist UNO AutoCare in Recherswil eine lohnende Adresse.",
    aboutArea:
      "Durch die zentrale Lage und den grossen Bahnhof ist Olten stark durch Pendlerverkehr geprägt. Viele Fahrzeuge stehen tagsüber lange auf Parkplätzen im Freien, bevor sie am Feierabend wieder gebraucht werden.",
    localAngle:
      "Für Pendlerfahrzeuge aus Olten empfiehlt sich eine Kombination aus Aussenwäsche und Innenreinigung, damit sich der Arbeitsweg nicht im Fahrzeug ansammelt.",
    highlightServiceSlugs: ["innenreinigung", "aussenreinigung", "polierung"],
  },
];

export function getAllLocations(): LocationContent[] {
  return [primaryLocation, ...locations];
}

export function getLocation(slug: string): LocationContent | undefined {
  return getAllLocations().find((l) => l.slug === slug);
}
