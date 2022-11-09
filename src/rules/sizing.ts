import type { Rule } from '@unocss/core';

export const sizingRules : Rule[] = [
    [/^height:(.+)$/, ([, value]) => ({ height: value })],
    [/^max-height:(.+)$/, ([, value]) => ({ 'max-height': value })],
    [/^width:(.+)$/, ([, value]) => ({ width: value })],
    [/^max-width:(.+)$/, ([, value]) => ({ 'max-width': value })]
];
