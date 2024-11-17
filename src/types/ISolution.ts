import { SolutionType } from "./SolutionType";

export interface IGalleryItem {
  type: "video" | "image";
  src: string;
}

export interface ISolution {
  type: SolutionType;
  iconPath: string;
  title: string;
  subTitle?: string;
  description: string;
  price?: {
    name?: string;
    amount: number | number[];
    isPrimary?: boolean;
    isFrom?: boolean;
    desc?: string;
  }[];
  gallery?: IGalleryItem[];
}
