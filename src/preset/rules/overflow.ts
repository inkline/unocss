import type { Rule } from '@unocss/core';

export const overflowRules : Rule[] = [
    [/^overflow:(.+)$/, ([_, value]) => ({ overflow: value })]
];
