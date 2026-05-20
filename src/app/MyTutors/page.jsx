
import { auth } from "@/lib/auth";
import { Table } from "@heroui/react";
import { headers } from "next/headers";
import TableData from "../components/TableData/TableData";
import TableforMy from "../components/TableforMy/TableforMy";


const MyTutors = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { id } = session?.user
    const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/myMaked`, {
        method: "GET",
        headers: {
            'content-type': "application/json",
            'UserValidID': id,
            authorization: `Brerr ${token}`
        }
    })
    const results = await data.json()
    return (
        <div>
            <Table variant="secondary" className="py-10 px-10">
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
                            {results.map((item, index) => <TableforMy key={index} item={item}></TableforMy>)}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default MyTutors;
