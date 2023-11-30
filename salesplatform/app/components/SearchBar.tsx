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
      <div className="border flex px-3 py-2 border-slate-950 rounded-3xl">
      <input
        autoComplete="off"
        type="text"
        {...register("searchTerm")}
        placeholder="Explore our platform"
        className="p-2
        focus:outline-none
        w-96
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
        py-2
        px-3
        rounded-2xl
        "
      >
        Search 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>

      </button>
      </div>
    </div>
  );
};

export default SearchBar;
