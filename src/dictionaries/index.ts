import "server-only";

const dictionaries = {
  fa: () => import("./fa.json").then((module) => module.default),
};

export const getDictionary = async (locale: langTypes) => dictionaries[locale]();
