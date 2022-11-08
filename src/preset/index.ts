import { Preset } from 'unocss';
import { PresetInklineOptions, Theme } from './types';
import { DEFAULT_CLASS_PREFIX } from './constants';
import { rules } from './rules';
import { variants } from './variants';
import { resolve } from 'pathe';
import { readFileSync } from 'fs';
import { DEFAULT_OUTPUT_DIR } from '@inkline/config';

export * from './plugin';
export * from './preset';
