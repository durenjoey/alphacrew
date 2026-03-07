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
