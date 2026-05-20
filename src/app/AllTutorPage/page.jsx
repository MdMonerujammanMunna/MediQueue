import { headers } from "next/headers";
import CardPage from "../components/Card/Card";
import { auth } from "@/lib/auth";

const AllTutorPage = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/Tutors`, {
        headers: {
            authorization: `Brerr ${token}`
        }
    })
    const results = await data.json()
    return (
        <>
            <div className="py-10">
                <div className="mb-5">
                    <h1 className="text-3xl font-bold text-[var(--primary-color)] text-center">All Tutor Section</h1>
                </div>
                <div className="grid lg:grid-cols-3 gap-5 px-10">
                    {results.map((item, index) => <CardPage key={index} item={item}></CardPage>)}
                </div>
            </div>
        </>
    );
};

export default AllTutorPage;