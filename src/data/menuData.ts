import { MenuItem } from '../types';

export const BRAND_LOGO = '/assets/aistudio/chubby_boyz_logo_clean.png';
export const HERO_IMAGE = '/src/assets/images/hero_chubbyz_food_1792536267814.jpg';
export const GATSBY_IMAGE = '/src/assets/images/food_masala_beef_gatsby_1792540739599.jpg';
export const HANGOVER_TUESDAY_IMAGE = '/src/assets/images/hangover_tuesday_games_vibe_1792662865817.jpg';
export const SPORTS_SCREENING_IMAGE = '/src/assets/images/live_sports_screening_match_1792662866269.jpg';
export const EVENT_GAME_NIGHT_IMAGE = '/src/assets/images/hangover_tuesday_games_vibe_1792662865817.jpg';

export const COMMON_BURGER_ADDONS = [
  { name: 'Extra Cheddar Cheese Slice', price: 10 },
  { name: 'Extra Smashed Beef Patty', price: 25 },
  { name: 'Crispy Bacon Bites', price: 15 },
  { name: 'Pickled Jalapenos', price: 8 },
  { name: 'Caramelised Grilled Onions', price: 8 },
  { name: 'Extra Chubby Boyz Signature Sauce', price: 10 },
];

export const COMMON_KOTA_ADDONS = [
  { name: 'Extra Grilled Russian Sausage', price: 20 },
  { name: 'Fried Farm Egg', price: 8 },
  { name: 'Extra Cheese Slice', price: 10 },
  { name: 'Extra Slap Chips Fill', price: 15 },
  { name: 'Crispy Bacon Bites', price: 15 },
];

