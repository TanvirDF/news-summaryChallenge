import { render, screen } from '@testing-library/react';
import Headline from '../Components/Headline'

test('should render passed headline prop', () => {
    const headline = 'Test'
    render(<Headline headline={headline} />)
    expect(screen.getByTestId('testHeadline')).toHaveTextContent(headline)

})