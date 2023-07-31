export interface RealisationArticleI {
  id: number;
  URL: string;
  paragraph: string;
  realisationCategoryId: number;
  title: string;
}

export interface CategoryWithRealisationArticlesI {
  id: number;
  photo_category_name: string;
  realisationArticles: RealisationArticleI[];
}

export interface ImageUrlI {
  URL: string;
}

// Interfaces that concern inspiration tables:
export interface InspirationImageI {
  id: number;
  URL: string;
  label: string;
  inspirationCategoryId?: number;
}