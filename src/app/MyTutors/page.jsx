
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
// import { authClient } from "@/lib/auth-client"


const MyTutors = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })

    const { id } = session?.user
    // console.log(user)
    return (
        <div>
            <h1>{id}</h1>
        </div>
    );
};

export default MyTutors;