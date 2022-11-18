// basic type of singular item fetched from API

export type Item = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
};

export type ExtendedItem = Item & {
    count: number;
};
