import type { Config as TailwindCSSConfig } from "tailwindcss";

// Constants
import SPACING from "./constants/spacing";
import FONT_SIZE from "./constants/fontSize";
import Z_INDEX from "./constants/zIndex";
import BACKGROUND_COLOR from "./constants/backgroundColor";
import BORDER_RADIUS from "./constants/borderRadius";
import TEXT_COLOR from "./constants/textColor";
import COLORS from "./constants/colors";
import BORDER_WIDTH from "./constants/borderWidth";

const TAILWIND_CONFIG: TailwindCSSConfig = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: SPACING,
      zIndex: Z_INDEX,
      backgroundColor: BACKGROUND_COLOR,
      colors: COLORS,
      borderRadius: BORDER_RADIUS,
    },
    textColor: TEXT_COLOR,
    fontSize: FONT_SIZE,
    borderWidth: BORDER_WIDTH,
  }
};

export default TAILWIND_CONFIG;
