import adapter from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
    adapter: adapter({
			// default options are shown
			pages: 'dist',
			assets: 'dist',
			fallback: null
		})
	}
};

export default config;
