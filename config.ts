// const isDev = process.env.NODE_ENV === 'development';
// const isProd = !isDev;

const isGithubPages = process.env.NEXT_PUBLIC_BUILD_FOR === 'github';
const basePath = isGithubPages ? '/x402.rs' : undefined;

const runtime = process.versions.bun
  ? `Bun="${process.versions.bun}"`
  : `Node="${process.versions.node}"`;

console.info(`[BUILD CONFIG] ${runtime} mode="${isGithubPages ? 'GitHub Pages' : process.env.NODE_ENV}" basePath="${basePath ?? ''}"`);

export const config = {
  output: isGithubPages ? 'export' as const : undefined,
  basePath,
};
