
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import TableData from "../components/TableData/TableData";
import TableforMy from "../components/TableforMy/TableforMy";

export const metadata = {
    title: "My Tutors",
    description: "My Tutors page for mediQueue",
};
const MyTutors = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { id } = session?.user || {}
    let results = [];
    try {
        const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/myMaked`, {
            method: "GET",
            headers: {
                'content-type': "application/json",
                'UserValidID': id,
            }
        })
        results = await data.json()
    } catch (err) {
        console.error('Failed to fetch myMaked during prerender:', err)
        results = []
    }
    return (
        <div className="py-10">
            {results.length > 0 ?
                <>
                    <Table variant="secondary" className=" px-10">
                        <Table.ScrollContainer>
                            <Table.Content aria-label="Team members" className="min-w-[600px]">
                                <Table.Header>
                                    <Table.Column isRowHeader>Tutor Name</Table.Column>
                                    <Table.Column>Subject</Table.Column>
                                    <Table.Column>Available</Table.Column>
                                    <Table.Column>Hourly Fee</Table.Column>
                                    <Table.Column>Total slot</Table.Column>
                                    <Table.Column>Date</Table.Column>
                                    <Table.Column>Active</Table.Column>
                                </Table.Header>
                                <Table.Body>
                                    {(results || []).map((item, index) => <TableforMy key={index} item={item}></TableforMy>)}
                                </Table.Body>
                            </Table.Content>
                        </Table.ScrollContainer>
                    </Table>
                </>
                : <h1 className=" text-center font-bold text-[var(--primary-color)] text-4xl py-20" >No data Found here</h1>}

        </div>
    );
};

export default MyTutors;
