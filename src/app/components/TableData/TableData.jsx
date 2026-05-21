
"use client"
import { Table, Button } from "@heroui/react";
import { Xmark } from '@gravity-ui/icons';
import { Check } from '@gravity-ui/icons';
import { useState } from "react";

const TableData = ({ item }) => {

    const [cancel, setCancel] = useState(false);

    const { userName, userEmail, TutorName, Phone } = item;

    // toggle function
    const handleToggle = () => {
        setCancel(!cancel);
    };

    return (
        <Table.Row>
            <Table.Cell>{userName}</Table.Cell>
            <Table.Cell>{Phone}</Table.Cell>
            <Table.Cell>{TutorName}</Table.Cell>
            <Table.Cell>{userEmail}</Table.Cell>

            <Table.Cell>
                {
                    cancel ? (
                        <button className="text-red-500 rounded-full py-0.5 bg-red-200 px-2 font-medium">
                            Cancelled
                        </button>
                    ) : (
                        <button className="text-green-500 rounded-full py-0.5 bg-green-200 px-2 font-medium">
                            Connected
                        </button>
                    )
                }
            </Table.Cell>

            <Table.Cell>
                <Button
                    className={cancel ? "bg-green-500" : "bg-red-500"}
                    onClick={handleToggle}
                    isIconOnly
                    color={cancel ? "success" : "danger"}
                >
                    {cancel ? <Check /> : <Xmark />}
                </Button>
            </Table.Cell>
        </Table.Row>
    );
};

export default TableData;