import { useLocale } from "next-intl";
import React from "react";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

interface LocaleSwitchProps {
  shortened?: boolean;
}

function LocaleSwitch({ shortened = false }: LocaleSwitchProps) {
  const options = shortened
    ? {
        en: "🇬🇧",
        de: "🇩🇪",
      }
    : {
        en: "🇬🇧 English",
        de: "🇩🇪 Deutsch",
      };



  const locale = useLocale();
  return (
    <LocaleSwitcherSelect
      options={options}
      defaultValue={locale}
    />
  );
}

export default LocaleSwitch;
