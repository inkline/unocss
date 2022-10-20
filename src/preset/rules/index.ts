import { textAlignmentRules, verticalAlignmentRules } from './align';
import { borderRules } from './border';
import { marginRules, paddingRules } from './spacing';
import { PresetInklineOptions } from '../types';

export const rules = (options: PresetInklineOptions) => [
    ...borderRules(options),
    ...textAlignmentRules(options),
    ...verticalAlignmentRules(options),
    ...marginRules(options),
    ...paddingRules(options)
];
