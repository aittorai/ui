import type { ButtonProps as ChakraButtonProps, ComponentWithAs } from '@chakra-ui/react';
import type { ReactNode } from 'react';
export type ButtonProps = ChakraButtonProps & {
    isChecked?: boolean;
    tooltip?: ReactNode;
};
export declare const Button: ComponentWithAs<ComponentWithAs<'button', ChakraButtonProps>, ButtonProps>;
