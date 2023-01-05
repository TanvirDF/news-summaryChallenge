import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import mockNews from '../mockNewsData.json'
import AllNews from '../Components/AllNews'


test('it should render all the news headlines', () => {
    render(<AllNews />)
    const allHeadlines = []
    for (let i of mockNews.response.results) {
        allHeadlines.push(i.fields.headline)
    }
    const headline = screen.getAllByTestId('testHeadline')
    expect(headline.length).toBe(allHeadlines.length)

})



