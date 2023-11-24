'use client'
import { IconType } from "react-icons"

interface CategoryInputProps{
    selected?: boolean,
    label: string,
    icon: IconType,
    OnClick: ( value: string) => void,
}

const CategoryInput:React.FC<CategoryInputProps> = ({
    selected, label, icon: Icon, OnClick
}) => {
  return (
    <div onClick={()=> OnClick(label)} className="rounded-xl border-2 p-4 flex flex-col items-center gap-2 hover:border-slate-500 transition cursor-pointer">
        <Icon size={30}/>
        <div className="font-medium">{label}</div>
    </div>
  )
}

export default CategoryInput