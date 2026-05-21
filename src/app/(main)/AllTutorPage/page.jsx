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

    console.log(results);

    return (
        <div className="py-10">
            <div className="mb-5">
                <h1 className="text-3xl font-bold text-(--primary-color) text-center">
                    All Tutor Section
                </h1>
            </div>

            <div className="grid lg:grid-cols-3 gap-5 px-10">
                {results.map((item, index) => (
                    <CardPage key={index} item={item} />
                ))}
            </div>
        </div>
    );
};

export default AllTutorPage;