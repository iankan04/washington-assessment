import { SquareIcon } from "@/components/ui/WLeadingVisual";
import { WDropdownItemProps } from "@/types/WDropdownItemProps";
import { Eye } from "lucide-react";

/**
 * Creates a dropdown item
 */
export default function WDropdownItem({
    label="Label",
    desc="Description text",
    icon=Eye,
    selected = false,
    onClick,
}: WDropdownItemProps
) {
    return (
        <button
            type="button"
            onClick={onClick}
            data-state={selected ? "selected" : "unselected"}
            className={`
                group flex items-center w-fill py-[8px] px-[12px] gap-[10px]
                bg-background transition-colors
                ${selected 
                    ? "bg-brand-silent text-brand-primary"
                    : "bg-background hover:bg-bg-light"}
            `} // I ended up using the bg-light (#F3F3F3) instead of bg-lighter (#FCFCFC) because the bg-lighter was barely visible
        >
            <SquareIcon Icon={icon} />
            <div className="flex flex-col items-start text-left">
                {label && <span className="text-label-s">{label}</span>}
                {desc && <span className="text-body-xs text-fg-secondary">{desc}</span>}
            </div>
        </button>
    );
}