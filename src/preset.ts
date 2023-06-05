import { PresetInklineOptions, UserOptions, Theme } from "./types";
import { Preset } from "unocss/dist";
import { loadConfigFromFile } from "@inkline/config";
import { rules } from "./rules";
import { breakpointsVariant, importantVariant, printVariant } from "./variants";
import { visibilityPreflight } from "./preflights";
import { DEFAULT_CLASS_PREFIX } from "./constants";

export async function createPreset(
    options?: UserOptions,
    presetOptions: PresetInklineOptions = {}
): Promise<Preset<Theme>> {
    const config = await loadConfigFromFile(options);
    presetOptions.prefix = presetOptions.prefix || DEFAULT_CLASS_PREFIX;

    return {
        name: "@inkline/unocss",
        rules,
        variants: [breakpointsVariant, importantVariant, printVariant],
        preflights: [visibilityPreflight],
        theme: config.theme.default,
        prefix: presetOptions.prefix,
        options: presetOptions,
    };
}
