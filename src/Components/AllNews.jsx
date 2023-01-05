import { useEffect, useState } from 'react'
//import mockData from '../mockNewsData.json'
import Headline from './Headline'
import Image from './Image'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const AllNews = () => {
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

    const allHeadlines = newsData.map(currentNews => {
        const headline = currentNews.fields.headline
        const image = currentNews.fields.thumbnail

        return (
            <NavLink to={`/summary/${currentNews.webPublicationDate}`} key={currentNews.id}>
                <Image image={image} alt={headline} />
                <Headline headline={headline} />
            </NavLink>

        )
    })
    return (
        <main >
            {allHeadlines}
        </main>
    )
}
export default AllNews 