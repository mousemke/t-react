import { useMemo, useState } from "react";

import T, { Translator } from "translationary";

import type { useTProps } from "./useT.types";

const useT = ({
  appName,
  init,
  lang,
  fetchTranslations,
  formatter
}: useTProps): [Translator, string | undefined] => {
  const [language, setLang] = useState<string>();

  const t = useMemo(() => {
    const options = {
      appName,
      init,
      lang,
      fetchTranslations,
      formatter,
      onLanguageChange: setLang
    };

    return init?.(options) || new T(options);
  }, [appName, init, lang, fetchTranslations, formatter]);

  return [t, language];
};

export default useT;
