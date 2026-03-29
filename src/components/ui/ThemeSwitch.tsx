"use client"

import * as React from "react"
import {useTheme} from "next-themes"
import {MonitorCog, Moon, Sun} from "lucide-react";

export function ThemeSwitch() {
    const {theme, setTheme} = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <div className="flex items-center gap-2 rounded-xl max-w-fit border bg-surface p-1">
            <button
                type="button"
                onClick={() => setTheme("light")}
                className={`rounded-lg px-3 py-2 text-sm ${
                    theme === "light" ? "bg-zinc-200 dark:bg-zinc-700" : ""
                }`}
            >
                <Sun className="h-4 w-4"/>
            </button>

            <button
                type="button"
                onClick={() => setTheme("dark")}
                className={`rounded-lg px-3 py-2 text-sm ${
                    theme === "dark" ? "bg-zinc-200 dark:bg-zinc-700" : ""
                }`}
            >
                <Moon className="h-4 w-4"/>
            </button>

            <button
                type="button"
                onClick={() => setTheme("system")}
                className={`rounded-lg px-3 py-2 text-sm ${
                    theme === "system" ? "bg-zinc-200 dark:bg-zinc-700" : ""
                }`}
            >
                <MonitorCog className="h-4 w-4"/>
            </button>
        </div>
    )
}