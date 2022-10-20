import { sidesMap } from '../../utilities';
import { borderProperties, sidesPropertyKeys } from '@inkline/config';

export const borderPropertyRuleHandlers = {
    width: (side: string, value: string) => /^\d+$/.test(value)
        ? `calc(var(--border-${side}-width) * ${value})`
        : (value ?? `var(--border-${side}-width)`),
    style: (side: string, value: string, useDefault = false) => value && !useDefault ? value : `var(--border-${side}-style)`,
    color: (side: string, value: string, useDefault = false) => value && !useDefault ? (/^(#|rgba?|hsla?)/.test(value) ? value : `var(--color-${value})`) : `var(--border-${side}-color)`
};

export const borderPropertyRule = ([_, side, property, value]) => {
    const sides = side ? sidesMap[side] : sidesPropertyKeys;
    const properties = property ? [property] : borderProperties;

    return sides.reduce((styles, sideKey) => {
        properties.forEach((propertyKey) => {
            styles[`border-${sideKey}-${propertyKey}`] = borderPropertyRuleHandlers[propertyKey](sideKey, value, !property || property === 'width');
        }, styles);

        return styles;
    }, {});
};
