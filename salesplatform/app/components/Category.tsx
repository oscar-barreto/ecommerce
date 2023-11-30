"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { IconType } from "react-icons";
import qs from "query-string";
import Image from "next/image";
import { categories } from "../utils/Categorie";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"], weight: ["500"] });

interface CategoryBoxProps {
  label: string;
  icon: IconType;
  image: string;
  selected?: boolean;
}

const Category: React.FC<CategoryBoxProps> = ({
  label,
  icon: Icon,
  image,
  selected,
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    if (label === "All") {
      router.push("/");
    } else {
      let currentQuery = {};

      if (params) {
        currentQuery = qs.parse(params.toString());
      }

      const updatedQuery: any = {
        ...currentQuery,
        category: label,
      };

      const url = qs.stringifyUrl(
        {
          url: "/",
          query: updatedQuery,
        },
        { skipNull: true }
      );

      router.push(url);
    }
  }, [label, params, router]);

  return (
    <div
      onClick={handleClick}
      className={`flex items-center justify-center text-center border border-slate-950 hover:text-slate-800 transition cursor-pointer ${
        selected ? "border-b-slate-800" : "border-transparent"
      }
      ${selected ? "text-slate-800" : "text-slate-500"}
      `}
    >
      <div className="relative w-56 h-72 font-semibold flex justify-center items-center">
        <h3 className={`${nunito.className} text-white text-xl z-10`}>{label}</h3>
      <Image fill src={image}/>
      </div>
    </div>
  );
};

export default Category;
