import React, { FormEvent } from 'react';
import CreateBlogForm from '@/components/Forms/CreateBlogForm';

const DocumentPage = () => {

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log("CREATE BLOG")
    }

    return (
        <div className="min-h-screen bg-gray-100 flex justify-center items-center">
            <CreateBlogForm />
        </div>
    );
};

export default DocumentPage;
