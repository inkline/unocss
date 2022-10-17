import type { PresetOptions } from 'unocss';

export interface Theme {}

export interface PresetInklineOptions extends PresetOptions {
    /**
     * Utils prefix
     *
     * @default undefined
     */
    prefix?: string;
}
