export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bootstrap.png","css.png","EscalanteCV.pdf","favicon.png","figma.png","html.png","java2.png","javascript.png","logo.png","moon-solid.svg","profile-pic.png","react.png","sun-solid.svg","svelte-logo.png","svelte.png","tailwind.png","tailwind2.png"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.H86U4F9_.js","app":"_app/immutable/entry/app.P5kkqAR5.js","imports":["_app/immutable/entry/start.H86U4F9_.js","_app/immutable/chunks/entry.DNOezoeu.js","_app/immutable/chunks/scheduler.DB38Afdh.js","_app/immutable/entry/app.P5kkqAR5.js","_app/immutable/chunks/scheduler.DB38Afdh.js","_app/immutable/chunks/index.DhrjRYcY.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
