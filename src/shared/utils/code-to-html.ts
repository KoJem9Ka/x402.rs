import { createHighlighter } from 'shiki';


const codeHighlighter = await createHighlighter({
  langs: ['shell', 'javascript', 'rust'],
  themes: ['light-plus', 'plastic', 'dark-plus'],
});

export function codeJSToHtml(code: string) {
  return codeHighlighter.codeToHtml(code, {
    lang: 'javascript',
    themes: { light: 'light-plus', dark: 'dark-plus' },
    colorReplacements: { 'light-plus': { '#ffffff': 'transparent' }, 'dark-plus': { '#1e1e1e': 'transparent' } },
  });
}

export function codeShellToHtml(code: string) {
  return codeHighlighter.codeToHtml(code, {
    lang: 'shell',
    themes: { light: 'light-plus', dark: 'plastic' },
    colorReplacements: { 'light-plus': { '#ffffff': 'transparent' }, plastic: { '#21252b': 'transparent' } },
  });
}

export function codeRustToHtml(code: string) {
  return codeHighlighter.codeToHtml(code, {
    lang: 'rust',
    themes: { light: 'light-plus', dark: 'dark-plus' },
    colorReplacements: { 'light-plus': { '#ffffff': 'transparent' }, 'dark-plus': { '#1e1e1e': 'transparent' } },
  });
}
