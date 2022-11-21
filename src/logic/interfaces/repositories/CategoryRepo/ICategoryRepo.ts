import { Category } from "../../../models/Category";

interface ICategoryRepo{
    getCategories() : Promise<Category[] | null>
}

export type {ICategoryRepo}