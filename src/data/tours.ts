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
    image: '/images/ubud-monkey-forest-1.jpg',
    gallery: [
      '/images/ubud-monkey-forest-1.jpg',
      '/images/ubud-monkey-forest-2.jpg',
      '/images/ubud-monkey-forest-3.jpg',
      '/images/ubud-monkey-forest-4.png',
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
        description: 'The Ubud Palace is a historical royal residence located in the heart of Ubud. The palace features beautiful traditional Balinese architecture, intricate carvings, and well-maintained gardens. Visitors can explore the grounds and learn about the history of the royal family. The palace is also a venue for cultural performances, including traditional Balinese dance shows held regularly in the evenings.',
      },
      {
        name: 'Ubud Jungle Swing',
        description: 'The Ubud Jungle Swing offers an exhilarating experience for adventure seekers and photographers alike. Swinging high above the lush jungle and rice terraces, visitors can enjoy breathtaking views of Bali\'s natural beauty while capturing stunning photos. The surrounding area features swings of various heights and nests for unique photo opportunities.',
      },
      {
        name: 'Ubud Monkey Forest (Sacred Monkey Forest Sanctuary)',
        description: 'The Ubud Monkey Forest is a lush sanctuary home to over 700 playful long-tailed macaques. Visitors can stroll through the forest\'s winding paths, interacting with the monkeys as they play and swing among the trees. The sanctuary is also home to three ancient temples that add to the spiritual atmosphere.',
      },
      {
        name: 'Saraswati Temple (Pura Taman Saraswati)',
        description: 'Saraswati Temple is a beautiful water temple dedicated to the Hindu goddess of knowledge, music, and art. The temple features stunning lotus ponds, intricate carvings, and serene gardens. It\'s a peaceful spot to relax and appreciate the architecture while learning about Balinese Hindu culture.',
      },
    ],
  },
  {
    slug: 'private-beautiful-beach-tour',
    title: 'PRIVATE DAY TOUR - Beautiful Beach Tour',
    location: 'Bali, Indonesia',
    image: '/images/beautiful-beach.jpg',
    gallery: [
      '/images/beautiful-beach.jpg',
      '/images/beautiful-beach.jpg',
    ],
    description: 'Discover Bali\'s most beautiful beaches on this private day tour. From golden sands to dramatic cliffside coves, visit Uluwatu Temple, Padang Padang Beach, and more stunning coastal destinations.',
    highlights: [
      'Visit Uluwatu Temple on dramatic cliffs',
      'Relax at Padang Padang Beach (Eat Pray Love fame)',
      'Explore Suluban Beach hidden caves',
      'Sunset at Dreamland Beach',
      'Private tour with flexible itinerary',
    ],
    destinations: [
      {
        name: 'Uluwatu Temple',
        description: 'Uluwatu Temple is one of Bali\'s most famous sea temples, perched on top of a towering cliff 70 meters above the Indian Ocean. This ancient temple offers breathtaking views of the ocean, especially at sunset. Visitors can also enjoy the Kecak Fire Dance performance held here in the evening, with a stunning backdrop of the sunset over the sea.',
      },
      {
        name: 'Padang Padang Beach',
        description: 'Padang Padang Beach is a small yet beautiful beach, known for its golden sand and unique entrance through a narrow rock passage. It gained worldwide fame from the movie Eat, Pray, Love and is a popular spot for both surfers and sunbathers. Surrounded by cliffs, this beach offers a cozy and picturesque spot to relax.',
      },
      {
        name: 'Suluban Beach (Blue Point Beach)',
        description: 'Suluban Beach is a hidden gem located beneath towering cliffs. To access the beach, visitors descend a staircase that weaves through caves and rock formations. Suluban is a favorite among experienced surfers due to its strong waves, but it\'s also a great spot for exploring caves and enjoying stunning views.',
      },
      {
        name: 'Dreamland Beach',
        description: 'Dreamland Beach is a wide, sandy beach surrounded by limestone cliffs, with stunning ocean views. It is a well-known surfing destination due to its big, consistent waves. Dreamland\'s natural beauty, with its white sand and crystal-clear water, makes it an ideal place to relax and watch the sunset.',
      },
    ],
  },
  {
    slug: 'private-bedugul-waterfall-tour',
    title: 'PRIVATE DAY TOUR - Bedugul Waterfall Tour',
    location: 'Bedugul, Indonesia',
    image: '/images/bedugul-waterfall.png',
    gallery: [
      '/images/bedugul-waterfall.png',
      '/images/bedugul-waterfall.png',
    ],
    description: 'Escape to the cool highlands of Bedugul and discover breathtaking waterfalls hidden in the jungle. Visit Banyumala Waterfall, Wanagiri Hidden Hill, and the majestic Gitgit Waterfall.',
    highlights: [
      'Visit Banyumala Waterfall twin cascades',
      'Panoramic views at Wanagiri Hidden Hill',
      'See the Twin Lakes (Buyan & Tamblingan)',
      'Experience 35m Gitgit Waterfall',
      'Private guide and transportation',
    ],
    destinations: [
      {
        name: 'Banyumala Waterfall',
        description: 'Nestled deep in the lush jungles of Bedugul, Banyumala Waterfall is a hidden gem featuring twin cascades flowing down a rugged cliff into a serene, crystal-clear pool. Surrounded by dense tropical vegetation, the tranquil atmosphere is perfect for swimming or simply enjoying the refreshing mist from the falls.',
      },
      {
        name: 'Wanagiri Hidden Hill',
        description: 'Wanagiri Hidden Hill is famous for its breathtaking viewpoints offering panoramic views of Lake Buyan and Lake Tamblingan (the Twin Lakes). The unique photo spots—such as swings, nests, and bamboo platforms—are set against the backdrop of misty mountains and deep blue lakes.',
      },
      {
        name: 'Twin Lake (Lake Buyan & Lake Tamblingan)',
        description: 'These two crater lakes, separated by a narrow strip of rainforest, are often referred to as the Twin Lakes. Surrounded by lush greenery and flanked by hills, the lakes offer a peaceful setting away from the hustle of more touristy areas. Visitors can explore the lakes via a traditional canoe ride.',
      },
      {
        name: 'Gitgit Waterfall',
        description: 'One of Bali\'s most iconic and accessible waterfalls, Gitgit is a powerful cascade dropping from a height of 35 meters. Located in a tranquil rainforest, the trek to Gitgit takes you through a scenic path surrounded by clove and coffee plantations.',
      },
    ],
  },
  {
    slug: 'private-kintamani-full-day-tour',
    title: 'PRIVATE DAY TOUR - Kintamani Full Day Tour',
    location: 'Kintamani, Indonesia',
    image: '/images/kintamani.png',
    gallery: [
      '/images/kintamani.png',
      '/images/kintamani.png',
    ],
    description: 'Experience the majestic beauty of Mount Batur, visit traditional villages, coffee plantations, and enjoy panoramic views of Bali\'s most iconic volcano on this full day tour.',
    highlights: [
      'Panoramic views of Mount Batur',
      'Visit Lake Batur',
      'Explore Tegenungan Waterfall',
      'Coffee plantation with Luwak tasting',
      'Full day private tour experience',
    ],
    destinations: [
      {
        name: 'Batur Volcano',
        description: 'An active volcano offering stunning sunrise views over Lake Batur. A popular destination with scenic vistas of the surrounding mountains and a must-visit for nature lovers and photographers.',
      },
      {
        name: 'Beautiful Rice Terrace',
        description: 'Lush, terraced fields showcasing Bali\'s traditional farming methods. Famous for their green, cascading beauty, these rice terraces offer a glimpse into the island\'s agricultural heritage.',
      },
      {
        name: 'Tegenungan Waterfall',
        description: 'A scenic waterfall surrounded by lush greenery, located near Ubud. A great spot for swimming, photography, and relaxation with a natural pool at the base of the falls.',
      },
      {
        name: 'Coffee Plantation',
        description: 'Visit local plantations to learn about the process of making coffee, including Bali\'s famous Luwak coffee. Enjoy tastings of various coffee and tea blends while taking in the beautiful mountain views.',
      },
    ],
  },
  {
    slug: 'private-nusa-penida-tour',
    title: 'PRIVATE DAY TOUR - Nusa Penida Tour',
    location: 'Bali, Indonesia',
    image: '/images/nusa-penida.png',
    gallery: [
      '/images/nusa-penida.png',
      '/images/nusa-penida.png',
    ],
    description: 'Take a speedboat to the stunning island of Nusa Penida. Explore dramatic cliff formations at Kelingking Beach, swim at Crystal Bay, and visit Angel\'s Billabong and Broken Beach.',
    highlights: [
      'Speedboat transfer to Nusa Penida',
      'Visit Kelingking Beach (T-Rex cliff)',
      'Swim at Angel\'s Billabong infinity pool',
      'See Broken Beach natural arch',
      'Snorkeling at Crystal Bay',
    ],
    destinations: [
      {
        name: 'Crystal Bay',
        description: 'Crystal Bay is known for its crystal-clear waters and vibrant marine life, making it a paradise for snorkeling and diving enthusiasts. This picturesque beach features calm waves, soft white sand, and a stunning backdrop of green hills. It\'s also a prime spot for spotting the elusive Mola Mola (sunfish) during certain times of the year.',
      },
      {
        name: 'Broken Beach (Pasih Uug)',
        description: 'Broken Beach is a stunning coastal marvel where a collapsed sea cave created a natural bridge over a circular bay. This dramatic natural arch allows ocean water to flow into the bay, creating a unique and beautiful sight. The area is also home to manta rays gliding through the water below.',
      },
      {
        name: 'Angel\'s Billabong',
        description: 'Angel\'s Billabong is a natural infinity pool set on a cliff edge, where the water is crystal clear and the rock formations are smooth and unique. When the tide is low, visitors can swim in the calm, clear waters while gazing out over the ocean. Caution is needed during high tide.',
      },
      {
        name: 'Kelingking Beach',
        description: 'One of the most iconic and photographed spots in Bali, Kelingking Beach features a cliff formation that resembles the shape of a T-Rex\'s head. From the top, visitors are treated to a panoramic view of turquoise waters, jagged cliffs, and a secluded white sand beach below.',
      },
    ],
  },
  {
    slug: 'ubud-rice-terrace-tour',
    title: 'Ubud Rice Terrace Tour',
    location: 'Bali, Indonesia',
    image: '/images/rice-terrace.jpg',
    gallery: [
      '/images/rice-terrace.jpg',
      '/images/rice-terrace.jpg',
    ],
    description: 'Discover the iconic Tegallalang Rice Terraces, swing above the jungle at Alas Harum, visit Tegenungan Waterfall, and explore a coffee plantation on this unforgettable tour.',
    highlights: [
      'Visit Tegallalang Rice Terraces',
      'Bali Swing experience at Alas Harum',
      'Swim at Tegenungan Waterfall',
      'Coffee plantation with Luwak tasting',
      'Cultural insights with local guide',
    ],
    destinations: [
      {
        name: 'Tegallalang Rice Terrace',
        description: 'Tegal Lalang is the village near Ubud famous for its stunning rice terraces and landscape. Trekking across rivers and between padi fields is a favorite activity in this area. The bird nest swings, sky bikes, and natural rice field views make this a must-visit destination.',
      },
      {
        name: 'Alas Harum Bali Swing',
        description: 'Alas Harum offers beautiful photo spots with views of rice fields and jungle. Experience the famous Bali Swing, sky bike, and extreme swing. The beautiful landscape with lush greenery makes tourists love to visit this area.',
      },
      {
        name: 'Tegenungan Waterfall',
        description: 'Tegenungan Waterfall is a hidden waterfall near Ubud surrounded by lush greenery and the natural Petanu River. With pedestrian trekking paths suitable for all fitness levels, visitors can take a bath or go swimming in the natural pool.',
      },
      {
        name: 'Bali Coffee Plantation',
        description: 'Located near Tegenungan Waterfall, visit the coffee garden to see Robusta and Arabica coffee plants. The staff will serve coffee drinks and show the Luwak animal eating coffee beans. Don\'t miss this unique experience!',
      },
    ],
  },
  {
    slug: 'water-sport-beach-tour',
    title: 'Water Sport Beach Tour',
    location: 'Bali, Indonesia',
    image: '/images/water-sport.jpg',
    gallery: [
      '/images/water-sport.jpg',
      '/images/water-sport.jpg',
    ],
    description: 'Get your adrenaline pumping with Bali\'s best water sports at Tanjung Benoa. From jet skiing and parasailing to banana boats and snorkeling, plus visits to Nusa Dua Water Blow and Kuta Beach.',
    highlights: [
      'Jet skiing and parasailing at Tanjung Benoa',
      'Banana boat rides',
      'Nusa Dua Water Blow natural attraction',
      'Relax at Kuta Beach sunset',
      'All safety equipment included',
    ],
    destinations: [
      {
        name: 'Tanjung Benoa Water Sports',
        description: 'Tanjung Benoa is the center of water sports activities in Bali. Here you can try various thrilling water sports such as jet skiing, parasailing, banana boat rides, flyboarding, and snorkeling. The calm waters make it a perfect spot for both beginners and experienced enthusiasts.',
      },
      {
        name: 'Nusa Dua Water Blow',
        description: 'Located just a short distance from Tanjung Benoa, Nusa Dua Water Blow is a natural attraction where waves from the Indian Ocean crash dramatically against limestone cliffs, creating large sprays of water. It\'s a popular spot for photography, especially during high tide.',
      },
      {
        name: 'Kuta Beach',
        description: 'A famous beach known for its energetic vibe, Kuta Beach is the go-to spot for surfing and enjoying Bali\'s beautiful sunsets. It offers a long stretch of sand, lively atmosphere, and bustling beach bars, making it a great place to end a day of adventure.',
      },
    ],
  },
  {
    slug: 'lempuyang-east-bali-tour',
    title: 'Lempuyang East Bali Tour',
    location: 'Bali, Indonesia',
    image: '/images/lempuyang.jpg',
    gallery: [
      '/images/lempuyang.jpg',
      '/images/lempuyang.jpg',
    ],
    description: 'Visit the iconic Gates of Heaven at Lempuyang Temple, explore Tirta Gangga Water Palace, and discover the sacred Goa Lawah Bat Cave Temple on this East Bali cultural tour.',
    highlights: [
      'Photo at Lempuyang Temple Gate of Heaven',
      'Explore Tirta Gangga Water Palace',
      'Visit Goa Lawah Bat Cave Temple',
      'Mount Agung backdrop at every stop',
      'Cultural and spiritual experience',
    ],
    destinations: [
      {
        name: 'Lempuyang Temple (Gate of Heaven)',
        description: 'Lempuyang Temple is one of the oldest and most sacred temples in Bali, perched high on the slopes of Mount Lempuyang. It is renowned for its famous Gate of Heaven, where visitors can take photos with the majestic backdrop of Mount Agung framed between the temple\'s gates.',
      },
      {
        name: 'Gate of Heaven',
        description: 'The Gate of Heaven is the iconic entrance to Lempuyang Temple, known for its symmetrical stone gates that perfectly frame Mount Agung in the distance. The spot is popular with photographers due to its ethereal appearance, especially when clouds surround the mountain, giving the impression of standing at the gates of paradise.',
      },
      {
        name: 'Tirta Gangga Water Palace',
        description: 'Tirta Gangga is a former royal water palace built by the Karangasem royal family. It features beautiful gardens, ponds filled with lotus flowers, stepping stones, and intricately carved statues. Visitors can walk through the garden and feed koi fish while enjoying the tranquil surroundings.',
      },
      {
        name: 'Goa Lawah Temple (Bat Cave Temple)',
        description: 'Goa Lawah Temple, also known as the Bat Cave Temple, is one of Bali\'s key temples. The temple is built around a natural cave home to thousands of bats, located near the coastline. It is believed to protect the island from evil spirits.',
      },
    ],
  },
  {
    slug: 'bedugul-tanah-lot-tour',
    title: 'Bedugul Tanah Lot Tour',
    location: 'Bali, Indonesia',
    image: '/images/bedugul-tanah-lot.jpg',
    gallery: [
      '/images/bedugul-tanah-lot.jpg',
      '/images/bedugul-tanah-lot.jpg',
    ],
    description: 'Combine the cool highlands of Bedugul with the stunning sea temple of Tanah Lot. Visit the beautiful Ulun Danu Beratan Temple and end the day watching the sunset at the iconic Tanah Lot Temple.',
    highlights: [
      'Visit Ulun Danu Beratan Temple on the lake',
      'Explore Bedugul Botanical Garden',
      'Sunset at Tanah Lot Temple',
      'Cool mountain climate experience',
      'Flexible itinerary with private guide',
    ],
    destinations: [
      {
        name: 'Ulun Danu Beratan Temple',
        description: 'Ulun Danu Beratan is a stunning temple located on the shores of Lake Beratan in Bedugul. This iconic temple appears to float on the water and is one of Bali\'s most photographed landmarks. Dedicated to the goddess of the lake, it offers a serene atmosphere with cool mountain air.',
      },
      {
        name: 'Bedugul Botanical Garden',
        description: 'The Bedugul Botanical Garden (Kebun Raya Bali) is the largest botanical garden in Indonesia, featuring a vast collection of plants, flowers, and trees. Visitors can stroll through themed gardens and enjoy panoramic mountain views.',
      },
      {
        name: 'Tanah Lot Temple',
        description: 'Tanah Lot is one of Bali\'s most iconic sea temples, perched on a rocky outcrop surrounded by the ocean. This temple is famous for its spectacular sunset views, when the sky turns golden and the silhouette of the temple creates a magical scene.',
      },
    ],
  },
];

