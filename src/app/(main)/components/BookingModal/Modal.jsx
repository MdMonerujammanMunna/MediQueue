"use client";

import { authClient, useSession } from "@/lib/auth-client";
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
import { toast } from "react-toastify";

export function BookingModal({ results }) {
    const { data, isPending } = useSession()
    if (isPending) {
        <h2>Loading...</h2>
    }
    const user = data?.user;
    const [phone, setPhone] = useState("");

    const dataFromUser = async () => {
        if (results.Slot > 0) {
            const totalslot = results?.Slot - 1
            const dataslot = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/AllTutorPage/${results?._id}`, {
                method: "PATCH",
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify({ Slot: totalslot })
            })

        }
        else {
            return toast.error(`No slots available`, {
                position: "top-center",
            });

        }
        const { token } = authClient.token()
        const Submit = {
            userName: user?.name,
            userEmail: user?.email,
            TutorName: results?.name,
            Phone: phone
        }
        const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/Booking`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(Submit)
        })

        if (result.ok) {
            toast.success(`Booking submitted successfully`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.error(`Failed to submit booking`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }


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
                                        <Input placeholder="Tutor Name" value={results?.name} variant="secondary" />
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
                                <Button onClick={dataFromUser} type="submit" slot="close" className={"col-span-4 w-full bg-[var(--primary-color)]"} >
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