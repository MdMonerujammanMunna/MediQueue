import { Avatar, Dropdown, Label } from "@heroui/react";
import { ArrowRightFromSquare, Gear, Persons } from "@gravity-ui/icons";
import Link from "next/link";
import { signOut } from "@/lib/auth-client";


const DropdownProfile = ({ user }) => {
    const { name, email, image } = user
    return (
        <>
            <Dropdown>
                <Dropdown.Trigger className="rounded-full">
                    <Avatar className="border-2 border-[var(--primary-color)]">
                        <Avatar.Image
                            alt="Junior Garcia"
                            src={image}
                        />
                        <Avatar.Fallback delayMs={600}>{name?.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                </Dropdown.Trigger>
                <Dropdown.Popover className={"rounded-none"}>
                    <div className="px-3 pt-3 pb-1">
                        <Link href="/" className="flex flex-col gap-0">
                            <p className="text-sm leading-5 font-medium">{name}</p>
                            <p className="text-xs leading-none text-muted">{email}</p>
                        </Link>
                    </div>
                    <Dropdown.Menu>
                        <Dropdown.Item id="logout" textValue="Logout" variant="danger">
                            <button onClick={() => signOut()} className="flex w-full items-center justify-between gap-2">
                                <Label>Log Out</Label>
                                <ArrowRightFromSquare className="size-3.5 text-danger" />
                            </button>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown.Popover>
            </Dropdown>
        </>
    );
};

export default DropdownProfile;