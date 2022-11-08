import { InklinePlugin, UserOptions } from '../plugin/types';
import { presetInkline } from './preset';

export const unocss: InklinePlugin = () => ({
    name: 'unocss',
    apply (options: UserOptions = {}) {
        options.unocss = {
            ...options.unocss,
            presets: [
                ...options.unocss?.presets || [],
                presetInkline(options)
            ]
        };

        return options;
    }
});
