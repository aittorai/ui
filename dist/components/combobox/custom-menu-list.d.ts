import type { GroupBase, MenuListProps } from 'chakra-react-select';
import type { ComboboxOption } from './custom-option';
type CustomMenuListProps = MenuListProps<ComboboxOption, false, GroupBase<ComboboxOption>>;
export declare const CustomMenuListComponent: (({ children, innerRef, ...other }: CustomMenuListProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string | undefined;
};
export {};
