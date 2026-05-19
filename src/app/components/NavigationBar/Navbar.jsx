"use client"

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { usePathname } from "next/navigation";
import DropdownProfile from "../ProfileDropDown/DropdownProfile";
import { ToggleButton } from "../ToggleButton";
import { Providers } from "@/Provider/ThemeToggle";
import { useSession } from "@/lib/auth-client";

export default function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathName = usePathname()

    const { data, isPending } = useSession()
    if (isPending) {
        <h2>Loading...</h2>
    }
    const user = data?.user;
    const AfterLogin =
        <>
            <li><Link href="/AddToutorPage" className={`${pathName === "/AddToutorPage" ? "text-[var(--primary-color)]" : ""} no-underline`}>Add Tutor</Link></li>
            <li><Link href="/My_Tutors" className={`${pathName === "/My_Tutors" ? "text-[var(--primary-color)]" : ""} no-underline`}>My Tutors</Link></li>
            <li><Link href="/My_BookedSessions" className={`${pathName === "/My_BookedSessions" ? "text-[var(--primary-color)]" : ""} no-underline`}>My Booked Sessions</Link></li>
        </>
    const ButtonMid = <>
        <li><Link href="/" className={`${pathName === "/" ? "text-[var(--primary-color)]" : ""} no-underline`}>Home</Link></li>
        <li><Link href="/AllTutorPage" className={`${pathName === "/AllTutorPage" ? "text-[var(--primary-color)]" : ""} no-underline`}> Tutors </Link></li>

        {user ?
            <>  {AfterLogin} </>
            :
            <>

            </>
        }

    </>

    return (
        <nav className="sticky top-0 z-40 border-b border-b-4 border-[var(--primary-color)] bg-background/70 backdrop-blur-lg">
            <header className="mx-auto flex h-16 items-center justify-between px-10">
                <div className="flex items-center gap-4">
                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMenuOpen}
                    >
                        <span className="sr-only">Menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                    <div className="flex items-center gap-3">
                        <Link href="/" className="font-bold text-[var(--primary-color)] no-underline text-2xl">MediQueue</Link>
                    </div>
                </div>
                <ul className="hidden items-center gap-4 md:flex">
                    {ButtonMid}
                </ul>
                <div className=" items-center gap-4 flex">
                    {user ?
                        <> <DropdownProfile user={user} /></>
                        :
                        <>
                            <Link href="/LogIn" className={`${pathName === "/LogIn" ? "text-[var(--primary-color)]" : ""} no-underline`}>Login</Link>
                            <Link href="/SignUp" className={"no-underline"}> <Button className="bg-[var(--primary-color)]">Sign Up</Button></Link>
                        </>
                    }


                    {/* <Providers>
                        <ToggleButton />
                    </Providers> */}
                </div>
            </header>
            {isMenuOpen && (
                <div className="border-t border-separator md:hidden">
                    <ul className="flex flex-col pl-10 space-y-2 py-4">
                        {ButtonMid}
                    </ul>
                </div>
            )}
        </nav>
    );
}