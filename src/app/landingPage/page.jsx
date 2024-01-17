"use client";

import NavbarProfile from "@/app/components/navbarProfile/navbarProfile";
import Footer from "@/app/components/footer/footer";
import Filter from "@/app/components/filter/filter";

export default function Landing() {

  return (
    <main className="bg-slate-100 overflow-hidden">
      <title>Ankasa Flight</title>
      <NavbarProfile />
      <Filter />
      <Footer />
    </main>
  );
}
