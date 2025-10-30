let currentLang: langTypes | null = null;

export function setLang(lang: langTypes) {
  currentLang = lang;
}

export function getLang() {
  if (!currentLang) throw new Error("lang not set");
  return currentLang;
}
