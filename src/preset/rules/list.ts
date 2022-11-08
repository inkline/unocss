import { toEscapedSelector as e } from 'unocss';
import type { Rule } from '@unocss/core';
import { PresetInklineOptions } from '../types';

const visuallyHiddenCSS = `    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    top: 1px;
    left: 1px;
    overflow: hidden;`;

export const listRules = (options: PresetInklineOptions): Rule[] => [
    [/^list:inline$/, (_, { rawSelector }) => {
        const selector = e(rawSelector);

        return `${selector} {
    padding-left: 0;
    list-style: none;
}

${selector} > .item,
${selector} > li {
    display: inline-flex;
    margin-bottom: 0;
}

${selector} > .item:not(:last-child),
${selector} > li:not(:last-child) {
    margin-right: var(--list--inline--item--margin-right, var(--margin-right));
}`;
    }],
    ['list:unstyled', {
        'padding-left': 0,
        'list-style': 'none'
    }]
];
