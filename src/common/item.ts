// basic type of singular item fetched from API

export type Item = {
    id: number;
    title: string;
    price: number;
    category: string;
    description: string;
    image: string;
};

// extended type of Item including information about item count
// it is used in our local cart store

export type ExtendedItem = Item & {
    count: number;
};
