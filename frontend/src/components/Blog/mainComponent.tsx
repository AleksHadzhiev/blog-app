import Link from "next/link";

export default function MainBlog() {
    return (
        <div className="mb-4 lg:mb-0  p-4 lg:p-0 w-full md:w-4/7 relative rounded block">
            <img src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded-md object-cover w-full h-64" />
            <span className="text-green-700 text-sm hidden md:block mt-4"> Technology </span>
            <h1 className="text-gray-800 text-4xl font-bold mt-2 mb-2 leading-tight">
                Ignorant branched humanity led now marianne too.
            </h1>
            <p className="text-gray-600 mb-4">
                Necessary ye contented newspaper zealously breakfast he prevailed. Melancholy middletons yet understood
                decisively boy law she. Answer him easily are its barton little. Oh no though mother be things simple
                itself.
                Oh be me, sure wise sons, no. Piqued ye of am spirit regret. Stimulated discretion impossible admiration in particular conviction up.
            </p>
            <Link href="/blog/1" className="inline-block px-6 py-3 mt-2 rounded-md bg-green-700 text-gray-100">
                Read more
            </Link >
        </div>
    )
}