export const MENU_ITEMS: MenuItem[] = [
  // --- SMASH BURGERS ---
  {
    id: 'chubby-classic',
    name: 'The Chubby Classic',
    category: 'burgers',
    categoryLabel: 'Smash Burgers',
    price: 70.0,
    description: '2 Smashed Beef Patty, 2 American Cheese, Pickles, Chubby Boyz Signature Sauce, Toasted Brioche Bun.',
    image: '/src/assets/images/food_chubby_classic_burger_1792536269342.jpg',
    isPopular: true,
    spiceLevel: 'None',
    tags: ['2 Smashed Patties', '2 American Cheese', 'Signature Sauce', 'Brioche Bun'],
    availableAddons: COMMON_BURGER_ADDONS,
  },
  {
    id: 'double-trouble',
    name: 'Double Trouble',
    category: 'burgers',
    categoryLabel: 'Smash Burgers',
    price: 85.0,
    description: '3 Smashed Beef Patty, 2 American Cheese, Bacon, Pickles, Caramelised Onions, Chubby Boyz Signature Sauce, Toasted Brioche Bun.',
    image: '/src/assets/images/food_chubby_classic_burger_1792536269342.jpg',
    isPopular: true,
    spiceLevel: 'None',
    tags: ['3 Smashed Patties', 'Smoked Bacon', 'Caramelised Onions', 'Brioche Bun'],
    availableAddons: COMMON_BURGER_ADDONS,
  },
  {
    id: 'the-big-boy',
    name: 'The Big Boy',
    category: 'burgers',
    categoryLabel: 'Smash Burgers',
    price: 105.0,
    description: '5 Smashed Beef Patty, Bacon, American Cheese, Pickles, Caramelised Onions, Mushroom Sauce, Toasted Brioche Bun.',
    image: '/src/assets/images/food_big_boy_smash_1792537601639.jpg',
    isPopular: true,
    spiceLevel: 'None',
    tags: ['5 Smashed Patties', 'Crispy Bacon', 'Creamy Mushroom Sauce', 'Heavyweight'],
    availableAddons: COMMON_BURGER_ADDONS,
  },
  {
    id: 'crumbed-butter-chicken',
    name: 'Crumbed Butter Chicken',
    category: 'burgers',
    categoryLabel: 'Smash Burgers',
    price: 75.0,
    description: 'Crumbed Butter Chicken Patty, American Cheese, Pickles, Caramelised Onions, Coleslaw (Red Cabbage).',
    image: '/src/assets/images/food_butter_chicken_burger_1792537603760.jpg',
    spiceLevel: 'Mild',
    tags: ['Crumbed Butter Chicken', 'American Cheese', 'Red Cabbage Coleslaw'],
    availableAddons: COMMON_BURGER_ADDONS,
  },

  // --- SPICY BURGERS ---
  {
    id: 'chilli-bomb',
    name: 'Chilli Bomb',
    category: 'burgers',
    categoryLabel: 'Spicy Burgers',
    price: 85.0,
    description: 'Double Trouble with Chilli & Spicey Sauce. Fire smash for real heat lovers.',
    image: '/src/assets/images/food_chilli_bomb_burger_1792537603291.jpg',
    spiceLevel: 'Fiery',
    isPopular: true,
    tags: ['Double Trouble Base', 'Chilli & Spicey Sauce', 'Fiery Kick'],
    availableAddons: COMMON_BURGER_ADDONS,
  },

  // --- KOTAS ---
  {
    id: 'the-chubby-smash-kota',
    name: 'The Chubby Smash Kota',
    category: 'kotas',
    categoryLabel: 'Kotas',
    price: 85.0,
    description: '2 Smashed Beef Patty, Russian, Polony, Egg, Cheese, Chips packed into an authentic fresh quarter loaf.',
    image: '/src/assets/images/food_chubby_smash_kota_1792536269978.jpg',
    isPopular: true,
    spiceLevel: 'Mild',
    tags: ['2 Smash Patties', 'Russian Sausage', 'Polony', 'Farm Egg', 'Chips', 'Cheese'],
    availableAddons: COMMON_KOTA_ADDONS,
  },

  // --- GATSBY (MASSIVE CREW SHARING SUB) ---
  {
    id: 'masala-tika-beef-gatsby',
    name: 'Masala Tika Beef Gatsby',
    category: 'gatsby',
    categoryLabel: 'Gatsby Sharing Loaf',
    price: 350.0,
    description: 'Beef Strips, Chips, Bacon, Russian, Polony, Chubby Boyz Secret Sauce, Lettuce, Red Onion, Cucumber. Massive sharing sub loaf for your entire crew!',
    image: GATSBY_IMAGE,
    isPopular: true,
    spiceLevel: 'Spicy',
    tags: ['Masala Beef Strips', 'Slap Chips', 'Bacon & Russian', 'Polony', 'Feeds 4-6'],
  },

  // --- COMBOS ---
  {
    id: 'chubby-classic-combo',
    name: 'The Chubby Classic Combo',
    category: 'combos',
    categoryLabel: 'Combos',
    price: 160.0,
    description: '2 Chubby Classic Burgers and 4 Wings tossed in your choice of signature sauce.',
    image: HERO_IMAGE,
    isPopular: true,
    tags: ['2 Chubby Classic Burgers', '4 Sticky Wings', 'Perfect Duo Deal'],
  },
  {
    id: 'chubby-buddies-combo',
    name: 'The Chubby Buddies Combo',
    category: 'combos',
    categoryLabel: 'Combos',
    price: 340.0,
    description: '4 Chubby Classic Burgers, 8 Wings, and Chubby Loaded Fries. The ultimate feast for game nights & crew hangouts.',
    image: HERO_IMAGE,
    isPopular: true,
    tags: ['4 Classic Burgers', '8 Wings', 'Chubby Loaded Fries', 'Crew Feast'],
  },

  // --- WINGS ---
  {
    id: 'chubby-sticky-wings',
    name: 'Chubby Sticky Wings',
    category: 'wings',
    categoryLabel: 'Wings',
    price: 30.0,
    description: 'Tender chicken wings tossed in your choice of signature sticky sauce — BBQ, Sweet Chilli, Buffalo, or Peri-Peri.',
    image: '/src/assets/images/food_sticky_wings_1792536270226.jpg',
    isPopular: true,
    spiceLevel: 'Mild',
    tags: ['Tender Chicken Wings', 'Choice of 4 Sauces', 'BBQ / Sweet Chilli / Buffalo / Peri-Peri'],
    sizes: [
      { label: '4 Wings', price: 30.0 },
      { label: '8 Wings', price: 55.0 },
    ],
  },

  // --- LOADED FRIES ---
  {
    id: 'loaded-chilli-fries',
    name: 'Loaded Chilli Fries',
    category: 'chips',
    categoryLabel: 'Loaded Fries',
    price: 30.0,
    description: 'Crispy Golden Fries smothered in rich, Creamy Cheese Sauce and topped with a generous layer of Melted Cheese, Jalapeno and Bacon Bites.',
    image: '/src/assets/images/food_babalaaz_slap_chips_1792536270307.jpg',
    isPopular: true,
    spiceLevel: 'Spicy',
    tags: ['Creamy Cheese Sauce', 'Melted Cheese Layer', 'Jalapeno & Bacon Bites'],
    sizes: [
      { label: 'Small Box', price: 30.0 },
      { label: 'Regular Box', price: 50.0 },
    ],
  },

  // --- SLAP CHIPS ---
  {
    id: 'slap-chips-portion',
    name: 'Traditional Slap Chips',
    category: 'chips',
    categoryLabel: 'Slap Chips',
    price: 35.0,
    description: 'Golden soft Jozi slap chips tossed in salt, brown vinegar, and spicy chip seasoning.',
    image: '/src/assets/images/food_classic_slap_chips_1792537604566.jpg',
    tags: ['Traditional Slap Style', 'Salt & Vinegar', 'Chip Seasoning'],
    sizes: [
      { label: 'Small', price: 35.0 },
      { label: 'Medium', price: 49.0 },
      { label: 'Large', price: 75.0 },
      { label: 'Chubby King', price: 95.0 },
    ],
  },
  {
    id: 'babalaaz-slap-chips-med',
    name: 'Babalaaz Slap Chips (Medium)',
    category: 'chips',
    categoryLabel: 'Slap Chips',
    price: 55.0,
    description: 'The Fox Street hangover cure: soft slap chips loaded with sliced Russian sausage, crispy bacon pieces, and fresh sliced chillies.',
    image: '/src/assets/images/food_babalaaz_slap_chips_1792536270307.jpg',
    isPopular: true,
    spiceLevel: 'Spicy',
    tags: ['Russian', 'Bacon', 'Chillies', 'Medium Box'],
  },

  // --- BEVERAGES ---
  {
    id: 'soft-drinks',
    name: 'Soft Drinks (Can)',
    category: 'drinks',
    categoryLabel: 'Beverages',
    price: 30.0,
    description: 'Ice-cold carbonated cans: Coca Cola, Fanta, Sprite, or Coke Zero.',
    image: '/src/assets/images/food_refreshment_drinks_1792537623236.jpg',
    tags: ['Coca Cola', 'Fanta', 'Sprite', 'Coke Zero'],
  },
  {
    id: 'tonic-water',
    name: 'Tonic Water',
    category: 'drinks',
    categoryLabel: 'Beverages',
    price: 30.0,
    description: 'Crisp, chilled tonic water mixer.',
    image: '/src/assets/images/food_refreshment_drinks_1792537623236.jpg',
    tags: ['Chilled Mixer', 'Tonic'],
  },
  {
    id: 'lemondade',
    name: 'Lemondade',
    category: 'drinks',
    categoryLabel: 'Beverages',
    price: 30.0,
    description: 'Sweet and tangy sparkling lemonade refreshment.',
    image: '/src/assets/images/food_refreshment_drinks_1792537623236.jpg',
    tags: ['Citrus Fizz', 'Lemonade'],
  },
  {
    id: 'redbull',
    name: 'Redbull Energy Drink',
    category: 'drinks',
    categoryLabel: 'Beverages',
    price: 35.0,
    description: 'Vitalizes body and mind for late night gaming and sports screenings.',
    image: '/src/assets/images/food_refreshment_drinks_1792537623236.jpg',
    tags: ['Energy Drink', 'Chilled Can'],
  },
  {
    id: 'still-water',
    name: 'Still Water',
    category: 'drinks',
    categoryLabel: 'Beverages',
    price: 25.0,
    description: 'Bottled pure still mineral water.',
    image: '/src/assets/images/food_refreshment_drinks_1792537623236.jpg',
    tags: ['Pure Water', 'Bottled'],
  },
  {
    id: 'ice-serving',
    name: 'Ice (Cup / Bucket)',
    category: 'drinks',
    categoryLabel: 'Beverages',
    price: 15.0,
    description: 'Serving of clean ice cubes to keep your drinks ice-cold.',
    image: '/src/assets/images/food_refreshment_drinks_1792537623236.jpg',
    tags: ['Ice Cold', 'Add to drinks'],
  },
];

