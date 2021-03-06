import { render } from '@testing-library/react';
import * as React from 'react';
import Loader3 from '.';

describe('Loader3 Loader', () => {
    it('should render with default theme', () => {
        const { container } = render(<Loader3/>);
        expect(container).toMatchSnapshot();
    });
    it('should render with all the props given', () => {
        const { container } = render(
            <Loader3
                size="M"
                Color='#126AFA'
            />
        );
        expect(container).toMatchSnapshot();
    });

    it('should render image avatar properly', () => {
        const { container } = render(
            <Loader3 size="L" />
        );
        expect(container).toMatchSnapshot();
    });

});