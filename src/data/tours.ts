export interface TourDestination {
  name: string;
  description: string;
  image?: string;
}

export interface Tour {
  slug: string;
  title: string;
  location: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  destinations: TourDestination[];
}

export const tours: Tour[] = [
  {
    slug: 'ubud-monkey-forest-tour',
    title: 'Ubud Monkey Forest Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/abc5a9ec-a1b9-4460-a48e-39d6eb3db36d.jpeg',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/abc5a9ec-a1b9-4460-a48e-39d6eb3db36d.jpeg',
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/abc5a9ec-a1b9-4460-a48e-39d6eb3db36d.jpeg',
    ],
    description: 'Explore the famous Ubud Monkey Forest and surrounding attractions. This tour takes you through the cultural heart of Bali, visiting markets, palaces, temples, and the iconic monkey sanctuary.',
    highlights: [
      'Visit the sacred Monkey Forest sanctuary',
      'Explore Ubud Market & Ubud Palace',
      'Swing above the jungle at Ubud Jungle Swing',
      'Visit Saraswati Temple with lotus ponds',
      'Guided tour with knowledgeable local guide',
    ],
    destinations: [
      {
        name: 'Ubud Market',
        description: 'The Ubud Market is a bustling hub of local crafts, artworks, and traditional Balinese goods. Visitors can wander through vibrant stalls selling handmade souvenirs, textiles, jewelry, and fresh produce. The market is an excellent place to experience the local culture, practice bargaining skills, and pick up unique items to take home.',
      },
      {
        name: 'Ubud Palace (Puri Saren Agung)',
        description: 'The Ubud Palace is a historical royal residence located in the heart of Ubud. The palace features beautiful traditional Balinese architecture, intricate carvings, and well-maintained gardens. Visitors can explore the grounds and learn about the history of the royal family.',
      },
      {
        name: 'Ubud Jungle Swing',
        description: 'The Ubud Jungle Swing offers an exhilarating experience for adventure seekers and photographers alike. Swinging high above the lush jungle and rice terraces, visitors can enjoy breathtaking views of Bali\'s natural beauty while capturing stunning photos.',
      },
      {
        name: 'Ubud Monkey Forest (Sacred Monkey Forest Sanctuary)',
        description: 'The Ubud Monkey Forest is a lush sanctuary home to over 700 playful long-tailed macaques. Visitors can stroll through the forest\'s winding paths, interacting with the monkeys as they play and swing among the trees. The sanctuary is also home to three ancient temples.',
      },
      {
        name: 'Saraswati Temple (Pura Taman Saraswati)',
        description: 'Saraswati Temple is a beautiful water temple dedicated to the Hindu goddess of knowledge, music, and art. The temple features stunning lotus ponds, intricate carvings, and serene gardens. It\'s a peaceful spot to relax and appreciate the architecture.',
      },
    ],
  },
  {
    slug: 'private-beautiful-beach-tour',
    title: 'PRIVATE DAY TOUR - Beautiful Beach Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/36bce347-6bec-4802-8c02-a5e698c6c1ba.jpeg',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/36bce347-6bec-4802-8c02-a5e698c6c1ba.jpeg',
    ],
    description: 'Discover Bali\'s most beautiful beaches on this private day tour. From golden sands to dramatic cliffside coves, experience the best coastal scenery Bali has to offer.',
    highlights: [
      'Visit multiple stunning beaches',
      'Swim in crystal clear waters',
      'Photo stops at scenic viewpoints',
      'Private tour with flexible itinerary',
      'Hotel pickup and drop-off included',
    ],
    destinations: [
      {
        name: 'Beautiful Beach Tour',
        description: 'Discover Bali\'s most stunning coastal destinations on this private beach tour. Relax on pristine sands, swim in crystal-clear waters, and capture breathtaking views of Bali\'s dramatic coastline.',
      },
    ],
  },
  {
    slug: 'private-bedugul-waterfall-tour',
    title: 'PRIVATE DAY TOUR - Bedugul Waterfall Tour',
    location: 'Bedugul, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/d3bb0fea-830c-449f-81d7-7ce702a14001.png',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/d3bb0fea-830c-449f-81d7-7ce702a14001.png',
    ],
    description: 'Escape to the cool highlands of Bedugul and discover breathtaking waterfalls hidden in the jungle.',
    highlights: [
      'Visit stunning hidden waterfalls',
      'Cool mountain climate escape',
      'Swim in natural pools',
      'Photo opportunities at every stop',
      'Private guide and transportation',
    ],
    destinations: [
      {
        name: 'Bedugul Waterfall Tour',
        description: 'Escape to the cool highlands of Bedugul and discover breathtaking waterfalls hidden in the jungle. This private tour takes you to the most spectacular cascades in the Bedugul region, surrounded by lush tropical forest.',
      },
    ],
  },
  {
    slug: 'private-kintamani-full-day-tour',
    title: 'PRIVATE DAY TOUR - Kintamani Full Day Tour',
    location: 'Kintamani, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/10d3bfeb-d5a0-4130-8a30-be7496e01e54.png',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/10d3bfeb-d5a0-4130-8a30-be7496e01e54.png',
    ],
    description: 'Experience the majestic beauty of Mount Batur and Lake Batur on this full day Kintamani tour.',
    highlights: [
      'Panoramic views of Mount Batur',
      'Visit Lake Batur',
      'Explore traditional Balinese villages',
      'Coffee plantation visit',
      'Full day private tour experience',
    ],
    destinations: [
      {
        name: 'Kintamani Full Day Tour',
        description: 'Experience the majestic beauty of Mount Batur and Lake Batur on this full day Kintamani tour. Witness stunning volcanic landscapes, visit traditional villages, and enjoy panoramic views of Bali\'s most iconic volcano.',
      },
    ],
  },
  {
    slug: 'private-nusa-penida-tour',
    title: 'PRIVATE DAY TOUR - Nusa Penida Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/5fb274fc-c519-4ecd-8590-6e2fe8228c0f.png',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/5fb274fc-c519-4ecd-8590-6e2fe8228c0f.png',
    ],
    description: 'Take a speedboat to the stunning island of Nusa Penida. Explore dramatic cliff formations, pristine beaches, and crystal clear waters.',
    highlights: [
      'Speedboat transfer to Nusa Penida',
      'Visit Kelingking Beach viewpoint',
      'Explore Angel\'s Billabong',
      'Snorkeling at pristine spots',
      'Full day island adventure',
    ],
    destinations: [
      {
        name: 'Nusa Penida Tour',
        description: 'Take a speedboat to the stunning island of Nusa Penida. Explore dramatic cliff formations, pristine beaches, and crystal clear waters. Home to the famous Kelingking Beach and Angel\'s Billabong.',
      },
    ],
  },
  {
    slug: 'ubud-rice-terrace-tour',
    title: 'Ubud Rice Terrace Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/304ddefd-4469-49ad-a8f1-187433028afc.jpeg',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/304ddefd-4469-49ad-a8f1-187433028afc.jpeg',
    ],
    description: 'Discover the iconic Tegallalang Rice Terraces in Ubud. Walk through emerald green rice paddies sculpted into the hillside.',
    highlights: [
      'Visit Tegallalang Rice Terraces',
      'Learn about Subak irrigation system',
      'Walk through lush green paddies',
      'Photo stops at scenic viewpoints',
      'Cultural insights with local guide',
    ],
    destinations: [
      {
        name: 'Ubud Rice Terrace Tour',
        description: 'Discover the iconic Tegallalang Rice Terraces in Ubud. Walk through emerald green rice paddies sculpted into the hillside, and learn about the traditional Subak irrigation system that has sustained Balinese agriculture for centuries.',
      },
    ],
  },
  {
    slug: 'water-sport-beach-tour',
    title: 'Water Sport Beach Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/226283f7-adbe-4887-9426-3857be109419.jpeg',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/226283f7-adbe-4887-9426-3857be109419.jpeg',
    ],
    description: 'Get your adrenaline pumping with Bali\'s best water sports. From jet skiing and parasailing to banana boats and snorkeling.',
    highlights: [
      'Jet skiing and parasailing',
      'Banana boat rides',
      'Snorkeling equipment provided',
      'Professional instructors',
      'All safety equipment included',
    ],
    destinations: [
      {
        name: 'Water Sport Beach Tour',
        description: 'Get your adrenaline pumping with Bali\'s best water sports. From jet skiing and parasailing to banana boats and snorkeling, this tour offers endless fun on the water. Perfect for adventure seekers and families.',
      },
    ],
  },
  {
    slug: 'lempuyang-east-bali-tour',
    title: 'Lempuyang East Bali Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/973b1687-15c5-4edf-9a14-dd1576014a32.jpeg',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/973b1687-15c5-4edf-9a14-dd1576014a32.jpeg',
    ],
    description: 'Visit the iconic Gates of Heaven at Lempuyang Temple, one of Bali\'s most photographed landmarks.',
    highlights: [
      'Visit Lempuyang Temple (Gates of Heaven)',
      'Photo at the iconic gate with Mount Agung backdrop',
      'Explore Tirta Gangga water palace',
      'Visit traditional East Bali villages',
      'Cultural and spiritual experience',
    ],
    destinations: [
      {
        name: 'Lempuyang East Bali Tour',
        description: 'Visit the iconic Gates of Heaven at Lempuyang Temple, one of Bali\'s most photographed landmarks. This tour takes you through East Bali\'s most sacred temples and stunning natural scenery.',
      },
    ],
  },
  {
    slug: 'bedugul-tanah-lot-tour',
    title: 'Bedugul Tanah Lot Tour',
    location: 'Bali, Indonesia',
    image: 'https://img.rezio.io/mip1/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/eeae50a1-2fa9-4492-b6f7-e0f7cae84fc5.jpeg',
    gallery: [
      'https://img.rezio.io/size/6d7e09fb-b34d-48be-88f1-37dd5ba447bc/eeae50a1-2fa9-4492-b6f7-e0f7cae84fc5.jpeg',
    ],
    description: 'Combine the cool highlands of Bedugul with the stunning sea temple of Tanah Lot.',
    highlights: [
      'Visit Ulun Danu Beratan Temple',
      'Explore Bedugul Botanical Garden',
      'Sunset at Tanah Lot Temple',
      'Cool mountain climate experience',
      'Flexible itinerary with private guide',
    ],
    destinations: [
      {
        name: 'Bedugul Tanah Lot Tour',
        description: 'Combine the cool highlands of Bedugul with the stunning sea temple of Tanah Lot. Visit the beautiful Ulun Danu Beratan Temple, enjoy the mountain scenery, and end the day watching the sunset at the iconic Tanah Lot Temple.',
      },
    ],
  },
];
