import type { Rule } from '@unocss/core';

export const displayRules : Rule[] = [
    [
        /^display(?::(.+))$/,
        ([_, value]) => [['display', value]],
        { autocomplete: ['display:(inline|block|flex|inline-block|inline-flex|contents|table|none)'] }
    ]
];
