import React from "react";

export default function PlatformStats() {
    // টিউটর বুকিং প্ল্যাটফর্মের রিয়েল-টাইম পরিসংখ্যান
    const statsData = [
        { number: "500+", label: "Verified Tutors" },
        { number: "12,000+", label: "Successful Classes" },
        { number: "4.9/5", label: "Student Ratings" },
        { number: "50+", label: "Subjects Covered" },
    ];

    return (
        <div className="w-full bg-[var(--primary-color)] dark:bg-zinc-950 border-y border-zinc-100 dark:border-zinc-900 py-12">
            <div className=" px-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0 text-center items-center">
                    {statsData.map((stat, index) => (
                        <div key={index} className="relative flex flex-col items-center">

                            <span className="text-3xl md:text-4xl font-bold  text-white tracking-tight">
                                {stat.number}
                            </span>


                            <span className="text-xs md:text-sm text-white mt-2 font-medium">
                                {stat.label}
                            </span>


                            {index !== statsData.length - 1 && (
                                <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 h-12 w-[1px] bg-zinc-200 dark:bg-zinc-800" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}