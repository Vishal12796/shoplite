import i18n, { use as i18nUse } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en.json";

const resources = {
  en: en,
};

i18nUse(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
