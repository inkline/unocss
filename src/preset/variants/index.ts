import { PresetInklineOptions } from '../types';
import { importantVariant } from './important';

export const variants = (options: PresetInklineOptions) => [
    importantVariant(options)
];
