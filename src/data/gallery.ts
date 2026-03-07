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
