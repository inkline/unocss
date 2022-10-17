import type { CSSEntries, CSSObject, DynamicMatcher, ParsedColorValue, Rule, RuleContext, VariantContext } from '@unocss/core';
import { sidesPropertyKeys } from '@inkline/config';

const sidesMap = {
    start: ['left'],
    end: ['right'],
    x: ['top', 'bottom'],
    y: ['left', 'right']
};

export function sidesPropertyRule (propertyName: string): DynamicMatcher {
    return ([_, side, size]: string[]): CSSEntries | undefined => {
        if (/\d+/.test(size)) {
            if (side) {
                if (sidesMap[side]) {
                    return sidesMap[side].map((key) => [`${propertyName}-${key}`, `calc(var(--${propertyName}-${key}) * ${size})`]);
                }

                return [
                    [`${propertyName}-${side}`, `calc(var(--${propertyName}-${side}) * ${size})`]
                ];
            }

            return sidesPropertyKeys.map((key) => [`${propertyName}-${key}`, `calc(var(--${propertyName}-${key}) * ${size})`]);
        }

        return undefined;
    };
}
