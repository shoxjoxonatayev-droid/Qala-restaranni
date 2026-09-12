import { MenuItem } from '../../types';

export const BALIQ_ITEMS: MenuItem[] = [
  {
    id: 'baliq-1',
    name: {
      uz: 'Qovurilgan sazan 1 kg',
      ru: 'Жареный сазан 1 кг',
      en: 'Crispy Fried River Carp 1 kg',
    },
    category: 'baliq',
    description: {
      uz: 'Jayxun (Amudaryo) suvidan tutilgan barra sazan balig‘i, tillarang qarsildoq qilib qovurilgan.',
      ru: 'Свежий амударьинский сазан, обжаренный в раскаленном масле до золотистой корочки.',
      en: 'Fresh Amu Darya wild river carp fried golden crisp with regional dipping sauce.',
    },
    price: 120000,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    badge: { uz: '1 kg', ru: '1 кг', en: '1 kg' },
    portion: { uz: '1000 gr', ru: '1000 гр', en: '1000 g' },
  },
  {
    id: 'baliq-2',
    name: {
      uz: 'Setkada sazan 1 kg',
      ru: 'Сазан на углях в сетке 1 кг',
      en: 'Charcoal Grilled Carp in Wire Rack 1 kg',
    },
    category: 'baliq',
    description: {
      uz: 'Cho‘g‘da maxsus setkada tutun hidi bilan pishirilgan shirali sazan balig‘i.',
      ru: 'Нежный сазан, приготовленный на живых углях в решетке с ароматом фруктового дымка.',
      en: 'Whole 1 kg fresh carp grilled over charcoal embers with herbs and lemon.',
    },
    price: 130000,
    image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Cho‘g‘da', ru: 'На углях', en: 'Charcoal' },
    portion: { uz: '1000 gr', ru: '1000 гр', en: '1000 g' },
  },
  {
    id: 'baliq-3',
    name: {
      uz: 'Sousli sazan 1 kg',
      ru: 'Сазан в авторском соусе 1 кг',
      en: 'Braised River Carp in Sauce 1 kg',
    },
    category: 'baliq',
    description: {
      uz: 'Oshpazning sarimsoqli, pomidorli va shirin qalampirli maxsus sousida dimlangan sazan balig‘i.',
      ru: 'Цельный сазан, томленый в сочном кисло-сладком томатно-чесночном соусе.',
      en: 'Fresh river carp slow-simmered in rich garlic-tomato spiced gravy.',
    },
    price: 120000,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Sousda', ru: 'В соусе', en: 'In Sauce' },
    portion: { uz: '1000 gr', ru: '1000 гр', en: '1000 g' },
  },
];
