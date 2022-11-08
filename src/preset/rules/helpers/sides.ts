import { CSSEntries, DynamicMatcher } from '@unocss/core';
import { sidesMap } from '../../utilities';
import { sidesPropertyKeys } from '@inkline/config';

export function sidesPropertyRule (propertyName: string): DynamicMatcher {
    return ([_, side, value]: string[]): CSSEntries | undefined => {
        if (!value) {
            value = '1';
        }

        const getComputedSize = (propertyName: string, side: string, size: string):string => /^-?\d+(\.\d+)?$/.test(size)
            ? (size === '1' ? `var(--${propertyName}-${side})` : `calc(var(--${propertyName}-${side}) * ${size})`)
            : size;

        if (value) {
            if (side) {
                return sidesMap[side].map((sideKey) => [`${propertyName}-${sideKey}`, getComputedSize(propertyName, sideKey, value)]);
            }

            return sidesPropertyKeys.map((key) => [`${propertyName}-${key}`, getComputedSize(propertyName, key, value)]);
        }

        return undefined;
    };
}
