'use client'
import { useState } from "react"
import Heading from "../components/Heading"
import Input from "../inputs/Input"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import Button from "../components/Button"
import Link from "next/link"
import { AiOutlineGoogle } from "react-icons/ai"


const RegisterForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit, formState:errors} = useForm<FieldValues>({defaultValues:{name:'', email:'', password:''},})
    const onSubmit:SubmitHandler<FieldValues> =(data) => {
        setIsLoading(true)
        console.log(data)
    }

    return (
        <>
          <Heading title="Sign up for E~Shop" />
          <Button
            outline
            label="Sign up with Google"
            onClick={() => signIn("google")}
            icon={AiOutlineGoogle}
          />
          <hr className="bg-slate-300 w-full h-px" />
          <Input
            id="name"
            label="Name"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          ></Input>
          <Input
            id="email"
            label="Email"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
          ></Input>
          <Input
            id="password"
            label="Password"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            type="password"
          ></Input>
          <Button
            label={isLoading ? "Loading..." : "Sing Up"}
            onClick={handleSubmit(onSubmit)}
          />
          <p className="text-sm">
            Already have an account?{" "}
            <Link className="underline" href="/login">
              Log in
            </Link>
          </p>
        </>
      );
    };
    
    export default RegisterForm;