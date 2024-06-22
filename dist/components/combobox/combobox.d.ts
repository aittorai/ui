/// <reference types="react" />
import type { GroupBase, Props as ChakraReactSelectProps, SelectInstance, SingleValue } from 'chakra-react-select';
export type {} from 'react-select/base';
import type { SystemStyleObject } from '@chakra-ui/styled-system';
import type { ComboboxOption } from './custom-option';
export type ComboboxOnChange = (v: SingleValue<ComboboxOption> | null) => void;
export type ComboboxProps = ChakraReactSelectProps<ComboboxOption, false, GroupBase<ComboboxOption>> & {
    sx?: SystemStyleObject;
    selectRef?: React.RefObject<SelectInstance<ComboboxOption, false, GroupBase<ComboboxOption>>>;
    inputRef?: React.MutableRefObject<HTMLInputElement | null>;
};
export declare const Combobox: ((props: ComboboxProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string | undefined;
};