export const STORE_INFO = {
  name: 'Chubby Boyz',
  shortName: 'Chubby Boyz',
  tagline: 'Bold Street-Food Energy & Massive Portions',
  address: '289 Fox Street, Jeppestown, Johannesburg, GP 2001',
  suburb: 'Jeppestown / Maboneng Precinct',
  city: 'Johannesburg',
  country: 'South Africa',
  rating: 4.8,
  reviewCount: 142,
  uberEatsUrl: 'https://www.ubereats.com/store/chubby-boyz/289-fox-street-johannesburg',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=289+Fox+St+Jeppestown+Johannesburg+2001',
  googleMapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Chubby+Boyz+289+Fox+Street+Jeppestown+Johannesburg',
  phone: '076 294 5349',
  phoneRaw: '0762945349',
  whatsappNumber: '27762945349',
  instagram: '@chubbyboyz_za',
  instagramUrl: 'https://www.instagram.com/chubbyboyz_za',
  tiktok: '@chubbyboyz_za',
  tiktokUrl: 'https://www.tiktok.com/@chubbyboyz_za',
  hours: {
    weekdays: '12:00 PM – Late',
    saturday: '12:00 PM – Late',
    sunday: '10:00 AM – Late',
  },
};

export const REVIEWS = [
  {
    id: 1,
    author: 'Kagiso M.',
    location: 'Maboneng Resident',
    rating: 5,
    date: 'Uber Eats Verified',
    comment: 'The Chubby Smash Kota is insane! That smash patty combined with the runny egg, russian, and polony inside the quarter loaf changed everything. Best late night food on Fox Street hands down.',
  },
  {
    id: 2,
    author: 'Lerato Dlamini',
    location: 'Jeppestown Regular',
    rating: 5,
    date: 'Hangover Tuesday Fan',
    comment: 'Hangover Tuesday game nights are unmatched. Brought our whole crew, played Jenga and cards, watched the match on big screens, and ordered the Chubby Buddies Combo. 10/10 vibes!',
  },
  {
    id: 3,
    author: 'Tshepo Nkosi',
    location: 'Johannesburg CBD',
    rating: 5,
    date: 'Live Sports Regular',
    comment: 'The Masala Tika Beef Gatsby is a monster — fed 5 of us during the football screening. Smashed beef patties are on point and always open till late.',
  },
];
