import WDropdownItem from "@/components/ui/WDropdownItem";
import WDropdownHeader from "./WDropdownHeader";
import { Apple, Fan, Laptop, Smartphone, Rocket } from "lucide-react";
import { WDropdownProps } from "@/types/WDropdownProps";

type DropdownOption = {
    index: number;
    label: string;
    desc?: string;
    icon: React.ComponentType<{ className?: string }>;
}

const DROPDOWN_OPTIONS: DropdownOption[] = [
    { index: 0, label: "Apple", desc: "Some sort of fruit company", icon: Apple },
    { index: 1, label: "Fan", desc: "When you really love someone", icon: Fan },
    { index: 2, label: "Laptop", desc: "Where great ideas are built", icon: Laptop },
    { index: 3, label: "Smartphone", desc: "Where B2C thrives", icon: Smartphone },
    { index: 4, label: "Space travel", desc: "Reaching for the stars", icon: Rocket },
];

export default function WDropdown({
    selectedIndex,
    onClick,
}: WDropdownProps
) {
    function DropdownMap(start: number, end?: number) {
        const slice = end ? DROPDOWN_OPTIONS.slice(start, end) : DROPDOWN_OPTIONS.slice(start);

        return slice.map((option) => (
            <WDropdownItem
                key={option.index}
                {...option}
                selected={selectedIndex === option.index}
                onClick={() => onClick(option.index, option.label, option.icon)}
            />
        ));
    }

    return (
        <div className="flex flex-col w-[var(--radix-select-trigger-width)] rounded-md bg-bg-empty shadow-menu border-1 border-current-bg-muted py-[8px] gap-[4px]">
            { DropdownMap(0, 2) }
            <WDropdownHeader text="Technology"/>
            { DropdownMap(2, 4) }
            <WDropdownHeader text="Aspirations"/>
            { DropdownMap(4) }
        </div>
    );
}