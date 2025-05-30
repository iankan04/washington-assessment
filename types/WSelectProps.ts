/**
 * Stores WSelectItem type information. See WSelectItem for content database
 */
export type SelectedOption = {
    index: number;
    label: string;
    desc?: string;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

/**
 * Props for the WSelect component.
 */
export interface WSelectProps {
    /**
     * The current value of the select component.
     * Typically corresponds to the `index` of the selected option.
     */
    value?: string;

    /**
     * Callback function triggered when the selected value changes.
     * 
     * @param value - The string representation of the selected option's index.
     * @param option - The full `SelectedOption` object containing details about the selected option.
     */
    onChange?: (value: string, option: SelectedOption) => void;

    /**
     * Placeholder text displayed when no option is selected.
     */
    placeholder?: string;

    /**
     * Disables entire component, preventing user interaction.
     */
    disabled?: boolean;

    /**
     * Determines whether to show the left-side icon in the select box.
     */
    showLeft?: boolean;

    /**
     * The default icon to display in the select box.
     * Should be a React component that accepts SVG props.
     */
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;

    /**
     * Determines whether to show a label above the select box.
     * 
     * @default true
     */
    showLabel?: boolean;

    /**
     * The text to display as the label above the select box.
     * 
     * @default "Select an object"
     */
    labelText?: string;

    /**
     * The placeholder text to display inside the select box when no value is selected.
     * 
     * @default "Placeholder"
     */
    placeholderText?: string;

    /**
     * Determines whether to show an input field inside the select box.
     * 
     * @default true
     */
    showInput?: boolean;

    /**
     * The text to display as the selected value in the select box.
     * 
     * @default "Desktop"
     */
    valueText?: string;
}