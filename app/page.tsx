import { CircleEyeIcon, SquareEyeIcon, CircleIcon, SquareIcon } from "@/components/ui/WLeadingVisual";
import WDropdownHeader from "@/components/ui/WDropdownHeader";
import { Apple } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-empty">
      <div className="w-[500px] h-[500px] bg-brand-primary flex items-center justify-center text-body-l gap-5">
        <CircleEyeIcon />
        <SquareEyeIcon />
        <CircleIcon Icon={Apple}/>
        <SquareIcon Icon={Apple}/>
        <WDropdownHeader text="Header" />
      </div>
    </div>
  );
}
