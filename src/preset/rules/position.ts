import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';

export const positionRules = (options: PresetInklineOptions): Rule[] => [
    [/^position:(static|relative|absolute|fixed|sticky)$/, ([_, value]) => ({ position: value })],
    ['position:fixed-top', {
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        'z-index': 'var(--z-index-fixed)'
    }],
    ['position:fixed-bottom', {
        position: 'fixed',
        bottom: 0,
        right: 0,
        left: 0,
        'z-index': 'var(--z-index-fixed)'
    }],
    ['position:sticky-top', {
        position: 'sticky',
        top: 0,
        'z-index': 'var(--z-index-sticky)'
    }]
];
