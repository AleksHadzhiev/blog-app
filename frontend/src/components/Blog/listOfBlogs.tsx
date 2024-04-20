import Link from "next/link";

export default function ListOfBlogs() {
    return (
        <>
            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
                <img src="https://images.unsplash.com/photo-1526666923127-b2970f64b422?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
                <div className="p-4 pl-0">
                    <h2 className="font-bold text-2xl text-gray-800">Put all speaking her delicate recurred possible.</h2>
                    <p className="text-gray-700 mt-2">
                        Set indulgence inquietude discretion insensible bed why announcing. Middleton fat two satisfied additions.
                        So continued he or commanded household smallness delivered. Door poor on do walk in half. Roof his head the what.
                    </p>

                    <Link href="/blog/5" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </Link>
                </div>
            </div>

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
                <img src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60" className="rounded" alt="technology" />
                <div className="p-4 pl-0">
                    <h2 className="font-bold text-2xl text-gray-800">Is at purse tried jokes china ready decay an. </h2>
                    <p className="text-gray-700 mt-2">
                        Small its shy way had woody downs power. To denoting admitted speaking learning my exercise so in.
                        Procured shutters mr it feelings. To or three offer house begin taken am at.
                    </p>

                    <Link href="/blog/6" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </Link>
                </div>
            </div>

            <div className="rounded w-full lg:w-1/2 lg:w-1/3 p-4 lg:p-0">
                <img src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" className="rounded" alt="technology" />
                <div className="p-4 pl-0">
                    <h2 className="font-bold text-2xl text-gray-800">As dissuade cheerful overcame so of friendly he indulged unpacked.</h2>
                    <p className="text-gray-700 mt-2">
                        Alteration connection to so as collecting me.
                        Difficult in delivered extensive at direction allowance.
                        Alteration put use diminution can considered sentiments interested discretion.
                    </p>

                    <Link href="/blog/7" className="inline-block py-2 rounded text-green-900 mt-2 ml-auto"> Read more </Link>
                </div>
            </div>
        </>)
}