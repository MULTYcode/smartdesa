import { CategoryType } from "./category.type";
import { Meta } from "./meta.type";

export type ArticleType = {
    id: number;
    user_id: number,
    category_id: string; 
    title: string; 
    description: string;
    slug: string;
    content: string; 
    published_at: string | null;
    views: number,
    thumbnail: string | null;
    meta: {
      key: string; 
      value: string | string[]; 
    }[]; 
    user: {
      name: string
    }
    created_at: string
    updated_at: string
    category: CategoryType
  }; 

export type ListArticle = {
  data: ArticleType[];
  meta: Meta
}