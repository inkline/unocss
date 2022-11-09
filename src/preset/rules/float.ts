import { toEscapedSelector as e } from 'unocss';
import type { Rule } from '@unocss/core';

export const floatRules : Rule[] = [
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
