import { ComponentSize } from '../../theme/sizes';
import { ButtonType } from './index';
interface StyledButtonProps {
    innerType: ButtonType;
    size: ComponentSize;
    withText: boolean;
}
export declare const StyledButton: import("styled-components").StyledComponent<"button", any, StyledButtonProps, never>;
export declare const StyledIcon: import("styled-components").StyledComponent<"div", any, {}, never>;
export {};
