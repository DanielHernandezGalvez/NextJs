import { Metadata } from "next";
import Header from "./Header";
import Image from "next/image";
import cr7 from "@/app/assets/cr7.jpg";

export const metadata: Metadata = {
  title: "main",
  description: "This will be my first SaaS app",
}

export default function Home() {
  return (
    < >
      <Header background="bg-slate-500" titulo="hola" />
      <Image src={cr7} alt="cr7" width={300} height={700} />
    </>
  );
}

// Link
