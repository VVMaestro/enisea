import {Languages} from '../types/PropTypes';
import {LANGUAGE} from '../consts';
import {StringHelper} from './StringHelper';

export class Translator {
  private readonly language: Languages;

  constructor(language: Languages) {
    this.language = language;
  }

  public translate(text: string) {
    if (this.language === LANGUAGE.CZ) {
      return this.getCZTranslation(text);
    }

    return text;
  }

  private getCZTranslation(text: string): string {
    const lowerText = text.toLowerCase();

    const translatedText = this.getCZTranslationMap()[lowerText] ?? text;

    return new StringHelper().toSentenceCase(translatedText);
  }

  private getCZTranslationMap(): Record<string, string> {
    return {
      'sign up': 'přihlásit se',
      'who we are': 'kdo jsme',
      'advantages': 'výhody',
      'services': 'služby',
      'promotions': 'povýšení',
      'team': 'tým',
      'contacts': 'kontakty'
    };
  }
}
