import { PresetInklineOptions, UserOptions, Theme } from './types';
import { Preset } from 'unocss/dist';
import { loadConfigFromFile } from '@inkline/config';
import { rules } from './rules';
import { variants } from './variants';
import { DEFAULT_CLASS_PREFIX } from './constants';

export function presetInkline (options: UserOptions, presetOptions: PresetInklineOptions = {}): Preset<Theme> {
    const theme = {} as unknown as Theme;

    presetOptions.prefix = presetOptions.prefix || DEFAULT_CLASS_PREFIX;

    return {
        name: '@inkline/unocss',
        rules,
        theme,
        variants,
        prefix: presetOptions.prefix,
        options: presetOptions,
        preflights: [
            {
                getCSS: async () => {
                    const config = await loadConfigFromFile(options);

                    Object.assign(theme, config.theme.default);

                    return '';
                }
            }
        ]
    };
}
