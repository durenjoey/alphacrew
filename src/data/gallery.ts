export interface GalleryPhoto {
  src: string;
  alt: string;
  // the photo's real size in pixels
  width: number;
  height: number;
}

export interface PartnerLink {
  name: string;
  url: string;
}

// The six missions told at the top of the page. A post tagged with one belongs to that mission.
export type MissionId =
  | "vieques-generators"
  | "shipment-65k"
  | "hospitals"
  | "mountains"
  | "door-to-door"
  | "animals";

// One post from the Alpha CREW Facebook page in 2017. The caption is the post as it was written. Do not reword it.
export interface GalleryEntry {
  date: string;
  title: string;
  mission?: MissionId;
  // one plain sentence of context, only where a post needs it
  note?: string;
  caption: string;
  photos: GalleryPhoto[];
  partners?: PartnerLink[];
}

export const galleryEntries: GalleryEntry[] = [
  {
    date: "September 25, 2017",
    title: "We laid out our gear for Puerto Rico",
    caption:
      "Here's the equipment that our Crewmates will be sporting in Puerto Rico. #PRHereWeCome",
    photos: [
      {
        src: "gear-loadout-pre-deployment.jpg",
        alt: "Tools and equipment laid out for deployment: chainsaw, circular saw, drill, safety vest, tool belt, boots, bolt cutters, and jump starter",
        width: 2048,
        height: 1536,
      },
    ],
  },
  {
    date: "September 26, 2017",
    title: "The 920th Rescue Wing donated supplies",
    caption:
      "A BIG THANKS to the Members of the 920th Rescue Wing at Patrick Air Force Base for their donations!",
    photos: [
      {
        src: "920th-airmen-loading-truck.jpg",
        alt: "Two airmen from the 920th Rescue Wing loading supply cases into a truck at Patrick AFB",
        width: 1024,
        height: 768,
      },
      {
        src: "920th-donations-fuel-water-cases.jpg",
        alt: "Military case packed with fuel cans, water bottles, power inverter, and supplies",
        width: 960,
        height: 1280,
      },
      {
        src: "920th-donations-supply-bin.jpg",
        alt: "Supply bin filled with batteries, trash bags, and other donated goods",
        width: 600,
        height: 800,
      },
    ],
  },
  {
    date: "September 26, 2017",
    title: "More donations came in",
    caption:
      "The donations keep on piling up!",
    photos: [
      {
        src: "donations-generators-inverters.jpg",
        alt: "Portable generator, power inverters, and jumper cables loaded in the back of an SUV",
        width: 1280,
        height: 960,
      },
    ],
  },
  {
    date: "September 26, 2017",
    title: "Mayaguez after the hurricane",
    caption:
      "This is Mayaguez Puerto Rico today. Alpha Crew's mission is to go where NO OTHER organization has its focus. Let's end the pain in Puerto Rico. #PRHereWeCome",
    photos: [
      {
        src: "mayaguez-destruction-coastline.jpg",
        alt: "Mayaguez, Puerto Rico: homes collapsed into the ocean, truck submerged in floodwater, a man surveying the destruction from the roadside",
        width: 720,
        height: 960,
      },
    ],
  },
  {
    date: "September 26, 2017",
    title: "Nearly $1,000 raised in one day",
    caption:
      "We are approximating $1,000 in 1 day. Our fundraising goal of 20,000 is getting closer! A BIG THANK YOU to everyone who has donated! Christopher Soto Nieves, Richard Santiago, Rand Duren, Humberto De La Pena",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "The page passed 700 likes",
    caption:
      "Thank you all for the Help and Support. Not only already passing 700 likes to make an impact on social media, but also to those who have messaged us for donations and volunteering to fly out with us to help our Families and Friends in Puerto Rico. A simple share and like has been a powerful help as we are now reaching friends and families who are also partnering to help with our mission to help rebuild Puerto Rico! We are currently organizing fundraisers across the U.S. we will be able to make a major impact soon in helping Puerto Rico recover and we owe it all to all of you!",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "The page reached 1,000 likes",
    caption:
      "Wow! We feel incredibly honored to have reached 1000 likes so quickly. We are working hard and now coordinating fundraisers across the United States to keep helping our Families and Friends in Puerto Rico.",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "A map of the damage in Puerto Rico",
    caption:
      "This map shows how things look in Puerto Rico right now. Although the imagery is heart-breaking, tools like this help us find the locations that need the most help in Puerto Rico.",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "A list of people confirmed safe in Vieques",
    caption:
      "Vieques was terribly affected by Maria. Here is a list of people who have been confirmed to be safe in La Isla Nena: Vieques. When we find a way to get to Vieques and Culebra, we will be there!",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "We sent the 920th Rescue Wing's donations to Puerto Rico",
    caption:
      "We are sending all of the donations from the members of the 920th Rescue Wing today. These donations will be arriving in Puerto Rico tomorrow!",
    photos: [
      {
        src: "920th-airman-chainsaw-donation.jpg",
        alt: "Airman from the 920th Rescue Wing with chainsaw case, dog food, and supplies ready for shipment",
        width: 1080,
        height: 1440,
      },
    ],
  },
  {
    date: "September 27, 2017",
    title: "Another shipment on its way",
    caption:
      "Another shipment of supplies on its way to Puerto Rico. #LetsRescuePR",
    photos: [
      {
        src: "pallets-loaded-dusk.jpg",
        alt: "Supply pallets loaded at dusk: coolers, generators, military bags, paper towels, and luggage staged for shipment",
        width: 1218,
        height: 1534,
      },
    ],
  },
  {
    date: "September 28, 2017",
    title: "Our first shipment reached the San Juan airport",
    caption:
      "Our first shipment made it to the Luis Muñoz Marín Airport in Puerto Rico this morning. The logistical struggle continues but we are pushing through.",
    photos: [
      {
        src: "first-shipment-sju-airport.jpg",
        alt: "First Alpha CREW shipment on the tarmac at San Juan airport: pallets loaded with generators, diapers, fuel cans, coolers, and military cases, forklift in background",
        width: 960,
        height: 720,
      },
    ],
  },
  {
    date: "September 28, 2017",
    title: "A mention on iHeart Latino's Mia 92.1",
    caption:
      "iHeart Radio's Super Martinez will be making mention of our mission to aid in raising donations for the cause. Tune into iHeart Latino on Mia 92.1 Today at 3:00 pm Eastern Time!",
    photos: [],
  },
  {
    date: "September 28, 2017",
    title: "We asked for donations",
    caption:
      "The devastating effects of Maria will linger for years in Puerto Rico. You can help end this suffering by donating to our mission today!",
    photos: [
      {
        src: "pr-flood-kayak-rescue.jpg",
        alt: "Elderly man being evacuated by kayak through flooded streets in Puerto Rico, his dog riding with him, neighbors helping push through the water",
        width: 960,
        height: 720,
      },
    ],
  },
  {
    date: "September 29, 2017",
    title: "We loaded generators for the hospital in Vieques",
    mission: "vieques-generators",
    caption:
      "We are loading some generators to send to a busy hospital in Vieques, PR. The director of health and human services for the island spoke with us and said that they are in need of generators to keep their hospital operations running and we agreed to help. In order to get these generators to Vieques, our crew will have to fly 1,100 miles to Puerto Rico, travel 55 miles by truck to Fajardo and then go another 20 miles by boat to Vieques. There is very limited access to the island, but we have coordinated with the mayor to ensure safe passage.",
    photos: [
      {
        src: "vieques-generators-hangar-staged.jpg",
        alt: "Eight 4000-watt Predator generators stacked in a hangar, staged for shipment to Vieques Hospital",
        width: 960,
        height: 1280,
      },
      {
        src: "vieques-generators-truck-loading.jpg",
        alt: "Volunteer loading generators into a pickup truck bed for transport",
        width: 960,
        height: 1280,
      },
    ],
  },
  {
    date: "September 29, 2017",
    title: "Roads in Puerto Rico were destroyed or flooded",
    caption:
      "The roadways in Puerto Rico are destroyed while other roads are completely flooded. This is what is keeping the first responders from being able to head out to the remote areas of the island. Your donations will allow for us to enter areas that are difficult to access, like Vieques and Culebra.",
    photos: [],
  },
  {
    date: "September 29, 2017",
    title: "The generators were about to fly out",
    mission: "vieques-generators",
    caption:
      "Our supplies are being transported and loaded onto the planes soon. We will have a major shipment flying out with generators that will help power the hospital in Vieques. Let's continue to make a difference together!",
    photos: [],
  },
  {
    date: "September 30, 2017",
    title: "Michael Cook and Jennifer Cook-Gilpin moved donations",
    caption:
      "Our amazing crew-mates moving donations for our next mission. Thank you for all of your hard work, Michael Cook and Jennifer Cook-Gilpin!",
    photos: [
      {
        src: "volunteers-loading-water-supplies.jpg",
        alt: "Two volunteers loading cases of water and canned goods from a store cart into a pickup truck",
        width: 480,
        height: 640,
      },
    ],
  },
  {
    date: "September 30, 2017",
    title: "We asked for medicine to ship to the island",
    caption:
      "The need for support from the United States continues to rise for Puerto Rico. The post-hurricane death toll is unknown but it is climbing. Reading through the comments of this original post is a heart-breaking experience. One person mentioned receiving a call one week after the death of his father... Families are unaware of what is happening to those they love and are unable to help. We MUST do something to help the hospitals, the sick and the wounded. Alpha Crew is looking for medicine to ship to the island. If you have any contacts that can safely and legally donate medicine, we want to talk to them. Also, our mission is largely funded by our own team and friends. We NEED your support to continue making a difference in Puerto Rico.",
    photos: [],
  },
  {
    date: "September 30, 2017",
    title: "Wang and Cortes Dental gathered donations",
    caption:
      "We want to thank Wang and Cortes Dental for gathering donations to send to Puerto Rico. Efforts like yours are making a difference in the lives of many.",
    photos: [
      {
        src: "wang-cortes-dental-team.jpg",
        alt: "Alpha CREW members with Wang and Cortes Dental staff standing beside donated supplies: baby formula, Lysol, batteries, and canned food",
        width: 1280,
        height: 960,
      },
      {
        src: "wang-cortes-donations-boxes.jpg",
        alt: "Boxes of diapers and supplies stacked in the dental office, ready for pickup",
        width: 1280,
        height: 960,
      },
    ],
  },
  {
    date: "October 1, 2017",
    title: "Our team reached Puerto Rico",
    mission: "vieques-generators",
    caption:
      "Our team made it to Puerto Rico yesterday with supplies, manpower, and generators to replace the failing generators at the hospital in Vieques. We have also distributed many of our supplies from our first shipment to those who need them the most. These pictures were taken before the shipment was sent. We will not be able to continue our mission without your donations.",
    photos: [
      {
        src: "tarmac-forklift-cargo-netted.jpg",
        alt: "Airman directing a forklift carrying a cargo-netted pallet of generators, water, and supplies on the tarmac",
        width: 1280,
        height: 960,
      },
      {
        src: "hangar-packing-bins-pallet.jpg",
        alt: "Volunteers packing supply bins onto a pallet inside a hangar, checking inventory lists",
        width: 960,
        height: 1280,
      },
      {
        src: "hangar-hauling-bins-lineup.jpg",
        alt: "Volunteer hauling a supply bin across a hangar floor, line of bins and diapers staged behind her",
        width: 2048,
        height: 1536,
      },
      {
        src: "hangar-water-bottles-staged.jpg",
        alt: "Cases of water bottles covering an entire workbench inside the hangar",
        width: 1536,
        height: 2048,
      },
      {
        src: "pr-nighttime-supply-distribution.jpg",
        alt: "Two people unloading supplies from an SUV at night in Puerto Rico, no streetlights, total darkness",
        width: 1536,
        height: 2048,
      },
    ],
  },
  {
    date: "October 1, 2017",
    title: "The 333rd Recruiting Squadron loaded the planes",
    caption:
      "Big thanks to our friends at the 333 Recruiting Squadron for their hard work loading the planes with the supplies that arrived in Puerto Rico today. Your efforts have already changed the lives of many. Thank you for your service!",
    photos: [
      {
        src: "333rd-crew-c130-tarmac.jpg",
        alt: "Alpha CREW volunteers and 333rd Recruiting Squadron airmen standing together under the tail of a C-130 on the tarmac",
        width: 577,
        height: 632,
      },
    ],
  },
  {
    date: "October 2, 2017",
    title: "A post about a veteran alone after the hurricane",
    caption:
      "Take a second to go through the attached post. It explains how challenging the situation in Puerto Rico has become. Many people are alone and in need of help! We CANNOT forget them and we CANNOT stop sending help their way. Remember, Puerto Ricans are born US Citizens.",
    photos: [
      {
        src: "william-nieves-facebook-post.jpg",
        alt: "Screenshot of a Facebook post describing an 82-year-old Korean War veteran alone in Puerto Rico, surviving on crackers and two bottles of water after Hurricane Maria",
        width: 640,
        height: 799,
      },
    ],
  },
  {
    date: "October 2, 2017",
    title: "Our prayers for the people of Las Vegas",
    caption:
      "Our prayers are with the people of Las Vegas.",
    photos: [],
  },
  {
    date: "October 2, 2017",
    title: "The animals of Puerto Rico needed help",
    mission: "animals",
    caption:
      "Many animals in the homes, streets, and beaches of Puerto Rico were killed by the wrath of Hurricane Maria. The animals that survived have lost their homes and owners and are now struggling to find them, as well as food. Our partners at Veterinarians for Puerto Rico are working to make a difference in this sphere and also need our help.",
    photos: [
      {
        src: "veterinarians-for-pr-logo.jpg",
        alt: "Veterinarians for Puerto Rico logo: paw print with Puerto Rican flag star",
        width: 800,
        height: 800,
      },
    ],
  },
  {
    date: "October 2, 2017",
    title: "Thank you, Sandra Christian",
    caption:
      "Our posts are filled with great comments of our great teammates and supporters. A big and special thanks to Sandra Christian for her support, volunteerism, and for being a great C.R.E.W.mate.",
    photos: [
      {
        src: "crew-strapping-pallet-tarmac.jpg",
        alt: "Crew members strapping down a pallet of generators, supply bins, and water on the tarmac, ready for airlift",
        width: 720,
        height: 960,
      },
    ],
  },
  {
    date: "October 3, 2017",
    title: "Our crew reached Vieques",
    mission: "vieques-generators",
    caption:
      "Our Crew has made it to Vieques this morning! Once the team returns to an area with internet connectivity, we will update with more pictures. Your support and your donations have made these missions a possibility. Thank you so much!",
    photos: [],
  },
  {
    date: "October 4, 2017",
    title: "Little word from the team in Vieques",
    mission: "vieques-generators",
    caption:
      "We have barely heard from our team since their arrival to Vieques but we know that they are safe and working hard to continue providing support. We will continue updating as more information flows.",
    photos: [],
  },
  {
    date: "October 5, 2017",
    title: "We delivered the generators and handed out supplies in Vieques",
    mission: "vieques-generators",
    caption:
      "Yesterday we handed out supplies in the Vieques Plaza and in the Esperanza Park. The generators have been handed to the hospital and other government buildings. When the C.R.E.W. gets some internet connectivity, we will begin posting pictures of the effort.",
    photos: [],
  },
  {
    date: "October 5, 2017",
    title: "Handing out donations in Vieques",
    mission: "vieques-generators",
    caption:
      "Our friends in Vieques, Puerto Rico are finally getting the help they need! In these pictures, we are handing out donations that were brought in by the First Lady and another great group of people called Activados por Puerto Rico. Your help, volunteerism, and donations, no matter how small or large, have made a HUGE impact this week.",
    photos: [
      {
        src: "vieques-crowd-waiting-field.jpg",
        alt: "Long line of Vieques residents waiting in a devastated field for supply distribution, stripped trees and damaged buildings in the background",
        width: 720,
        height: 474,
      },
      {
        src: "vieques-truck-handout-alphacrew.jpg",
        alt: "Alpha CREW volunteers handing out supplies from a flatbed truck with hand-painted ALPHA CREW sign, residents gathering around",
        width: 720,
        height: 540,
      },
    ],
  },
  {
    date: "October 6, 2017",
    title: "80 families got supplies in the Vieques town square",
    mission: "vieques-generators",
    caption:
      "For World Smile Day Alpha CREW wants to bring smiles to those who have donated to our cause. Your donations and your support supplied 80 families with water, food, flashlights, and other hygiene products in the town square of Vieques, Puerto Rico. Let's continue making a difference!",
    photos: [
      {
        src: "vieques-plaza-handout-closeup.jpg",
        alt: "Volunteers on the Alpha CREW truck handing water and supplies to residents gathered in the Vieques town square",
        width: 1233,
        height: 925,
      },
      {
        src: "vieques-plaza-truck-church.jpg",
        alt: "Alpha CREW truck parked by the church in Vieques, crowd of residents receiving supplies",
        width: 1233,
        height: 925,
      },
      {
        src: "vieques-plaza-line-street.jpg",
        alt: "Line of residents stretching down the street in Vieques, waiting for supply distribution from the Alpha CREW truck",
        width: 1233,
        height: 925,
      },
      {
        src: "vieques-plaza-stroller-families.jpg",
        alt: "Families with strollers and children gathering around the Alpha CREW truck in the Vieques plaza",
        width: 1280,
        height: 960,
      },
    ],
  },
  {
    date: "October 6, 2017",
    title: "More than 500 families in Vieques had food, water and supplies",
    mission: "vieques-generators",
    caption:
      "This is the incredible C.R.E.W. that is currently making a great difference in Vieques, Puerto Rico. Because of this group, there are over 500 families in Vieques with food, water, and supplies for their everyday needs. The hospital and VER clinic (center for dialysis) have the power to take care of their patients. Also, we provided generators to government buildings to continue to assist their citizens.",
    photos: [
      {
        src: "vieques-crew-photo-taped-sign.jpg",
        alt: "Alpha CREW team posing in Vieques with a hand-lettered styrofoam sign, Puerto Rican flag, and red Jeep, stripped trees in the background",
        width: 1024,
        height: 768,
      },
      {
        src: "vieques-jeep-flag-sign.jpg",
        alt: "The Alpha CREW sign propped against the red Jeep with Puerto Rican flag overhead, devastated landscape behind",
        width: 1024,
        height: 768,
      },
    ],
  },
  {
    date: "October 7, 2017",
    title: "What we did in Vieques",
    mission: "vieques-generators",
    caption:
      "Alpha Crew established its footprint in Vieques. We coordinated with the local government, distributed our donations, shared our satellite phones with the residents for them to communicate with family members, provided generators and power inverters to hospitals, clinics and residents, collaborated with other entities to help them distribute their donations throughout the island.",
    photos: [
      {
        src: "vieques-satphone-call-family.jpg",
        alt: "A Vieques resident using Alpha CREW's satellite phone to call family, crew member watching from a fence, stripped trees in the background",
        width: 960,
        height: 1280,
      },
      {
        src: "vieques-coordination-meeting.jpg",
        alt: "Alpha CREW in a coordination meeting with local officials and other organizations in Vieques, notes and clipboards in hand",
        width: 1280,
        height: 960,
      },
      {
        src: "vieques-golf-cart-megaphone.jpg",
        alt: "Golf cart with a megaphone driving through a Vieques neighborhood to announce supply distributions",
        width: 960,
        height: 1280,
      },
      {
        src: "vieques-crew-residents-porch.jpg",
        alt: "Crew member talking with elderly residents on a porch in Vieques",
        width: 960,
        height: 1280,
      },
      {
        src: "vieques-truck-handout-street.jpg",
        alt: "Alpha CREW truck distributing supplies on the street in Vieques, residents walking away with water and goods",
        width: 960,
        height: 1280,
      },
    ],
  },
  {
    date: "October 7, 2017",
    title: "We moved donations for Veterinarians for Puerto Rico",
    mission: "animals",
    caption:
      "Alpha Crew collaborated with our friends of Veterinarians for Puerto Rico to get their donations to PR. Alpha Crew provided the logistics, coordination, and transport to the island, and Veterinarians for Puerto Rico provided the donations and delivered them to different parts of the island (San Juan, Culebra, Loiza, and Rio Grande).",
    photos: [
      {
        src: "vetsforpr-animal-emergency-hospital.jpg",
        alt: "Volunteer setting cleaning supplies on top of an animal crate, dogs nearby",
        width: 1600,
        height: 1200,
      },
      {
        src: "vetsforpr-night-truck-loading.jpg",
        alt: "Night handoff: volunteers and vets in scrubs loading supplies into a truck in the dark",
        width: 960,
        height: 1280,
      },
      {
        src: "vetsforpr-hangar-supplies.jpg",
        alt: "Hangar stacked with cases of Clorox, water, and pet training pads staged for delivery",
        width: 1280,
        height: 960,
      },
      {
        src: "vetsforpr-animal-shelter-crates.jpg",
        alt: "Team unloading pet food from a pickup outside the Animal Emergency Hospital",
        width: 1600,
        height: 1200,
      },
      {
        src: "vetsforpr-cleaning-supplies-dogs.jpg",
        alt: "Team members with residents and dogs in a yard, a storm-damaged palm tree behind",
        width: 960,
        height: 1280,
      },
      {
        src: "vetsforpr-dogs-residents.jpg",
        alt: "Veterinarians for Puerto Rico logo: paw print with Puerto Rican flag star",
        width: 1237,
        height: 1237,
      },
    ],
  },
  {
    date: "October 8, 2017",
    title: "Weddings in Vieques shared our GoFundMe",
    note: "Weddings in Vieques wrote this on their page.",
    caption:
      "Lots of requests from our Weddings in Vieques alumni and friends asking how you can help Vieques recover - this GoFundMe supports a group called Alpha CREW.",
    photos: [
      {
        src: "shoutout-sandy-malone-weddings.png",
        alt: "Facebook post from Sandy Malone Weddings & Events sharing Alpha CREW's GoFundMe with #LetsSavePR banner",
        width: 678,
        height: 585,
      },
      {
        src: "shoutout-weddings-in-vieques.png",
        alt: "Facebook post from Weddings in Vieques page sharing Alpha CREW's GoFundMe to their alumni network",
        width: 674,
        height: 589,
      },
    ],
  },
  {
    date: "October 9, 2017",
    title: "A destroyed structure on Vieques",
    caption:
      "Our CREW took a picture of a once standing structure on the island of Vieques. Truly terrible to see... This damage is terrible and saddening but it has given us a greater reason to increase our efforts. With your help, we can impact more lives in Puerto Rico.",
    photos: [
      {
        src: "vieques-destroyed-structure.jpg",
        alt: "Collapsed structure on Vieques surrounded by stripped trees and debris, nothing left standing",
        width: 1600,
        height: 900,
      },
    ],
  },
  {
    date: "October 10, 2017",
    title: "We asked for military volunteers in Savannah and Charleston",
    caption:
      "Join the C.R.E.W. We are looking for military volunteers in the Savannah, GA and Charleston, SC area that are interested in working with us.",
    photos: [],
  },
  {
    date: "October 10, 2017",
    title: "We sorted donations at the Choliseo in San Juan",
    caption:
      "Our CREWmates are helping wherever there is a need. Here we are in San Juan, helping Puerto Rico Rises and other entities, inspecting and sorting out donations, (clothing and food) at the Jose Miguel Agrelo Coliseum (Choliseo). These donations will then be delivered to various municipalities around the island.",
    photos: [
      {
        src: "choliseo-sorting-clothing.jpg",
        alt: "Volunteer sorting and folding donated clothing at tables inside the José Miguel Agrelot Coliseum",
        width: 496,
        height: 662,
      },
      {
        src: "choliseo-packing-boxes.jpg",
        alt: "Volunteer packing boxes of donations at tables inside the coliseum, arena seating visible behind",
        width: 496,
        height: 662,
      },
    ],
  },
  {
    date: "October 10, 2017",
    title: "We helped the Humane Society load aircraft for Vieques",
    mission: "animals",
    caption:
      "At the Isla Grande Airport in San Juan, our other C.R.E.W.mates, helped the Humane Society moving and loading their Aircraft with provisions that are going to Vieques.",
    photos: [
      {
        src: "isla-grande-humane-society-loading.jpg",
        alt: "Volunteer amid stacked pet carriers, boxes, and animal supplies in a hangar at Isla Grande Airport",
        width: 883,
        height: 662,
      },
    ],
  },
  {
    date: "October 10, 2017",
    title: "We found fuel for the Guaynabo hospital generator",
    caption:
      "Our C.R.E.W.mates, later on, went to find fuel and oil for a generator at the Guaynabo hospital and assisted troubleshooting the same.",
    photos: [
      {
        src: "guaynabo-hospital-fuel-cans.jpg",
        alt: "Five red fuel cans labeled HSPR 1/5 through 5/5, lined up on a tile floor next to water bottles and rubber boots",
        width: 883,
        height: 662,
      },
    ],
  },
  {
    date: "October 10, 2017",
    title: "The stateside crew worked on airlift and donations",
    caption:
      "Our Stateside C.R.E.W. continues communications with government agencies to find and secure airlift for the donations inbound to Puerto Rico. Also, we continue talking with various companies and non-profit organizations to prioritize the donations that we are taking to Puerto Rico.",
    photos: [],
  },
  {
    date: "October 12, 2017",
    title: "Thank you to the volunteers who packed and distributed supplies",
    caption:
      "Big thanks to the volunteers that helped us and the other organizations with packing and distributing supplies. Blaine Stevenson, thank you for your help!",
    photos: [
      {
        src: "choliseo-volunteers-sorting-floor.jpg",
        alt: "Volunteer sorting clothing and donations on the arena floor of the Choliseo, empty seating tiers and sponsor banners above",
        width: 720,
        height: 1280,
      },
      {
        src: "choliseo-crew-group-photo.jpg",
        alt: "Six crew members and volunteers posing together on the Choliseo arena floor, boxes and pallets behind them",
        width: 1280,
        height: 960,
      },
    ],
  },
  {
    date: "October 12, 2017",
    title: "We helped the Humane Society move supplies to Guaynabo",
    mission: "animals",
    caption:
      "We have continued our aid to the Humane Society today as they transported food and supplies from the Isla Grande Airport to Guaynabo.",
    photos: [
      {
        src: "humane-society-selfie-loaded-truck.jpg",
        alt: "Crew member selfie in front of a pickup truck loaded with water bottles and supplies",
        width: 360,
        height: 480,
      },
      {
        src: "humane-society-isla-grande-hangar.jpg",
        alt: "S.P. Helicopters hangar at Isla Grande packed with pet food, water, and boxes of supplies",
        width: 320,
        height: 240,
      },
      {
        src: "humane-society-truck-van-loading.jpg",
        alt: "Truck bed and van being loaded with bags of pet food and water in the hangar",
        width: 360,
        height: 480,
      },
      {
        src: "humane-society-water-heart-sign.jpg",
        alt: "Truck bed filled with water bottles next to a large red heart sign at the hangar entrance",
        width: 360,
        height: 480,
      },
    ],
  },
  {
    date: "October 13, 2017",
    title: "Andrea Moya recommended Alpha CREW",
    note: "Andrea Moya wrote this on her own page.",
    caption:
      "Many people stateside are asking if I need anything and what to send. I'm personally fine and my family is thankfully not wanting in anything. So I would say direct what you would've spent on me to one of these organizations: Guardians of Rescue, Alpha CREW, Humane Society of Puerto Rico, The Humane Society of the United States - Puerto Rico, Para la Naturaleza.",
    photos: [
      {
        src: "shoutout-andrea-moya.png",
        alt: "Facebook post from Andrea Moya recommending Alpha CREW and other relief organizations to her network",
        width: 675,
        height: 630,
      },
    ],
  },
  {
    date: "October 13, 2017",
    title: "The Rivera and Caraballo family donated water, food and pasta",
    caption:
      "The Rivera and Caraballo family has graciously donated water, food, and pasta to our cause. These supplies will be touching the lives of many in Puerto Rico.",
    photos: [
      {
        src: "rivera-caraballo-donation.jpg",
        alt: "Airman standing next to a cart loaded with donated water, food boxes, and plantains in a warehouse",
        width: 1080,
        height: 1440,
      },
    ],
  },
  {
    date: "October 15, 2017",
    title: "We scouted Utuado",
    mission: "mountains",
    caption:
      "Visited Utuado to scout communities in need of help and to determine the best ways to access and deliver supplies. In one of these areas, people have had to cross a river to gain access to supplies because of the collapse of their access bridge.",
    photos: [
      {
        src: "utuado-collapsed-bridge.jpg",
        alt: "Collapsed bridge in Utuado: concrete pillars broken into the muddy river, homes visible on the hillside above",
        width: 1280,
        height: 720,
      },
      {
        src: "utuado-surveying-bridge.jpg",
        alt: "Two crew members standing at the edge of the collapsed bridge, surveying the destruction across the flooded river",
        width: 1500,
        height: 1124,
      },
      {
        src: "utuado-destroyed-road.jpg",
        alt: "Crew walking a mud-covered road in Utuado, landslides on both sides, stripped hillsides in the background",
        width: 1500,
        height: 1124,
      },
      {
        src: "utuado-military-lmtv.jpg",
        alt: "Military LMTV cargo truck parked on a road near Route 111 in Utuado, one of the few vehicles able to navigate the terrain",
        width: 1281,
        height: 960,
      },
    ],
  },
  {
    date: "October 16, 2017",
    title: "We helped the Humane Society send dogs to New York",
    mission: "animals",
    caption:
      "This weekend we spent some time helping the Humane Society of PR in Isla Grande Airport in San Juan. With them, we brought dogs to the LMM airport that are going to be sent to NY with the Guardians of Rescue. Our furry friends in Puerto Rico are also in need of help.",
    photos: [
      {
        src: "humane-society-dogs-carriers.jpg",
        alt: "Rescued dogs in stacked carriers, named and labeled, waiting for transport",
        width: 1500,
        height: 1124,
      },
      {
        src: "humane-society-van-packed-crates.jpg",
        alt: "Aircraft N651CT on the tarmac at night with a loading ramp at its door",
        width: 1500,
        height: 1124,
      },
      {
        src: "humane-society-jet-aviation-night.jpg",
        alt: "Truck loaded with supplies outside the Jet Aviation terminal at LMM airport at night",
        width: 1124,
        height: 1500,
      },
      {
        src: "humane-society-aircraft-loading.jpg",
        alt: "Van packed wall-to-wall with dog crates, ready for the drive to LMM airport",
        width: 1500,
        height: 1124,
      },
    ],
  },
  {
    date: "October 16, 2017",
    title: "Jorgito kept the vaccines cold in his refrigerator",
    mission: "animals",
    caption:
      "One of our CREWmates (Jorgito) in PR has been keeping HSPR vaccines cold in his personal refrigerator due to the limitations of Guardians of Rescue's power generator.",
    photos: [
      {
        src: "jorgito-fridge-vaccines.jpg",
        alt: "Boxes of veterinary rabies vaccines stacked on refrigerator shelves, kept cold in a crew member's personal fridge",
        width: 1080,
        height: 1441,
      },
    ],
  },
  {
    date: "October 16, 2017",
    title: "In Aguas Buenas we found seniors eating once a day",
    mission: "door-to-door",
    caption:
      "After visiting the Health Fair (Feria de Salud) in Aguas Buenas, we found senior citizens that have only been eating once a day due to supply limitations. We also left water purifiers in communities where there is an excess of debris, mosquitoes, infectious diseases, and patients with compromised health. We have the information of the people in these communities and we are going to follow up. Areas visited: Sector Minillas, Bo Mula, Bo. Sumideros, Sector Corujas, and Sector la Jacana.",
    photos: [
      {
        src: "aguas-buenas-porch-checkup.jpg",
        alt: "Crew member and medic in scrubs checking on an elderly resident on his porch in Aguas Buenas",
        width: 1281,
        height: 960,
      },
      {
        src: "aguas-buenas-living-room-seniors.jpg",
        alt: "Crowded living room in Aguas Buenas: crew and medical volunteers assessing elderly residents, family photos on the walls",
        width: 1281,
        height: 960,
      },
      {
        src: "aguas-buenas-medical-supplies.jpg",
        alt: "Crew member carrying medical supply box on a porch while a medic takes a resident's blood pressure",
        width: 960,
        height: 1280,
      },
      {
        src: "aguas-buenas-doorway-intake.jpg",
        alt: "Volunteer collecting information from a resident at her doorway, writing on a clipboard",
        width: 960,
        height: 1281,
      },
    ],
  },
  {
    date: "October 17, 2017",
    title: "We labeled and manifested the next shipment",
    caption:
      "We are preparing another shipment to Puerto Rico. This next shipment will bring more needed supplies to hundreds of people throughout the island. To ensure that our shipments aren't misplaced, we label every single item and container and add it to a manifest document.",
    photos: [
      {
        src: "shipment-warehouse-pallets-wide.jpg",
        alt: "Wide shot of warehouse floor: rows of shrink-wrapped pallets stacked high, freezers and military containers in the background",
        width: 1280,
        height: 960,
      },
      {
        src: "shipment-labeled-diapers-containers.jpg",
        alt: "Labeled containers of diapers, baby wipes, and Pampers stacked on pallets with manifest tags visible",
        width: 1280,
        height: 960,
      },
      {
        src: "shipment-water-pallets-manifested.jpg",
        alt: "Rows of shrink-wrapped water pallets with yellow manifest labels, staged for airlift",
        width: 2048,
        height: 1536,
      },
    ],
  },
  {
    date: "October 17, 2017",
    title: "The Guaynabo shelter flooded and the animals were moved",
    mission: "animals",
    caption:
      "The Humane Society in Guaynabo was flooded yesterday. After hearing the news, Jorgito, one of our crewmates, sprung into action. Luckily, everyone made it out of there safely and the animals were relocated.",
    photos: [
      {
        src: "guaynabo-shelter-flooded-kennels.jpg",
        alt: "Empty kennels with doors flung open, mud and debris covering the shelter floor after flooding",
        width: 1281,
        height: 960,
      },
      {
        src: "guaynabo-shelter-flooded-floor.jpg",
        alt: "Flooded shelter interior: wet concrete floor, van backed into the bay, water barrels along the wall",
        width: 1124,
        height: 1500,
      },
      {
        src: "guaynabo-animals-relocated-gym.jpg",
        alt: "Dozens of pet carriers lined up in rows inside a basketball gym, volunteers organizing the relocated animals",
        width: 960,
        height: 1281,
      },
      {
        src: "guaynabo-gym-volunteers-carriers.jpg",
        alt: "Volunteers walking among rows of carriers on the gym floor, bags of pet food stacked nearby",
        width: 1500,
        height: 1124,
      },
    ],
  },
  {
    date: "October 19, 2017",
    title: "Volunteers from the 333rd reorganized the pallets",
    caption:
      "Many of our Air Force volunteers from the 333 Recruiting Squadron and their families came from Puerto Rico after losing everything to Hurricane Maria and are now helping our cause. Today they are reorganizing the pallets that arrived in bad condition and separating the medicine from the food and water.",
    photos: [
      {
        src: "333rd-warehouse-overhead.jpg",
        alt: "Overhead view of warehouse floor filled with dozens of shrink-wrapped pallets: water, food, medical supplies staged for airlift",
        width: 1280,
        height: 960,
      },
      {
        src: "333rd-sorting-pallets-water.jpg",
        alt: "Volunteers in Air Force shirts and civilians sorting water bottles onto pallets in the warehouse",
        width: 1280,
        height: 720,
      },
      {
        src: "333rd-airmen-civilians-sorting.jpg",
        alt: "Airmen in uniform and civilian volunteers working together to reorganize pallets of water and supplies",
        width: 1280,
        height: 720,
      },
      {
        src: "333rd-warehouse-reorganized.jpg",
        alt: "Wide shot of reorganized warehouse: pallets neatly wrapped and separated by category, overhead crane visible",
        width: 1280,
        height: 960,
      },
    ],
  },
  {
    date: "October 19, 2017",
    title: "Everything was ready and we waited on FEMA",
    caption:
      "We have secured airlift, we have trucks, we have people, and the lifesaving supplies are ready to go. Just waiting on FEMA for mission approval.",
    photos: [
      {
        src: "fema-waiting-truck-c130s.jpg",
        alt: "Semi truck parked on the flight line, C-130 aircraft visible on the tarmac in the background under blue skies",
        width: 960,
        height: 1280,
      },
      {
        src: "fema-waiting-warehouse-ready.jpg",
        alt: "Overhead view of warehouse packed with dozens of pallets: water, food, medicine, all staged and waiting for FEMA approval",
        width: 1280,
        height: 960,
      },
    ],
  },
  {
    date: "October 19, 2017",
    title: "Pastor Evelyn Martinez and her family from ABBA La Casa De Mi Padre with our founder",
    caption:
      "Pastor Evelyn Martinez, husband Luis A. Martinez, and niece Glorianne Ruiz from ABBA - La Casa De Mi Padre in Tampa with our founder, Joseph Duren.",
    photos: [
      {
        src: "abba-church-flight-line-group.jpg",
        alt: "Luis Martinez, Pastor Evelyn Martinez, Joseph Duren in uniform, and Glorianne Ruiz standing together on the flight line with a C-130 in the background",
        width: 2048,
        height: 1536,
      },
    ],
  },
  {
    date: "October 20, 2017",
    title: "Thank you to our volunteers, donors and crewmates",
    caption:
      "Big thanks to all of our volunteers, donors, and crewmates for continuing to make an effort to help save lives in Puerto Rico.",
    photos: [
      {
        src: "full-crew-group-photo-warehouse.jpg",
        alt: "Full Alpha CREW group photo outside the warehouse: airmen in uniform, civilian volunteers, church partners, and families with children",
        width: 840,
        height: 489,
      },
    ],
  },
  {
    date: "October 20, 2017",
    title: "We delivered medical supplies to the children's hospital in Bayamón",
    mission: "hospitals",
    caption:
      "Today, Alpha C.R.E.W picked up at LMM Airport in San Juan emergency medical supplies sent by Partners for World Health and delivered to the Pediatric Children's Hospital in Bayamón, PR.",
    photos: [
      {
        src: "bayamon-crew-truck-lmm-airport.jpg",
        alt: "Alpha CREW truck loaded with medical supply boxes outside LMM Airport terminal, CREW logo on the door",
        width: 1281,
        height: 960,
      },
      {
        src: "bayamon-pwh-boxes-truck-cab.jpg",
        alt: "Partners for World Health and Hospira medical supply boxes loaded in the truck, visible through the passenger window",
        width: 960,
        height: 1281,
      },
      {
        src: "bayamon-truck-hospital-dusk.jpg",
        alt: "Truck bed full of medical supply boxes arriving at the hospital at dusk, Alpha CREW logo on the tailgate, streetlights on",
        width: 960,
        height: 1281,
      },
      {
        src: "bayamon-childrens-hospital-arrival.jpg",
        alt: "Loaded truck parked outside the Pediatric Children's Hospital in Bayamón at twilight, ambulance under the awning",
        width: 960,
        height: 1281,
      },
    ],
    partners: [
      { name: "Partners for World Health", url: "https://www.facebook.com/PartnersForWorldHealth" },
    ],
  },
  {
    date: "October 21, 2017",
    title: "We checked on Ms. Carmen Rivera in St. Just",
    mission: "door-to-door",
    caption:
      "Today the Rivera Family asked Alpha CREW to check on Ms. Carmen Rivera in St. Just, PR. The Rivera Family is in New Jersey and haven't heard from her since before Hurricane Maria, and were extremely worried about her well being. One of our C.R.E.W. mates paid her a visit, and found her well, under the circumstances. She was able to talk to her family through his cellphone. One happy story for today!",
    photos: [
      {
        src: "carmen-rivera-welfare-check.jpg",
        alt: "Crew member selfie with Ms. Carmen Rivera on her porch in St. Just, a torn awning overhead, both smiling",
        width: 972,
        height: 1296,
      },
    ],
  },
  {
    date: "October 21, 2017",
    title: "We opened volunteering to everyone",
    caption:
      "General volunteering opportunities open to everyone. Are you interested in helping? Alpha CREW always has volunteering opportunities for everyone. You can help us accomplish the mission by donating, spreading the word, helping with transportation, mentoring Puerto Rican families arriving to your area, or helping us inspect, sort, palletize and load emergency supplies for transport. If you think you have what it takes to become an official C.R.E.W. mate, please send your bio and resume at contact@alphacrew.org.",
    photos: [],
  },
  {
    date: "October 24, 2017",
    title: "We helped farmers in Utuado with Climbing Puerto Rico",
    mission: "mountains",
    caption:
      "Together with Climbing Puerto Rico, Alpha CREW went to Utuado, PR to assist the area farmers prepping the farms. In addition, assisted a family to clear their driveway of debris, as they were unable to access their home since Hurricane Maria. A special thanks to Ismael \"Tico\" Marques for the Jeep ride and Bryan from Climbing Puerto Rico for the invitation.",
    photos: [
      {
        src: "utuado-climbing-pr-jeep-crew.jpg",
        alt: "Two crew members posing next to the Alpha CREW-branded Jeep in Utuado, ready for the mountain roads",
        width: 1500,
        height: 1124,
      },
      {
        src: "utuado-climbing-pr-convoy.jpg",
        alt: "Mitsubishi Montero with Alpha CREW logo leading a convoy on a mountain road into Utuado, lush hillsides recovering",
        width: 1124,
        height: 1500,
      },
      {
        src: "utuado-clearing-debris-farm.jpg",
        alt: "Large group of volunteers clearing massive downed trees and debris from a farm property with chainsaws and rakes",
        width: 1500,
        height: 1124,
      },
    ],
  },
  {
    date: "October 24, 2017",
    title: "We handed out hot meals in San Juan with Voces and two foundations",
    mission: "door-to-door",
    caption:
      "Today, Alpha CREW collaborated with Voces, Fundación Topy Mamery, and Fundación El Plato Caliente distributing hot meals to families and children at Parcelas Falu and Barrio Campollanos in San Juan PR. We are very grateful for the invitation.",
    photos: [
      {
        src: "voces-soup-portioning.jpg",
        alt: "Rows of soup cups being portioned in a restaurant kitchen, volunteers working the counter",
        width: 1124,
        height: 1500,
      },
      {
        src: "voces-serving-rice-stew.jpg",
        alt: "Volunteers ladling rice and stew into cups from large pots, one wearing a CREW shirt",
        width: 1500,
        height: 1124,
      },
      {
        src: "voces-crew-truck-site.jpg",
        alt: "White Alpha CREW truck at the distribution site, crew loading food containers in a covered area",
        width: 1500,
        height: 1124,
      },
      {
        src: "voces-trucks-san-juan-street.jpg",
        alt: "Trucks lined up on a San Juan street with food containers and Puerto Rico flags, ready for delivery",
        width: 1124,
        height: 1500,
      },
      {
        src: "voces-community-gathering.jpg",
        alt: "Community members gathering around the truck as volunteers distribute meals from red and yellow containers",
        width: 1124,
        height: 1500,
      },
      {
        src: "voces-crew-suv-neighborhood.jpg",
        alt: "Alpha CREW SUV with logo driving through a San Juan neighborhood, white truck ahead",
        width: 1500,
        height: 1124,
      },
    ],
  },
  {
    date: "October 25, 2017",
    title: "We sent 65,000 lbs in two days",
    mission: "shipment-65k",
    caption:
      "In the last two days, Alpha CREW in Florida sent out approximately 65,000 lbs (15,000 lbs Tuesday and 50,000 lbs Wednesday) of life sustaining supplies to GA, to then be airlifted to PR.",
    photos: [
      {
        src: "65k-flatbed-crew-posing.jpg",
        alt: "Two crew members standing beside a King Transport flatbed loaded with netted cargo pallets on the flight line",
        width: 1600,
        height: 1200,
      },
      {
        src: "65k-flatbed-forklift-loading.jpg",
        alt: "Military forklift loading netted pallets onto a King Transport flatbed, full load stretching the length of the trailer",
        width: 1280,
        height: 960,
      },
      {
        src: "65k-crew-selfie-pallets.jpg",
        alt: "Four crew members selfie in front of netted cargo pallets on the flatbed, celebrating the shipment",
        width: 1278,
        height: 960,
      },
      {
        src: "65k-medical-equipment-staged.jpg",
        alt: "Warehouse packed with pallets of medical supplies, wheelchairs, stretchers, and equipment staged for transport",
        width: 1600,
        height: 1200,
      },
      {
        src: "65k-forklift-warehouse.jpg",
        alt: "Trailer loaded with red-wrapped pallets on wet tarmac under cloudy skies, a forklift in front and a crew member standing by",
        width: 1200,
        height: 1600,
      },
      {
        src: "65k-box-truck-loading-rain.jpg",
        alt: "Forklift moving red-wrapped pallets inside the warehouse, food and water pallets on the right",
        width: 1600,
        height: 1200,
      },
    ],
  },
  {
    date: "October 26, 2017",
    title: "Our mobile crew brought hot meals to people who were bedridden or without means",
    mission: "door-to-door",
    caption:
      "Yesterday, the mobile crew of Alpha CREW went to bring hot meals to people who did not have the means, health, or are bedridden. Thank you c.r.e.w.mates!",
    photos: [
      {
        src: "hotmeals-crew-selfie-truck.jpg",
        alt: "Five crew members taking a selfie in a truck bed loaded with red containers of portioned meals and supplies",
        width: 1278,
        height: 960,
      },
      {
        src: "hotmeals-elderly-delivery.jpg",
        alt: "Volunteer handing a meal container to an elderly woman at her home gate, red container visible on the truck bed",
        width: 1600,
        height: 1200,
      },
      {
        src: "hotmeals-containers-street.jpg",
        alt: "Red and yellow meal containers stacked in a truck bed, colorful San Juan street in the background",
        width: 900,
        height: 1600,
      },
      {
        src: "hotmeals-crew-logo-truck.jpg",
        alt: "Crew member selfie next to the Alpha CREW logo on the truck door, Puerto Rico flag visible in background",
        width: 1278,
        height: 960,
      },
    ],
  },
  {
    date: "October 26, 2017",
    title: "We delivered food and supplies to barrios in Utuado and Jayuya",
    mission: "mountains",
    caption:
      "Today the C.R.E.W.mates of Alpha CREW collaborated once again with Voces, Fundación Topy Mamery, UNICEF, Lote 23, Grupo de Amigos de Margarita Santos - Volunteers Ad Hoc, and Foundation for Puerto Rico to deliver sandwiches, rice, baby and hygiene supplies to the residents of Utuado and Jayuya at Barrios Tetuan 1 & 2, Don Alonzo, Limon, Caonillas, Caonillas Abajo, Mameyes Arriba, and Mameyes Abajo. We also delivered some treats for the kids.... yum yum! We feel blessed every day we are able to help the community. Thank you again for the invite!",
    photos: [
      {
        src: "utuado-jayuya-tundra-mountain-village.jpg",
        alt: "Crew member standing in a Toyota Tundra truck bed with Alpha CREW logo, green mountain hillside and village buildings behind",
        width: 1500,
        height: 1124,
      },
      {
        src: "utuado-jayuya-selfie-rice-bags.jpg",
        alt: "Two crew members taking a selfie in the cab, backseat packed with yellow bags of rice",
        width: 1498,
        height: 1124,
      },
      {
        src: "utuado-jayuya-convoy-rural-road.jpg",
        alt: "Vehicle convoy on a rural mountain road, boxes visible in truck bed, downed trees and tilted power lines along the roadside",
        width: 1500,
        height: 1124,
      },
      {
        src: "utuado-jayuya-dakota-loaded.jpg",
        alt: "Maroon Dakota pickup with Alpha CREW logo, truck bed loaded with cardboard boxes and a small Puerto Rico flag",
        width: 1500,
        height: 1124,
      },
      {
        src: "utuado-jayuya-jeep-crew-logo.jpg",
        alt: "Silver Jeep Compass with Alpha CREW logo on the door parked on a street",
        width: 1500,
        height: 1124,
      },
    ],
  },
  {
    date: "November 1, 2017",
    title: "We palletized and shipped medical supplies from Partners for World Health",
    caption:
      "Yesterday, Alpha CREW C.R.E.W.mates palletized and shipped out medical supplies donated by Partners of World Health that are destined to PR. Your support is important to us, and is the lifeline for us to continue our efforts. No quantity is too small, everything counts.",
    photos: [
      {
        src: "pwh-volunteers-wheelchairs.jpg",
        alt: "Three volunteers palletizing wheelchairs and walkers onto a pallet in a warehouse",
        width: 1536,
        height: 2048,
      },
      {
        src: "pwh-palletizing-walkers.jpg",
        alt: "Volunteer stacking aluminum walkers onto a wooden pallet in a large warehouse",
        width: 1536,
        height: 2048,
      },
      {
        src: "pwh-forklift-loading-trailer.jpg",
        alt: "U.S. Air Force forklift loading shrink-wrapped pallets into a semi trailer on the flight line",
        width: 1536,
        height: 2048,
      },
      {
        src: "pwh-trailer-packed-equipment.jpg",
        alt: "Inside a trailer packed with shrink-wrapped pallets of wheelchairs, walkers, crutches, and medical equipment",
        width: 1536,
        height: 2048,
      },
    ],
    partners: [
      { name: "Partners for World Health", url: "https://www.facebook.com/PartnersForWorldHealth" },
    ],
  },
  {
    date: "November 2, 2017",
    title: "We brought supplies to four San Juan communities",
    caption:
      "Last Sunday October 29, 2017 Alpha CREW C.R.E.W.mates stayed out until very late collaborating with the City of San Juan to bring emergency supplies to the communities located at Parcelas Falu, Hill Brothers, el Polvorin, and Berwind. We are very grateful for the invitation. To contribute to our organization, please find the GoFundMe link on our page. Thank you for your support!",
    photos: [
      {
        src: "sanjuan-flatbed-nikini-boxes.jpg",
        alt: "Dark green flatbed truck with Alpha CREW logo loaded with stacked Nikini supply boxes, Puerto Rico flag flying from the cab",
        width: 1600,
        height: 1200,
      },
      {
        src: "sanjuan-nighttime-pallets-distribution.jpg",
        alt: "Nighttime distribution scene under floodlights, volunteers moving pallets of boxed supplies to waiting residents",
        width: 1600,
        height: 901,
      },
      {
        src: "sanjuan-nighttime-community-crowd.jpg",
        alt: "Large crowd of community residents gathered at night under a pavilion waiting for supply distribution",
        width: 1600,
        height: 901,
      },
      {
        src: "sanjuan-pr-flag-water-bottles.jpg",
        alt: "Two crew members in Alpha CREW t-shirts taking a selfie in the car",
        width: 1600,
        height: 1202,
      },
      {
        src: "sanjuan-crewmates-selfie-car.jpg",
        alt: "Puerto Rico flag waving above cases of water bottles on a vehicle roof rack, palm trees and blue sky behind",
        width: 1200,
        height: 1600,
      },
      {
        src: "sanjuan-truck-water-pr-flag.jpg",
        alt: "Pickup truck bed loaded with water bottles and juice boxes, Puerto Rico flag on the roof rack",
        width: 1200,
        height: 1600,
      },
      {
        src: "sanjuan-f350-dump-truck.jpg",
        alt: "Maroon Ford F-350 dump truck with Alpha CREW logo parked on a colorful San Juan street",
        width: 1280,
        height: 960,
      },
      {
        src: "sanjuan-pickup-diapers-loaded.jpg",
        alt: "White pickup truck with CREW logo, bed loaded with bundled diapers and a spare tire",
        width: 1600,
        height: 1200,
      },
      {
        src: "sanjuan-fleet-flatbed-corolla.jpg",
        alt: "Alpha CREW flatbed truck and black Corolla with CREW logo parked together, PR flag on the flatbed, residential neighborhood behind",
        width: 1600,
        height: 1200,
      },
      {
        src: "sanjuan-fleet-parking-lot.jpg",
        alt: "Alpha CREW fleet vehicles, sedan, SUV, and flatbed truck with PR flag, staged in a parking lot before the supply run",
        width: 1280,
        height: 960,
      },
      {
        src: "sanjuan-hyundai-crew-logo.jpg",
        alt: "Light blue Hyundai Accent sedan with large Alpha CREW magnetic logo on the door, downed tree debris in the background",
        width: 1281,
        height: 960,
      },
    ],
  },
  {
    date: "November 6, 2017",
    title: "We delivered medical supplies to the Vieques hospital",
    mission: "hospitals",
    caption:
      "Alpha CREW has made history once again! We have successfully airlifted, transported and delivered very important life saving life supporting supplies donated by Partners for World Health to the Vieques Hospital in Puerto Rico. This has been an odyssey, but extremely rewarding! Thank you C.R.E.W. mates!!",
    photos: [
      {
        src: "vieques-c130-loading-tarmac.jpg",
        alt: "Airmen loading pink-wrapped medical supply pallets into a C-130 cargo bay on the tarmac, clear blue sky",
        width: 960,
        height: 720,
      },
      {
        src: "vieques-warehouse-staging-area.jpg",
        alt: "Warehouse staging area: pallets of water, supplies, and equipment ready for airlift",
        width: 960,
        height: 720,
      },
      {
        src: "vieques-night-ops-forklift-loading.jpg",
        alt: "Night operations: crew loading pallets with forklift, military vehicles in background",
        width: 960,
        height: 540,
      },
      {
        src: "vieques-c130-in-flight.jpg",
        alt: "C-130 aircraft in flight against a cloudy sky",
        width: 960,
        height: 718,
      },
      {
        src: "vieques-cargo-pallets-military-flatbed.jpg",
        alt: "Military cargo pallets strapped to flatbed for transport",
        width: 720,
        height: 960,
      },
      {
        src: "vieques-ferry-crossing.jpg",
        alt: "Loaded truck crossing by ferry to Vieques island",
        width: 1125,
        height: 2001,
      },
      {
        src: "vieques-trucks-loaded-staging.jpg",
        alt: "Two flatbed trucks loaded with wrapped pallets in a dirt lot beside a canopy, an SUV parked alongside",
        width: 960,
        height: 720,
      },
      {
        src: "vieques-trucks-puerto-rico-wet-roads.jpg",
        alt: "Trucks on wet roads in Puerto Rico, storm damage visible on hillside",
        width: 960,
        height: 720,
      },
      {
        src: "vieques-hospital-unloading-crew.jpg",
        alt: "Full crew unloading supplies at the hospital",
        width: 960,
        height: 540,
      },
      {
        src: "vieques-forklift-pallets-dark-skies.jpg",
        alt: "Forklift moving pallets under dark skies, damaged power lines visible",
        width: 960,
        height: 540,
      },
      {
        src: "vieques-hospital-team-coordinating.jpg",
        alt: "Alpha CREW team coordinating with local staff at the hospital",
        width: 960,
        height: 540,
      },
      {
        src: "vieques-hospital-supplies-delivered.jpg",
        alt: "Medical supplies delivered inside Vieques Hospital",
        width: 960,
        height: 720,
      },
    ],
    partners: [
      { name: "Partners for World Health", url: "https://www.facebook.com/PartnersForWorldHealth" },
    ],
  },
  {
    date: "November 6, 2017",
    title: "We delivered supplies from The Church of Doral to Añasco",
    caption:
      "Alpha CREW airlifted and delivered life saving life sustaining supplies donated by The Church of Doral to the functionaries of Catacumba 5 from Añasco PR. To contribute to our organization, please find the GoFundMe link on our page. Thank you for your support!",
    photos: [
      {
        src: "anasco-night-ops-palletizing.jpg",
        alt: "Crew and volunteers stacking bins and pallets under floodlights at night on the staging area, one volunteer standing on top of the pallet directing",
        width: 960,
        height: 720,
      },
    ],
    partners: [
      { name: "Catacumba 5 / Uno Church Puerto Rico", url: "https://www.facebook.com/UnoChurchPuertoRico" },
    ],
  },
  {
    date: "November 6, 2017",
    title: "Crewmates helped with Hurricane Irma cleanup in Florida",
    caption:
      "Our C.R.E.W. mates are amazing.... not only they help in PR, but also those affected by Hurricane Irma in FL. Thank you Team!!",
    photos: [
      {
        src: "irma-fl-crewmate-clearing-debris.jpg",
        alt: "Crew member in red shirt standing in a Silverado truck bed, tossing downed palm fronds into an Express Roll Off dumpster, storm-damaged roofs in the background",
        width: 960,
        height: 718,
      },
      {
        src: "irma-fl-silverado-dumpster.jpg",
        alt: "Black Chevy Silverado with Alpha CREW logo parked next to a green Express dumpster, crew member loading storm debris",
        width: 960,
        height: 718,
      },
      {
        src: "irma-fl-silverado-loaded-branches.jpg",
        alt: "Silverado truck bed overflowing with branches and palm fronds, parked in a Florida neighborhood driveway",
        width: 720,
        height: 960,
      },
    ],
  },
  {
    date: "November 6, 2017",
    title: "We handed out supplies with the Municipio de San Juan",
    caption:
      "Alpha CREW fever is everywhere. Our C.R.E.W. mates collaborated with the Municipio de San Juan to distribute supplies to the community. We are on FIRE! Thank you CREW!!!",
    photos: [
      {
        src: "sanjuan-municipio-aerial-distribution.jpg",
        alt: "Aerial view of a mass supply distribution: National Guard trucks and pallets of MRE boxes at a playground, soldiers and volunteers working, large crowd of residents lined up along the fence",
        width: 960,
        height: 540,
      },
    ],
  },
  {
    date: "November 6, 2017",
    title: "We delivered Goal Zero generators from Sparks to Vieques",
    caption:
      "Alpha CREW received, processed, airlifted, transported, and delivered Goal Zero Yeti Battery Powered Portable Generators donated by Sparks to the Island of Vieques. To contribute to our organization, please find the GoFundMe link on our page. Thank you for your support!",
    photos: [
      {
        src: "sparks-hangar-palletizing-generators.jpg",
        alt: "Airmen and civilian volunteer palletizing boxes of generators, diapers, and supplies onto a pallet jack inside a hangar, labeled '6 of 7'",
        width: 916,
        height: 687,
      },
      {
        src: "sparks-king-transport-flatbed.jpg",
        alt: "Two crew members standing beside a King Transport flatbed fully loaded with netted cargo pallets on the tarmac, blue sky behind",
        width: 916,
        height: 687,
      },
      {
        src: "sparks-vieques-forklift-unloading.jpg",
        alt: "Yellow Yale forklift unloading pallets of generators in Vieques, crew member in CREW shirt posing with local volunteers, green hillside behind",
        width: 960,
        height: 540,
      },
      {
        src: "sparks-vieques-crew-delivery.jpg",
        alt: "Crew member and local volunteer standing behind a pickup loaded with shrink-wrapped boxes of Goal Zero generators in Vieques, flowering trees in background",
        width: 960,
        height: 720,
      },
    ],
    partners: [
      { name: "Sparks", url: "https://www.facebook.com/SparksMarketing" },
    ],
  },
  {
    date: "November 7, 2017",
    title: "We met with FEMA alongside the Air National Guard EFAC",
    caption:
      "Alpha CREW continues to move forward forging new relationships. We are now collaborating with the Air National Guard Emergency Family Assistance Center (EFAC). We teamed up for the same cause and met with FEMA at the Emergency Operations Center (COE) in San Juan, PR to find a solution to move life saving life sustaining supplies to Puerto Rico using military aircraft.",
    photos: [
      {
        src: "efac-fema-convention-center.jpg",
        alt: "Alpha CREW founder and EFAC partners posing outside the Centro de Convenciones de Puerto Rico after meeting with FEMA at the Emergency Operations Center",
        width: 720,
        height: 960,
      },
    ],
  },
  {
    date: "November 10, 2017",
    title: "We delivered hot meals with Fundación El Plato Caliente",
    mission: "door-to-door",
    caption:
      "Today, Alpha CREW C.R.E.W. mates collaborated with Fundación El Plato Caliente delivering hot meals to the community.",
    photos: [
      {
        src: "platocaliente-selfie-packing-utensils.jpg",
        alt: "Crew member selfie at a long table where volunteers in gloves pack utensil kits and napkins, boxes of supplies stacked in the background",
        width: 1600,
        height: 1202,
      },
      {
        src: "platocaliente-volunteers-packing-table.jpg",
        alt: "Two volunteers smiling at the checkered table, assembling utensil kits with gloves on, stacks of forks and napkins in front of them",
        width: 1600,
        height: 1200,
      },
      {
        src: "platocaliente-handing-meal-resident.jpg",
        alt: "Volunteer in green cap handing a styrofoam meal container to a woman in an orange shirt from the open trunk of a silver sedan",
        width: 1200,
        height: 1600,
      },
      {
        src: "platocaliente-trunk-elderly-women.jpg",
        alt: "Volunteer handing a meal from a car trunk to two women in a parking lot, colorful buildings behind",
        width: 1200,
        height: 1600,
      },
      {
        src: "platocaliente-parking-lot-distribution.jpg",
        alt: "Volunteer handing out meals from the car trunk in a parking lot, residents and a woman in scrubs waiting, palm trees and high-rise in the background",
        width: 1600,
        height: 1200,
      },
      {
        src: "platocaliente-community-conversation.jpg",
        alt: "Community member in a green dress talking with a resident while a volunteer loads meals from the trunk behind them",
        width: 1200,
        height: 1600,
      },
    ],
  },
  {
    date: "November 10, 2017",
    title: "We delivered gluten-free food from Kinnikinnick to Alianza de Autismo",
    caption:
      "Today, Alpha CREW delivered gluten free foods donated by Kinnikinnick to Alianza de Autismo de Puerto Rico. A special thanks to our good friend Mr. Jose Galindez for the donation of the transport in Puerto Rico and to Ms. Byankah Sobá to reach out to us to be part of this wonderful cause!",
    photos: [
      {
        src: "autismo-kinnikinnick-boxes-closeup.jpg",
        alt: "Stack of Kinnikinnick gluten-free boxes: vanilla cookies, animal cookies, flour blend, pancake mix, and chocolate chip cookies",
        width: 960,
        height: 720,
      },
      {
        src: "autismo-usaf-forklift-hangar.jpg",
        alt: "U.S. Air Force Hyster forklift moving a pallet of Kinnikinnick boxes inside the hangar, water pallets stacked nearby",
        width: 960,
        height: 720,
      },
      {
        src: "autismo-jeep-trailer-hangar-loading.jpg",
        alt: "Black CREW Jeep with white enclosed trailer outside the hangar, Air Force forklift loading pallets in the background",
        width: 960,
        height: 720,
      },
      {
        src: "autismo-crewmate-trailer-palletjack.jpg",
        alt: "Crew member wearing a headlamp pushing a tall pallet of Kinnikinnick boxes with a red pallet jack inside a trailer",
        width: 720,
        height: 960,
      },
      {
        src: "autismo-crew-selfie-trailer.jpg",
        alt: "Three crew members selfie inside the trailer, walls of Kinnikinnick boxes stacked behind them",
        width: 960,
        height: 720,
      },
      {
        src: "autismo-flatbed-school-pr-flag.jpg",
        alt: "CREW flatbed truck at a school courtyard with basketball hoop, crew member on the bed with a Puerto Rico flag",
        width: 720,
        height: 960,
      },
      {
        src: "autismo-galindez-pallets-delivery.jpg",
        alt: "Mr. Jose Galindez standing next to black-wrapped pallets on blue pallets with a Clark pallet jack, outside Alianza's building",
        width: 720,
        height: 960,
      },
      {
        src: "autismo-kinnikinnick-unloaded-alianza.jpg",
        alt: "Kinnikinnick Gluten Free boxes unloaded on pallets and a hand cart outside the Alianza de Autismo building, iron fence and flowering plants behind",
        width: 960,
        height: 720,
      },
    ],
    partners: [
      { name: "Alianza de Autismo de Puerto Rico", url: "https://www.facebook.com/alianzaautismo" },
    ],
  },
];
