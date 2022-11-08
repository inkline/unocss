import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';

export const sizingRules = (options: PresetInklineOptions): Rule[] => [
    [/^height:(.+)$/, ([, value]) => ({ height: value })],
    [/^max-height:(.+)$/, ([, value]) => ({ 'max-height': value })],
    [/^width:(.+)$/, ([, value]) => ({ width: value })],
    [/^max-width:(.+)$/, ([, value]) => ({ 'max-width': value })]
];
