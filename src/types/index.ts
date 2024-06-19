export type Digest = {
    label: string;
    tag: string;
    total: number;
    unit: string;
}

export type Meal = {
    recipe: {
        calories: number;
        label: string;
        image: string;
        uri: string;
        healthLabels: string[];
        digest: Digest[];
        ingridientLines: string[];
    };
    _links: {
        self: {
            href: string
        }
    }
}

export type MealList = {
        hits: Meal[];
}