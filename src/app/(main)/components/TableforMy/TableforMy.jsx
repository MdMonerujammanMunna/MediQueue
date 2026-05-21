
import { Table } from "@heroui/react";
import { ModalUpadate } from "../UpdateModal/ModalUpadet";
import { DeletModal } from "../DelectModal/DelectModal";

const TableforMy = ({ item }) => {
    const { name, Subject, Slot, Fee, Times, } = item
    return (
        <>
            <Table.Row>
                <Table.Cell>{name}</Table.Cell>
                <Table.Cell>{Subject}</Table.Cell>
                <Table.Cell>{Times}</Table.Cell>
                <Table.Cell>{Fee}</Table.Cell>
                <Table.Cell>{Slot}</Table.Cell>
                <Table.Cell>{new Date().toLocaleDateString('en-GB', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric'
                })
                }</Table.Cell>
                <Table.Cell>

                    <ModalUpadate item={item}></ModalUpadate>
                    <DeletModal item={item}></DeletModal>
                </Table.Cell>
            </Table.Row>
        </>
    );
};

export default TableforMy;