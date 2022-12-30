import { Preflight } from "unocss";
import { ResolvedTheme } from "@inkline/config";
import { getPrefixFromGenerator } from "../utilities";

export const visibilityPreflight: Preflight<ResolvedTheme> = {
    getCSS: ({ theme, generator }) => {
        const prefix = getPrefixFromGenerator(generator);

        return `
      ${Object.keys(theme.breakpoints)
          .map((breakpoint) => {
              const className = `.${prefix}${breakpoint}\\:visible`;
              return [className, `${className}\\!`];
          })
          .flat()
          .join(", ")} {
        display: none !important;
      }
    `;
    },
};
