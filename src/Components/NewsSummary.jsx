import { useEffect, useState } from 'react'
//import mockData from '../mockNewsData.json'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Headline from './Headline'
import Image from './Image'

const NewsSummary = () => {
    const { id } = useParams();


    //const mocknews = mockData.response.results
    const guardianApi = 'https://content.guardianapis.com/search?order-by=newest&show-fields=byline%2Cthumbnail%2Cheadline%2CbodyText&api-key=317b822e-ccf5-45be-8a3a-30c931a54cce'

    const [newsData, setNewsData] = useState([])


    const getNews = async () => {
        try {
            const newsRes = await axios.get(guardianApi)
            setNewsData(newsRes.data.response.results)



        }
        catch (e) {
            console.log(e.message)
        }

    }

    useEffect(() => {
        getNews()
    }, [])

    const newsArticle = newsData.map(news => {
        if (id === news.webPublicationDate) {
            const headline = news.fields.headline
            const image = news.fields.thumbnail
            const summary = news.fields.bodyText
            const webUrl = news.webUrl

            return (
                <div>
                    <Image image={image} alt={headline} />
                    <a href={webUrl} > <Headline headline={headline} /></a>
                    <p>{summary}</p>
                </div>

            )
        }
        return ''
    })


    return (
        <main>
            {newsArticle}
        </main>


    )
}

export default NewsSummary
