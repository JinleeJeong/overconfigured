import fs from 'fs';
import path from 'path';
import marked from 'marked';
import prism from 'prismjs';
import matter from 'gray-matter';
import formatReadingTimes from 'reading-time-emoji';
import dateformat from 'dateformat';
import getLoader from 'prismjs/dependencies';
import components from 'prismjs/components';

const componentsToLoad = ['python', 'go', 'cpp', 'java', 'swift', 'jsx', 'hcl', 'rust']
const loadedComponents = ['python', 'go', 'cpp', 'java', 'swift', 'jsx', 'hcl', 'rust'];

const loader = getLoader(components, componentsToLoad, loadedComponents);
loader.load(id => {
	import(`prismjs/components/prism-${id}.min.js`)
})

const cwd = process.cwd();
const POSTS_DIR = path.join(cwd, 'src/routes/_archives/articles/');
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
	const html = linkRenderer.call(renderer, href, title, text)

	if (href.indexOf('/') === 0) {
		return html
	} else if (href.indexOf('#') === 0) {
		const html = linkRenderer.call(renderer, 'javascript:;', title, text)
		return html.replace(/^<a /, `<a onclick="document.location.hash='${href.substr(1)}';" `)
	}

	return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ')
}

renderer.code = (code, language) => {
	const parser = prism.languages[language] || prism.languages.html
	const highlighted = prism.highlight(code, parser, language)
	return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`
}

marked.setOptions({ renderer });

const tagProcessor = (tags) => {
	const tagSubjects = tags.split(",").map(k => {
		let tmp = k.split(":");
		if (tmp.length < 2) throw new Error(`invalid tag options`);
		return {
			name: tmp[0],
			color: tmp[1]
		}
	}
	)
	return tagSubjects;
}

const articles = fs.readdirSync(POSTS_DIR)
	.filter(filename => /\.md$/.test(filename))
	.map(filename => {
		const rawContent = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf8');
		const { data, content } = matter(rawContent); // 내용과 메타데이터 분리
		const slug = filename.split(".")[0];

		const {
			title,
			description,
			date,
			tag,
			readingTime } = data;

		const tags = tagProcessor(tag);
		const formattedReadingTimes = formatReadingTimes(readingTime);
		const formattedDate = dateformat(new Date(date), 'mmmm d, yyyy');

		const htmlContent = marked(content);

		return {
			title,
			slug,
			description,
			formattedReadingTimes,
			formattedDate,
			tags,
			htmlContent
		}
	});

articles.sort((lhs, rhs) => {

	if (lhs.date > rhs.date) return 1
	if (lhs.date < rhs.date) return -1
});

articles.forEach(article => {
	article.htmlContent = article.htmlContent.replace(/^\t{3}/gm, '');
})

export default articles;

