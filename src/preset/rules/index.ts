import { marginRules, paddingRules } from './spacing';
import { PresetInklineOptions } from '../types';

export const rules = (options: PresetInklineOptions) => [
    ...marginRules(options),
    ...paddingRules(options)
];
