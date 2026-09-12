import { MenuItem } from '../../types';

export const ASSORTI_ITEMS: MenuItem[] = [
  {
    id: 'assorti-1',
    name: {
      uz: 'Shashlik assorti 6 ta',
      ru: 'Ассорти шашлыков 6 видов',
      en: 'Grand 6-Shashlik Assorted Platter',
    },
    category: 'assorti',
    description: {
      uz: '6 xil eng sara shashliklar (bo‘lak, qiyma, tovuq, jigar, qovurg‘a va sabzavotlar), souslar va issiq non bilan.',
      ru: 'Большое блюдо из 6 видов шашлыка: кусковой, люля, куриный, печень, ребра и овощи с соусами.',
      en: 'Impressive feast featuring 6 distinct charcoal skewers served with pickled onions, dips, and flatbreads.',
    },
    price: 480000,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Katta tovoq', ru: 'Большое блюдо', en: 'Feast Board' },
    portion: { uz: '4-6 kishilik', ru: 'На 4-6 персон', en: 'For 4-6 guests' },
  },
  {
    id: 'assorti-2',
    name: {
      uz: 'Kebab assorti 4 ta',
      ru: 'Кебаб ассорти 4 вида',
      en: '4-Kebab Selection Platter',
    },
    category: 'assorti',
    description: {
      uz: '4 xil maxsus sershira lyulya-kaboblar: klassik, pishloqli, achchiq va tovuqli.',
      ru: 'Ассорти из 4 видов нежных кебабов: классический, с сыром, острый и куриный.',
      en: 'Selection of 4 specialty minced kebabs: classic beef, melted cheese, spicy, and herb chicken.',
    },
    price: 420000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    portion: { uz: '3-4 kishilik', ru: 'На 3-4 персоны', en: 'For 3-4 guests' },
  },
  {
    id: 'assorti-3',
    name: {
      uz: 'Mangal assorti 4 ta',
      ru: 'Мангал ассорти 4 вида',
      en: 'Charcoal Mangal Grill 4-Mix',
    },
    category: 'assorti',
    description: {
      uz: 'Cho‘g‘da pishgan mol go‘shti, qo‘y qovurg‘asi, tovuq qanotlari va sabzavotlar jamlanmasi.',
      ru: 'Богатое мясное ассорти с мангала: говядина, бараньи ребрышки, крылышки и овощи.',
      en: 'Sizzling mix of grilled beef cuts, lamb ribs, BBQ chicken wings, and roasted vegetables.',
    },
    price: 440000,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Mangal', ru: 'Мангал', en: 'Mangal' },
    portion: { uz: '3-4 kishilik', ru: 'На 3-4 персоны', en: 'For 3-4 guests' },
  },
  {
    id: 'assorti-4',
    name: {
      uz: 'Qala assorti',
      ru: 'Фирменное царское ассорти «Qal‘a»',
      en: "The Royal 'Qal'a' Grand Assortment",
    },
    category: 'assorti',
    description: {
      uz: 'Restoranimizning eng hashamatli bayramona go‘shtlar, steyklar, kaboblar va garnirlar jamlangan shohona tovoq.',
      ru: 'Главное королевское блюдо ресторана: премиальные стейки, ребра, отборный шашлык и гарниры.',
      en: "Our ultimate flagship presentation: prime steaks, tender ribs, artisan skewers, and hearth-baked accompaniments.",
    },
    price: 650000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    badge: { uz: 'Shohona', ru: 'Царское', en: 'The Royal' },
    portion: { uz: '6-8 kishilik', ru: 'На 6-8 персон', en: 'For 6-8 guests' },
  },
  {
    id: 'assorti-5',
    name: {
      uz: 'Asado 1 kg',
      ru: 'Асадо из мраморных ребер 1 кг',
      en: 'Slow-Roasted Asado Beef Ribs 1 kg',
    },
    category: 'assorti',
    description: {
      uz: 'Cho‘g‘da uzoq vaqt past olovda qovurilgan va dimlangan 1 kg nihoyatda mayin sershira Asado mol qovurg‘asi.',
      ru: 'Томленные на медленном огне мраморные говяжьи ребра асадо (1 кг) с золотистой корочкой.',
      en: '1 kg prime beef short ribs slow-roasted over charcoal until tender enough to fall off the bone.',
    },
    price: 320000,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    badge: { uz: '1 kg Asado', ru: '1 кг Асадо', en: '1 kg Asado' },
    portion: { uz: '1000 gr', ru: '1000 гр', en: '1000 g' },
  },
];
