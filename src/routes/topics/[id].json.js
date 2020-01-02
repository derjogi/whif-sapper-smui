import topics from './index.svelte';

const lookup = new Map();
topics.forEach(topic => {
	lookup.set(topic.id, JSON.stringify(topic));
});

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [id].json.js
	const { id } = req.params;

	if (lookup.has(id)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(id));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}
