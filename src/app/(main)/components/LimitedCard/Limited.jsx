import { Button } from "@heroui/react";
import CardPage from "../Card/Card";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const Limited = async () => {
    let results = [];
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/TutorsLimit`, {
            cache: 'no-store'
        })
        results = await data.json()
    } catch (err) {
        console.error('Failed to fetch TutorsLimit during prerender:', err)
        results = []
    }
    return (
        <>
            <div className="py-10">
                <div className="grid lg:grid-cols-3 gap-5 px-10">
                    {results?.map((item, index) => <CardPage key={index} item={item}></CardPage>)}
                </div>
                <div className={"flex items-center justify-center mt-10"}>
                    <Link href="/AllTutorPage">
                        <Button className="bg-[var(--primary-color)]">See All Tutors</Button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Limited;