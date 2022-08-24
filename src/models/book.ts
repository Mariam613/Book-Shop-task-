import { Author } from "./author";

export interface Book {
  id: number;
  title: string;
  authors: Author[];
  bookshelves: string[];
  subjects: string[];
  download_count: number;
  languages: string[];
  media_type: string;
  copyright: boolean;
  formats: {
    "image/jpeg": string;
  };
}
