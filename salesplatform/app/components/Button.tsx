'use client'

interface ButtonProps{
    label: string,
    disabled?: boolean,
    outline?:boolean,
    custom?:string,
    icon?:IconType,
    small?: boolean,
    onClick: (e:React.MouseEvent<HTMLButtonElement>) => void,

}
const Button: React.FC<ButtonProps> = ({
    label,
    disabled,
    outline,
    custom,
    icon,
    small,
    onClick,
}) => {
  return (
    <button 
    onClick={onClick}
    disabled={disabled} 
    className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-md hover:opacity-80 transition w-full border-slate-700 flex items-center justify-center gap-2 
    ${outline? 'bg-white' : 'bg-slate-700'}
    ${outline? 'text-slate-700': 'text-white'}
    ${small? 'text-sm font-light': 'text-md'}
    ${small? 'py-1 px-2': 'py-3 px-4 border-2'}
    ${custom? 'custom': ''}`
    }>
        {icon && <icon size={24}/>} {label}
        </button>
  )
}

export default Button