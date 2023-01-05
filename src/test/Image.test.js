import { render, screen } from '@testing-library/react';
import Image from '../Components/Image'
import mockNews from '../mockNewsData.json'


test('should render image passed as props', () => {

    const testImage = mockNews.response.results[0].fields.thumbnail
    const testAlt = mockNews.response.results[0].fields.headline

    render(<Image image={testImage} alt={testAlt} />)
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', testImage);
    expect(img).toHaveAttribute('alt', testAlt);
})