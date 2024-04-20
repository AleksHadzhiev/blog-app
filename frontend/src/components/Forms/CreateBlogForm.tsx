import React, { ChangeEvent, FormEvent, useState } from "react";
import formData from "../../formFormat/createBlog.json"
import { CreateBlogValidation } from "@/Validations/BlogFormValidations";
import FormTextInputFIeld from "../Inputs/textInput";
import SubmitButton from "../Inputs/submitButton";
import { FormTextInput } from "@/types/formElements";
import { createBlog } from "@/axios/blogs";
import { CreateBlog } from "@/types/blogObjects";

export default function CreateBlogForm() {
    const [formState, setFormState] = useState<{ [key: string]: string }>({});

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        setFormState({ ...formState, [name]: value })
    }

    function validateData() {
        console.log(formState)
        CreateBlogValidation.validate(formState)
            .then(() => {
                console.log(formState)
                createBlog(formState as CreateBlog)
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