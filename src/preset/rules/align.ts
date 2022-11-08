import type { Rule } from '@unocss/core';
import { globalKeywords } from '../utilities';
import { PresetInklineOptions } from '../types';

const textAlignments = [
    'center',
    'left',
    'right',
    'justify',
    'start',
    'end',
    ...globalKeywords
];

const verticalAlignments = [
    'baseline',
    'top',
    'bottom',
    'top',
    'middle',
    'bottom',
    'text-top',
    'text-bottom',
    'sub',
    'super',
    ...globalKeywords
];

export const verticalAlignmentRules = (options: PresetInklineOptions): Rule[] => verticalAlignments.map((value) => [
    new RegExp(`^vertical-align:${value}$`),
    () => ({ 'vertical-align': value }),
    { autocomplete: `(vertical-align):(${verticalAlignments.join('|')})` }
] as Rule);

export const textAlignmentRules = (options: PresetInklineOptions): Rule[] => textAlignments.map((value) => [
    new RegExp(`^text(-align)?:${value}$`),
    () => ({ 'text-align': value }),
    { autocomplete: `(text-align):(${textAlignments.join('|')})` }
] as Rule);