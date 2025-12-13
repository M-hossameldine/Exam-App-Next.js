// prepare slug for url insertion
export function slugifyTitle(value: string) {
  return value
    .trim()
    .split(/\s+/)
    .map(word => {
      // detect FULLY uppercase words (CSS, HTML, API)
      if (word === word.toUpperCase() && /[A-Z]/.test(word)) {
        return `~${word.toLowerCase()}~`;
      }

      return word.toLowerCase();
    })
    .join('-')
    .replace(/[^\w\-~]/g, '') // keep ~ for decoding
    .replace(/--+/g, '-');
}

// decode slug to title
export function deslugifyTitle(slug: string) {
  return decodeURIComponent(slug)
    .split('-')
    .map(word => {
      // restore FULL uppercase words
      if (word.startsWith('~') && word.endsWith('~')) {
        return word.slice(1, -1).toUpperCase();
      }

      // normal Title Case
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
    .trim();
}
