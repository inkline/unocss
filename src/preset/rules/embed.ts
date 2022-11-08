import {toEscapedSelector as e} from 'unocss';
import type {Rule} from '@unocss/core';
import {PresetInklineOptions} from '../types';

export const embedRules = (options: PresetInklineOptions): Rule[] => [
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
    [/^embed:(.+):(.+)$/, ([, ratioX, ratioY], { rawSelector }) => {
        const selector = e(rawSelector);

        return `
${selector} {
    position: relative;
    display: block;
    width: 100%;
    padding: 0;
    overflow: hidden;
}

${selector} iframe,
${selector} embed,
${selector} object,
${selector} video {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
}

${selector}::before {
    display: block;
    content: '';
    padding-top: ${parseInt(ratioY, 10) / parseInt(ratioX, 10) * 100}%;
}`;
    }]
];