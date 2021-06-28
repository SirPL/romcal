import {
  CanonizationLevel,
  PatronTitles,
  Sex,
  Titles,
} from '@romcal/constants/martyrology-metadata';

export type MartyrologyDef = {
  /**
   * The canonization level of a person.
   */
  canonizationLevel?: CanonizationLevel;

  /**
   * Specify if the canonization level should not be displayed.
   * It's generally the case when the canonization are already included in the name.
   */
  hideCanonizationLevel?: boolean;

  /**
   * Temporarily property.
   * The content of this property will be move to the corresponding locale file.
   * @deprecated
   */
  name: string;

  /**
   * Titles of the Saint or the Blessed
   */
  titles?: (Titles | PatronTitles)[];

  /**
   * Determine if the Saint or the Blessed is a male or a female.
   */
  sex?: Sex;

  /**
   * Specify if the titles should not be displayed.
   * It's generally the case when titles are already included in the name.
   */
  hideTitles?: boolean;

  /**
   * Date of Death, as a Number (year), a String (in 'YYYY-MM' or 'YYYY-MM-DD' format),
   * or an object describing date range, multiple possible date, or a century.
   */
  dateOfDeath?:
    | SaintDate
    | { between: [SaintDate, SaintDate] }
    | { or: SaintDate[] }
    | { century: number };

  /**
   * Specify if an approximative indicator should be added, when the date is displayed.
   * For example in English: 'c. 201'.
   */
  dateOfDeathIsApproximative?: boolean;

  /**
   * Number of person that this definition represent.
   * It could be set as 'many' if the number is not defined.
   */
  count?: SaintCount;
};

export type SaintCount = number | 'many';
export type SaintDate = number | string;
export type MartyrologyCatalog = Record<string, MartyrologyDef>;
export type MartyrologyItem = { key: string } & MartyrologyDef;