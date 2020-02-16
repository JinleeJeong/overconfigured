import {SitemapStream, streamToPromise} from 'sitemap'

export async function get(req, res) {

    res.setHeader('Content-Type', 'text/xml');

    const sitemap = new SitemapStream({hostname: 'https://overconfigured.dev'});
    sitemap.write({url: '/blog/', changefreq: 'daily', priority: 0.3});
    sitemap.end();

    const maps = await streamToPromise(sitemap)

    res.end(maps);
}
