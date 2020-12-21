import { blue } from '../../Colors';
import { TextTheme } from './types';

const textTheme: TextTheme = {
    sizes: {
        XS: {
            fontSize: '1rem',
        },
        S: {
            fontSize: '1.2rem',
        },
        M: {
            fontSize: '1.4rem',
        },
        L: {
            fontSize: '1.6rem',
        },
        XL: {
            fontSize: '1.8rem',
        }
    },
    defaults: {
        textColor: blue[500],
        lineHeight: '1',
        hoverColor:blue[700],
        activeColor:blue[600]
    }
};

export default textTheme;