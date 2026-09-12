import { MenuItem } from '../../types';

export const BURGER_ITEMS: MenuItem[] = [
  {
    id: 'burger-1',
    name: {
      uz: 'Klassik burger',
      ru: 'Классический бургер',
      en: 'Classic Beef Burger',
    },
    category: 'burger',
    description: {
      uz: 'Shirali mol go‘shti kotleti, erigan cheddar pishlog‘i, tuzlangan bodring, pomidor va maxsus sous.',
      ru: 'Сочная котлета из отборной говядины, расплавленный сыр чеддер, соленые огурчики и фирменный соус.',
      en: 'Juicy 100% beef patty, melted cheddar, crisp pickles, ripe tomatoes, and house sauce in a toasted brioche bun.',
    },
    price: 50000,
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '320 gr', ru: '320 гр', en: '320 g' },
  },
  {
    id: 'burger-2',
    name: {
      uz: 'Tovuqli burger',
      ru: 'Куриный бургер (Crispy)',
      en: 'Crispy Chicken Burger',
    },
    category: 'burger',
    description: {
      uz: 'Qarsildoq qovurilgan tovuq filesi, aysberg salat bargi, yangi pomidor va yengil mayonez sousi.',
      ru: 'Хрустящее куриное филе в золотистой панировке, сочные листья салата и нежный соус.',
      en: 'Crispy golden chicken breast fillet, fresh iceberg lettuce, and creamy herb dressing.',
    },
    price: 43000,
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '300 gr', ru: '300 гр', en: '300 g' },
  },
  {
    id: 'burger-3',
    name: {
      uz: 'Steyk burger',
      ru: 'Стейк-бургер премиум',
      en: 'Gourmet Steak Burger',
    },
    category: 'burger',
    description: {
      uz: 'Yupqa kesilgan mayin steyk bo‘laklari, karamellangan piyoz, dudlangan pishloq va barbekyu sousi.',
      ru: 'Нежные кусочки сочного стейка, карамелизованный лук, сыр и пикантный соус барбекю.',
      en: 'Tender grilled steak cuts, caramelized onions, smoked cheese, and rich BBQ sauce.',
    },
    price: 60000,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Premum', ru: 'Премиум', en: 'Premium' },
    portion: { uz: '350 gr', ru: '350 гр', en: '350 g' },
  },
];
