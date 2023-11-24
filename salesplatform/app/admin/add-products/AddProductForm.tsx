'use client'

import Heading from "@/app/components/Heading";
import Input from "@/app/inputs/Input";
import { FieldValue, useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import TextArea from "@/app/inputs/TextArea";
import CustomCheckBox from "@/app/inputs/CustomCheckBox";
import { categories } from "@/app/utils/Categorie";
import CategoryInput from "@/app/inputs/CategoryInput";
import { colors } from '@/app/utils/Colors';
import SelectColor from "@/app/inputs/SelectColor";

export type ImageType = {
  color: string,
  colorCode: string,
  image: File | null
}
export type UploadedImageType = {
  color: string,
  colorCode: string,
  image: string,
}


const AddProductForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [images, setImages] = useState<ImageType[] | null>();
    const [isProductCreated, seIsProductCreated] = useState(false)
    const {register, handleSubmit, setValue, watch, reset, formState:{errors}} = useForm<FieldValue>({
        defaultValues:{
            name:'',
            description:'',
            inStock: false,
            images:[],
            price:'',
        },
    });

    console.log('images>>>>',images)
    
    useEffect(()=>{
      setCustomValue("images", images)
    },[images]);

    useEffect(() => {
      if (isProductCreated) {
        reset();
        setImages(null);
        setIsProductCreated(false);
      }
    }, [isProductCreated]);

    const addImageToState = useCallback((value: ImageType) => {
      setImages((prev) => {
        if (!prev) {
          return [value];
        }
        return [...prev, value];
      });
    }, []);
  
    const removeImageFromState = useCallback((value: ImageType) => {
      setImages((prev) => {
        if (prev) {
          const filteredImages = prev.filter(
            (item) => item.color !== value.color
          );
          return filteredImages;
        }
        return prev;
      });
    }, []);

    const category = watch('category');
    const setCustomValue = (id:string, value:any) =>{
      setValue(id, value,{
        shouldValidate: true,
        shouldDirty: true,
        shouldTouch: true,
      })
    };

  return (
    <>
        <Heading title="Add a Product" center/>
        <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      ></Input>
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      ></Input>
      <Input
        id="brand"
        label="Brand"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      ></Input>
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <CustomCheckBox
      id="inStock"
      register={register}
      label="This product is in stock"
      />
      <div className="w-full font-medium">
        <div className="mb-2 font-semibold">Select a Category:</div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 max-h-[50vh] overflow-y-auto">
            {
              categories.map((item)=>{
                if(item.label === 'All'){
                  return null;
                }
                return (<div key={item.label} className="col-span">
                    <CategoryInput OnClick={(category)=> setConstantValues('category', category)} selected={category === item.label} label={item.label} icon={item.icon}/>
                </div>)
              })
            }
        </div>
      </div>
      <div className="w-full flex flex-col flex-wrap gap-4">
        <div className="font-bold">
            Select the available product colors and upload their images
        </div>
        <div className="text-sm">
           You must upload an image  for each of the color selected otherwise your color selection will be ignored.
        </div>
        <div className="grid grid-cols-2 gap-3">
        {colors.map((item, index) => {
            return (
              <SelectColor key={index} item={item} addImageToState={addImageToState} removeImageFromState={removeImageFromState} isProductCreated={isProductCreated}/>
            );
          })}
        </div>
      </div>
      <Button
    </>
    
  )
}

export default AddProductForm