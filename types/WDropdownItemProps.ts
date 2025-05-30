import { ReactNode, ComponentType } from "react";

/**
 * Props for the WDropdownItem component.
 */
export interface WDropdownItemProps {
    /**
     * The label (text) to display for the dropdown item.
     */
    label?: ReactNode;

    /**
     * The description or additional text to display for the dropdown item.
     */
    desc?: ReactNode;

    /**
     * The icon to display alongside the dropdown item.
     * Should be a React component that accepts a `className` prop for styling.
     */
    icon?: ComponentType<{ className?: string }>;

    /**
     * Indicates whether the dropdown item is currently selected.
     */
    selected?: boolean;

    /**
     * Callback function triggered when the dropdown item is clicked.
     */
    onClick?: () => void;
}