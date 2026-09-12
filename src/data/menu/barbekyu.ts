import { MenuItem } from '../../types';

export const BARBEKYU_ITEMS: MenuItem[] = [
  {
    id: 'bbq-1',
    name: {
      uz: 'Tovuq qanotlari',
      ru: 'Куриные крылышки на мангале',
      en: 'Charcoal BBQ Chicken Wings',
    },
    category: 'barbekyu',
    description: {
      uz: 'Xushbo‘y ziravorlarda marinovka qilinib, cho‘g‘da tillarang qilib pishirilgan tovuq qanotlari.',
      ru: 'Ароматные куриные крылышки с дымком, запеченные на живых углях.',
      en: 'Tender chicken wings marinated in paprika and mountain cumin, char-grilled to golden perfection.',
    },
    price: 22000,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '1 six', ru: '1 шампур', en: '1 skewer' },
  },
  {
    id: 'bbq-2',
    name: {
      uz: 'Gijduvon kabob',
      ru: 'Гиждуванский сочный люля-кебаб',
      en: 'Legendary Gijduvon Kebab',
    },
    category: 'barbekyu',
    description: {
      uz: 'Mashhur G‘ijduvon uslubida tayyorlangan sershira, yumshoq va mayin qiyma kabob.',
      ru: 'Легендарный сочный люля-кебаб по секретному гиждуванскому рецепту.',
      en: 'Legendary succulent minced meat skewer seasoned with traditional Silk Road spices.',
    },
    price: 22000,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Mashhur', ru: 'Легендарный', en: 'Famous' },
    portion: { uz: '1 six', ru: '1 шампур', en: '1 skewer' },
  },
  {
    id: 'bbq-3',
    name: {
      uz: 'Mol go‘shtidan bo‘lak shashlik',
      ru: 'Шашлык из мякоти говядины',
      en: 'Beef Tenderloin Shashlik',
    },
    category: 'barbekyu',
    description: {
      uz: 'Mayin va shirali sarxil mol go‘shti bo‘laklari cho‘g‘da meyorida pishirilgan.',
      ru: 'Кусковой шашлык из отборной мякоти молодой говядины с маринованным луком.',
      en: 'Tender prime beef chunks grilled on skewers over glowing coals.',
    },
    price: 32000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '1 six', ru: '1 шампур', en: '1 skewer' },
  },
  {
    id: 'bbq-4',
    name: {
      uz: 'Qo‘y go‘shtidan bo‘lak shashlik',
      ru: 'Шашлык из молодой баранины',
      en: 'Lamb & Tail Fat Skewer',
    },
    category: 'barbekyu',
    description: {
      uz: 'Yosh qo‘y go‘shti lahmi va dumba bo‘laklari terilgan xushbo‘y shashlik.',
      ru: 'Сочный кусковой шашлык из нежной баранины с кусочками ароматного курдюка.',
      en: 'Succulent lamb meat alternating with golden lamb tail fat cracklings.',
    },
    price: 32000,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Shirali', ru: 'Сочный', en: 'Juicy' },
    portion: { uz: '1 six', ru: '1 шампур', en: '1 skewer' },
  },
  {
    id: 'bbq-5',
    name: {
      uz: 'Aralash shashlik',
      ru: 'Шашлык микс (говядина и баранина)',
      en: 'Mixed Meat Shashlik',
    },
    category: 'barbekyu',
    description: {
      uz: 'Mol va qo‘y go‘shtining mukammal uyg‘unlikdagi sershira shashligi.',
      ru: 'Идеальное сочетание отборной говядины и баранины на одном шампуре.',
      en: 'Balanced mix of prime beef and tender lamb seasoned with coriander and zira.',
    },
    price: 28000,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '1 six', ru: '1 шампур', en: '1 skewer' },
  },
  {
    id: 'bbq-6',
    name: {
      uz: 'Sabzavot shashlik',
      ru: 'Шашлык из овощей на углях',
      en: 'Charcoal Vegetable Skewer',
    },
    category: 'barbekyu',
    description: {
      uz: 'Sixda cho‘g‘ ustida pishirilgan pomidor, baqlajon va shirin qalampir.',
      ru: 'Спелые помидоры, баклажаны и болгарский перец, запеченные на шампуре.',
      en: 'Tomatoes, sweet peppers, and baby eggplants roasted over live fire.',
    },
    price: 18000,
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '1 six', ru: '1 шампур', en: '1 skewer' },
  },
  {
    id: 'bbq-7',
    name: {
      uz: 'Grilda baby kartoshka',
      ru: 'Бэби-картофель на мангале',
      en: 'Grilled Baby Potatoes Skewer',
    },
    category: 'barbekyu',
    description: {
      uz: 'Dumba yog‘i va xushbo‘y zira bilan sixda qizartirib pishirilgan yosh mayda kartoshkalar.',
      ru: 'Молодой картофель с тонкими ломтиками курдюка и зирой, запеченный до корочки.',
      en: 'Tender baby potatoes threaded with crispy tail fat and dusted with cumin.',
    },
    price: 15000,
    image: 'https://images.unsplash.com/photo-1518013034458-30d085657538?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '1 six', ru: '1 шампур', en: '1 skewer' },
  },
];
