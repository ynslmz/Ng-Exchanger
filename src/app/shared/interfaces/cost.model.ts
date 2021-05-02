export interface DaCurrency {
  currency: string;
}

export interface BaseCurrency {
  currency: string;
  exchangeRate: number;
}

export interface CostItemAlias {
  accountingCode: string;
}

export interface Annotation {
  id: number;
  name: string;
}

export interface Cost2 {
  daStage: string;
  persona: string;
  type: string;
  amount: number;
}

export interface Comment {
  id: number;
  daStage: string;
  persona: string;
  author: string;
  comment: string;
  type: string;
  date: Date;
}

export interface CostItem {
  id: number;
  name: string;
  costItemAlias: CostItemAlias;
  annotation: Annotation;
  costs: Cost2[];
  comments: Comment[];
}

export interface Cost {
  id: number;
  name: string;
  displayOrder: number;
  costItems: CostItem[];
}

export interface VoyageCostDetails {
  daCurrency: DaCurrency;
  baseCurrency: BaseCurrency;
  costs: Cost[];
}
