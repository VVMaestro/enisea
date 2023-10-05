import {Translator} from './Translator';
import {Languages} from '../types/PropTypes';

export function l10n(text: string, lang: Languages): string {
  const translator = new Translator(lang);

  return translator.translate(text);
}
