import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';
import { colorPropertyRule } from './helpers';

export const colorRules = (options: PresetInklineOptions): Rule[] => [
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
