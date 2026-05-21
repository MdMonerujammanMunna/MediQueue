
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BookingModal } from "../../components/BookingModal/Modal";



const DetailsPage = async ({ params }) => {
    const { id } = await params
    let results = null;
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/AllTutorPage/${id}`)
        results = await data.json()
    } catch (err) {
        console.error('Failed to fetch AllTutorPage details during prerender:', err)
        return <div className="py-20 text-center">Tutor details are currently unavailable.</div>
    }

    const { _id, name, Photo, Subject, Times, SessionDate, Fee, Slot, Experience, Location, Institution, Teaching } = results || {}
    return (
        <>
            <Card className="p-10 max-w-6xl  mx-auto my-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">

                    <div className="flex-1 relative aspect-square w-full">
                        <Image alt="Not Found" className="rounded-xl object-cover" fill src={Photo}></Image>
                    </div>

                    <div className="flex-1 space-y-4">
                        <div className="">
                            <h1 className="text-3xl font-bold mb-1">{name}</h1>
                            <p className="font-semibold text-gray-600">{Subject}</p>
                        </div>
                        <div className="space-y-1">
                            <p className=" font-bold">Institution Name: <span className="font-normal"> {Institution}</span></p>
                            <p className=" font-bold">Experience: <span className="font-normal"> {Experience}</span></p>
                            <p className=" font-bold">Location: <span className="font-normal"> {Location}</span></p>
                        </div>
                        <div className="">
                            <p className=" font-bold">Mode: <span className="font-normal"> {Teaching}</span></p>
                        </div>
                        <div className="">
                            <p className=" font-bold">Available and time slot: <span className="font-normal"> {Times}</span></p>
                        </div>
                        <p className=" font-bold">Hourly Fee: <span className=" font-normal">${Fee}/hr</span></p>
                        <p className="font-bold">Remaining Slots: <span className="font-normal"> {Slot}</span></p>
                        <p className="font-bold">Session Start Date: <span className="font-normal"> {SessionDate}</span> </p>

                        <BookingModal results={results}></BookingModal>

                    </div>
                </div>

            </Card>
        </>
    );
};

export default DetailsPage;