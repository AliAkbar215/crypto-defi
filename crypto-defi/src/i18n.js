import i18n from "i18next";
import LanguageDecorator from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import XHR from "i18next-xhr-backend";
import CH from './asset/ch.json'
import PH from './asset/fi.json'
import KO from './asset/ko.json'
import RU from './asset/ru.json'
import TU from './asset/tu.json'
import EN from "./asset/en.json";
import IN from './asset/in.json'
import VI from './asset/vi.json'
// import ES from "./assets/i18n/es.json";
i18n
  .use(XHR)
  .use(LanguageDecorator)
  .use(initReactI18next)
  .init({
    resources: {
      en: EN,
      in: IN,
      ch: CH,
      ph: PH,
      ko: KO,
      ru: RU,
      tu: TU,
      vi: VI
    },
    lng: "en",
    fallbackLng: "en",
  });

export default i18n;
