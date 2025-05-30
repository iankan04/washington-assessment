export interface WDropdownProps {
    selectedIndex: number | null;
    onClick: (index: number, label: string, icon?: React.ComponentType<{ className?: string }>) => void;
}