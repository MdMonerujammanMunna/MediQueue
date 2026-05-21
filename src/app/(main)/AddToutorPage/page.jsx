"use client";
import { useSession } from "@/lib/auth-client";
import {
    Button,
    FieldError,
    Fieldset,
    Form,
    Input,
    Label,
    Surface,
    Select,
    ListBox,
    TextArea,
    TextField,
    DateField,
} from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";


export default function AddToutorPage() {
    const [value, setValue] = useState(null);
    const DateSeesion = new Date(value)
        .toString()
        .split("GMT")[0];

    const { data, isPending } = useSession()
    if (isPending) {
        <h2>Loading...</h2>
    }
    const usero = data?.user;
    const OnsubmitHandele = async (e) => {
        e.preventDefault();
        const fromdata = new FormData(e.currentTarget)
        const user = Object.fromEntries(fromdata.entries())
        const Submit = {
            name: user?.name,
            Photo: user?.Photo,
            Times: user?.Times,
            Fee: user?.Fee,
            Slot: user?.Slot,
            SessionDate: DateSeesion,
            Subject: user?.Subject,
            Institution: user?.Institution,
            Experience: user?.Experience,
            Location: user?.Location,
            Teaching: user?.Teaching,
            SessionUserID: usero?.id
        }


        const result = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/AddTutors`, {
            method: "POST",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(Submit)
        })
        if (result.ok) {
            toast.success("Tutor added successfully")
        } else {
            toast.error("Failed to add tutor")
        }
    }

    return (
        <>
            <div className="max-w-5xl px-10 py-10 my-20 mx-auto flex items-center justify-center rounded-3xl bg-surface p-6">
                <Surface className="w-full">
                    <h1 className="text-center text-5xl font-bold text-[var(--primary-color)] mb-5">Add Tutors</h1>
                    <Form onSubmit={OnsubmitHandele}>
                        <Fieldset className="w-full">
                            <Fieldset.Group>

                                {/* Name section */}
                                <TextField
                                    isRequired
                                    name="name"
                                >
                                    <Label>Tutor Name</Label>
                                    <Input placeholder="Tutor Name" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                {/* photo section */}
                                <TextField isRequired name="Photo" type="url">
                                    <Label>Photo URL</Label>
                                    <Input placeholder="Photo URL" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                {/* Times section */}
                                <TextField
                                    isRequired
                                    name="Times"
                                >
                                    <Label>Available Days and Available time slot</Label>
                                    <Input placeholder=" Sun - Thu 5:00 PM - 8:00 PM" variant="secondary" type="text" />
                                    <FieldError />
                                </TextField>

                                {/* Fee & Slot section */}
                                <div className="flex items-center gap-5">
                                    {/* Fee section */}
                                    <TextField className={"flex-1"} isRequired name="Fee" type="number">
                                        <Label>Hourly fee</Label>
                                        <Input placeholder="$75" variant="secondary" type="number" />
                                        <FieldError />
                                    </TextField>
                                    {/* Slot section*/}
                                    <TextField className={"flex-1"} isRequired name="Slot" type="number">
                                        <Label>Total slot</Label>
                                        <Input placeholder="100" variant="secondary" type="number" />
                                        <FieldError />
                                    </TextField>
                                </div>

                                {/* SessionDate section */}
                                <div className="">
                                    <DateField className="w-full" name="date" value={value} onChange={setValue}>
                                        <Label>Date</Label>
                                        <DateField.Group>
                                            <DateField.Input variant="secondary">{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
                                        </DateField.Group>
                                    </DateField>
                                </div>

                                {/* Subject section */}
                                <div>
                                    <Select
                                        name="Subject"
                                        isRequired
                                        className="w-full"
                                        placeholder="Select Subject"
                                        variant="secondary"
                                    >
                                        <Label>Subject / Category</Label>
                                        <Select.Trigger className="rounded-2xl" >
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="Bangla" textValue="Bangla">
                                                    Bangla
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="English" textValue="English">
                                                    English
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Mathematics" textValue="Mathematics">
                                                    Mathematics
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="ICT" textValue="ICT">
                                                    ICT
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Physics" textValue="Physics">
                                                    Physics
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Chemistry" textValue="Chemistry">
                                                    Chemistry
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Biology" textValue="Biology">
                                                    Biology
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                </div>

                                {/* Institution section */}
                                <TextField
                                    isRequired
                                    name="Institution"
                                >
                                    <Label>Institution Name</Label>
                                    <Input placeholder="Dahaka something" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                {/* Experience section */}
                                <TextField
                                    isRequired
                                    name="Experience"
                                >
                                    <Label>Experience</Label>
                                    <TextArea placeholder="3 years Experience" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                {/* Location section */}
                                <TextField
                                    isRequired
                                    name="Location"
                                >
                                    <Label>Location (Area/City)</Label>
                                    <Input placeholder="Rangpur" variant="secondary" />
                                    <FieldError />
                                </TextField>

                                {/* Teaching section */}
                                <div>
                                    <Select
                                        name="Teaching"
                                        isRequired
                                        className="w-full"
                                        placeholder="Select Teaching Mode"
                                        variant="secondary"
                                    >
                                        <Label>Teaching Mode</Label>
                                        <Select.Trigger className="rounded-2xl" >
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="Online" textValue="Online">
                                                    Online
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Offline" textValue="Offline">
                                                    Offline
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="Both" textValue="Both">
                                                    Both
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>
                                </div>

                            </Fieldset.Group>
                            <Fieldset.Actions className="grid grid-cols-5">
                                <Button type="submit" className={"col-span-4 w-full bg-[var(--primary-color)]"}>
                                    Add Tutors
                                </Button>
                                <Button type="reset" variant="tertiary" className={"w-full"}>
                                    Cancel
                                </Button>
                            </Fieldset.Actions>
                        </Fieldset>
                    </Form>
                </Surface>
            </div>
        </>
    );
}