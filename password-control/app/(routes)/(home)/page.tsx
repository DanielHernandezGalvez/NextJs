"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"
import { title } from "process";
import { toast } from "@/hooks/use-toast";
import Logo from "@/components/Shared/logo";


export default function Home() {

  return (
     <div>
        <Button > Click me</Button>
        <Logo />
     </div> 
  );
}
