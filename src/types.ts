export type Language = 'uz' | 'ru' | 'en';

export type MenuCategoryKey =
  | 'salat'
  | 'garnir_sous'
  | 'sovuq_gazak'
  | 'pizza_pide'
  | 'shorva'
  | 'pasta'
  | 'asosiy'
  | 'baliq'
  | 'burger'
  | 'xamirli'
  | 'barbekyu'
  | 'assorti'
  | 'non'
  | 'ichimlik'
  | 'desert';

export interface MenuCategory {
  key: MenuCategoryKey;
  label: Record<Language, string>;
  sublabel: Record<Language, string>;
  iconName: string;
}

export interface MenuItem {
  id: string;
  name: Record<Language, string>;
  category: MenuCategoryKey;
  description: Record<Language, string>;
  price: number;
  image: string;
  badge?: Record<Language, string>;
  isSpecial?: boolean;
  prepMethod?: Record<Language, string>;
  portion?: Record<Language, string>;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'arxitektura' | 'oshxona' | 'muhit' | 'dasturxon';
  description: string;
}
