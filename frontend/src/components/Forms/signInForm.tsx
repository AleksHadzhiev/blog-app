import React, { ChangeEvent, FormEvent, useState } from "react";
import formData from "../../formFormat/signIn.json"
import { signInValidation } from "@/Validations/UserFormValidations";
import FromTextInputField from "../Inputs/textInput";
import SubmitButton from "../Inputs/submitButton";
import { FormTextInput } from "@/types/formElements";
import { signin } from "@/axios/users";
import { SignInUser } from "@/types/userObjects";

export default function SignInForm() {
    const [formState, setFormState] = useState<{ [key: string]: string }>({});

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormState({ ...formState, [name]: value })
    }

    function validateData() {
        signInValidation.validate(formState)
            .then(async () => {
                await signin(formState as SignInUser)
                console.log('Data is valid')
            })
            .catch((error) => {
                console.log('Validation error:', error.errors[0])
            })
    }

    function HandleSubmit(e: FormEvent) {
        e.preventDefault()
        validateData()
    }

    return (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            {
                formData.map((field: FormTextInput, index: number) => (
                    <div className="mb-4" key={index}>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>{field.label}</label>
                        <FromTextInputField
                            action={handleChange}
                            field={field}
                            value={formState[field.name] || ''}

                        />
                    </div>
                ))}
            <div className="flex items-center justify-between">
                <SubmitButton
                    buttonText="Submit"
                    action={HandleSubmit}
                />
            </div>
        </form>
    )
}