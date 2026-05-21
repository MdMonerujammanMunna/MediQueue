import { headers } from "next/headers";
import TableData from "../components/TableData/TableData";
import { Table } from "@heroui/react";
import { auth } from "@/lib/auth";

export const metadata = {
    title: "My Booked Sessions",
    description: "My Booked Sessions page for mediQueue",
};

const My_BookedSessions = async () => {
    let results = [];
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/Bookingall`)
        results = await data.json()
    } catch (err) {
        console.error('Failed to fetch Bookingall during prerender:', err)
        results = []
    }
    return (
        <>
            {results?.length > 0 ? <>
                <Table variant="secondary" className="py-10 px-10">
                    <Table.ScrollContainer>
                        <Table.Content aria-label="Team members" className="min-w-[600px]">
                            <Table.Header>
                                <Table.Column isRowHeader>Name</Table.Column>
                                <Table.Column>Phone</Table.Column>
                                <Table.Column>Tutor Name</Table.Column>
                                <Table.Column>Email</Table.Column>
                                <Table.Column>Status</Table.Column>
                                <Table.Column>Cancelle</Table.Column>
                            </Table.Header>
                            <Table.Body>
                                {results?.map((item, index) => <TableData key={index} item={item}></TableData>)}
                            </Table.Body>
                        </Table.Content>
                    </Table.ScrollContainer>
                </Table>
            </> :
                <>
                    <h1 className=" text-center font-bold text-[var(--primary-color)] text-4xl py-20" >No data Found here</h1>
                </>}

        </>

    );
}
export default My_BookedSessions;