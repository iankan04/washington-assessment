/**
 * Compiled state block to pass between WSelect and WSelectBox
 */
export interface TriggerState {
    /**
     * Determines if expanded
     */
    isOpen: boolean,

    /**
     * Determines if an item is selected
     */
    isFilled: boolean,

    /**
     * Determines if the state is in error
     */
    isError: boolean,

    /**
     * Determines if mouse is hovering over object
     */
    isHovered: boolean
}

/**
 * Props for the WSelectBox component.
 */
export interface WSelectBoxProps {
    /**
     * Determines whether to show the left-side icon in the select box.
     */
    showLeft?: boolean;

    /**
     * Determines whether to show an input field inside the select box.
     */
    showInput?: boolean;

    /**
     * The icon to display in the select box.
     * Should be a React component that accepts SVG props.
     */
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;

    /**
     * The placeholder text to display inside the select box when no value is selected.
     */
    placeholderText?: string;

    /**
     * Disables the select box, preventing user interaction.
     */
    disabled?: boolean;

    /**
     * The text to display as the selected value in the select box.
     */
    valueText?: string;

    /**
     * The current state of the select box, used to control its visual appearance.
     * Includes properties such as whether the box is open, filled, hovered, or in an error state.
     */
    state: TriggerState;

    /**
     * Callback function triggered when the select box is clicked.
     * Typically used to toggle the dropdown menu.
     */
    onTriggerClick(): void;
}