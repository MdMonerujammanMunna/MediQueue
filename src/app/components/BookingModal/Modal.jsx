"use client";

import {
    Button,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Select,
    ListBox,
    TextArea,
    TextField,
} from "@heroui/react";
import { Modal } from "@heroui/react";

export function BookingModal() {
    const OnsubmitHandele = async (e) => {
        e.preventDefault();
        const fromdata = new FormData(e.currentTarget)
        const user = Object.fromEntries(fromdata.entries())
        console.log(user)
        // const result = await fetch("http://localhost:5000/AddTutors", {
        //     method: "POST",
        //     headers: {
        //         'content-type': "application/json"
        //     },
        //     body: JSON.stringify(user)
        // })
    }
    return (
        <Modal>
            <Button className={"bg-[var(--primary-color)] text-white"}>
                Book Session
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[760px]">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>
                                <p className="text-5xl text-center font-bold text-[var(--primary-color)]">Booking Section</p>
                            </Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted text-center">
                            </p>
                        </Modal.Header>
                        <Modal.Body>
                            <Form onSubmit={OnsubmitHandele}>
                                <Fieldset className="w-full">
                                    <Fieldset.Group>

                                        {/* Name section */}
                                        <TextField
                                            isRequired
                                            name="name"
                                        >
                                            <Label>Name</Label>
                                            <Input placeholder="User Name" variant="secondary" />
                                            <FieldError />
                                        </TextField>
                                        {/* Phone section */}
                                        <TextField
                                            isRequired
                                            name="Phone"
                                        >
                                            <Label>Phone Number</Label>
                                            <Input placeholder="017 XXXX XXXX" variant="secondary" type="text" />
                                            <FieldError />
                                        </TextField>
                                        {/* Tutor section */}
                                        <TextField
                                            isRequired
                                            name="Tutor"
                                        >
                                            <Label>Tutor Name</Label>
                                            <Input placeholder="Tutor Name" variant="secondary" />
                                            <FieldError />
                                        </TextField>
                                        {/* Email section */}
                                        <TextField
                                            isRequired
                                            name="Email"
                                        >
                                            <Label> Email</Label>
                                            <Input placeholder="Abc@.com" variant="secondary" type="email" />
                                            <FieldError />
                                        </TextField>
                                    </Fieldset.Group>
                                </Fieldset>
                                <Modal.Footer className="grid grid-cols-5 mt-8">
                                    {/* <Button className="w-full  bg-[var(--primary-color)]" slot="close" type="submit">
                                        Continue
                                    </Button> */}
                                    <Button type="submit" slot="close" className={"col-span-4 w-full bg-[var(--primary-color)]"}>
                                        Confirm Booking
                                    </Button>
                                    <Button type="reset" variant="tertiary" className={"w-full"}>
                                        Reset
                                    </Button>
                                </Modal.Footer>
                            </Form>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}