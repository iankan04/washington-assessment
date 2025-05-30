import { ReactNode, ComponentType } from "react";

export interface WDropdownItemProps {
  label?: ReactNode;
  desc?: ReactNode;
  icon?: ComponentType<{ className?: string }>;
  selected?: boolean;
  onClick?: () => void;
}