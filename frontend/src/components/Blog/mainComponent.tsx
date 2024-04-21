import { Blog } from "@/types/blogObjects";
import Link from "next/link";

interface Props {
    blog: Blog;
}

const MainBlog = ({ blog }: Props) => {
    return (
        <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-md object-cover w-full h-64" />
            <span className="text-green-700 text-sm hidden md:block mt-4"> Technology </span>
            <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">{blog.title}</h1>
            <p className="text-gray-600 mb-4">{blog.description}</p>
            <Link href="/blog/1" className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
                Read more
            </Link >
        </div>
    )
}

export default MainBlog