import type { SelectProps as ArkSelectProps } from '@ark-ui/react';
export type Item = {
    label: string;
    value: string;
    description?: string;
    group?: string;
    isDisabled?: boolean;
};
export type ItemGroup = {
    group?: string;
    items: Item[];
};
export type CustomSelectProps = Omit<ArkSelectProps<Item>, 'id' | 'value' | 'items' | 'asChild' | 'onValueChange' | 'onChange'> & {
    items: Item[];
    selectedItem: Item | null;
    isClearable?: boolean;
    placeholder?: string;
    onChange: (selectedItem: Item | null) => void;
    groupSortFunc?: (a: ItemGroup, b: ItemGroup) => number;
};
export declare const CustomSelect: (props: CustomSelectProps) => import("react/jsx-runtime").JSX.Element;
