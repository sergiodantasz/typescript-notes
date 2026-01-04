const colorsObj = {
  red: "vermelho",
  green: "verde",
  blue: "azul",
};

type ColorTranslations = typeof colorsObj;
type ColorTranslationsKeys = keyof ColorTranslations;

function translateColor(
  color: ColorTranslationsKeys, // we don't need to use "red" | "green" | "blue"
  colors: ColorTranslations
) {
  return colors[color];
}

console.log(translateColor("red", colorsObj));
