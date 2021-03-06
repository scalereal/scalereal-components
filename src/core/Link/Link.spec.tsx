import { render } from '@testing-library/react';
import * as React from 'react';
import { Text } from '../Text/Text';
import { Link } from './Link';

describe('Link', () => {
    it('should render with default props', () => {
        const { container } = render(<Link  linkSize='S' href="#">Test</Link>);
        expect(container).toMatchSnapshot();
    });

    it('should render with component as child', () => {
        const { container } = render(
            <Link href="#" linkSize='S'>
                <Text textSize='S'>Hi i am Name</Text>
            </Link>
        );
        expect(container).toMatchSnapshot();
    });
});
