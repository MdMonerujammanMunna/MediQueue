"use client"
import {
    Button,
    FieldError,
    Fieldset,
    Input,
    Label,
    TextField,
    TextArea, ListBox, Select
} from "@heroui/react";
import { Pencil } from '@gravity-ui/icons';
import { Modal } from "@heroui/react";

export function ModalUpadate({ item }) {
    // console.log(item)

    const { name, Subject, Slot, Times, _id, Teaching, SessionDate, Photo, Location, Institution, Experience, Fee } = item
    const OnsubmitHandele = async (e) => {
        e.preventDefault();
        const fromdata = new FormData(e.currentTarget)
        const user = Object.fromEntries(fromdata.entries())

        const iam = {
            Name: user.name,
            Phone: user.Phone,
            Subject: user.Subject,
            Slot: user.Slot,
            Times: user.Times,
            Teaching: user.Teaching,
            SessionDate: user.SessionDate,
            Photo: user.Photo,
            Location: user.Location,
            Institution: user.Institution,
            Experience: user.Experience,
            Fee: user.Fee
        }
        const data = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/Tutors/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': "application/json",
            },
            body: JSON.stringify(iam)
        })
        const results = await data.json()
    }
    return (
        <Modal>
            <Button className={"mr-1 bg-green-500"} isIconOnly>
                <Pencil />
            </Button>
            <Modal.Backdrop>
                <Modal.Container>
                    <Modal.Dialog className="sm:max-w-[760px] overflow-auto">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Heading>
                                <p className="text-5xl text-center font-bold text-[var(--primary-color)]">Update Section</p>
                            </Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted text-center">
                            </p>
                        </Modal.Header>
                        <form onSubmit={OnsubmitHandele}>
                            <Modal.Body>
                                <Fieldset className="w-full">
                                    <Fieldset.Group>

                                        {/* Name section */}
                                        <TextField
                                            defaultValue={name}
                                            name="name"
                                        >
                                            <Label>Tutor Name</Label>
                                            <Input placeholder="Tutor Name" variant="secondary" />
                                            <FieldError />
                                        </TextField>

                                        {/* photo section */}
                                        <TextField defaultValue={Photo} name="Photo" type="url">
                                            <Label>Photo URL</Label>
                                            <Input placeholder="Photo URL" variant="secondary" />
                                            <FieldError />
                                        </TextField>

                                        {/* Times section */}
                                        <TextField
                                            defaultValue={Times}
                                            name="Times"
                                        >
                                            <Label>Available Days and Available time slot</Label>
                                            <Input placeholder=" Sun - Thu 5:00 PM - 8:00 PM" variant="secondary" type="text" />
                                            <FieldError />
                                        </TextField>

                                        {/* Fee & Slot section */}
                                        <div className="flex items-center gap-5">
                                            {/* Fee section */}
                                            <TextField defaultValue={Fee} className={"flex-1"} name="Fee" type="number">
                                                <Label>Hourly fee</Label>
                                                <Input placeholder="$75" variant="secondary" type="number" />
                                                <FieldError />
                                            </TextField>
                                            {/* Slot section*/}
                                            <TextField defaultValue={Slot} className={"flex-1"} name="Slot" type="number">
                                                <Label>Total slot</Label>
                                                <Input placeholder="100" variant="secondary" type="number" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* SessionDate section */}
                                        <div className="">
                                            <TextField defaultValue={SessionDate} name="SessionDate" type="date" >
                                                <Label>Session Start Date</Label>
                                                <Input type="date" className="rounded-2xl" variant="secondary" />
                                                <FieldError />
                                            </TextField>
                                        </div>

                                        {/* Subject section */}
                                        <div>
                                            <Select
                                                name="Subject"
                                                defaultValue={Subject}
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
                                                            Bangl
                                                            <ListBox.ItemIndicator />
                                                        </ListBox.Item>
                                                        <ListBox.Item id="English" textValue="English">
                                                            Englis
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
                                            defaultValue={Institution}
                                            name="Institution"
                                        >
                                            <Label>Institution Name</Label>
                                            <Input placeholder="Dahaka something" variant="secondary" />
                                            <FieldError />
                                        </TextField>

                                        {/* Experience section */}
                                        <TextField
                                            defaultValue={Experience}
                                            name="Experience"
                                        >
                                            <Label>Experience</Label>
                                            <TextArea placeholder="3 years Experience" variant="secondary" />
                                            <FieldError />
                                        </TextField>

                                        {/* Location section */}
                                        <TextField
                                            defaultValue={Location}
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
                                                defaultValue={Teaching}
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
                                </Fieldset>
                                <Modal.Footer className="grid grid-cols-5 mt-8">
                                    <Button type="submit" slot="close" className={"col-span-4 w-full bg-[var(--primary-color)]"}>
                                        Save
                                    </Button>
                                    <Button type="reset" variant="tertiary" className={"w-full"}>
                                        Reset
                                    </Button>
                                </Modal.Footer>
                            </Modal.Body>
                        </form>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}