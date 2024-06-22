import type { ComponentWithAs } from '@chakra-ui/react';
import type { NumberInputProps } from './wrapper';
export type CompositeNumberInputProps = Omit<NumberInputProps, 'onChange' | 'min' | 'max'> & {
    /**
     * The value
     */
    value: number;
    /**
     * The minimum value
     */
    min: number;
    /**
     * The maximum value
     */
    max: number;
    /**
     * The default step
     */
    step?: number;
    /**
     * The fine step (used when shift is pressed)
     */
    fineStep?: number;
    /**
     * The change handler
     */
    onChange: (v: number) => void;
};
export declare const CompositeNumberInput: ComponentWithAs<ComponentWithAs<'div', NumberInputProps>, CompositeNumberInputProps>;
