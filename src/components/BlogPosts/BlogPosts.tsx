"use client";
import { FC, Suspense, useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Filter, { FilterOption } from "../Filter/Filter";
import { transformCategories } from "@/helpers/transformCategories";
import PostList from "../Post/PostList";
import { Post } from "@/types/post";

const BlogPosts: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [categoriesOptions, setCategoriesOptions] = useState<FilterOption[]>(
    []
  );
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);

  const fetchCategories = async () => {
    try {
      const res = await fetch(`/api/categories/fetch`);
      const data = await res.json();
      const filterOptions = transformCategories(data.categories);
      setCategoriesOptions(filterOptions);
      return data;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  };

  const handleSearch = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  const handleFilterByCategory = (category: string | null) => {
    category ? setSelectedCategory(category) : setSelectedCategory("");
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        let apiUrl = `/api/posts/get?`;

        if (searchQuery) {
          apiUrl += `title=${encodeURIComponent(searchQuery as string)}`;
        }

        if (selectedCategory) {
          apiUrl += `&category=${selectedCategory}`;
        }

        const res = await fetch(apiUrl);
        const data = await res.json();

        setFilteredPosts(data);
        return data;
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    fetchPosts();
  }, [selectedCategory, searchQuery]);

  return (
    <div className="mb-4">
      <div className="flex items-start mb-10 mt-10">
        <SearchBar onSearch={handleSearch} />
        <Filter
          filterType="category"
          onFilterChange={handleFilterByCategory}
          options={categoriesOptions}
        />
      </div>
      {filteredPosts.length > 0 && <PostList posts={filteredPosts} />}
    </div>
  );
};

export default BlogPosts;
