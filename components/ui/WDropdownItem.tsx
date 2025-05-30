import { SquareIcon } from "@/components/ui/WLeadingVisual";
import { WDropdownItemProps } from "@/types/WDropdownItemProps";

/**
 * Creates a dropdown item
 */
export default function WDropdownItem({
    label="Label",
    desc,
    icon,
    selected = false,
    onClick,
}: WDropdownItemProps
) {
    return (
        <div
            onClick={onClick}
            data-state={selected ? "selected" : "unselected"}
            className={`
                group flex items-center w-full py-[8px] px-[12px] gap-[10px]
                bg-background transition-colors
                ${selected 
                    ? "bg-brand-silent text-brand-primary"
                    : "bg-background hover:bg-bg-lighter"}
            `}
        >
            <SquareIcon Icon={icon} />
            <div className="flex flex-col items-start text-left">
                {label && <span className="text-label-s">{label}</span>}
                {desc && <span className="text-body-xs text-fg-secondary">{desc}</span>}
            </div>
        </div>
    );
}