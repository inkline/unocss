import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';

export const displayRules = (options: PresetInklineOptions): Rule[] => [
    [
        /^display(?::(.+))$/,
        ([_, value]) => [['display', value]],
        { autocomplete: ['display:(inline|block|flex|inline-block|inline-flex|contents|table|none)'] }
    ]
];
