import { PresetInklineOptions, UserOptions, Theme } from "./types";
import { Preset } from "unocss/dist";
import { loadConfigFromFile } from "@inkline/config";
import { rules } from "./rules";
import { variants } from "./variants";
import { preflights } from "./preflights";
import { DEFAULT_CLASS_PREFIX } from "./constants";

export function presetInkline(
    options?: UserOptions,
    presetOptions: PresetInklineOptions = {}
): Preset<Theme> {
    presetOptions.prefix = presetOptions.prefix || DEFAULT_CLASS_PREFIX;

    return {
        name: "@inkline/unocss",
        rules,
        variants,
        preflights,
        theme: {} as unknown as Theme,
        prefix: presetOptions.prefix,
        options: presetOptions,
        extendTheme: [
            async (theme) => {
                const config = await loadConfigFromFile(options);

                Object.assign(theme, config.theme.default);
            },
        ],
    };
}
