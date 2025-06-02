import autoprefixer from "autoprefixer";
import postcssFlexbugsFixes from "postcss-flexbugs-fixes";
import postcssPresetEnv from "postcss-preset-env";
import postcssScss from "postcss-scss";

const config = {
  syntax: postcssScss,
  plugins: [
    autoprefixer,
    postcssFlexbugsFixes,
    postcssPresetEnv({
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": true,
      },
    }),
  ],
};

export default config;
