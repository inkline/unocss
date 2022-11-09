import type { Variant } from '@unocss/core';
import { PresetInklineOptions } from '../types';

export const importantVariant: Variant = {
    name: 'important',
    match (matcher) {
        let base: string | undefined;

        const match = matcher.match(/^(!(important)?|important:)/);
        if (match) {
            base = matcher.slice(match[0].length);
        } else if (matcher.endsWith('!important')) {
            base = matcher.slice(0, -10);
        } else if (matcher.endsWith('!')) {
            base = matcher.slice(0, -1);
        }

        if (base) {
            return {
                matcher: base,
                body: (body) => {
                    body.forEach((v) => {
                        if (v[1]) { v[1] += ' !important'; }
                    });

                    return body;
                }
            };
        }
    }
};
