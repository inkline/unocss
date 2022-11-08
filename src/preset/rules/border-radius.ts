import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';
import { cornersPropertyRule } from './helpers';

export const borderRadiusRules = (options: PresetInklineOptions): Rule[] => [
    [
        /^border-radius()(?::(-?.+))?$/,
        cornersPropertyRule,
        { autocomplete: ['border-radius:<value>'] }
    ],
    [
        /^border-(top-left|top-right|bottom-right|bottom-left|top|right|bottom|left)-radius(?::(-?.+))?$/,
        cornersPropertyRule,
        { autocomplete: 'border-(top-left|top-right|bottom-right|bottom-left|top|right|bottom|left)-radius:<value>' }
    ]
];
