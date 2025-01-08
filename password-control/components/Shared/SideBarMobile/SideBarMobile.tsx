"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"
import { Button } from "@/components/ui/button"

export default function SideBarMobile() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    <Menu />
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-blue-800 text-white">
                <SheetHeader className="text-left">
                    <SheetTitle className="text-white">TarrePassword</SheetTitle>
                    <SheetDescription className="text-slate-100 pb-5">
                        Crea y Maneja todas las contraseñas
                    </SheetDescription>
                </SheetHeader>
                <SidebarRoutes />
            </SheetContent>
        </Sheet>

    )
}
