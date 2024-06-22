export type PaletteSteps = {
    0: string;
    50: string;
    100: string;
    150: string;
    200: string;
    250: string;
    300: string;
    350: string;
    400: string;
    450: string;
    500: string;
    550: string;
    600: string;
    650: string;
    700: string;
    750: string;
    800: string;
    850: string;
    900: string;
    950: string;
    1000: string;
};
export type ThemeColors = {
    base: PaletteSteps;
    baseAlpha: PaletteSteps;
    gold: PaletteSteps;
    goldAlpha: PaletteSteps;
    working: PaletteSteps;
    workingAlpha: PaletteSteps;
    warning: PaletteSteps;
    warningAlpha: PaletteSteps;
    ok: PaletteSteps;
    okAlpha: PaletteSteps;
    error: PaletteSteps;
    errorAlpha: PaletteSteps;
    appYellow: PaletteSteps;
    appYellowAlpha: PaletteSteps;
    appRed: PaletteSteps;
    appRedAlpha: PaletteSteps;
    appGreen: PaletteSteps;
    appGreenAlpha: PaletteSteps;
    appBlue: PaletteSteps;
    appBlueAlpha: PaletteSteps;
};
export declare const getArbitraryBaseColor: (lightness: number) => string;
export declare const colors: ThemeColors;