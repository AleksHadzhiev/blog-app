import React, { FormEventHandler } from 'react'

interface ButtonProps {
    buttonText: string
    action: FormEventHandler
}

const SubmitButton: React.FC<ButtonProps> = ({ buttonText, action }) => {
    return (
        <button
            onClick={action}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" type="button">
            {buttonText}
        </button>
    )
}

export default SubmitButton