import { UnoGenerator } from "unocss";
import { Preset } from "unocss/dist";
import { ResolvedTheme } from "@inkline/config";

export function getInklinePresetFromGenerator(
    generator: UnoGenerator
): Preset<ResolvedTheme> | undefined {
    const presets = generator.userConfig.presets as Preset<ResolvedTheme>[];

    return presets.find((preset) => preset.name === "@inkline/unocss");
}

export function getPrefixFromGenerator(generator: UnoGenerator) {
    const inklinePreset = getInklinePresetFromGenerator(generator);

    return (inklinePreset as { prefix?: string })?.prefix || "";
}
