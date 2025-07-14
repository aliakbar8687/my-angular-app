export interface News {
 id: number;
  title: string;
  excerpt: string;
  category: string; // Make this required instead of optional
  author: string;
  publishDate: Date; // Use Date type consistently
  image: string;
  tags: string[];
  featured: boolean;
}
