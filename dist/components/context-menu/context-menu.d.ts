/// <reference types="react" />
/**
 * Adapted from https://github.com/lukasbach/chakra-ui-contextmenu
 */
import type { MenuButtonProps, MenuProps, PortalProps } from '@chakra-ui/react';
export interface ContextMenuProps<T extends HTMLElement = HTMLDivElement> {
    renderMenu: () => JSX.Element | null;
    children: (ref: React.MutableRefObject<T | null>) => JSX.Element | null;
    menuProps?: Omit<MenuProps, 'children'> & {
        children?: React.ReactNode;
    };
    portalProps?: Omit<PortalProps, 'children'> & {
        children?: React.ReactNode;
    };
    menuButtonProps?: MenuButtonProps;
}
export declare const ContextMenu: (<T extends HTMLElement = HTMLElement>(props: ContextMenuProps<T>) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string | undefined;
};
