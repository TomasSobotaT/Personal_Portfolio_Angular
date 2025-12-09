export interface HelperLink {
  name: string;
  url: string;
}

export interface HelperCategory {
  id: string;
  title: string;
  items: HelperLink[];
}
