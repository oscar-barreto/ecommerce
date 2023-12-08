"use client";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import qs from "query-string";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      searchTerm: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (!data.searchTerm) return router.push("/");

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: {
          searchTerm: data.searchTerm,
        },
      },
      { skipNull: true }
    );

    router.push(url);
    reset();
  };

  return (
    <div className="flex items-center text-slate-950">
      <div className="border flex md:px-3 md:py-2 border-slate-950 rounded-3xl">
      <input
        autoComplete="off"
        type="text"
        {...register("searchTerm")}
        placeholder="Explore"
        className="md:p-2
        focus:outline-none
        md:w-96
        w-[110px]
        h-[13px]
        bg-[#EDEEF2]
        text-slate-950
        "
      />
      
      <button
        onClick={handleSubmit(onSubmit)}
        className="
        flex
        items-center
        bg-slate-950
        hover:opacity-80
        text-white
        md:py-2
        md:px-3
        rounded-2xl
        md:text-xs
        text-[6px]
        px-1
        "
      >
        Search 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-2 h-2 md:w-4 md:h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

      </button>
      </div>
    </div>
  );
};

export default SearchBar;
