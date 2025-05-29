interface News {
  id: number;
  header: Header;
  content: Array<
    | ({ type: "title" } & Title)
    | ({ type: "paragraph" } & Paragraph)
    | ({ type: "media" } & Media)
  >;
}

interface Header {
  title: string;
  description: string;
  author: string;
  date: string;
}

interface Media {
  format: "image";
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
