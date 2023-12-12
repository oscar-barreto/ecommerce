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
      className={`flex items-center justify-center text-center border border-slate-950 hover:text-slate-800 transition ${
        selected ? "border-b-slate-800" : "border-transparent"
      }
      ${selected ? "text-slate-800" : "text-slate-500"}
      `}
    >
      <div className="relative w-32 h-64 md:w-56 md:h-72 font-semibold flex flex-col items-center">
        <h3 className={`${nunito.className} mt-28 text-white text-md md:text-2xl z-10`}>{label}</h3>
      <Image alt="category image" fill src={image}/>
      <div className="arrow cursor-pointer mt-14 md:mt-20 hover:bg-slate-50 border-slate-50 border flex z-20 p-1 justify-center items-center rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 hover:text-slate-950 text-slate-50 p-1 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>

      </div>
      </div>
    </div>
  );
};

export default Category;
