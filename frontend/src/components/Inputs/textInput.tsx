import { FormTextInput } from '@/types/formElements';
import React, { ChangeEventHandler } from 'react';

interface FormTextInputProps {
    action: ChangeEventHandler<HTMLInputElement>,
    field: FormTextInput,
    value: string
}

const FromTextInputField: React.FC<FormTextInputProps> = ({ action, field, value }) => {

    const edit = (e: React.ChangeEvent<HTMLInputElement>) => {
        action(e);
    };

    const borderColorClass = value.trim() === '' ? 'border-red-500' : 'border-gray-700';

    return (
        <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${borderColorClass}`}
            id={field.name}
            type={field.type}
            name={field.name}
            value={value}
            placeholder={field.placeholder}
            onChange={edit}
        />
    );
};

export default FromTextInputField;