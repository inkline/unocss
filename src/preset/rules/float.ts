import { toEscapedSelector as e } from 'unocss';
import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';

export const floatRules = (options: PresetInklineOptions): Rule[] => [
    [/^float:(.+)$/, ([_, value]) => ({ float: value })],
    [/^clearfix$/, (_, { rawSelector }) => {
        const selector = e(rawSelector);

        return `${selector}::after {
    content: '';
    display: table;
    clear: both;
}`;
    }]
];
