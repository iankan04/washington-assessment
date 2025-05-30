
export type SelectedOption = {
    index: number;
    label: string;
    desc?: string;
    icon: React.ComponentType<{ className?: string }>
}

export type ComponentState = 
  | 'empty' 
  | 'hover' 
  | 'expanded-empty' 
  | 'expanded-filled' 
  | 'filled' 
  | 'disabled' 
  | 'error';

export interface WSelectBoxProps {
    value?: string;
    onChange?: (value: string, option: SelectedOption) => void;
    placeholder?: string;
    disabled?: boolean;
    state?: ComponentState;

    showLeft?: boolean;        // default: true
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    showLabel?: boolean;      // default: true
    labelText?: string;       // default: "Select an object"
    placeholderText?: string; // default: "Placeholder"
    showInput?: boolean;      // default: true
    valueText?: string;       // default: "Desktop"
}