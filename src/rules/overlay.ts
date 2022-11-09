import { toEscapedSelector as e } from 'unocss';
import type { Rule } from '@unocss/core';

export const overlayRules : Rule[] = [
    [
        'overlay', {
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            'z-index': 1
        }
    ],
    [/^overlay-link$/, ([, name], { rawSelector }) => {
        const selector = e(rawSelector);

        return `
${selector}::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    pointer-events: auto;
}`;
    }]
];
