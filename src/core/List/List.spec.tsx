import { render } from '@testing-library/react'
import React from 'react'
import List  from './List'

describe('List', () => {
    it('should render horizontal list', () => {
        const { container } = render(
            <List variant="horizontal">
                <p>item 1</p>
                <p>item 2</p>
            </List>
        );
        expect(container).toMatchSnapshot();
    });

    it('should render vertical list', () => {
        const { container } = render(
            <List variant="vertical">
                <p>item 1</p>
                <p>item 2</p>
            </List>
        );
        expect(container).toMatchSnapshot();
    });
});