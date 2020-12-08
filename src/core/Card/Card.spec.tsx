import { render } from '@testing-library/react';
import * as React from 'react';
import Card from "./Card"


describe('Card', () => {
    it('should render title and description text', () => {
        const { container } = render(<Card  title="Title" description="Description" direction="column" align="left"/>);
        expect(container).toMatchSnapshot();
    });
});
