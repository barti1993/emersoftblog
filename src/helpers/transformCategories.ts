import { Category } from "@/types/post";

export const transformCategories = (categoriesData: Category[]) => {
  const filterOptions = categoriesData.map((category) => ({
    label: category.name,
    value: category.id.toString(),
  }));
  return filterOptions;
};
