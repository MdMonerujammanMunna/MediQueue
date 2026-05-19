"use client";

import { useSession } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Fieldset,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import { Modal } from "@heroui/react";
import { useState } from "react";

export function BookingModal({ name }) {
    const { data, isPending } = useSession()
    if (isPending) {
        <h2>Loading...</h2>
    }
    const user = data?.user;
    const [phone, setPhone] = useState("");

    const dataFromUser = async () => {

        const Submit = {
            userName: user?.name,
            userEmail: user?.email,
            TutorName: name,
            Phone: phone
        }
        const result = await fetch("http://localhost:5000/Booking", {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(Submit)
        })
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
                            <Fieldset className="w-full">
                                <Fieldset.Group>

                                    {/* Name section */}
                                    <TextField
                                        isRequired
                                        name="name"
                                    >
                                        <Label>Name</Label>
                                        <Input placeholder="User Name" value={user?.name} variant="secondary" />
                                        <FieldError />
                                    </TextField>
                                    {/* Phone section */}
                                    <TextField
                                        isRequired
                                        name="Phone"
                                    >
                                        <Label>Phone Number</Label>
                                        <Input placeholder="017 XXXX XXXX" variant="secondary" type="text" onChange={(e) => setPhone(e.target.value)} />
                                        <FieldError />
                                    </TextField>
                                    {/* Tutor section */}
                                    <TextField
                                        isRequired
                                        name="Tutor"
                                    >
                                        <Label>Tutor Name</Label>
                                        <Input placeholder="Tutor Name" value={name} variant="secondary" />
                                        <FieldError />
                                    </TextField>
                                    {/* Email section */}
                                    <TextField
                                        isRequired
                                        name="Email"
                                    >
                                        <Label> Email</Label>
                                        <Input placeholder="Abc@.com" value={user?.email} variant="secondary" type="email" />
                                        <FieldError />
                                    </TextField>
                                </Fieldset.Group>
                            </Fieldset>
                            <Modal.Footer className="grid grid-cols-5 mt-8">
                                <Button onClick={dataFromUser} type="submit" slot="close" className={"col-span-4 w-full bg-[var(--primary-color)]"}>
                                    Confirm Booking
                                </Button>
                                <Button type="reset" variant="tertiary" className={"w-full"}>
                                    Reset
                                </Button>
                            </Modal.Footer>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}