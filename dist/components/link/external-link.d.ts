import type { LinkProps } from '.';
export type ExternalLinkProps = Omit<LinkProps, 'isExternal' | 'children'> & {
    label: string;
};
export declare const ExternalLink: (props: ExternalLinkProps) => import("react/jsx-runtime").JSX.Element;
