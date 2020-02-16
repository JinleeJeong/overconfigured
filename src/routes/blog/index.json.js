import articles from './_article';

const contents = JSON.stringify(articles.map(article => {
	return {
		title: article.title,
		slug: article.slug,
		description: article.description,
		formattedReadingTimes: article.formattedReadingTimes,
		tags: article.tags,
		formattedDate: article.formattedDate,
	};
}));

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}