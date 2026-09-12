import { MenuItem } from '../../types';

export const SOVUQ_GAZAK_ITEMS: MenuItem[] = [
  {
    id: 'sovuq-1',
    name: {
      uz: 'Xiva ijjon',
      ru: 'Хивинский иджжон',
      en: 'Khiva Ijjon Specialty',
    },
    category: 'sovuq_gazak',
    description: {
      uz: 'Xorazm an‘anaviy uslubida tayyorlangan maxsus sarxil go‘sht va ziravorli qadimiy sovuq taom.',
      ru: 'Легендарная хорезмская холодная закуска из отборной говядины по старинному рецепту.',
      en: 'Ancient Khorezm cold delicacy made from finely minced prime beef and regional spices.',
    },
    price: 25000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Xiva milliy', ru: 'Хивинское', en: 'Khiva Classic' },
    portion: { uz: '200 gr', ru: '200 гр', en: '200 g' },
  },
  {
    id: 'sovuq-2',
    name: {
      uz: 'Sabzavot assorti',
      ru: 'Овощное ассорти',
      en: 'Fresh Vegetable Platter',
    },
    category: 'sovuq_gazak',
    description: {
      uz: 'Yangi uzilgan shirin bodring, qizil pomidor, bolgar qalampiri, turp va sarxil ko‘katlar.',
      ru: 'Сочные томаты, хрустящие огурчики, сладкий перец, редис и свежая зелень.',
      en: 'Garden fresh cucumbers, sweet tomatoes, bell peppers, radishes, and vibrant herbs.',
    },
    price: 50000,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '400 gr', ru: '400 гр', en: '400 g' },
  },
  {
    id: 'sovuq-3',
    name: {
      uz: 'Go‘shtli plato',
      ru: 'Мясное плато',
      en: 'Charcuterie Meat Platter',
    },
    category: 'sovuq_gazak',
    description: {
      uz: 'Qo‘lda tayyorlangan qazi, mayin mol tili, xonaki go‘sht ruleti va dudlangan sarxil go‘shtlar.',
      ru: 'Традиционный казы, нежный говяжий язык, домашний мясной рулет и копчености.',
      en: 'Artisan horsemeat kazy, tender boiled beef tongue, house meatloaf, and cured cuts.',
    },
    price: 120000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Shohona', ru: 'Царское', en: 'Royal' },
    portion: { uz: '380 gr', ru: '380 гр', en: '380 g' },
  },
  {
    id: 'sovuq-4',
    name: {
      uz: 'Pishloqli plato',
      ru: 'Сырное плато',
      en: 'Gourmet Cheese Board',
    },
    category: 'sovuq_gazak',
    description: {
      uz: 'Sara elit pishloqlar to‘plami, yong‘oq mag‘zi, uzum va tabiiy gul asali bilan.',
      ru: 'Изысканные сорта сыров в сочетании со спелым виноградом, грецким орехом и медом.',
      en: 'Curated selection of fine cheeses served with walnuts, sweet grapes, and wild honey.',
    },
    price: 90000,
    image: 'https://images.unsplash.com/photo-1631379578550-7038263db699?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '320 gr', ru: '320 гр', en: '320 g' },
  },
  {
    id: 'sovuq-5',
    name: {
      uz: 'Mevali assorti',
      ru: 'Фруктовое ассорти',
      en: 'Seasonal Fruit Platter',
    },
    category: 'sovuq_gazak',
    description: {
      uz: 'Mavsumiy yangi sarxil mevalar: uzum, anor, olma, nok, shaftoli va kivi.',
      ru: 'Праздничная нарезка сочных сезонных фруктов: виноград, гранат, яблоки, груши, цитрусовые.',
      en: 'Festive arrangement of fresh seasonal fruits: sweet grapes, pomegranate, apples, and citrus.',
    },
    price: 120000,
    image: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '800 gr', ru: '800 гр', en: '800 g' },
  },
];
