import Link from "next/link"
import ListOfBlogs from "./listOfBlogs"
import MainBlog from "./mainComponent"
import SecondaryListOfBlogs from "./secondartyListOfBlogs"
import SecondaryBlogs from "./secondaryBlogs"
import { getAllBlogs } from "@/axios/blogs"
import { useEffect, useState } from "react"
import { Blog } from "@/types/blogObjects"

export default function Homepage() {

    const [blogs, setBlogs] = useState([])
    const [mainBlog, setMainBlog] = useState({} as Blog)

    useEffect(() => {
        const fetchBlogs = async () => {
            const response = await getAllBlogs()
            if (blogs.length != response.length) {
                setBlogs(response)
            }
            setMainBlog(response[0])
        }
        fetchBlogs()
        console.log(blogs)
    }, [blogs])

    return (
        <div className="max-w-screen-lg mx-auto">
            <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col">
                    <MainBlog blog={mainBlog} />
                </div>
                <div className="flex flex-col">
                    <SecondaryBlogs blogs={blogs} />
                </div>
            </div>
            <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                <h2 className="font-bold text-3xl">Latest news</h2>
                <Link href={"/blog/1"} className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
                    View all
                </Link>
            </div>
            <div className="block space-x-0 lg:flex lg:space-x-6">
                <ListOfBlogs />
            </div>

            <div className="rounded flex md:shadow mt-12">
                <img src="https://images.unsplash.com/photo-1579275542618-a1dfed5f54ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="w-0 md:w-1/4 object-cover rounded-l" />
                <div className="px-4 py-2">
                    <h3 className="text-3xl text-gray-800 font-bold">Subscribe to newsletter</h3>
                    <p className="text-xl text-gray-700">We sent latest news and posts once in every week, fresh from the oven</p>
                    <form className="mt-4 mb-10">
                        <input type="email" className="rounded bg-gray-100 px-4 py-2 border focus:border-green-400" placeholder="john@tech.com" />
                        <button className="px-4 py-2 rounded bg-green-800 text-gray-100">
                            Subscribe
                            <i className='bx bx-right-arrow-alt' ></i>
                        </button>
                        <p className="text-green-900 opacity-50 text-sm mt-1">No spam. We promise</p>
                    </form>
                </div>
            </div>

            <div className="flex mt-16 mb-4 px-4 lg:px-0 items-center justify-between">
                <h2 className="font-bold text-3xl">Popular news</h2>
                <Link href={"/blog/1"} className="bg-gray-200 hover:bg-green-200 text-gray-800 px-3 py-1 rounded cursor-pointer">
                    View all
                </Link>
            </div>
            <div className="block space-x-0 lg:flex lg:space-x-6">
                <SecondaryListOfBlogs />
            </div>
        </div>
    )
}