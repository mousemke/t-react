import { TranslationContructorProps, Translator } from "t";

export type UseTInitProps = Omit<
  TranslationContructorProps,
  "onLanguageChange"
>;

export interface useTProps extends Partial<UseTInitProps> {
  /**
   * allows for the application of a previously defined init function
   */
  init?: (TranslationContructorProps) => Translator;
}
