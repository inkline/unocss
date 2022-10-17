import type { Rule } from '@unocss/core';
import { sidesPropertyRule } from '../utilities';
import { PresetInklineOptions } from '../types';

export const paddingRules = (options: PresetInklineOptions): Rule[] => [
    [/^pa?()-?(-?.+)$/, sidesPropertyRule('padding'), { autocomplete: ['(m|p)<num>', '(m|p)-<num>'] }],
    [/^p-?xy()()$/, sidesPropertyRule('padding'), { autocomplete: '(m|p)-(xy)' }],
    [/^p-?([xy])(?:-?(-?.+))?$/, sidesPropertyRule('padding')],
    [/^p-?([rltbse])(?:-?(-?.+))?$/, sidesPropertyRule('padding'), { autocomplete: '(m|p)<directions>-<num>' }],
    [/^p-(block|inline)(?:-(-?.+))?$/, sidesPropertyRule('padding'), { autocomplete: '(m|p)-(block|inline)-<num>' }],
    [/^p-?([bi][se])(?:-?(-?.+))?$/, sidesPropertyRule('padding'), { autocomplete: '(m|p)-(bs|be|is|ie)-<num>' }]
];

export const marginRules = (options: PresetInklineOptions): Rule[] => [
    [new RegExp(`^${options.prefix}margin?()-?(-?.+)$`), sidesPropertyRule('margin')],
    [new RegExp(`^${options.prefix}margin-?(top|right|bottom|left|start|end|x|y)(?:-?(-?.+))?$`), sidesPropertyRule('margin')],
    [/^m-(block|inline)(?:-(-?.+))?$/, sidesPropertyRule('margin')],
    [/^m-?([bi][se])(?:-?(-?.+))?$/, sidesPropertyRule('margin')]
];
