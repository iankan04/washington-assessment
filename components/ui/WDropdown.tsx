import WDropdownItem from "@/components/ui/WDropdownItem";
import WDropdownHeader from "./WDropdownHeader";

import { WDropdownProps } from "@/types/WDropdownProps";
import { SelectItem } from "@radix-ui/react-select";

/**
 * Creates Dropdown component that lists all dropdown options
 */
export default function WDropdown({
    options,
    selectedIndex,
}: WDropdownProps
) {
    function GenerateDropdown() {
        return options.map((group, groupIndex) => (
            <div key={groupIndex}>
                {group.header && <WDropdownHeader text={group.header} />}
                {group.options.map((option) => (
                <SelectItem key={option.index} value={option.index.toString()}>
                    <WDropdownItem
                        label={option.label}
                        desc={option.desc}
                        icon={option.icon}
                        selected={option.index === selectedIndex}
                    />
                </SelectItem>
            ))}
            </div>
        ));
    }

    return (
        <div className="flex flex-col w-[var(--radix-select-trigger-width)] rounded-md bg-bg-empty shadow-menu border-1 border-current-bg-muted py-[8px] gap-[4px]">
            { GenerateDropdown() }
        </div>
    );
}