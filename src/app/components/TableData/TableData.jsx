"use client"
import { Table } from "@heroui/react";
import { Xmark } from '@gravity-ui/icons';
import { Button } from "@heroui/react";
import { useState } from "react";

const TableData = ({ item }) => {
    const [Cancle, setCancle] = useState("")
    const { userName, userEmail, TutorName, Phone } = item
    return (
        <>

            <Table.Row>
                <Table.Cell>{userName}</Table.Cell>
                <Table.Cell>{Phone}</Table.Cell>
                <Table.Cell>{TutorName}</Table.Cell>
                <Table.Cell>{userEmail}</Table.Cell>
                <Table.Cell>
                    {
                        Cancle === "Cancle" ?
                            <>
                                <button className="text-red-500 rounded-full py-0.5 bg-red-200 px-1.5 font-medium">Cancelled</button>

                            </> :
                            <>
                                <button className="text-green-500 rounded-full py-0.5 bg-green-200 px-1.5 font-medium">Connected</button>
                            </>
                    }
                </Table.Cell>
                <Table.Cell>
                    <Button onClick={() => setCancle("Cancle")} isIconOnly variant="danger">
                        <Xmark />
                    </Button>
                </Table.Cell>
            </Table.Row>
        </>
    );
};

export default TableData;