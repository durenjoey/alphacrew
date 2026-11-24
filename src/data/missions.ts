import { galleryEntries, type GalleryPhoto, type MissionId } from "./gallery";
import { isoDay } from "./days";

// The six missions told near the top of the page. Every fact in the text comes from a 2017 post.
// Each mission shows a few photos from its own posts and links to its first day in the log.
export interface Mission {
  id: MissionId;
  title: string;
  when: string;
  text: string;
  // file names of photos from this mission's posts, in the order shown
  photos: string[];
  // one line under the photos, where a photo needs pointing out
  photoNote?: string;
}

export const missions: Mission[] = [
  {
    id: "vieques-generators",
    title: "Generators for the Vieques hospital",
    when: "September 29 to October 7",
    text: "The island's health director told us the hospital's generators were failing. We sent eight 4,000-watt generators 1,100 miles by air, 55 by truck and 20 by boat. The crew reached Vieques on October 3. Three days later the hospital and the dialysis clinic had power, and more than 500 families had food, water and supplies.",
    photos: [
      "vieques-generators-hangar-staged.jpg",
      "tarmac-forklift-cargo-netted.jpg",
      "vieques-crew-photo-taped-sign.jpg",
      "vieques-plaza-handout-closeup.jpg",
      "vieques-satphone-call-family.jpg",
    ],
  },
  {
    id: "shipment-65k",
    title: "65,000 lbs in 48 hours",
    when: "October 24 and 25",
    text: "We sent 15,000 lbs on Tuesday and 50,000 lbs on Wednesday from Florida to Georgia for the airlift to Puerto Rico. Every item was labeled and on a manifest.",
    photos: [
      "65k-flatbed-crew-posing.jpg",
      "65k-medical-equipment-staged.jpg",
      "65k-box-truck-loading-rain.jpg",
      "65k-forklift-warehouse.jpg",
    ],
  },
  {
    id: "hospitals",
    title: "Medical supplies to two hospitals",
    when: "October 20 and November 6",
    text: "Partners for World Health sent the supplies. We carried one load from the San Juan airport to the children's hospital in Bayamón and another by plane, truck and ferry to the hospital on Vieques.",
    photos: [
      "bayamon-crew-truck-lmm-airport.jpg",
      "bayamon-pwh-boxes-truck-cab.jpg",
      "bayamon-childrens-hospital-arrival.jpg",
      "vieques-ferry-crossing.jpg",
      "vieques-hospital-supplies-delivered.jpg",
    ],
    photoNote:
      "The ferry picture is a screenshot from a phone. Its top bar reads No Service at 10% battery.",
  },
  {
    id: "mountains",
    title: "Into the mountains",
    when: "October 15 to 26",
    text: "We scouted Utuado and found people crossing a river because their bridge had collapsed. We went back with Climbing Puerto Rico to help farmers and clear a family's driveway, and again with six other groups to bring food and baby supplies to eight barrios in Utuado and Jayuya.",
    photos: [
      "utuado-collapsed-bridge.jpg",
      "utuado-surveying-bridge.jpg",
      "utuado-clearing-debris-farm.jpg",
      "utuado-jayuya-convoy-rural-road.jpg",
    ],
  },
  {
    id: "door-to-door",
    title: "Door to door",
    when: "October 16 to November 10",
    text: "In Aguas Buenas we found seniors eating once a day and left water purifiers. In St. Just we checked on Ms. Carmen Rivera for her family in New Jersey and handed her a phone. With Fundación El Plato Caliente and Voces we carried hot meals to people who could not leave home.",
    photos: [
      "aguas-buenas-porch-checkup.jpg",
      "carmen-rivera-welfare-check.jpg",
      "hotmeals-elderly-delivery.jpg",
      "platocaliente-trunk-elderly-women.jpg",
      "voces-serving-rice-stew.jpg",
    ],
  },
  {
    id: "animals",
    title: "The animals",
    when: "October 2 to 17",
    text: "We moved supplies for Veterinarians for Puerto Rico and the Humane Society, helped get dogs on a flight to New York with Guardians of Rescue, kept vaccines cold in a crew member's refrigerator, and helped move the animals out when the Guaynabo shelter flooded.",
    photos: [
      "humane-society-dogs-carriers.jpg",
      "humane-society-aircraft-loading.jpg",
      "jorgito-fridge-vaccines.jpg",
      "guaynabo-animals-relocated-gym.jpg",
      "vetsforpr-animal-shelter-crates.jpg",
    ],
  },
];

// The photos a mission shows, taken from its own posts. A file name that is not in one of them stops the build.
export function missionPhotos(mission: Mission): GalleryPhoto[] {
  const own = galleryEntries
    .filter((entry) => entry.mission === mission.id)
    .flatMap((entry) => entry.photos);
  return mission.photos.map((name) => {
    const photo = own.find((p) => p.src === name);
    if (!photo) {
      throw new Error(`${name} is not in a post tagged ${mission.id}`);
    }
    return photo;
  });
}

// The anchor of the first day in the log that has a post from this mission, such as "2017-09-29"
export function missionFirstDay(mission: Mission): string {
  const first = galleryEntries.find((entry) => entry.mission === mission.id);
  if (!first) throw new Error(`no post is tagged ${mission.id}`);
  return isoDay(first.date);
}

// How the supplies moved, in order: six photos and one line under each.
export interface MoveStep {
  photo: GalleryPhoto;
  line: string;
}

function photoNamed(name: string): GalleryPhoto {
  for (const entry of galleryEntries) {
    const photo = entry.photos.find((p) => p.src === name);
    if (photo) return photo;
  }
  throw new Error(`${name} is not in the log`);
}

export const howItMoved: MoveStep[] = [
  {
    photo: photoNamed("333rd-warehouse-overhead.jpg"),
    line: "We collected and palletized in Florida.",
  },
  {
    photo: photoNamed("65k-flatbed-forklift-loading.jpg"),
    line: "We trucked it to Savannah.",
  },
  {
    photo: photoNamed("vieques-c130-loading-tarmac.jpg"),
    line: "Airmen loaded it onto a C-130.",
  },
  {
    photo: photoNamed("vieques-trucks-loaded-staging.jpg"),
    line: "We loaded the CREW trucks.",
  },
  {
    // the frame cut from the phone screenshot in the November 6 post, without the phone's bars
    photo: {
      src: "vieques-ferry-crossing-frame.jpg",
      alt: "Loaded truck crossing by ferry to Vieques island",
      width: 1125,
      height: 1544,
    },
    line: "We took the ferry to Vieques.",
  },
  {
    photo: photoNamed("vieques-truck-handout-alphacrew.jpg"),
    line: "We handed it out from the truck.",
  },
];
