interface News {
  id: number;
  header: Header;
  content: Array<
    | ({ type: "title" } & Title)
    | ({ type: "paragraph" } & Paragraph)
    | ({ type: "media" } & Media)
  >;
  tags: string[];
}

interface Header {
  title: string;
  description: string;
  author: string;
  date: string;
  coverUrl?: string;
}

interface Media {
  format: "image" | "gif" | "video";
  url: string;
  alt: string;
  width?: number | `${number}${"px" | "rem" | "%"}`;
  height?: number | `${number}${"px" | "rem" | "%"}`;
}

interface Title {
  content: string;
}

interface Paragraph {
  content: string;
}
