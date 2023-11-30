"use client";

import Container from "./Container";
import { usePathname, useSearchParams } from "next/navigation";
import { categories } from "../utils/Categorie";
import Category from "./Category";
import { useState } from "react";

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const [photo,setPhoto] =useState(categories)

  const isMainPage = pathname === "/";

  if (!isMainPage) return null;

  return (
    <div className="bg-[#EDEEF2]">
      
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item) => (
            <Category
              key={item.label}
              label={item.label}
              icon={item.icon}
              image={item.image}
              selected={
                category === item.label ||
                (category === null && item.label === "All")
              }
            />
          ))}
        </div>
      
    </div>
  
  );
};

export default Categories;
