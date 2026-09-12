import { MenuCategory, MenuItem } from '../types';
import { NON_ITEMS } from './menu/non';
import { SALAT_ITEMS } from './menu/salat';
import { GARNIR_SOUS_ITEMS } from './menu/garnir_sous';
import { SOVUQ_GAZAK_ITEMS } from './menu/sovuq_gazak';
import { PIZZA_PIDE_ITEMS } from './menu/pizza_pide';
import { SHORVA_ITEMS } from './menu/shorva';
import { PASTA_ITEMS } from './menu/pasta';
import { ASOSIY_ITEMS } from './menu/asosiy';
import { BALIQ_ITEMS } from './menu/baliq';
import { BURGER_ITEMS } from './menu/burger';
import { XAMIRLI_ITEMS } from './menu/xamirli';
import { BARBEKYU_ITEMS } from './menu/barbekyu';
import { ASSORTI_ITEMS } from './menu/assorti';
import { ICHIMLIK_ITEMS, DESERT_ITEMS } from './menu/ichimlik_desert';

export const RESTAURANT_LOGO_URL = 'https://firebasestorage.googleapis.com/v0/b/oson-menu.firebasestorage.app/o/establishment-logo%2F1777465075740-edited-logo-1777465075702.jpg?alt=media&token=416d4d7d-9e09-4525-aab1-e9cfece0ecd2';

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    key: 'non',
    label: {
      uz: 'Non',
      ru: 'Хлеб и Лепешки',
      en: 'Bread & Flatbreads',
    },
    sublabel: {
      uz: 'Tandirdan uzilgan',
      ru: 'С пылу с жару из тандыра',
      en: 'Fresh tandoor bread',
    },
    iconName: 'Wheat',
  },
  {
    key: 'salat',
    label: {
      uz: 'Salatlar',
      ru: 'Салаты',
      en: 'Salads',
    },
    sublabel: {
      uz: 'Yangi sabzavotlar',
      ru: 'Свежие овощи и зелень',
      en: 'Fresh Greens & Vegetables',
    },
    iconName: 'Salad',
  },
  {
    key: 'garnir_sous',
    label: {
      uz: 'Garnir / Souslar',
      ru: 'Гарниры / Соусы',
      en: 'Sides / Sauces',
    },
    sublabel: {
      uz: 'Qo‘shimchalar',
      ru: 'Гарниры и соусы',
      en: 'Side dishes & dips',
    },
    iconName: 'Layers',
  },
  {
    key: 'sovuq_gazak',
    label: {
      uz: 'Sovuq gazaklar',
      ru: 'Холодные закуски',
      en: 'Cold Appetizers',
    },
    sublabel: {
      uz: 'Ishtaha ochar',
      ru: 'Мясные и сырные нарезки',
      en: 'Starters & platters',
    },
    iconName: 'Ham',
  },
  {
    key: 'pizza_pide',
    label: {
      uz: 'Pizza & Pide',
      ru: 'Пицца и Пиде',
      en: 'Pizza & Pide',
    },
    sublabel: {
      uz: 'Qaynoq pishiriqlar',
      ru: 'Горячая выпечка из печи',
      en: 'Oven-baked flatbreads',
    },
    iconName: 'Pizza',
  },
  {
    key: 'shorva',
    label: {
      uz: 'Sho‘rvalar',
      ru: 'Супы',
      en: 'Soups',
    },
    sublabel: {
      uz: 'Qaynoq damlamalar',
      ru: 'Наваристые бульоны',
      en: 'Rich savory broths',
    },
    iconName: 'Soup',
  },
  {
    key: 'pasta',
    label: {
      uz: 'Pasta',
      ru: 'Паста',
      en: 'Pasta',
    },
    sublabel: {
      uz: 'Italyancha lazzat',
      ru: 'Итальянская паста',
      en: 'Italian classics',
    },
    iconName: 'UtensilsCrossed',
  },
  {
    key: 'asosiy',
    label: {
      uz: 'Asosiy taomlar',
      ru: 'Основные блюда',
      en: 'Main Courses',
    },
    sublabel: {
      uz: 'Steyk & Qovurmalar',
      ru: 'Стейки, кебабы и жаркое',
      en: 'Steaks & braised meats',
    },
    iconName: 'Flame',
  },
  {
    key: 'baliq',
    label: {
      uz: 'Baliq',
      ru: 'Рыбные блюда',
      en: 'Fish & Seafood',
    },
    sublabel: {
      uz: 'Jayxun daryo balig‘i',
      ru: 'Амударьинский сазан',
      en: 'Fresh river carp',
    },
    iconName: 'Fish',
  },
  {
    key: 'burger',
    label: {
      uz: 'Burgerlar',
      ru: 'Бургеры',
      en: 'Burgers',
    },
    sublabel: {
      uz: 'Shirali bifshtekslar',
      ru: 'Сочные бургеры',
      en: 'Handcrafted burgers',
    },
    iconName: 'Sandwich',
  },
  {
    key: 'xamirli',
    label: {
      uz: 'Xamirli taomlar',
      ru: 'Мучные блюда',
      en: 'Dough & Pastries',
    },
    sublabel: {
      uz: 'Barak & Shivit oshi',
      ru: 'Бараки, шивит оши, капширма',
      en: 'Handmade Khorezm dumplings',
    },
    iconName: 'CookingPot',
  },
  {
    key: 'barbekyu',
    label: {
      uz: 'Barbekyu',
      ru: 'Барбекю и Шашлыки',
      en: 'Barbecue & Kebabs',
    },
    sublabel: {
      uz: 'Cho‘g‘da pishgan',
      ru: 'На живых углях',
      en: 'Charcoal grills',
    },
    iconName: 'FlameKindling',
  },
  {
    key: 'assorti',
    label: {
      uz: 'Assorti taomlar',
      ru: 'Ассорти блюда',
      en: 'Assorted Platters',
    },
    sublabel: {
      uz: 'Katta davralar uchun',
      ru: 'Для больших компаний',
      en: 'Generous feast boards',
    },
    iconName: 'Sparkles',
  },
  {
    key: 'ichimlik',
    label: {
      uz: 'Ichimliklar',
      ru: 'Напитки',
      en: 'Beverages',
    },
    sublabel: {
      uz: 'Damlamalar & Sharbat',
      ru: 'Чай, лимонады и соки',
      en: 'Teas & Juices',
    },
    iconName: 'Coffee',
  },
  {
    key: 'desert',
    label: {
      uz: 'Desertlar',
      ru: 'Десерты',
      en: 'Desserts',
    },
    sublabel: {
      uz: 'Sharqona shirinliklar',
      ru: 'Восточные сладости',
      en: 'Oriental Sweets',
    },
    iconName: 'Croissant',
  },
];

export const MENU_ITEMS: MenuItem[] = [
  ...NON_ITEMS,
  ...SALAT_ITEMS,
  ...GARNIR_SOUS_ITEMS,
  ...SOVUQ_GAZAK_ITEMS,
  ...PIZZA_PIDE_ITEMS,
  ...SHORVA_ITEMS,
  ...PASTA_ITEMS,
  ...ASOSIY_ITEMS,
  ...BALIQ_ITEMS,
  ...BURGER_ITEMS,
  ...XAMIRLI_ITEMS,
  ...BARBEKYU_ITEMS,
  ...ASSORTI_ITEMS,
  ...ICHIMLIK_ITEMS,
  ...DESERT_ITEMS,
];
