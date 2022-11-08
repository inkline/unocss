import { toEscapedSelector as e } from 'unocss';
import type { Rule } from '@unocss/core';
import { PresetInklineOptions, Theme } from '../types';

export const visibilityRules = (options: PresetInklineOptions): Rule<Theme>[] => [
    [/^([a-zA-Z0-9]+):visible(?::.+)?$/, ([_, breakpoint, display], { theme, rawSelector }) => {
        const selector = e(rawSelector);

        return `${selector} {
    display: none !important;
}

@media screen and (min-width: ${theme.breakpoints[breakpoint]}px) {
    ${selector} {
        display: ${display || 'block'} !important;
    }
}`;
    }],
    [/^([a-zA-Z0-9]+):hidden$/, ([_, breakpoint], { theme, rawSelector }) => {
        const selector = e(rawSelector);

        return `@media screen and (min-width: ${theme.breakpoints[breakpoint]}px) {
    ${selector} {
        display: none !important;
    }
}`;
    }]
];
