import TableData from "../components/TableData/TableData";
import { Table } from "@heroui/react";


const My_BookedSessions = async () => {
    const data = await fetch("http://localhost:5000/Bookingall")
    const results = await data.json()

    return (
        <>
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
                            {results.map((item, index) => <TableData key={index} item={item}></TableData>)}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </>

    );
}
export default My_BookedSessions;