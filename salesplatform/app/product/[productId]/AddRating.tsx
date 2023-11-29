'use client'
import { SafeUser } from "@/types";
import { Product, Review, Order } from "@prisma/client"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";

interface AddRatingProps{
  product: Product & {
    reviews: Review[]
  };
  user: (SafeUser & {
    orders: Order[]
  }) | null
}


const AddRating:React.FC<AddRatingProps> = ({product, user}) => {

  const [isLoading,setIsLoading] = useState(false);
  const router = useRouter();

  const {register,handleSubmit,setValue, reset, formState:{errors}} = useForm<FieldValues>({
    defaultValues:{
      Comment: '',
      rating: 0,
    }
  })
  const

  return (
    <div>
      Hello World
    </div>
  )
}

export default AddRating