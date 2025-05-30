import React, { useState } from "react";
import { WSelectProps, SelectedOption } from "@/types/WSelectProps";
import { TriggerState } from "@/types/WSelectBoxProps";
import WDropdown from "@/components/ui/WDropdown";
import { cn } from "@/lib/utils";
import { Select, SelectTrigger, SelectContent } from "@radix-ui/react-select";
import WSelectBox from "@/components/ui/WSelectBox";

/*
Builds WSelect Parent UI component, congregates all other components into Radix-select framework
*/
export default function WSelect({
    value,
    onChange,
    disabled = false,
    icon: DefaultIcon,
    showLabel = true,
    labelText = "Select an object",
    placeholderText = "Placeholder",
    showLeft = true,
    showInput = true,
}: WSelectProps) {
    const [selected, setSelected] = useState<SelectedOption | null>(null)
    const [isHovered, setIsHovered] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const isFilled = selected !== null
    const isError  = false

    const handleSelect = (index: number, label: string, icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>) => {
        if (!icon) return;
        
        // Check if we're selecting the same option
        if (selected?.index === index && 
            selected.label === label && 
            selected.icon === icon) {
            setSelected(null);
        } else {
            // Create new option with correct typing
            const newOption: SelectedOption = {
                index,
                label,
                icon
            };
            setSelected(newOption);
        }
        
        onChange?.(index.toString(), { index, label, icon });
    };

    const handleTriggerClick = () => {if (!disabled) setIsOpen((prev) => !prev)}

    const triggerState: TriggerState = {
        isOpen,
        isFilled,
        isError,
        isHovered
    }

    const ActiveIcon = selected?.icon ?? DefaultIcon
    const displayText = selected?.label ?? placeholderText

    return (
        <div className={cn("flex flex-col gap-[6px]", disabled ? "opacity-50 cursor-not-allowed" : "")}>
        {showLabel && <label className="text-label-xs">{labelText}</label>}
        <div
            className="bg-bg-empty rounded-md"
            onMouseEnter={() => !disabled && setIsHovered(true)}
            onMouseLeave={() => !disabled && setIsHovered(false)}
        >
            <Select
                value={value}
                onValueChange={() => {
                    if (selected) handleSelect(selected.index, selected.label, selected.icon)
                }}
                disabled={disabled}
                onOpenChange={open => !disabled && setIsOpen(open)}
            >
            <SelectTrigger>
                <WSelectBox 
                    state={triggerState}
                    showLeft={showLeft}
                    showInput={showInput}
                    icon={ActiveIcon}
                    placeholderText={placeholderText}
                    disabled={disabled}
                    valueText={displayText}
                    onTriggerClick={handleTriggerClick}
                />
            </SelectTrigger>
            <SelectContent avoidCollisions={false} position="popper" className="mt-[10px]">
                <WDropdown onClick={handleSelect} selectedIndex={selected?.index ?? null} />
            </SelectContent>
            </Select>
        </div>
        </div>
    )
}