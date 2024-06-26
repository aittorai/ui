import type { ComponentWithAs, IconButtonProps as ChakraIconButtonProps } from '@chakra-ui/react';
import type { ReactNode } from 'react';
export type IconButtonProps = ChakraIconButtonProps & {
    isChecked?: boolean;
    tooltip?: ReactNode;
};
export declare const IconButton: ComponentWithAs<ComponentWithAs<'button', ChakraIconButtonProps>, IconButtonProps>;
