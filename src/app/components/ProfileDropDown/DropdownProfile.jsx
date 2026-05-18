import { Avatar, Dropdown, Label } from "@heroui/react";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import Link from "next/link";


const DropdownProfile = () => {
    return (
        <>
            <Dropdown>
                <Dropdown.Trigger className="rounded-full">
                    <Avatar className="border-2 border-[var(--primary-color)]">
                        <Avatar.Image
                            alt="Junior Garcia"
                            src="https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/avatars/orange.jpg"
                        />
                        <Avatar.Fallback delayMs={600}>JD</Avatar.Fallback>
                    </Avatar>
                </Dropdown.Trigger>
                <Dropdown.Popover className={"rounded-none"}>
                    <div className="px-3 pt-3 pb-1">
                        <Link href="/" className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">Jane Doe</p>
                            <p className="text-xs leading-none text-muted">jane@example.com</p>
                        </Link>
                    </div>
                    <Dropdown.Menu>
                        <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                            <div className="flex w-full items-center justify-between gap-2">
                                <Label>Log Out</Label>
                                <ArrowRightFromSquare className="size-3.5 text-danger" />
                            </div>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>
        </>
    );
};

export default DropdownProfile;