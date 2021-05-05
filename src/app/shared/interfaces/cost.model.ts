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

export interface CostWithType {
  daStage: string;
  persona: string;
  type: CostType;
  amount: number;
}

export enum CostType {
  Quoted = 'Quoted',
  Screened = 'Screened'
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
  costs: CostWithType[];
  comments: Comment[];
}

export interface CostGroup {
  id: number;
  name: string;
  displayOrder: number;
  costItems: CostItem[];
}

export interface VoyageDetail {
  daCurrency: DaCurrency;
  baseCurrency: BaseCurrency;
  costs: CostGroup[];
}
