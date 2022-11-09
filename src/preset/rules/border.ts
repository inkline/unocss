import type { Rule } from '@unocss/core';
import { borderPropertyRule } from './helpers';

export const borderRules : Rule[] = [
    [
        /^border(?::(-?.+))?$/,
        borderPropertyRule,
        { autocomplete: ['border:<value>'] }
    ],
    [
        /^border-(width|style|color)(?::(-?.+))?$/,
        borderPropertyRule,
        { autocomplete: 'border-(width|style|color):<value>' }
    ],
    [
        /^border-(top|right|bottom|left|start|end|x|y)(?::(-?.+))?$/,
        borderPropertyRule,
        { autocomplete: 'border-(top|right|bottom|left|start|end|x|y):<value>' }
    ],
    [
        /^border(?:-(top|right|bottom|left|start|end|x|y))?(?:-(width|style|color))?(?::(-?.+))?$/,
        borderPropertyRule,
        { autocomplete: 'border-(top|right|bottom|left|start|end|x|y)-(width|style|color):<value>' }
    ]
];
