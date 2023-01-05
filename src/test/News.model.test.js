import NewsModel from '../utils/News.model'

test('it should create news object when the contructor is called passing in the arguments', () => {
    const [id, headline, image, summary, link] = ['test id', 'Test headline', ' test image', 'test summary', 'test link']

    const testNews = new NewsModel(id, headline, image, summary, link)

    expect(testNews.id).toBe(id)
    expect(testNews.headline).toBe(headline)
    expect(testNews.image).toBe(image)
    expect(testNews.summary).toBe(summary)
    expect(testNews.link).toBe(link)
})