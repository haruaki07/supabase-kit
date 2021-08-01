import adapter from "@sveltejs/adapter-static";

const path = "/supabase-kit"; // for gh-pages
const prod = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
    // fix gh-pages assets not loaded
    ...(prod && {
      paths: {
        assets: path,
        base: path
      }
    }),
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
