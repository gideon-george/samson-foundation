export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  /** width/height of the optimised file in public/ — used for layout. */
  width: number;
  height: number;
};

export type GalleryGroup = {
  slug: string;
  title: string;
  intro: string;
  photos: GalleryPhoto[];
};

/**
 * The Foundation's own field photos, grouped by theme.
 * Captions are dignified and factual — beneficiaries are presented
 * with respect, never with pity.
 */
export const galleryGroups: GalleryGroup[] = [
  {
    slug: "mobility-healthcare",
    title: "Mobility Aids & Healthcare",
    intro:
      "Wheelchairs, mobility tricycles, and walkers restore independence to persons living with disabilities — part of the Foundation's humanitarian and healthcare assistance.",
    photos: [
      {
        src: "/images/impact/mobility/tricycle-presentation-team.jpg",
        alt: "Foundation volunteers stand alongside a young man seated in his new hand-pedalled mobility tricycle outside his home.",
        caption: "Presenting a hand-pedalled mobility tricycle to a young man at his home.",
        width: 1500,
        height: 2000,
      },
      {
        src: "/images/impact/mobility/tricycle-handover-home.jpg",
        alt: "A young man tries out his new mobility tricycle while Foundation volunteers look on.",
        caption: "A new mobility tricycle brings fresh independence.",
        width: 1080,
        height: 810,
      },
      {
        src: "/images/impact/mobility/tricycle-beneficiary-visit.jpg",
        alt: "Foundation team members visit a beneficiary seated in his mobility tricycle outside his family home.",
        caption: "Team members visiting a mobility-aid beneficiary and his family.",
        width: 1080,
        height: 810,
      },
      {
        src: "/images/impact/mobility/wheelchair-ready-for-delivery.jpg",
        alt: "A wheelchair standing on green grass, prepared for delivery to a beneficiary.",
        caption: "A wheelchair prepared for delivery to its new owner.",
        width: 1506,
        height: 2000,
      },
      {
        src: "/images/impact/mobility/walker-support-young-man.jpg",
        alt: "A volunteer carefully supports a young man as he receives a new walking frame.",
        caption: "A helping hand and a new walker for a young man in the community.",
        width: 1506,
        height: 2000,
      },
    ],
  },
  {
    slug: "food-relief",
    title: "Food & Relief Distribution",
    intro:
      "Emergency relief materials and food support reach families and communities affected by hardship.",
    photos: [
      {
        src: "/images/impact/relief/relief-materials-distribution.jpg",
        alt: "Community members gather around a pickup truck loaded with bagged relief materials.",
        caption: "Relief materials arriving for distribution to displaced families.",
        width: 2000,
        height: 1506,
      },
      {
        src: "/images/impact/relief/relief-outreach-supplies.jpg",
        alt: "A smiling Foundation team member stands with children and community members beside relief supplies.",
        caption: "Shared joy on distribution day.",
        width: 2000,
        height: 1506,
      },
      {
        src: "/images/impact/relief/community-relief-gathering.jpg",
        alt: "Women and children from the community gather on an open field for a relief outreach.",
        caption: "A community gathers for a relief outreach.",
        width: 2000,
        height: 1506,
      },
      {
        src: "/images/impact/relief/food-parcels-prepared.jpg",
        alt: "Rows of food parcels in yellow bags lined up and ready for distribution.",
        caption: "Food parcels packed and ready for families.",
        width: 720,
        height: 1280,
      },
      {
        src: "/images/impact/relief/food-parcels-packed.jpg",
        alt: "Close view of tied food parcels prepared for a distribution outreach.",
        caption: "Every parcel is a meal for a household.",
        width: 720,
        height: 1280,
      },
    ],
  },
  {
    slug: "education-children",
    title: "Education & Children",
    intro:
      "From school materials to simple moments of encouragement, the Foundation walks alongside underprivileged children and students.",
    photos: [
      {
        src: "/images/impact/children/village-children-visit.jpg",
        alt: "A Foundation worker stands behind seven village children posing together on a dusty road.",
        caption: "Visiting children in a rural community in Taraba State.",
        width: 1506,
        height: 2000,
      },
      {
        src: "/images/impact/children/children-laughing-together.jpg",
        alt: "Children laugh together with a Foundation volunteer on a village road.",
        caption: "Laughter shared during a village visit.",
        width: 1506,
        height: 2000,
      },
      {
        src: "/images/impact/children/children-selfie-joy.jpg",
        alt: "A joyful group selfie of a Foundation volunteer surrounded by smiling children, one holding a handmade football.",
        caption: "Big smiles — and a well-loved football.",
        width: 1500,
        height: 2000,
      },
      {
        src: "/images/impact/children/children-gathered-outreach.jpg",
        alt: "A large group of children gathered outdoors during a Foundation outreach, one being gently comforted.",
        caption: "Children gathered during an outreach day.",
        width: 1506,
        height: 2000,
      },
    ],
  },
  {
    slug: "women-widows-home-visits",
    title: "Women & Widows — Home Visits",
    intro:
      "Home visits bring encouragement, practical support, and fellowship to widows and vulnerable families.",
    photos: [
      {
        src: "/images/impact/homevisits/family-home-visit-encouragement.jpg",
        alt: "A Foundation team member stands and shares words of encouragement with a family seated in their living room.",
        caption: "Words of encouragement during a family home visit.",
        width: 1506,
        height: 2000,
      },
      {
        src: "/images/impact/homevisits/family-home-visit-together.jpg",
        alt: "A family listens together during a Foundation home visit.",
        caption: "Sitting together — support begins with presence.",
        width: 1506,
        height: 2000,
      },
    ],
  },
  {
    slug: "community-outreach",
    title: "Community Outreach",
    intro:
      "Faith-based, community-centred outreach connects the Foundation with the people it serves.",
    photos: [
      {
        src: "/images/impact/community/greeting-community-children.jpg",
        alt: "A Foundation team member bends down to warmly greet children in a crowd during an outreach.",
        caption: "Greetings first — every outreach begins with people.",
        width: 2000,
        height: 1506,
      },
      {
        src: "/images/impact/community/community-visit-gratitude.jpg",
        alt: "A Foundation team member places a hand on his chest in greeting while standing among community members.",
        caption: "Gratitude and fellowship during a community visit.",
        width: 2000,
        height: 1506,
      },
    ],
  },
];
