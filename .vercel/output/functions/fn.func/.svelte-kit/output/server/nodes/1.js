

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BVvEGQCE.js","_app/immutable/chunks/scheduler.DB38Afdh.js","_app/immutable/chunks/index.DhrjRYcY.js","_app/immutable/chunks/entry.DNOezoeu.js"];
export const stylesheets = [];
export const fonts = [];
