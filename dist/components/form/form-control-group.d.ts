import type { PropsWithChildren } from 'react';
import type { FormControlProps } from './form-control';
import type { FormLabelProps } from './form-label';
export type FormControlGroupContext = {
    formLabelProps?: FormLabelProps;
    formControlProps?: FormControlProps;
    isDisabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
};
export declare const FormControlGroupContext: import("react").Context<FormControlGroupContext>;
export type FormControlGroupProps = PropsWithChildren<FormControlGroupContext>;
export declare const FormControlGroup: (({ children, ...context }: FormControlGroupProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string | undefined;
};
