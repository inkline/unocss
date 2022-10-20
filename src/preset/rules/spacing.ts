import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';
import { sidesPropertyRule } from './helpers';

export const paddingRules = (options: PresetInklineOptions): Rule[] => [
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

export const marginRules = (options: PresetInklineOptions): Rule[] => [
    [
        /^margin()(?::(-?.+))?$/,
        sidesPropertyRule('margin')
    ],
    [
        /^margin-(top|right|bottom|left|start|end|x|y)(?::(-?.+))?$/,
        sidesPropertyRule('margin')
    ],
    [
        /^margin-(block|inline)(?::(-?.+))?$/,
        sidesPropertyRule('margin')
    ],
    [
        /^margin-(block-start|block-end|inline-start|inline-end)(?::(-?.+))?$/,
        sidesPropertyRule('margin')
    ]
];
