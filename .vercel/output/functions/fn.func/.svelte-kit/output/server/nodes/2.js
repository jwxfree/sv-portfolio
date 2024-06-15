

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.dSLYcWOP.js","_app/immutable/chunks/scheduler.DB38Afdh.js","_app/immutable/chunks/index.DhrjRYcY.js"];
export const stylesheets = [];
export const fonts = [];
