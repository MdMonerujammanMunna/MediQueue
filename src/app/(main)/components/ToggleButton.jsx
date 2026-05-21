"use client";

import { Sun, Moon } from "@gravity-ui/icons";
import { Switch } from "@heroui/react";
import { useTheme } from "next-themes";

export function ToggleButton() {
    const { theme, setTheme } = useTheme();

    return (
        <Switch className={"rounded-full"} onChange={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {({ isSelected }) => (
                <>
                    <Switch.Control
                        className={`h-5 w-10  bg-[#2563EB] ${isSelected ? "bg-[#2563EB] " : ""}`}
                    >
                        <Switch.Thumb
                            className={`size-4 bg-white ${isSelected ? "ms-5.5 shadow-lg" : ""}`}
                        >
                            <Switch.Icon>
                                {isSelected ? (
                                    <Moon className="size-2 text-cyan-600 rounded-full" />
                                ) : (
                                    <Sun className="size-2 text-blue-600 rounded-full" />
                                )}
                            </Switch.Icon>
                        </Switch.Thumb>
                    </Switch.Control>
                </>
            )}
        </Switch >
    );
}