"use client"
import React, { useState } from "react";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);
    const faqData = [
        {
            mainQuestion: "How do I find the right tutor for my subject?",
            subQuestion: "You can use our advanced search filters to sort tutors by subject, background, hourly budget, and student ratings."
        },
        {
            mainQuestion: "Can I book a free trial session before committing?",
            subQuestion: "Yes, many of our verified tutors offer a 20-minute free demo session to check their teaching style."
        },
        {
            mainQuestion: "What happens if I need to reschedule a class?",
            subQuestion: "You can easily reschedule any class from your dashboard up to 24 hours before the session begins without any fee."
        },
        {
            mainQuestion: "How do you verify the qualifications of the tutors?",
            subQuestion: "Every tutor must submit their academic certificates, NID/Passport, and undergo a screening interview before going live."
        },
        {
            mainQuestion: "How can parents monitor their child's academic progress?",
            subQuestion: "After every session, tutors submit a progress report detailing the topics covered and home assignments given."
        },
        {
            mainQuestion: "What happens if a tutor doesn't show up for a scheduled class?",
            subQuestion: "If a tutor misses a class without notice, 100% of the session fee will be instantly refunded to your wallet."
        },
        {
            mainQuestion: "Are there any discounts for booking monthly packages?",
            subQuestion: "Yes, booking a monthly bundle (8-12 classes) upfront offers up to a 15% discount compared to hourly bookings."
        },
        {
            mainQuestion: "How do tutors get paid for their sessions?",
            subQuestion: "Tutors receive their accumulated earnings every week directly into their bank account, bKash, or Nagad wallet."
        }
    ];
    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="justify-between mx-auto px-10 py-12 flex flex-col md:flex-row gap-5 md:gap-20 font-sans">

            <div className="md:w-2/4">
                <p>Get Answers</p>
                <h2 className="text-4xl  text-black dark:text-white font-bold tracking-tight">
                    Get Every <span className="text-[var(--primary-color)]">single <br />answers</span> from here.
                </h2>
            </div>


            <div className="md:w-2/4 flex flex-col">
                {faqData.map((item, index) => (
                    <div
                        key={index}
                        className="border-b border-dashed border-zinc-300 dark:border-zinc-700 last:border-none"
                    >

                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full text-left py-5 text-[17px] font-medium text-zinc-800 dark:text-zinc-200 hover:text-blue-600 transition-colors duration-200 flex justify-between items-center focus:outline-none"
                        >
                            <span>{item.mainQuestion}</span>

                            <span className="text-xl text-zinc-400">
                                {openIndex === index ? "−" : "+"}
                            </span>
                        </button>


                        {openIndex === index && (
                            <div className="pb-5 pl-4 text-[15px] font-normal text-zinc-600 dark:text-zinc-400 animate-fadeIn">
                                {item.subQuestion}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}