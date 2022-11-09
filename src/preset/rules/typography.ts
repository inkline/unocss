import type { Rule } from '@unocss/core';

export const typographyRules : Rule[] = [
    [/^text(?:-align)?:(left|center|right|justify)$/, ([, value]) => ({ 'text-align': value })],
    [/^text(?:-transform)?:(lowercase|uppercase|capitalize)$/, ([, value]) => ({ 'text-transform': value })],
    [/^(font-weight|text):(lighter|extralight|light|normal|semibold|bold|black|bolder)$/, ([, value]) => ({ 'font-weight': `var(--font-weight-${value})` })],
    [/^(font-style|text):(normal|italic)$/, ([, value]) => ({ 'font-style': value })],
    [/^(font-family|text):(?:(primary|secondary)-)?(base|monospace|print)$/, ([, category, type]) => ({ 'font-family': `var(--font-family-${category || 'primary'}-${type})` })],
    [/^white-space:(.+)$/, ([, value]) => ({ 'white-space': value })],
    ['text:muted', { color: 'var(--text--color-muted)' }],
    ['text:reset', { color: 'inherit' }],
    ['text:hide', { 'text-indent': '-10000px' }],
    ['text:truncate', { overflow: 'hidden', 'text-overflow': 'ellipsis', 'white-space': 'nowrap' }],
    ['text:break-word', { 'word-break': 'break-word', 'word-wrap': 'break-word' }],
    ['text-decoration:none', { 'text-decoration': 'none' }]
];
