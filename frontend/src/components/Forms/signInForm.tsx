import React, { ChangeEvent, FormEvent, useState } from "react";
import formData from "../../formFormat/signIn.json"
import { signInValidation } from "@/Validations/UserFormValidations";

export default function SignInForm() {
    const [formState, setFormState] = useState<{ [key: string]: string }>({});

    interface FormFields {
        type: string;
        label: string;
        name: string,
        placeholder: string;
        "data-test-id": string;
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormState({ ...formState, [name]: value })
    }

    function validateData() {
        console.log(formState)
        signInValidation.validate(formState)
            .then(() => {
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
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={HandleSubmit}>
            {
                formData.map((field: FormFields, index: number) => (
                    <div className="mb-4" key={index}>
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={field.name}>{field.label}</label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id={field.name}
                            type={field.type}
                            name={field.name}
                            value={formState[field.name] || ''}
                            placeholder={field.placeholder}
                            onChange={handleChange}
                        />
                    </div>
                ))}
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                </button>
            </div>
        </form>
    )
}