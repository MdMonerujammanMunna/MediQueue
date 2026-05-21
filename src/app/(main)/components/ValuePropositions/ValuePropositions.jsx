import React from "react";

export default function ValuePropositions() {
    const featuresData = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="#2563EB"><path fill="#2563EB" fillRule="evenodd" d="m15.712 6.337l.022.058a4.04 4.04 0 0 1-1.343 4.671l-.01.008l-3.336 2.497l-1.643 1.242l-.999.755a.675.675 0 0 1-.813 0l-.999-.755l-1.643-1.242l-3.313-2.483l-.018-.014l-.008-.007A4.04 4.04 0 0 1 .267 6.395l.023-.057L2.466.657a.56.56 0 0 1 .475-.358a.576.576 0 0 1 .613.416l1.47 4.5h5.953l1.47-4.5a.575.575 0 0 1 1.087-.058zM11.28 8.53a.75.75 0 0 0-1.06-1.06L7.5 10.19L6.28 8.97a.75.75 0 1 0-1.06 1.06l1.75 1.75a.75.75 0 0 0 1.06 0z" clipRule="evenodd" /></svg>
            ),
            title: "Verified Tutors",
            description: "Every tutor undergoes background checks and academic certificate verification before joining."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="#32c259" d="M480 128a64 64 0 0 0-64-64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4ZM32 416a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V179a3 3 0 0 0-3-3H35a3 3 0 0 0-3 3Zm344-208a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m-80-80a24 24 0 1 1-24 24a24 24 0 0 1 24-24m0 80a24 24 0 1 1-24 24a24 24 0 0 1 24-24" /></svg>
            ),
            title: "Flexible Scheduling",
            description: "Book, cancel, or reschedule classes anytime seamlessly through your student dashboard."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#ff9b1a"><path fill="#ff9b1a" d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2m-6 9c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2z" /></svg>
            ),
            title: "100% Secure Payment",
            description: "Your payments are protected securely with bKash, Nagad, or cards. Refund is guaranteed."
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8 8"><path fill="#FF033E" d="m0 1l1 1v3l1 1V4l1 1v3H2L0 6m8-5v5L6 8H5V5l1-1v2l1-1V2M2 2l2-2l2 2l-2 2" /></svg>
            ),
            title: "Satisfaction Guarantee",
            description: "Not satisfied with your first session? We will find you a replacement tutor free of charge."
        }
    ];

    return (
        <div className="w-full  dark:bg-zinc-950 border-t-4 border-[var(--primary-color)]  bg-[var(--primary-color)] py-16 text-white ">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
                    {featuresData.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center p-4 rounded-xl transition-all duration-300 hover:scale-105"
                        >
                            <div className="mb-4 p-4 bg-white dark:bg-zinc-800 rounded-full shadow-sm flex items-center justify-center w-16 h-16">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-zinc-100 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-white leading-relaxed max-w-62">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}