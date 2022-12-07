import type { Rule } from '@unocss/core';

export const displayRules : Rule[] = [
    [
        /^display(?::(.+))$/,
        ([_, value]) => [['display', value]],
        { autocomplete: ['display:(block|inline|inline-block|flex|inline-flex|grid|inline-grid|flow-root|none|contents|table|table-row|list-item|inherit|initial|revert|revert-layer|unset)'] }
    ]
];
