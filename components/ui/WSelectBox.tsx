import React, { useState, useMemo } from "react"
import { WSelectBoxProps, SelectedOption } from "@/types/WSelectBoxProps"
import WDropdown from "@/components/ui/WDropdown"
import { cn } from "@/lib/utils"
import { Select, SelectTrigger, SelectContent } from "@radix-ui/react-select"
import { ChevronDown, ChevronUp, Blocks } from "lucide-react"

export default function WSelectBox({
    value,
    onChange,
    state = "empty",
    disabled = false,
    icon: DefaultIcon = Blocks,
    showLabel = true,
    labelText = "Select an object",
    placeholderText = "Placeholder",
}: WSelectBoxProps) {
    const [selected, setSelected] = useState<SelectedOption | null>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [isHovered, setIsHovered] = useState(false)

    const isError = state === "error"
    const isFilled = selected !== null

    const triggerClasses = useMemo(
        () =>
        cn(
            "flex justify-between items-center p-[10px] w-[35vw] max-w-[500px] min-w-[200px] border-1 rounded-md transition-colors select-none",
            isFilled ? "text-brand-primary" : "text-fg-hushed",
            isOpen
            ? "border-brand-primary"
            : isHovered
            ? "border-fg-secondary"
            : "border-fg-hushed",
            isError && "cursor-not-allowed pointer-events-none text-destructive border-destructive"
        ),
        [isFilled, isOpen, isHovered, isError]
    )

    const chevronClasses = cn(
        "text-fg-secondary",
        isOpen && "text-brand-primary",
        isError && "text-destructive"
    )

    const handleSelect = (
        index: number,
        label: string,
        icon?: React.ComponentType<{ className?: string }>
    ) => {
        const Icon = icon ?? DefaultIcon

        const same =
            selected?.index === index &&
            selected?.label === label &&
            selected?.icon === Icon

        const newSelection = same ? null : { index, label, icon: Icon }
        setSelected(newSelection)

        onChange?.(index.toString(), newSelection || { index, label, icon: Icon })
    }

    const ActiveIcon = selected?.icon || DefaultIcon
    const displayText = selected?.label || placeholderText

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
            <SelectTrigger className={triggerClasses}>
                <div className="flex items-center gap-2">
                    <ActiveIcon className="w-[13.5px] h-[13.5px]" />
                    <span>{displayText}</span>
                </div>
                {isOpen ? <ChevronUp className={chevronClasses} /> : <ChevronDown className={chevronClasses} />}
            </SelectTrigger>
            <SelectContent avoidCollisions={false} position="popper" className="mt-[10px]">
                <WDropdown onClick={handleSelect} selectedIndex={selected?.index ?? null} />
            </SelectContent>
            </Select>
        </div>
        </div>
    )
}