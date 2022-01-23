export interface SectionItemInterface {
    id: string;
    title: string;
    imgurl: string;
    uhash: string;
}

export interface SectionInnerItemInterface {
    title: string;
    imgURL: string[];
    price: string;
    short_description: string;
    long_description: string;
}

export interface MainDataInterface {
    title: string;
    imgURL: string;
    offers: SectionInnerItemInterface[];
}
export interface BackendResponseInterface {
    rows: any;
    error: string;
}

export interface OfferInterface {
    id?: string,
    title: string,
    short_description: string,
    long_description: string,
    imgurl: string[],
    price: Number,
    uhash?: string,
    section_hash: string
}

export interface IUpdateObject {
    keys: string[],
    values: any[]
}
export interface IState {
    sectionsAddFormVisible: boolean,
    offersAddFormVisible: boolean,
    offersVisibility: boolean,
    activeOffer: OfferInterface,
    activeService: SectionItemInterface
  }