export interface GalleryPhoto {
  src: string;
  alt: string;
}

export interface GalleryEntry {
  date: string;
  title: string;
  narrative: string;
  caption: string;
  photos: GalleryPhoto[];
}

export const galleryEntries: GalleryEntry[] = [
  {
    date: "September 25, 2017",
    title: "Five days after landfall, the kit list comes together",
    narrative:
      "Hurricane Maria hit Puerto Rico on September 20th. By the 25th, the Duren family had assembled everything they could carry — chainsaws, power tools, safety gear, a jump starter. No formal plan yet. Just a table full of equipment and a decision to go.",
    caption:
      "Here's the equipment that our Crewmates will be sporting in Puerto Rico. #PRHereWeCome",
    photos: [
      {
        src: "gear-loadout-pre-deployment.jpg",
        alt: "Tools and equipment laid out for deployment — chainsaw, circular saw, drill, safety vest, tool belt, boots, bolt cutters, and jump starter",
      },
    ],
  },
  {
    date: "September 26, 2017",
    title: "The 920th Rescue Wing opens its doors",
    narrative:
      "The day after packing their own gear, the first outside support arrived. Members of the 920th Rescue Wing at Patrick Air Force Base donated fuel cans, cases of water, batteries, and supplies — packed into military-grade containers and loaded onto a truck. What started as a family effort was becoming something bigger.",
    caption:
      "A BIG THANKS to the Members of the 920th Rescue Wing at Patrick Air Force Base for their donations!",
    photos: [
      {
        src: "920th-airmen-loading-truck.jpg",
        alt: "Two airmen from the 920th Rescue Wing loading supply cases into a truck at Patrick AFB",
      },
      {
        src: "920th-donations-fuel-water-cases.jpg",
        alt: "Military case packed with fuel cans, water bottles, power inverter, and supplies",
      },
      {
        src: "920th-donations-supply-bin.jpg",
        alt: "Supply bin filled with batteries, trash bags, and other donated goods",
      },
    ],
  },
  {
    date: "September 26, 2017",
    title: "The donations don't stop",
    narrative:
      "Same day, more kept coming. Generators, power inverters, jumper cables — the kind of equipment that matters when an entire island has gone dark. The back of every car was full. What had been a family's impulse to help was turning into a real operation.",
    caption:
      "The donations keep on piling up!",
    photos: [
      {
        src: "donations-generators-inverters.jpg",
        alt: "Portable generator, power inverters, and jumper cables loaded in the back of an SUV",
      },
    ],
  },
  {
    date: "September 27, 2017",
    title: "700 likes, and the volunteers start calling",
    narrative:
      "One week after Maria. The Facebook page had crossed 700 likes and the messages were pouring in — people offering donations, people volunteering to fly out. Fundraisers were being organized across the country. What started in a garage in Florida was becoming a national effort.",
    caption:
      "Thank you all for the Help and Support. Not only already passing 700 likes to make an impact on social media, but also to those who have messaged us for donations and volunteering to fly out with us to help our Families and Friends in Puerto Rico. A simple share and like has been a powerful help as we are now reaching friends and families who are also partnering to help with our mission to help rebuild Puerto Rico! We are currently organizing fundraisers across the U.S. we will be able to make a major impact soon in helping Puerto Rico recover and we owe it all to all of you!",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "1,000 likes by nightfall",
    narrative:
      "The page hit 1,000 likes the same day it had hit 700. Fundraisers were being coordinated across the country. The momentum was undeniable.",
    caption:
      "Wow! We feel incredibly honored to have reached 1000 likes so quickly. We are working hard and now coordinating fundraisers across the United States to keep helping our Families and Friends in Puerto Rico.",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "Satellite imagery reveals the scale",
    narrative:
      "NOAA released aerial and satellite imagery of the damage. The team used it to identify where help was needed most — not just the places making the news, but the communities no one was talking about.",
    caption:
      "This map shows how things look in Puerto Rico right now. Although the imagery is heart-breaking, tools like this help us find the locations that need the most help in Puerto Rico.",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "Vieques and Culebra — cut off, not forgotten",
    narrative:
      "The small islands of Vieques and Culebra were among the hardest hit and the most isolated. Lists of confirmed survivors were circulating on social media — that's how bad communications were. Alpha CREW made a promise: when they found a way to reach them, they would be there. Six weeks later, they kept it.",
    caption:
      "Vieques was terribly affected by Maria. Here is a list of people who have been confirmed to be safe in La Isla Nena: Vieques. When we find a way to get to Vieques and Culebra, we will be there!",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "First shipment heads south",
    narrative:
      "The donations from the 920th were packed and moving. Chainsaw, dog food, fuel — whatever people could give. By the next day, it would be in Puerto Rico.",
    caption:
      "We are sending all of the donations from the members of the 920th Rescue Wing today. These donations will be arriving in Puerto Rico tomorrow!",
    photos: [
      {
        src: "920th-airman-chainsaw-donation.jpg",
        alt: "Airman from the 920th Rescue Wing with chainsaw case, dog food, and supplies ready for shipment",
      },
    ],
  },
  {
    date: "September 26, 2017",
    title: "This is what they were heading into",
    narrative:
      "While the team in Florida was packing supplies and raising money, images from the island were circulating. This was Mayaguez — homes collapsed into the sea, vehicles swallowed by floodwater. No power, no communications, no help coming. This was the reality driving every donation, every loaded truck, every hour of lost sleep.",
    caption:
      "This is Mayaguez Puerto Rico today. Alpha Crew's mission is to go where NO OTHER organization has its focus. Let's end the pain in Puerto Rico. #PRHereWeCome",
    photos: [
      {
        src: "mayaguez-destruction-coastline.jpg",
        alt: "Mayaguez, Puerto Rico — homes collapsed into the ocean, truck submerged in floodwater, a man surveying the destruction from the roadside",
      },
    ],
  },
  {
    date: "September 26, 2017",
    title: "A thousand dollars in a single day",
    narrative:
      "By the end of the day, the GoFundMe had crossed $1,000. People were putting names to donations — Christopher Soto Nieves, Richard Santiago, Rand Duren, Humberto De La Pena. A $20,000 goal that had seemed ambitious was starting to feel possible.",
    caption:
      "We are approximating $1,000 in 1 day. Our fundraising goal of 20,000 is getting closer! A BIG THANK YOU to everyone who has donated! Christopher Soto Nieves, Richard Santiago, Rand Duren, Humberto De La Pena",
    photos: [],
  },
  {
    date: "September 27, 2017",
    title: "Another shipment, palletized and waiting",
    narrative:
      "By dusk, another load was staged and ready — pallets stacked with coolers, generators, military duffel bags, and household supplies. One week after the hurricane, and the pipeline was already running.",
    caption:
      "Another shipment of supplies on its way to Puerto Rico. #LetsRescuePR",
    photos: [
      {
        src: "pallets-loaded-dusk.jpg",
        alt: "Supply pallets loaded at dusk — coolers, generators, military bags, paper towels, and luggage staged for shipment",
      },
    ],
  },
  {
    date: "September 28, 2017",
    title: "First shipment touches down in San Juan",
    narrative:
      "Eight days after Hurricane Maria made landfall, the first Alpha CREW shipment arrived at Luis Mu\u00f1oz Mar\u00edn International Airport. Pallets of generators, fuel, diapers, water, and military cases sat on the tarmac with a forklift standing by. The logistics were brutal, but the pipeline worked.",
    caption:
      "Our first shipment made it to the Luis Mu\u00f1oz Mar\u00edn Airport in Puerto Rico this morning. The logistical struggle continues but we are pushing through.",
    photos: [
      {
        src: "first-shipment-sju-airport.jpg",
        alt: "First Alpha CREW shipment on the tarmac at San Juan airport — pallets loaded with generators, diapers, fuel cans, coolers, and military cases, forklift in background",
      },
    ],
  },
  {
    date: "September 28, 2017",
    title: "iHeart Radio picks up the story",
    narrative:
      "The mission hit the airwaves. Super Martinez on iHeart Latino's Mia 92.1 gave Alpha CREW a shoutout, pushing the fundraising effort to a wider audience. Eight days in, and the operation had gone from a family garage to national radio.",
    caption:
      "iHeart Radio's Super Martinez will be making mention of our mission to aid in raising donations for the cause. Tune into iHeart Latino on Mia 92.1 Today at 3:00 pm Eastern Time!",
    photos: [],
  },
  {
    date: "September 28, 2017",
    title: "The images that kept them going",
    narrative:
      "Photos like this were circulating everywhere — an elderly man evacuated by kayak through chest-deep floodwater, his dog riding beside him, neighbors pushing through the wreckage. Not Alpha CREW's photos, but the images that made sleep impossible and quitting unthinkable.",
    caption:
      "The devastating effects of Maria will linger for years in Puerto Rico. You can help end this suffering by donating to our mission today!",
    photos: [
      {
        src: "pr-flood-kayak-rescue.jpg",
        alt: "Elderly man being evacuated by kayak through flooded streets in Puerto Rico, his dog riding with him, neighbors helping push through the water",
      },
    ],
  },
  {
    date: "September 29, 2017",
    title: "1,100 miles by air, 55 by truck, 20 by boat",
    narrative:
      "The director of health and human services on Vieques called — the hospital's generators were failing. Alpha CREW bought eight 4000-watt generators and began planning the route: fly 1,100 miles to Puerto Rico, truck 55 miles to Fajardo, then boat 20 miles across open water to Vieques. The mayor coordinated safe passage. There was no easy way to get there, so they found the hard way.",
    caption:
      "We are loading some generators to send to a busy hospital in Vieques, PR. The director of health and human services for the island spoke with us and said that they are in need of generators to keep their hospital operations running and we agreed to help. In order to get these generators to Vieques, our crew will have to fly 1,100 miles to Puerto Rico, travel 55 miles by truck to Fajardo and then go another 20 miles by boat to Vieques. There is very limited access to the island, but we have coordinated with the mayor to ensure safe passage.",
    photos: [
      {
        src: "vieques-generators-hangar-staged.jpg",
        alt: "Eight 4000-watt Predator generators stacked in a hangar, staged for shipment to Vieques Hospital",
      },
      {
        src: "vieques-generators-truck-loading.jpg",
        alt: "Volunteer loading generators into a pickup truck bed for transport",
      },
    ],
  },
  {
    date: "September 29, 2017",
    title: "Roads destroyed, $240 million in damage",
    narrative:
      "The Washington Post reported that Puerto Rico's roadways alone would cost at least $240 million to repair. Flooded highways and collapsed infrastructure were keeping first responders from reaching remote areas. This was exactly why Alpha CREW was focused on Vieques and Culebra — the places no one could get to.",
    caption:
      "The roadways in Puerto Rico are destroyed while other roads are completely flooded. This is what is keeping the first responders from being able to head out to the remote areas of the island. Your donations will allow for us to enter areas that are difficult to access, like Vieques and Culebra.",
    photos: [],
  },
  {
    date: "September 29, 2017",
    title: "Generators loaded for airlift to Vieques",
    narrative:
      "The supplies were in transit and the generators were about to go airborne. A major shipment — enough power to keep the Vieques hospital running — was being loaded onto planes. Nine days from hurricane to hospital generators.",
    caption:
      "Our supplies are being transported and loaded onto the planes soon. We will have a major shipment flying out with generators that will help power the hospital in Vieques. Let's continue to make a difference together!",
    photos: [],
  },
  {
    date: "September 30, 2017",
    title: "The crew grows",
    narrative:
      "Ten days in and volunteers were showing up on their own time, buying supplies out of pocket and loading trucks in store parking lots. Michael Cook and Jennifer Cook-Gilpin — two of the crew-mates who made the operation run.",
    caption:
      "Our amazing crew-mates moving donations for our next mission. Thank you for all of your hard work, Michael Cook and Jennifer Cook-Gilpin!",
    photos: [
      {
        src: "volunteers-loading-water-supplies.jpg",
        alt: "Two volunteers loading cases of water and canned goods from a store cart into a pickup truck",
      },
    ],
  },
  {
    date: "September 30, 2017",
    title: "The death toll is climbing. They need medicine.",
    narrative:
      "The post-hurricane death toll was unknown and rising. Families on the mainland were finding out about the deaths of loved ones a week after the fact. People were commenting on Facebook posts looking for any information about relatives. Alpha CREW put out the call — they needed medicine, and they needed contacts who could legally donate it. The mission was largely self-funded. The team was paying out of pocket.",
    caption:
      "The need for support from the United States continues to rise for Puerto Rico. The post-hurricane death toll is unknown but it is climbing. Reading through the comments of this original post is a heart-breaking experience. One person mentioned receiving a call one week after the death of his father... Families are unaware of what is happening to those they love and are unable to help. We MUST do something to help the hospitals, the sick and the wounded. Alpha Crew is looking for medicine to ship to the island. If you have any contacts that can safely and legally donate medicine, we want to talk to them. Also, our mission is largely funded by our own team and friends. We NEED your support to continue making a difference in Puerto Rico.",
    photos: [],
  },
  {
    date: "September 30, 2017",
    title: "Local businesses join the mission",
    narrative:
      "Wang and Cortes Dental in Brevard County set up a donation drive in their office — diapers, baby formula, Lysol, batteries, canned food. A dentist office became a supply depot. The community was finding its own ways to help.",
    caption:
      "We want to thank Wang and Cortes Dental for gathering donations to send to Puerto Rico. Efforts like yours are making a difference in the lives of many.",
    photos: [
      {
        src: "wang-cortes-dental-team.jpg",
        alt: "Alpha CREW members with Wang and Cortes Dental staff standing beside donated supplies — baby formula, Lysol, batteries, and canned food",
      },
      {
        src: "wang-cortes-donations-boxes.jpg",
        alt: "Boxes of diapers and supplies stacked in the dental office, ready for pickup",
      },
    ],
  },
  {
    date: "October 1, 2017",
    title: "Boots on the ground in Puerto Rico",
    narrative:
      "Eleven days after Maria, the team landed in Puerto Rico with supplies, manpower, and generators for the Vieques hospital. The first shipment was already being distributed. These photos captured the staging — bins packed in the hangar, cargo netted onto pallets on the tarmac, and nighttime handoffs in the dark. No streetlights. No power. Just headlights and hands.",
    caption:
      "Our team made it to Puerto Rico yesterday with supplies, manpower, and generators to replace the failing generators at the hospital in Vieques. We have also distributed many of our supplies from our first shipment to those who need them the most. These pictures were taken before the shipment was sent. We will not be able to continue our mission without your donations.",
    photos: [
      {
        src: "tarmac-forklift-cargo-netted.jpg",
        alt: "Airman directing a forklift carrying a cargo-netted pallet of generators, water, and supplies on the tarmac",
      },
      {
        src: "hangar-packing-bins-pallet.jpg",
        alt: "Volunteers packing supply bins onto a pallet inside a hangar, checking inventory lists",
      },
      {
        src: "hangar-hauling-bins-lineup.jpg",
        alt: "Volunteer hauling a supply bin across a hangar floor, line of bins and diapers staged behind her",
      },
      {
        src: "hangar-water-bottles-staged.jpg",
        alt: "Cases of water bottles covering an entire workbench inside the hangar",
      },
      {
        src: "pr-nighttime-supply-distribution.jpg",
        alt: "Two people unloading supplies from an SUV at night in Puerto Rico — no streetlights, total darkness",
      },
    ],
  },
  {
    date: "October 1, 2017",
    title: "The 333rd loads the plane",
    narrative:
      "The 333rd Recruiting Squadron helped load the C-130 that carried supplies to Puerto Rico. Military in flight suits standing next to civilians in shorts and sneakers — under the tail of the aircraft that made it all possible. One team, one fight.",
    caption:
      "Big thanks to our friends at the 333 Recruiting Squadron for their hard work loading the planes with the supplies that arrived in Puerto Rico today. Your efforts have already changed the lives of many. Thank you for your service!",
    photos: [
      {
        src: "333rd-crew-c130-tarmac.jpg",
        alt: "Alpha CREW volunteers and 333rd Recruiting Squadron airmen standing together under the tail of a C-130 on the tarmac",
      },
    ],
  },
  {
    date: "October 2, 2017",
    title: "\"One of millions to come\"",
    narrative:
      "A Facebook post was circulating that stopped everyone cold. An 82-year-old Korean War veteran named William Nieves, alone in Toa Baja, surviving on crackers and two bottles of water. His roof was gone. Insects were eating him alive. He couldn't walk out because of the debris. His family couldn't reach him. \"He's not the only one,\" the post read. \"One of millions to come.\" Puerto Ricans are U.S. citizens. Alpha CREW refused to let them be forgotten.",
    caption:
      "Take a second to go through the attached post. It explains how challenging the situation in Puerto Rico has become. Many people are alone and in need of help! We CANNOT forget them and we CANNOT stop sending help their way. Remember, Puerto Ricans are born US Citizens.",
    photos: [
      {
        src: "william-nieves-facebook-post.jpg",
        alt: "Screenshot of a Facebook post describing an 82-year-old Korean War veteran alone in Puerto Rico, surviving on crackers and two bottles of water after Hurricane Maria",
      },
    ],
  },
  {
    date: "October 2, 2017",
    title: "Las Vegas",
    narrative:
      "In the middle of everything, the Las Vegas shooting. The team paused. Then kept going.",
    caption:
      "Our prayers are with the people of Las Vegas.",
    photos: [],
  },
  {
    date: "October 2, 2017",
    title: "The animals left behind",
    narrative:
      "It wasn't just people. Animals across Puerto Rico — in homes, on streets, on beaches — had been killed or displaced by the storm. The survivors were starving, separated from their owners, wandering through debris. Alpha CREW partnered with Veterinarians for Puerto Rico to address a crisis nobody else was talking about.",
    caption:
      "Many animals in the homes, streets, and beaches of Puerto Rico were killed by the wrath of Hurricane Maria. The animals that survived have lost their homes and owners and are now struggling to find them, as well as food. Our partners at Veterinarians for Puerto Rico are working to make a difference in this sphere and also need our help.",
    photos: [
      {
        src: "veterinarians-for-pr-logo.jpg",
        alt: "Veterinarians for Puerto Rico logo — paw print with Puerto Rican flag star",
      },
    ],
  },
  {
    date: "October 2, 2017",
    title: "The crew-mates who made it run",
    narrative:
      "Behind every shipment were people giving their time, their weekends, their energy. Sandra Christian was one of them — volunteering, coordinating, showing up when it mattered. The comments section was full of people like her.",
    caption:
      "Our posts are filled with great comments of our great teammates and supporters. A big and special thanks to Sandra Christian for her support, volunteerism, and for being a great C.R.E.W.mate.",
    photos: [
      {
        src: "crew-strapping-pallet-tarmac.jpg",
        alt: "Crew members strapping down a pallet of generators, supply bins, and water on the tarmac, ready for airlift",
      },
    ],
  },
  {
    date: "October 3, 2017",
    title: "The team reaches Vieques. Then goes dark.",
    narrative:
      "Alpha CREW made it to Vieques that morning. Then — silence. No internet, no cell service, no way to send updates. The island was that cut off. All the team back in Florida knew was that their people were on the ground and working.",
    caption:
      "Our Crew has made it to Vieques this morning! Once the team returns to an area with internet connectivity, we will update with more pictures. Your support and your donations have made these missions a possibility. Thank you so much!",
    photos: [],
  },
  {
    date: "October 4, 2017",
    title: "Still dark. Still working.",
    narrative:
      "Day two on Vieques with barely a word from the team. They were safe — that much was confirmed — but communications were almost nonexistent. The updates would come later. For now, the work continued in silence.",
    caption:
      "We have barely heard from our team since their arrival to Vieques but we know that they are safe and working hard to continue providing support. We will continue updating as more information flows.",
    photos: [],
  },
  {
    date: "October 5, 2017",
    title: "Generators delivered. Supplies in the plaza.",
    narrative:
      "Word finally came through. The team had distributed supplies in the Vieques Plaza and Esperanza Park. The generators were delivered to the hospital and other government buildings — the whole reason they'd made the 1,100-mile journey. Still no photos. Still no reliable internet. Just confirmation that the mission was done.",
    caption:
      "Yesterday we handed out supplies in the Vieques Plaza and in the Esperanza Park. The generators have been handed to the hospital and other government buildings. When the C.R.E.W. gets some internet connectivity, we will begin posting pictures of the effort.",
    photos: [],
  },
  {
    date: "October 5, 2017",
    title: "The line in Vieques",
    narrative:
      "The internet finally came back long enough to send two photos. A line of residents stretched across a stripped field in Vieques, waiting for supplies. At the front — a flatbed truck with \"ALPHA CREW\" hand-painted on the side, volunteers handing out donations alongside Activados por Puerto Rico and the First Lady's team. Every tree in the background was bare. Every person in line needed something.",
    caption:
      "Our friends in Vieques, Puerto Rico are finally getting the help they need! In these pictures, we are handing out donations that were brought in by the First Lady and another great group of people called Activados por Puerto Rico. Your help, volunteerism, and donations, no matter how small or large, have made a HUGE impact this week.",
    photos: [
      {
        src: "vieques-crowd-waiting-field.jpg",
        alt: "Long line of Vieques residents waiting in a devastated field for supply distribution, stripped trees and damaged buildings in the background",
      },
      {
        src: "vieques-truck-handout-alphacrew.jpg",
        alt: "Alpha CREW volunteers handing out supplies from a flatbed truck with hand-painted ALPHA CREW sign, residents gathering around",
      },
    ],
  },
  {
    date: "October 6, 2017",
    title: "80 families in the town square",
    narrative:
      "World Smile Day. The Alpha CREW truck pulled up to the Vieques town square, next to the church, and started handing out water, food, flashlights, and hygiene products. Eighty families came through the line — mothers with strollers, elderly residents with canes, kids. Eighty families who'd been waiting two weeks for someone to show up.",
    caption:
      "For World Smile Day Alpha CREW wants to bring smiles to those who have donated to our cause. Your donations and your support supplied 80 families with water, food, flashlights, and other hygiene products in the town square of Vieques, Puerto Rico. Let's continue making a difference!",
    photos: [
      {
        src: "vieques-plaza-handout-closeup.jpg",
        alt: "Volunteers on the Alpha CREW truck handing water and supplies to residents gathered in the Vieques town square",
      },
      {
        src: "vieques-plaza-truck-church.jpg",
        alt: "Alpha CREW truck parked by the church in Vieques, crowd of residents receiving supplies",
      },
      {
        src: "vieques-plaza-line-street.jpg",
        alt: "Line of residents stretching down the street in Vieques, waiting for supply distribution from the Alpha CREW truck",
      },
      {
        src: "vieques-plaza-stroller-families.jpg",
        alt: "Families with strollers and children gathering around the Alpha CREW truck in the Vieques plaza",
      },
    ],
  },
  {
    date: "November 6, 2017",
    title: "Medical supplies reach Vieques Hospital by air, land, and sea",
    narrative:
      "Six weeks into the operation, Alpha CREW coordinated an airlift of medical supplies donated by Partners for World Health to the hospital on Vieques — a small island off Puerto Rico's east coast, reachable only by ferry. The cargo moved by truck, then ferry, then hand-delivered to the hospital staff waiting inside.",
    caption:
      "Alpha CREW has made history once again! We have successfully airlifted, transported and delivered very important life saving life supporting supplies donated by Partners for World Health to the Vieques Hospital in Puerto Rico. This has been an odyssey, but extremely rewarding! Thank you C.R.E.W. mates!!",
    photos: [
      {
        src: "vieques-warehouse-staging-area.jpg",
        alt: "Warehouse staging area — pallets of water, supplies, and equipment ready for airlift",
      },
      {
        src: "vieques-night-ops-forklift-loading.jpg",
        alt: "Night operations — crew loading pallets with forklift, military vehicles in background",
      },
      {
        src: "vieques-cargo-pallets-military-flatbed.jpg",
        alt: "Military cargo pallets strapped to flatbed for transport",
      },
      {
        src: "vieques-ferry-crossing.jpg",
        alt: "Loaded truck crossing by ferry to Vieques island",
      },
      {
        src: "vieques-trucks-loaded-staging.jpg",
        alt: "Flatbed trucks loaded with supplies in Vieques",
      },
      {
        src: "vieques-trucks-puerto-rico-wet-roads.jpg",
        alt: "Trucks on wet roads in Puerto Rico, storm damage visible on hillside",
      },
      {
        src: "vieques-hospital-unloading-crew.jpg",
        alt: "Full crew unloading supplies at the hospital",
      },
      {
        src: "vieques-forklift-pallets-dark-skies.jpg",
        alt: "Forklift moving pallets under dark skies, damaged power lines visible",
      },
      {
        src: "vieques-hospital-team-coordinating.jpg",
        alt: "Alpha CREW team coordinating with local staff at the hospital",
      },
      {
        src: "vieques-hospital-supplies-delivered.jpg",
        alt: "Medical supplies delivered inside Vieques Hospital",
      },
    ],
  },
];
