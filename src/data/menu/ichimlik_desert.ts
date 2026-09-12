import { MenuItem } from '../../types';

export const ICHIMLIK_ITEMS: MenuItem[] = [
  {
    id: 'ichimlik-1',
    name: {
      uz: 'Xiva Qal‘a choyi',
      ru: 'Чай «Хивинская крепость»',
      en: 'Khiva Qal‘a Herbal Tea',
    },
    category: 'ichimlik',
    description: {
      uz: 'Tog‘ kiyiko‘ti, zanjabil, ko‘k choy, asal va yangi yalpiz barglaridan maxsus damlama.',
      ru: 'Травяной сбор с горным чабрецом, имбирем, медом и свежей мятой.',
      en: 'Fragrant mountain thyme, ginger, green tea leaves, wildflower honey, and fresh mint.',
    },
    price: 25000,
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Choynak', ru: 'Чайник', en: 'Teapot' },
    portion: { uz: '1000 ml', ru: '1000 мл', en: '1000 ml' },
  },
  {
    id: 'ichimlik-2',
    name: {
      uz: 'Ko‘k choy / Kokteyl',
      ru: 'Зеленый чай классический №95',
      en: 'Classic Green Tea No. 95',
    },
    category: 'ichimlik',
    description: {
      uz: 'An‘anaviy Samarqand ko‘k choyi, nafis xushbo‘y va tetiklashtiruvchi.',
      ru: 'Традиционный зеленый чай с мягким бархатистым вкусом.',
      en: 'Traditional Silk Road green tea, light, floral, and naturally refreshing.',
    },
    price: 15000,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '1000 ml', ru: '1000 мл', en: '1000 ml' },
  },
  {
    id: 'ichimlik-3',
    name: {
      uz: 'Anor sharbati',
      ru: 'Свежевыжатый гранатовый сок',
      en: 'Fresh Khiva Pomegranate Juice',
    },
    category: 'ichimlik',
    description: {
      uz: 'Yangi siqilgan xonaki Xiva anorining nordon-shirin tabiiy sharbati.',
      ru: '100% натуральный свежевыжатый сок из спелых гранатов.',
      en: 'Freshly pressed 100% natural ruby pomegranate juice.',
    },
    price: 25000,
    image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '300 ml', ru: '300 мл', en: '300 ml' },
  },
  {
    id: 'ichimlik-4',
    name: {
      uz: 'Xonaki limonad',
      ru: 'Домашний освежающий лимонад',
      en: 'Homemade Citrus Lemonade',
    },
    category: 'ichimlik',
    description: {
      uz: 'Limon, apelsin, yalpiz va tabiiy sharbatdan tayyorlangan muzdek limonad.',
      ru: 'Освежающий лимонад из сока лимона, апельсина и свежей мяты со льдом.',
      en: 'Sparkling citrus lemonade with fresh lime, orange, and garden mint.',
    },
    price: 30000,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '1000 ml', ru: '1000 мл', en: '1000 ml' },
  },
];

export const DESERT_ITEMS: MenuItem[] = [
  {
    id: 'desert-1',
    name: {
      uz: 'Xorazm holvasi',
      ru: 'Хорезмская традиционная халва',
      en: 'Traditional Khorezm Halva',
    },
    category: 'desert',
    description: {
      uz: 'Qadimiy retsept bo‘yicha bug‘doy uni, yog‘ va qiyomdan pishirilgan mayin sharqona shirinlik.',
      ru: 'Нежнейшая восточная халва, приготовленная по старинному хорезмскому рецепту.',
      en: 'Authentic silky flour-based halva slow-simmered with sugar syrup and clarified butter.',
    },
    price: 25000,
    image: 'https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Milliy', ru: 'Традиционное', en: 'Traditional' },
    portion: { uz: '200 gr', ru: '200 гр', en: '200 g' },
  },
  {
    id: 'desert-2',
    name: {
      uz: 'Qal‘a Paxlavasi',
      ru: 'Фирменная пахлава с орехами',
      en: "Signature 'Qal'a' Baklava",
    },
    category: 'desert',
    description: {
      uz: 'Yupqa xamir qatlamlari, maydalangan yong‘oq va asal sharbati bilan qoplangan shohona pishiriq.',
      ru: 'Хрустящие слои теста с грецкими орехами, пропитанные натуральным цветочным медом.',
      en: 'Multi-layered pastry loaded with crushed walnuts and soaked in blossom honey syrup.',
    },
    price: 35000,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '200 gr', ru: '200 гр', en: '200 g' },
  },
  {
    id: 'desert-3',
    name: {
      uz: 'Asalli chak-chak',
      ru: 'Медовый чак-чак',
      en: 'Crispy Honey Chak-Chak',
    },
    category: 'desert',
    description: {
      uz: 'Tillorang qarsildoq xamir naychalari va sof tog‘ asali aralashmasi.',
      ru: 'Золотистые хрустящие полоски теста, пропитанные натуральным горным медом.',
      en: 'Crisp golden pastry ribbons coated in mountain honey glaze.',
    },
    price: 28000,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '200 gr', ru: '200 гр', en: '200 g' },
  },
  {
    id: 'desert-4',
    name: {
      uz: 'Asalli tort (Medovik)',
      ru: 'Торт Медовик домашний',
      en: 'Artisan Honey Cake (Medovik)',
    },
    category: 'desert',
    description: {
      uz: 'Xonaki asalli yumshoq korjlar va smetanali mayin krem uyg‘unligi.',
      ru: 'Нежные медовые коржи с прослойкой из воздушного сметанного крема.',
      en: 'Multi-layered tender honey sponge cakes with velvety sour cream frosting.',
    },
    price: 30000,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '180 gr', ru: '180 гр', en: '180 g' },
  },
];
