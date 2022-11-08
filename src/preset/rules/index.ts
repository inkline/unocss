import { PresetInklineOptions } from '../types';
import { textAlignmentRules, verticalAlignmentRules } from './align';
import { borderRules } from './border';
import { borderRadiusRules } from './border-radius';
import { colorRules } from './color';
import { displayRules } from './display';
import { embedRules } from './embed';
import { flexRules } from './flex';
import { floatRules } from './float';
import { listRules } from './list';
import { overflowRules } from './overflow';
import { overlayRules } from './overlay';
import { positionRules } from './position';
import { screenReaderRules } from './screen-reader';
import { marginRules, paddingRules } from './spacing';
import { sizingRules } from './sizing';
import { typographyRules } from './typography';
import {visibilityRules} from "./visibility";

export const rules = (options: PresetInklineOptions) => [
    ...borderRules(options),
    ...borderRadiusRules(options),
    ...colorRules(options),
    ...displayRules(options),
    ...embedRules(options),
    ...flexRules(options),
    ...floatRules(options),
    ...listRules(options),
    ...textAlignmentRules(options),
    ...verticalAlignmentRules(options),
    ...overflowRules(options),
    ...overlayRules(options),
    ...positionRules(options),
    ...screenReaderRules(options),
    ...marginRules(options),
    ...paddingRules(options),
    ...sizingRules(options),
    ...typographyRules(options),
    ...visibilityRules(options)
];
