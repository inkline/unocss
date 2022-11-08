import {CSSEntries, DynamicMatcher} from '@unocss/core';
import { cornersMap } from '../../utilities';
import { cornersPropertyKeys } from '@inkline/config';
import { toDashCase } from '@grozav/utils';

export function colorPropertyRule (propertyName: string): DynamicMatcher {
    return ([_, value]: string[]): CSSEntries | undefined => {
        const getComputedSize = (color: string): string | number => /^[A-Za-z-]+(-\d+)?$/.test(color)
            ? `var(--color-${color})`
            : color;

        if (value) {
            return [[propertyName, getComputedSize(value)]];
        }

        return undefined;
    };
}
