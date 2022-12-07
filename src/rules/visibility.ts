import { toEscapedSelector as e } from 'unocss';
import type { Rule } from '@unocss/core';
import { Theme } from '../types';

export const visibilityRules: Rule<Theme>[] = [
    [/^(xs|sm|md|lg|xl|2xl):visible(?::.+)?$/, ([_, breakpoint, display], { theme, rawSelector }) => {
        const selector = e(rawSelector);

        return `${selector} {
    display: none !important;
}
${theme.breakpoints[breakpoint]
        ? `
@media screen and (min-width: ${theme.breakpoints[breakpoint]}px) {
    ${selector} {
        display: ${display || 'block'} !important;
    }
}`
        : ''}`;
    }],
    [/^(xs|sm|md|lg|xl|2xl):hidden$/, ([_, breakpoint], { theme, rawSelector }) => {
        const selector = e(rawSelector);

        return theme.breakpoints[breakpoint]
            ? `@media screen and (min-width: ${theme.breakpoints[breakpoint]}px) {
    ${selector} {
        display: none !important;
    }
}`
            : '';
    }]
];
