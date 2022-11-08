import { PresetInklineOptions, Theme } from './types';
import { Preset } from 'unocss/dist';
import { DEFAULT_CLASS_PREFIX } from './constants';
import { resolve } from 'pathe';
import { DEFAULT_OUTPUT_DIR } from '@inkline/config';
import { readFileSync } from 'fs';
import { rules } from './rules';
import { variants } from './variants';

export const presetInkline = (options: PresetInklineOptions = {}): Preset<Theme> => {
    options.prefix = options.prefix ?? DEFAULT_CLASS_PREFIX;

    const outputDir = options.outputDir || resolve(process.cwd(), DEFAULT_OUTPUT_DIR);
    const manifestFile = JSON.parse(readFileSync(resolve(outputDir, 'manifest.json'), 'utf-8'));
    const theme = manifestFile.default;

    return {
        name: '@unocss/preset-mini',
        rules: rules(options),
        variants: variants(options),
        prefix: options.prefix,
        theme,
        options
    };
};
