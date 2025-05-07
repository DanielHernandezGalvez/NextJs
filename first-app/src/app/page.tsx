import { Metadata } from "next";

export const metadata: Metadata = {
  title: "main",
  description: "This will be my first SaaS app",
}

export default function Home() {
  return (
    <div className="bg-slate-950 text-center py-3">
      <h1 className="text-2xl text-white">Main app</h1>
    </div>
  );
}
