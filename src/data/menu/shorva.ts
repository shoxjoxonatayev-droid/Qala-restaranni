import { MenuItem } from '../../types';

export const SHORVA_ITEMS: MenuItem[] = [
  {
    id: 'shorva-1',
    name: {
      uz: 'Qaynatma sho‘rva',
      ru: 'Наваристая шурпа из баранины',
      en: 'Rich Lamb Broth (Shurpa)',
    },
    category: 'shorva',
    description: {
      uz: 'Yosh qo‘y go‘shti, yirik kartoshka, shirin sariq sabzi va xushbo‘y damlangan tiniq sho‘rva.',
      ru: 'Традиционный прозрачный бульон из молодой баранины с крупными овощами и восточными специями.',
      en: 'Slow-simmered tender lamb broth with chunky carrots, potatoes, and Khiva mountain herbs.',
    },
    price: 45000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'An‘anaviy', ru: 'Традиционный', en: 'Traditional' },
    portion: { uz: '400 ml', ru: '400 мл', en: '400 ml' },
  },
  {
    id: 'shorva-2',
    name: {
      uz: 'Mastava',
      ru: 'Узбекская мастава',
      en: 'Mastava Rice Soup',
    },
    category: 'shorva',
    description: {
      uz: 'Mayda to‘g‘ralgan mol go‘shti, guruch, sabzavotlar va qatiq bilan tortiladigan milliy sho‘rva.',
      ru: 'Сытный суп с отборной говядиной, рисом, овощами, подается со свежей зеленью и катыком.',
      en: 'Hearty Uzbek rice and diced beef soup served with tangy sour milk and chopped cilantro.',
    },
    price: 35000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '400 ml', ru: '400 мл', en: '400 ml' },
  },
  {
    id: 'shorva-3',
    name: {
      uz: 'Chuchvara sho‘rva',
      ru: 'Чучвара в бульоне',
      en: 'Chuchvara Dumpling Soup',
    },
    category: 'shorva',
    description: {
      uz: 'Qo‘lda tugilgan jajji chuchvaralar tiniq xushbo‘y go‘sht bulyonida, suzma bilan.',
      ru: 'Крошечные ручные пельмешки в ароматном прозрачном бульоне со свежей зеленью.',
      en: 'Handmade miniature dumplings in fragrant clear broth with fresh herbs.',
    },
    price: 35000,
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '380 ml', ru: '380 мл', en: '380 ml' },
  },
  {
    id: 'shorva-4',
    name: {
      uz: 'Qo‘ziqorinli krem sho‘rva',
      ru: 'Грибной крем-суп',
      en: 'Cream of Mushroom Soup',
    },
    category: 'shorva',
    description: {
      uz: 'Shampinyon qo‘ziqorinlari, qaymoq va qarsildoq non bo‘laklari bilan tayyorlangan mayin sho‘rva.',
      ru: 'Нежный суп-пюре из шампиньонов на натуральных сливках с хрустящими чесночными гренками.',
      en: 'Velvety cream soup of fresh mushrooms with roasted garlic croutons.',
    },
    price: 40000,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '350 ml', ru: '350 мл', en: '350 ml' },
  },
];
