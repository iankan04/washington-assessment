export interface TriggerState {
    isOpen: boolean,
    isFilled: boolean,
    isError: boolean,
    isHovered: boolean
}

export interface WSelectBoxProps {
    showLeft?: boolean;
    showInput?: boolean;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;    
    placeholderText?: string;
    disabled?: boolean;
    valueText?: string;

    state: TriggerState
    onTriggerClick(): void;
}