'use client'
import { useState } from "react"
import Heading from "../components/Heading"
import Input from "../inputs/Input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Button from "../components/Button"


const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, formState:errors} = useForm<FieldValues>({defaultValues:{name:'', email:'', password:''},}) 

  return (
    <>
        <Heading title="Sun up for E-Shop"/>
        <hr className="bg-slate-300 w-full h-px" />
        <Input id="name" label="Name" disabled={isLoading} register={register} errors={erros} required />
        <Input id="email" label="Email" disabled={isLoading} register={register} errors={erros} required />
        <Input id="password" label="Password" disabled={isLoading} register={register} errors={erros} required  type="password"/>
        <Button label={isLoading ? 'Loading' : 'Sign Up' } onClick={handleSubmit(onSubmit)} />
    </>
  )
}

export default RegisterForm