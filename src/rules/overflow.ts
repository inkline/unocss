import type { Rule } from "@unocss/core";
import { ResolvedTheme } from "@inkline/config";

export const overflowRules: Rule<ResolvedTheme>[] = [
    [/^overflow:(.+)$/, ([_, value]) => ({ overflow: value })],
];
