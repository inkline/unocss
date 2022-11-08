import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';

export const overflowRules = (options: PresetInklineOptions): Rule[] => [
    [/^overflow:(.+)$/, ([_, value]) => ({ overflow: value })]
];
