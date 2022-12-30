import { toEscapedSelector as e } from "unocss";
import type { Rule } from "@unocss/core";
import { Theme } from "../types";
import { ResolvedTheme } from "@inkline/config";

export const visibilityRules: Rule<ResolvedTheme>[] = [
    [
        /^visible(?::(.+))?$/,
        ([_, display]) => ({
            display: `${display || "block"} !important`,
        }),
    ],
    [
        /^hidden$/,
        () => ({
            display: "none !important",
        }),
    ],
];
