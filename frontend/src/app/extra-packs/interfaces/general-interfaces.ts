export interface SectionItemInterface {
    title: string;
    imgURL: string;
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