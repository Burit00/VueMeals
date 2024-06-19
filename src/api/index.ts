import type { MealList } from "@/types";

const BASE_URL = 'https://api.edamam.com/api/recipes/v2';
const APP_ID = '077b9e51';
const APP_KEY = '5253421f62eb6a4cd2f30991070161ec';

const BASED_PARAMS = {
    app_id: APP_ID,
    app_key: APP_KEY,
    type: 'public'
};

export async function searchMeals(query: string): Promise<MealList> {
    const params = new URLSearchParams({
        q: query,
        ...BASED_PARAMS
    });

    const url = BASE_URL + '?' + params;
    const response = await fetch(url);
    
    return response.json() as Promise<MealList>;
}