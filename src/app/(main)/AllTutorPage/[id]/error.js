"use client"

import Link from "next/link";

export default function Error({
    error,
    reset,
}) {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-xl rounded-2xl p-10 text-center max-w-md w-full">
                <h1 className="text-6xl font-bold text-red-500">Oops!</h1>

                <h2 className="text-2xl font-semibold mt-4">
                    Something went wrong
                </h2>

                <p className="text-gray-500 mt-2">
                    An unexpected error has occurred.
                </p>

                <div className="flex gap-4 justify-center mt-6">
                    <button
                        onClick={() => reset()}
                        className="bg-black text-white px-5 py-2 rounded-xl"
                    >
                        Try Again
                    </button>

                    <Link href="/">
                        <button className="border  px-5 py-2 rounded-xl bg-black text-white ">
                            Go Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}