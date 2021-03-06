import { HTMLProps, WithThemeProp } from '../../utils';
export interface InputProps extends HTMLProps<HTMLInputElement>, WithThemeProp {
    /** Takes full width of the parent component */
    fullWidth?: boolean;
    /** Preffix Text */
    preffix?: string;
    /** Suffix Text */
    suffix?: string;
    /** Disable Input */
    disabled?: boolean;
    /** To be used when it is required in any form */
    required?: boolean;
    /** Input Border Color */
    borderColor?: string;
    /** Input Text Color */
    textColor?: string;
    /** Input Disable Color */
    disabledColor?: string;
    /** Input Background Color */
    backgroundColor?: string;
    /** Input Placeholder Color */
    placeHolderColor?: string;
    /** Input Prefix Background Color */
    preffixBackgroundColor?: string;
    /** Input Suffix Background Color */
    suffixBackgroundColor?: string;
    /** Input Error */
    hasError?: boolean;
    /** Input Error Text */
    errorText?: string;
    /** Input Preffix Color */
    preffixColor?: string;
    /** Input Suffix Color */
    suffixColor?: string;
}
