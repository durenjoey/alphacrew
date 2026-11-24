// Who ran Alpha CREW, who helped, and where the work can be checked.
// Every organization and person here is named in a 2017 post. Add a name only if a post names it.
// The build stops if a listed name is not in a post.

export interface Named {
  name: string;
  // an official page, where one is known
  url?: string;
  // the wording the posts use, where it differs from the name shown
  posted?: string;
}

export const founder = {
  text: "Joey Duren founded Alpha CREW and led it. His father ran shipping.",
  linkText: "Joey Duren on LinkedIn",
  url: "https://www.linkedin.com/in/joeduren/",
};

// The 27 organizations the posts name.
export const partners: Named[] = [
  { name: "920th Rescue Wing" },
  { name: "333rd Recruiting Squadron", posted: "333 Recruiting Squadron" },
  { name: "Air National Guard Emergency Family Assistance Center" },
  {
    name: "Partners for World Health",
    url: "https://www.facebook.com/PartnersForWorldHealth",
  },
  { name: "Humane Society of Puerto Rico" },
  { name: "Veterinarians for Puerto Rico" },
  { name: "Guardians of Rescue" },
  { name: "Puerto Rico Rises" },
  { name: "Voces" },
  { name: "Fundación Topy Mamery" },
  { name: "Fundación El Plato Caliente" },
  { name: "UNICEF" },
  { name: "Lote 23" },
  { name: "Grupo de Amigos de Margarita Santos" },
  { name: "Foundation for Puerto Rico" },
  { name: "Climbing Puerto Rico" },
  { name: "Activados por Puerto Rico" },
  { name: "City of San Juan" },
  { name: "ABBA La Casa De Mi Padre", posted: "ABBA - La Casa De Mi Padre" },
  { name: "The Church of Doral" },
  { name: "Catacumba 5", url: "https://www.facebook.com/UnoChurchPuertoRico" },
  { name: "Sparks", url: "https://www.facebook.com/SparksMarketing" },
  { name: "Kinnikinnick" },
  {
    name: "Alianza de Autismo de Puerto Rico",
    url: "https://www.facebook.com/alianzaautismo",
  },
  { name: "Wang and Cortes Dental" },
  { name: "Weddings in Vieques" },
  { name: "iHeart Latino Mia 92.1", posted: "iHeart Latino on Mia 92.1" },
];

// The people the posts name, spelled as the posts spell them, in the order the posts name them.
export const people: string[] = [
  "Christopher Soto Nieves",
  "Richard Santiago",
  "Rand Duren",
  "Humberto De La Pena",
  "Michael Cook",
  "Jennifer Cook-Gilpin",
  "Sandra Christian",
  "Blaine Stevenson",
  "The Rivera and Caraballo family",
  "Jorgito",
  "Pastor Evelyn Martinez",
  "Luis A. Martinez",
  "Glorianne Ruiz",
  "Ismael \"Tico\" Marques",
  "Bryan from Climbing Puerto Rico",
  "Jose Galindez",
  "Byankah Sobá",
];

export const press = {
  source: "Air Force Reserve Command, October 25, 2017",
  title: "Reserve Citizen Airman aids Hurricane Maria victims in Puerto Rico",
  summary:
    "The article follows Master Sgt. Gerardo Ramos, who escorted our shipment to San Juan on a National Guard C-130 out of Savannah, Georgia.",
  url: "https://www.afrc.af.mil/News/Article-Display/Article/1354296/reserve-citizen-airman-aids-hurricane-maria-victims-in-puerto-rico/",
};

export const links: { name: string; url: string }[] = [
  {
    name: "The same article on DVIDS",
    url: "https://www.dvidshub.net/news/258083/citizen-airman-aids-hurricane-maria-victims-puerto-rico",
  },
  {
    name: "Alpha CREW on Facebook",
    url: "https://www.facebook.com/profile.php?id=61551422976226",
  },
];
