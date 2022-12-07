import type { Rule } from '@unocss/core';

export const flexRules : Rule[] = [
    [
        /^flex(?:-direction)?(?::(row|row-reverse|column|column-reverse))$/,
        ([_, value]) => [['flex-direction', value]],
        { autocomplete: ['(flex|flex-direction):(row|row-reverse|column|column-reverse)'] }
    ],
    ['flex', { display: 'flex' }],
    ['inline-flex', { display: 'inline-flex' }],
    ['flex:inline', { display: 'inline-flex' }],

    // flex
    [/^flex:(.*)$/, ([, value]) => ({ flex: value })],
    ['flex:1', { flex: '1 1 0%' }],
    ['flex:auto', { flex: '1 1 auto' }],
    ['flex:initial', { flex: '0 1 auto' }],
    ['flex:none', { flex: 'none' }],

    // shrink/grow/basis
    [/^(?:flex-)?shrink(?::(.*))?$/, ([, value = '']) => ({ 'flex-shrink': value ?? 1 }), { autocomplete: ['flex-shrink:<num>', 'shrink:<num>'] }],
    [/^(?:flex-)?grow(?::(.*))?$/, ([, value = '']) => ({ 'flex-grow': value ?? 1 }), { autocomplete: ['flex-grow:<num>', 'grow:<num>'] }],
    [/^(?:flex-)?basis:(.+)$/, ([, value]) => ({ 'flex-basis': /\d+/.test(value) ? `calc(var(--spacing) * ${value})` : value }), { autocomplete: ['flex-basis:$spacing', 'basis:$spacing'] }],

    // wraps
    ['flex-wrap', { 'flex-wrap': 'wrap' }],
    [/^flex-wrap(?::(wrap|wrap-reverse|nowrap))?$/, ([, value]) => ({ 'flex-wrap': value })],

    // align and justify
    [/^align(?:-items)?(?::(.+))$/, ([, value]) => ({ 'align-items': value })],
    [/^align-self?(?::(.+))$/, ([, value]) => ({ 'align-self': value })],
    [/^align-content?(?::(.+))$/, ([, value]) => ({ 'align-content': value })],
    [/^justify(?:-content)?(?::(.+))$/, ([, value]) => ({ 'justify-content': value })],

    // order
    [/^order(?::(.+))$/, ([, value]) => {
        if (value === 'first') {
            value = '-1';
        } else if (value === 'last') {
            value = '999';
        }

        return ({ order: value });
    }]
];
