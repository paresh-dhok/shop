export interface FeatureItem {
  id: string;
  title: string;
  tag?: 'New' | 'Popular' | 'Coming Soon';
}

export interface FeatureData {
  [categoryId: string]: FeatureItem[];
}