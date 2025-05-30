'use client'

import WSelect from "@/components/ui/WSelect";
import { Apple, Fan, Laptop, Smartphone, Rocket } from "lucide-react";
import { DropdownGroup } from "@/types/WDropdownProps";

const DROPDOWN_OPTIONS: DropdownGroup[] = [
    {options: [{ index: 0, label: "Apple", desc: "Some sort of fruit company", icon: Apple },
    { index: 1, label: "Fan", desc: "When you really love someone", icon: Fan }]},
    {header: "Technology", options: [{ index: 2, label: "Laptop", desc: "Where great ideas are built", icon: Laptop },
    { index: 3, label: "Smartphone", desc: "Where B2C thrives", icon: Smartphone }]},
    {header: "Aspirations", options: [{ index: 4, label: "Space travel", desc: "Reaching for the stars", icon: Rocket }]}
];

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-empty">
      <div className="w-[500px] h-[500px] white flex flex-col items-center justify-center text-body-l">
        <WSelect options={DROPDOWN_OPTIONS} />
      </div>
    </div>
  );
}
