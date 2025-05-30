import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, Blocks } from "lucide-react"
import { WSelectBoxProps } from "@/types/WSelectBoxProps"
import { useMemo } from "react";

/* 
Builds WSelectBox UI component, allows for changes in styling based on state variable
Note: chose to use boolean flags rather than state strings because strings are not mutually exclusive (i.e. hovering while filled) 
*/
export default function WSelectBox({
    state: { isOpen, isFilled, isError, isHovered },
    showLeft = true,
    showInput = true,
    icon: Icon = Blocks,
    placeholderText = "Placeholder",
    disabled = false,
    valueText,
    onTriggerClick,
}: WSelectBoxProps) {
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

    return (
        <div
            role="button"
            onClick={onTriggerClick}
            className={triggerClasses}
        >
            <div className="flex items-center gap-2">
            {showLeft && <Icon className="max-w-[15px] max-h-[15px]" />}
            {showInput ? <input 
                    className="flex-1 bg-transparent outline-none" 
                    value={valueText} 
                    readOnly 
                    placeholder={placeholderText}
                    disabled={disabled}
                />
                : <span className="flex-1">{valueText}</span>
            }
            </div>

            {isOpen ? <ChevronUp className={chevronClasses}/> : <ChevronDown className={chevronClasses}/> }
        </div>
    )
}
