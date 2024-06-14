

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.PiR09thV.js","_app/immutable/chunks/disclose-version.W8QtuJA0.js","_app/immutable/chunks/runtime.B9sxo3Wy.js"];
export const stylesheets = [];
export const fonts = [];
