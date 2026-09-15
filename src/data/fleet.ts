export interface Jet {
    id: string;
    class: string;
    name: string;
    passengers: string;
    range: string;
    price: string;
    image: string;
}

export const fleet: Jet[] = [
    {
        id: "1",
        class: "Light Jet",
        name: "Citation CJ3",
        passengers: "6 passengers",
        range: "2,000 nm range",
        price: "From $3,200/hr",
        image: "https://images.unsplash.com/photo-1583396618422-597b2755de13?w=900",
    },
    {
        id: "2",
        class: "Midsize Jet",
        name: "Citation XLS+",
        passengers: "8 passengers",
        range: "3,600 nm range",
        price: "From $4,800/hr",
        image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900",
    },
    {
        id: "3",
        class: "Heavy Jet",
        name: "Gulfstream G450",
        passengers: "14 passengers",
        range: "6,700 nm range",
        price: "From $8,500/hr",
        image: "https://images.unsplash.com/photo-1583500178690-f7fd8c6dfe0d?w=900",
    },
];