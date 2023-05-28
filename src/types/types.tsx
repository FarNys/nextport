export interface CardType {
  icon?: JSX.Element;
  title: string;
  subTitle: string;
  desc: string;
  tags: string[];
  images?: { url: string; width: number; height: number }[];
  link?: string;
}
export interface SingleSectionType {
  title: string;
  cards: CardType[];
}
export interface ProjectType {
  title: string;
  cards: Omit<CardType, "icon">[];
}
