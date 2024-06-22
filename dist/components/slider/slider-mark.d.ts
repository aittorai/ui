import type { SystemStyleObject } from '@chakra-ui/styled-system';
import type { MotionProps } from 'framer-motion';
type SliderMarkAnimationOptions = {
    initialFirstLast: MotionProps['initial'];
    initialOther: MotionProps['initial'];
    exitFirstLast: MotionProps['exit'];
    exitOther: MotionProps['exit'];
    animateFirstLast: MotionProps['animate'];
    animateOther: MotionProps['animate'];
    firstMarkStyle: SystemStyleObject;
    lastMarkStyle: SystemStyleObject;
};
export declare const sliderMarkAnimationConstants: SliderMarkAnimationOptions;
export type SliderMarkProps = {
    value: number;
    label: string;
    index: number;
    total: number;
};
export declare const SliderMark: (({ value, label, index, total }: SliderMarkProps) => import("react/jsx-runtime").JSX.Element) & {
    displayName?: string | undefined;
};
export {};
