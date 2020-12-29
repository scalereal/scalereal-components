var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import * as Styled from './Input.styled';
export var Input = React.memo(React.forwardRef(function (props, ref) {
    var fullWidth = props.fullWidth, required = props.required, prefix = props.prefix, suffix = props.suffix, borderColor = props.borderColor, textColor = props.textColor, disabledColor = props.disabledColor, backgroundColor = props.backgroundColor, disabled = props.disabled, placeHolderColor = props.placeHolderColor, preffixBackgroundColor = props.preffixBackgroundColor, suffixBackgroundColor = props.suffixBackgroundColor, restProps = __rest(props, ["fullWidth", "required", "prefix", "suffix", "borderColor", "textColor", "disabledColor", "backgroundColor", "disabled", "placeHolderColor", "preffixBackgroundColor", "suffixBackgroundColor"]), id = props.id || 'input';
    return (React.createElement(Styled.Wrapper, { fullWidth: fullWidth, borderColor: borderColor, textColor: textColor },
        prefix && React.createElement(Styled.Prefix, { preffixBackgroundColor: preffixBackgroundColor }, prefix),
        React.createElement(Styled.Input, __assign({ id: id, ref: ref, required: required, fullWidth: fullWidth, disabledColor: disabledColor, backgroundColor: backgroundColor, placeHolderColor: placeHolderColor, disabled: disabled }, restProps)),
        suffix && React.createElement(Styled.Suffix, { suffixBackgroundColor: suffixBackgroundColor }, suffix)));
}));
Input.displayName = 'Input';
Input.Style = Styled.Input;
Input.defaultProps = {
    type: 'text',
    disabled: false,
    fullWidth: false,
    required: false,
};
export default Input;