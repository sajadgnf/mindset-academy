import { usePathname } from "next/navigation";

import { getDictionary } from "@/src/dictionaries";

export default async function Trans({ children }: { children: keyof Dictionary }) {
  const pathname = usePathname();
  const rawLang = pathname.split("/").filter(Boolean)[0] || "fa";
  const locale: langTypes = rawLang === "fa" ? "fa" : "fa";

  const dict: Dictionary = await getDictionary(locale);
  return <button>{dict[children]}</button>;
}
