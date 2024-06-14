export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bootstrap.png","css.png","EscalanteCV.pdf","favicon.png","figma.png","html.png","java2.png","javascript.png","logo.png","profile-pic.png","react.png","svelte-logo.png","svelte.png","tailwind.png","tailwind2.png"]),
	mimeTypes: {".png":"image/png",".pdf":"application/pdf"},
	_: {
		client: {"start":"_app/immutable/entry/start.IgAC41qn.js","app":"_app/immutable/entry/app.Bc6J28D1.js","imports":["_app/immutable/entry/start.IgAC41qn.js","_app/immutable/chunks/entry.2cWWBmpu.js","_app/immutable/chunks/runtime.B9sxo3Wy.js","_app/immutable/entry/app.Bc6J28D1.js","_app/immutable/chunks/runtime.B9sxo3Wy.js","_app/immutable/chunks/render.EDRjK0I8.js","_app/immutable/chunks/disclose-version.W8QtuJA0.js","_app/immutable/chunks/props.C1yr7y_X.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
