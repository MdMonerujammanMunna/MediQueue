"use client";

import { useEffect, useState } from "react";
import CardPage from "../components/Card/Card";

const AllTutorPage = () => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchTutors = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/Tutors`,
                    {
                        cache: "no-store",
                    }
                );

                const data = await res.json();

                setResults(Array.isArray(data) ? data : data.data || []);
            } catch (err) {
                console.error("Failed to fetch Tutors:", err);
                setResults([]);
            }
        };

        fetchTutors();
    }, []);

    // console.log(results);

    return (
        <div className="py-10">
            <div className="mb-5">
                <h1 className="text-3xl font-bold text-(--primary-color) text-center">
                    All Tutor Section
                </h1>
            </div>
            {/* Search fild start */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end px-10 mb-5">

                {/* Search */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                        Search Tutor
                    </label>

                    <input
                        type="text"
                        placeholder="Search tutor by name..."
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Start Date */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                        Start Date
                    </label>

                    <input
                        type="date"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* End Date */}
                <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium">
                        End Date
                    </label>

                    <input
                        type="date"
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                    />
                </div>

                {/* Reset Button */}
                <button
                    className="w-full rounded-xl border border-gray-300 px-4 py-3"
                >
                    Reset Filters
                </button>

            </div>
            {/* Search fild end */}
            <div className="grid lg:grid-cols-3 gap-5 px-10">
                {results.map((item, index) => (
                    <CardPage key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default AllTutorPage;