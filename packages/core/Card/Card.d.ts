import { FC } from 'react';
import { WithStyle } from '../../utils';
import { CardProps } from './types';
export declare const variants: CardProps['variant'][];
export declare const textAlignments: CardProps['textAlignment'][];
export declare const textSizes: CardProps['titleSize'][];
export declare const descriptionSizes: CardProps['descriptionSize'][];
declare const Card: FC<CardProps> & WithStyle;
export default Card;