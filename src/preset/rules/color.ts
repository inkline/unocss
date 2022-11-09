import type { Rule } from '@unocss/core';
import { colorPropertyRule } from './helpers';

export const colorRules : Rule[] = [
    [
        /^(?:text-)?color(?::(-?.+))?$/,
        colorPropertyRule('color'),
        { autocomplete: ['color:<value>', 'text-color:<value>'] }
    ],
    [
        /^background(?:-color)?(?::(-?.+))?$/,
        colorPropertyRule('background-color'),
        { autocomplete: ['background:<value>', 'background-color:<value>'] }
    ]
];
