/**
 * Represents an option in the dropdown menu.
 */
export type DropdownOption = {
    /**
     * The index of the dropdown option.
     * Used to uniquely identify the option.
     */
    index: number;

    /**
     * The label (text) to display for the dropdown option.
     */
    label: string;

    /**
     * An optional description or additional text to display for the dropdown option.
     */
    desc?: string;

    /**
     * The icon to display alongside the dropdown option.
     * Should be a React component that accepts SVG props for styling.
     */
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export type DropdownGroup = {
    header?: string;

    options: DropdownOption[];
}

/**
 * Props for the WDropdown component.
 */
export interface WDropdownProps {
    /**
     * The index of the currently selected item in the dropdown.
     * If no item is selected, this will be `null`.
     */
    selectedIndex: number | null;

    /**
     * The set of options passed down
     */
    options: DropdownGroup[];
}