import { Language } from '../types';

export interface UiTranslations {
  // Navigation & General
  restaurantName: string;
  restaurantType: string;
  addressShort: string;
  addressFull: string;
  addressCity: string;
  hoursShort: string;
  skipToMenu: string;
  directionsBtn: string;
  googleMapsBtn: string;

  // Menu Header
  menuEyebrow: string;
  menuTitle: string;
  menuSubtitle: string;
  searchPlaceholder: string;
  clearSearch: string;
  noItemsFound: string;
  viewAllDishes: string;

  // Dish Card & Modal
  priceLabel: string;
  viewDetails: string;
  enlargePhoto: string;
  closeBtn: string;
  traditionBadge: string;
  
  // Footer
  footerAbout: string;
  addressTitle: string;
  reservationTime: string;
  hoursTitle: string;
  hoursEveryday: string;
  hoursKitchen: string;
  socialTitle: string;
  callPhoneAria: string;
}

export const UI_TRANSLATIONS: Record<Language, UiTranslations> = {
  uz: {
    restaurantName: "QAL'A",
    restaurantType: "Restaurant",
    addressShort: "Xiva, P.Qori 4-berk 12",
    addressFull: "P.Qori 4-berk ko'chasi, 12-uy, 220900",
    addressCity: "Xiva shahri",
    hoursShort: "11:00 — 23:00",
    skipToMenu: "Asosiy menyuga o'tish",
    directionsBtn: "Yo'nalish olish",
    googleMapsBtn: "Google Xarita",

    menuEyebrow: "Asl Milliy Taomlar",
    menuTitle: "Restoran Menyusi",
    menuSubtitle: "Qadimiy Xiva qal'asining pishiq g'ishtli o'choqlarida pishirilgan haqiqiy o'zbek milliy taomlari.",
    searchPlaceholder: "Taom nomidan qidirish (masalan: Palov, Kabob, Choy...)",
    clearSearch: "Tozalash",
    noItemsFound: "Ushbu so'rov bo'yicha taom topilmadi.",
    viewAllDishes: "Barcha taomlarni ko'rish",

    priceLabel: "Narxi",
    viewDetails: "Ko'rish",
    enlargePhoto: "Kattalashtirish",
    closeBtn: "Yopish",
    traditionBadge: "Milliy an'ana",

    footerAbout: "Qadimiy Xiva qal'asining pishiq g'ishtli me'moriy ruhiyati, asl milliy taomlar va xonadon fayzi uyg'unlashgan maskan.",
    addressTitle: "Manzil va Telefon",
    reservationTime: "Bron qilish: 11:00 — 23:00",
    hoursTitle: "Ish Vaqti",
    hoursEveryday: "Har kuni: 11:00 — 23:00",
    hoursKitchen: "Oshxona faol: 11:00 — 22:30",
    socialTitle: "Ijtimoiy Tarmoqlar",
    callPhoneAria: "Telefon orqali qo'ng'iroq qilish",
  },
  ru: {
    restaurantName: "QAL'A",
    restaurantType: "Restaurant",
    addressShort: "Хива, 4-й туп П.Корий 12",
    addressFull: "4-й тупик П.Корий, 12, 220900",
    addressCity: "г. Хива",
    hoursShort: "11:00 — 23:00",
    skipToMenu: "Перейти к меню",
    directionsBtn: "Маршрут",
    googleMapsBtn: "Google Карты",

    menuEyebrow: "Аутентичные блюда",
    menuTitle: "Меню Ресторана",
    menuSubtitle: "Настоящие узбекские национальные блюда, приготовленные в традиционных печах и казанах древней Хивы.",
    searchPlaceholder: "Поиск блюд (например: Плов, Шашлык, Чай...)",
    clearSearch: "Очистить",
    noItemsFound: "По вашему запросу ничего не найдено.",
    viewAllDishes: "Показать все блюда",

    priceLabel: "Цена",
    viewDetails: "Смотреть",
    enlargePhoto: "Увеличить",
    closeBtn: "Закрыть",
    traditionBadge: "Восточная традиция",

    footerAbout: "Место, где сочетаются архитектурный дух древней крепости Хивы, подлинные национальные блюда и восточное гостеприимство.",
    addressTitle: "Адрес и Телефон",
    reservationTime: "Бронь столов: 11:00 — 23:00",
    hoursTitle: "Часы работы",
    hoursEveryday: "Ежедневно: 11:00 — 23:00",
    hoursKitchen: "Кухня работает: 11:00 — 22:30",
    socialTitle: "Социальные сети",
    callPhoneAria: "Позвонить по телефону",
  },
  en: {
    restaurantName: "QAL'A",
    restaurantType: "Restaurant",
    addressShort: "Khiva, 4-th lane P.Qori 12",
    addressFull: "4th lane P.Qori street, 12, 220900",
    addressCity: "Khiva city",
    hoursShort: "11:00 AM — 11:00 PM",
    skipToMenu: "Skip to main menu",
    directionsBtn: "Directions",
    googleMapsBtn: "Google Maps",

    menuEyebrow: "Authentic Cuisine",
    menuTitle: "Restaurant Menu",
    menuSubtitle: "Authentic Uzbek national cuisine cooked over hearth fires in the architectural spirit of ancient Khiva.",
    searchPlaceholder: "Search dishes (e.g. Pilaf, Kebab, Tea...)",
    clearSearch: "Clear",
    noItemsFound: "No dishes found matching your search.",
    viewAllDishes: "View all dishes",

    priceLabel: "Price",
    viewDetails: "View",
    enlargePhoto: "Enlarge",
    closeBtn: "Close",
    traditionBadge: "Traditional Heritage",

    footerAbout: "A destination harmonizing ancient Khiva's architectural spirit, authentic national cuisine, and warm oriental hospitality.",
    addressTitle: "Address & Phone",
    reservationTime: "Reservations: 11:00 — 23:00",
    hoursTitle: "Opening Hours",
    hoursEveryday: "Daily: 11:00 AM — 11:00 PM",
    hoursKitchen: "Kitchen active: 11:00 AM — 10:30 PM",
    socialTitle: "Social Media",
    callPhoneAria: "Call restaurant phone number",
  },
};

export function formatPrice(amount: number, lang: Language): string {
  if (lang === 'en') {
    return `${amount.toLocaleString('en-US')} UZS`;
  }
  if (lang === 'ru') {
    return `${amount.toLocaleString('ru-RU')} сум`;
  }
  return `${amount.toLocaleString('uz-UZ')} so'm`;
}
