

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.BjJBS4cx.js","_app/immutable/chunks/scheduler.DB38Afdh.js","_app/immutable/chunks/index.DhrjRYcY.js"];
export const stylesheets = [];
export const fonts = [];
