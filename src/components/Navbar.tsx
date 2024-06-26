'use client'
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";




function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>

        <Link href={'/'}>
          <MenuItem setActive={setActive} item="Home" active={active}>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>

          </MenuItem>
        </Link>

        <Link href={'/courses'}>

          <MenuItem setActive={setActive} item="Our Courses" active={active}>
            <div className="flex flex-col space-y-4 text-sm">

              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/courses">Basic Music</HoveredLink>
              <HoveredLink href="/courses">Song Writing</HoveredLink>
              <HoveredLink href="/courses">All Courses</HoveredLink>
              <HoveredLink href="/courses">All Courses</HoveredLink>
            </div>
          </MenuItem>
        </Link>


        <Link href={'/contact'}>

          <MenuItem setActive={setActive} item="Contact Us" active={active}>
            <div className="flex flex-col space-y-4 text-sm"></div>

          </MenuItem>
        </Link>



      </Menu>
    </div>
  )
}

export default Navbar