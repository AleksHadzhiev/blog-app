import React, { ChangeEvent, FormEvent, useState } from "react";
import formData from "../../formFormat/signUp.json"
import { signUpValidation } from "@/Validations/UserFormValidations";
import FormTextInputFIeld from "../Inputs/textInput";
import SubmitButton from "../Inputs/submitButton";
import { FormTextInput } from "@/types/formElements";
import { registerUser } from "@/axios/users";
import { SignUpUser } from "@/types/userObjects";

export default function SignUpForm() {
    const [formState, setFormState] = useState<{ [key: string]: string }>({});

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormState({ ...formState, [name]: value })
    }

    function validateData() {
        signUpValidation.validate(formState)
            .then(() => {
                console.log(formState)
                registerUser(formState as SignUpUser)
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
                        <FormTextInputFIeld
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