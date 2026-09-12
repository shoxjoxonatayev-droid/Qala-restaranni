import { MenuItem } from '../../types';

export const PASTA_ITEMS: MenuItem[] = [
  {
    id: 'pasta-1',
    name: {
      uz: 'Alfredo pasta',
      ru: 'Феттучини Альфредо',
      en: 'Fettuccine Alfredo',
    },
    category: 'pasta',
    description: {
      uz: 'Fettuchini makaroni, mayin tovuq filesi, shampinyon, qaymoqli sous va parmezan pishlog‘i.',
      ru: 'Классическая паста феттучини с нежным куриным филе, шампиньонами и сливочным пармезаном.',
      en: 'Fettuccine ribbons tossed with sautéed chicken breast, mushrooms, and rich parmesan cream.',
    },
    price: 60000,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Klassik', ru: 'Классика', en: 'Classic' },
    portion: { uz: '350 gr', ru: '350 гр', en: '350 g' },
  },
  {
    id: 'pasta-2',
    name: {
      uz: 'Boloneze pasta',
      ru: 'Спагетти Болоньезе',
      en: 'Spaghetti Bolognese',
    },
    category: 'pasta',
    description: {
      uz: 'Spagetti, uzoq qaynatilgan mol go‘shti qiymasi, xushbo‘y tomat sousi va parmezan.',
      ru: 'Спагетти с традиционным итальянским соусом из томленого говяжьего фарша и томатов.',
      en: 'Spaghetti with slow-braised minced beef ragù, ripe tomatoes, and freshly grated parmesan.',
    },
    price: 60000,
    image: 'https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '350 gr', ru: '350 гр', en: '350 g' },
  },
  {
    id: 'pasta-3',
    name: {
      uz: 'Pomidorini pasta',
      ru: 'Паста Помодорини',
      en: 'Penne Pomodorini',
    },
    category: 'pasta',
    description: {
      uz: 'Cherri pomidorlar, yangi rayhon, zaytun moyi, sarimsoq va quyuq tomat sousi.',
      ru: 'Легкая ароматная паста со сладкими томатами черри, свежим базиликом и чесночком.',
      en: 'Al dente pasta tossed with sweet blistered cherry tomatoes, fresh basil, and extra virgin olive oil.',
    },
    price: 50000,
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '320 gr', ru: '320 гр', en: '320 g' },
  },
  {
    id: 'pasta-4',
    name: {
      uz: 'Karbonara pasta',
      ru: 'Спагетти Карбонара',
      en: 'Spaghetti Carbonara',
    },
    category: 'pasta',
    description: {
      uz: 'Spagetti makaroni, qovurilgan go‘sht bo‘laklari, tuxum sarig‘i, parmezan va qora murch.',
      ru: 'Классическая карбонара с хрустящим мясом, нежным сливочно-желтковым соусом и пармезаном.',
      en: 'Traditional carbonara with crispy cured meat, rich egg yolk cream sauce, and cracked black pepper.',
    },
    price: 70000,
    image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Hit', ru: 'Хит', en: 'Popular' },
    portion: { uz: '350 gr', ru: '350 гр', en: '350 g' },
  },
];
