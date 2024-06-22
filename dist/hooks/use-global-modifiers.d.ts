export declare const $shift: import("nanostores").WritableAtom<boolean>;
export declare const $ctrl: import("nanostores").WritableAtom<boolean>;
export declare const $meta: import("nanostores").WritableAtom<boolean>;
export declare const $alt: import("nanostores").WritableAtom<boolean>;
/**
 * Initializes the global modifiers state. This hook is a singleton.
 */
export declare const useGlobalModifiersInit: () => void;
/**
 * Provides a set of setters for the global modifiers state.
 *
 * Due to event capturing in certain input elements, you may need to use these setters to manually set the state.
 */
export declare const useGlobalModifiersImperativeAPI: () => {
    setShift: (shift: boolean) => void;
    setCtrl: (ctrl: boolean) => void;
    setAlt: (alt: boolean) => void;
    setMeta: (meta: boolean) => void;
};
export declare const useShiftModifier: () => boolean;
export declare const useCtrlModifier: () => boolean;
export declare const useAltModifier: () => boolean;
export declare const useMetaModifier: () => boolean;
