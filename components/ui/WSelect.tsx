import React, { useState } from "react";
import { WSelectProps } from "@/types/WSelectProps";
import { DropdownOption } from "@/types/WDropdownProps";
import { TriggerState } from "@/types/WSelectBoxProps";
import WDropdown from "@/components/ui/WDropdown";
import { cn } from "@/lib/utils";
import { Select, SelectTrigger, SelectContent } from "@radix-ui/react-select";
import WSelectBox from "@/components/ui/WSelectBox";

/**
 * Builds WSelect Parent UI component, congregates all other components into Radix-select framework
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
    options,
}: WSelectProps) {
    const [selected, setSelected] = useState<DropdownOption | null>(null)
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
            const newOption: DropdownOption = {
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
    const flatOptions: DropdownOption[] = options.flatMap(group => group.options);


    return (
        <div className={cn("flex flex-col gap-[6px] select-none [&_*]:focus:outline-none", disabled ? "opacity-50 cursor-not-allowed" : "")}>
        {showLabel && <label className="text-label-xs">{labelText}</label>}
        <div
            className="bg-bg-empty rounded-md"
            onMouseEnter={() => !disabled && !isOpen && setIsHovered(true)}
            onMouseLeave={() => !disabled && setIsHovered(false)}
        >
            <Select
                value={value}
                onValueChange={(val) => {
                    const index = parseInt(val, 10);
                    const option = flatOptions.find((o) => o.index === index);
                    if (option) handleSelect(option.index, option.label, option.icon);
                    setIsHovered(false);
                }}
                disabled={disabled}
                onOpenChange={(open) => {
                    if (!disabled) {
                        setIsOpen(open)
                        if (!open) setIsHovered(false);
                    } 
                }}
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
            <SelectContent avoidCollisions={false} position="popper" className="mt-[10px] [&_*]:focus:outline-none">
                <WDropdown options={options} selectedIndex={selected?.index ?? null} />
            </SelectContent>
            </Select>
        </div>
        </div>
    )
}