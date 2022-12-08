import type { Rule } from '@unocss/core';
import { sidesPropertyRule } from './helpers';

export const paddingRules : Rule[] = [
    [
        /^padding()(?::(-?.+))?$/,
        sidesPropertyRule('padding'),
        { autocomplete: ['(margin|padding):<num>'] }
    ],
    [
        /^padding-(top|right|bottom|left|start|end|x|y)(?::(-?.+))?$/,
        sidesPropertyRule('padding'),
        { autocomplete: '(margin|padding)-<sides>:<num>' }
    ],
    [
        /^padding-(block|inline)(?::(-?.+))?$/,
        sidesPropertyRule('padding'),
        { autocomplete: '(margin|padding)-(block|inline):<num>' }
    ],
    [
        /^padding-(block-start|block-end|inline-start|inline-end)(?::(-?.+))?$/,
        sidesPropertyRule('padding'),
        { autocomplete: '(margin|padding)-(block-start|block-end|inline-start|inline-end):<num>' }
    ]
];

export const marginRules : Rule[] = [
    [
        /^margin()(?::(-?.+))?$/,
        sidesPropertyRule('margin')
    ],
    [
        /^margin-(top|right|bottom|left|start|end|x|y)(?::(-?.+))?$/,
        sidesPropertyRule('margin')
    ],
    [
        /^margin-(block|block-start|block-end|inline|inline-start|inline-end)(?::(-?.+))?$/,
        sidesPropertyRule('margin')
    ]
];
