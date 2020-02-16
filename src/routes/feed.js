import { Feed } from 'feed';
import articles from './blog/_article'

export async function get(req ,res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    const feed = new Feed({title:"a"});

    articles.forEach( article => {
        feed.addItem({
            title: article.title,
            id: `https://overconfigured.dev/blog/${article.slug}`,
            link:`https://overconfigured.dev/blog/${article.slug}`,
            description: article.description,
            content: article.htmlContent.replace(/<[^<]*>/gim, ''),
            date: new Date(),
            author: [
                {
                    name: "SeongJu Moon",
                    email: "arcuer.dev@gmail.com",
                    link: "https://overconfigured.dev"
                }
            ]
        })
    });

    res.end(feed.rss2());
}