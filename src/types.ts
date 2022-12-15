import type { PresetOptions } from "unocss";
import { ResolvedTheme } from "@inkline/config";

export type Theme = ResolvedTheme;

export interface UserOptions {
    configFile?: string;
    outputDir?: string;
    extName?: `.${string}`;
}

export interface PresetInklineOptions extends PresetOptions {
    /**
     * Utils prefix
     *
     * @default undefined
     */
    prefix?: string;
}
