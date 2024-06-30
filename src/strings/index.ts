import useContextApp from "../hooks/useContextApp";
import { languages } from "./lang";

export function i18n(label: string): string {
  const { lang } = useContextApp();

  if (languages[lang] && languages[lang][label]) {
    return languages[lang][label];
  }

  return "Err: label not recognized";
}
