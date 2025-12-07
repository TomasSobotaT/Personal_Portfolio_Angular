export interface Project {
  id: string; // unikátní ID nebo slug
  period?: string; // např. "2024 — Present"
  title: string; // název projektu
  description: string; // stručný popis
  tags: string[]; // štítky
  imageUrl?: string; // volitelně obrázek
  link?: string; // volitelně externí odkaz
}
