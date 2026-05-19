import Image from "next/image";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
const CardPage = ({ item }) => {
    const { name, Subject, Times, SessionDate, Fee, Photo, _id } = item

    return (
        <>
            <Card className="rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-all duration-300">

                {/* Image */}
                <div className="relative  aspect-square ">
                    <Image
                        src={Photo}
                        alt="Tutor"
                        fill
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className='object-cover rounded-2xl '
                    />
                </div>
                <div className="p-5">
                    <h2 className="text-2xl font-bold text-gray-800">
                        {name}
                    </h2>

                    <p className="text-xl text-gray-500 mt-2">
                        {Subject}
                    </p>
                    <p className="text-xl  mt-2">
                        Available: <span>{Times}</span>
                    </p>
                    <p className="text-xl  mt-2">
                        Session Start Date: <span>{SessionDate}</span>
                    </p>

                    <div className=" space-y-6 mt-4">
                        <div className="font-bold ">
                            <p>Fee: <span>${Fee}/hr</span></p>
                        </div>
                        <Link href={`/AllTutorPage/${_id}`}>
                            <Button className=" bg-[var(--primary-color)] text-white px-5 py-2 w-full rounded-full font-medium ">
                                Book Session
                            </Button>
                        </Link>
                    </div>
                </div>
            </Card>
        </>
    );
};

export default CardPage;