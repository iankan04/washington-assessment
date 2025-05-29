import { Eye } from "lucide-react";

function CircleIcon({ Icon }: { Icon?: React.ComponentType<{ className?: string }> }) {
    return (
        <div className={`w-[38px] h-[38px] flex items-center justify-center rounded-full ${ Icon ? "bg-brand-muted" : "bg-transparent" } p-[10px]`}>
            {Icon && <Icon className="text-brand-primary" />}
        </div>
    )
}

function SquareIcon({ Icon }: { Icon?: React.ComponentType<{ className?: string }> }) {
    return (
        <div className={`w-[38px] h-[38px] flex items-center justify-center rounded-lg ${ Icon ? "bg-brand-muted" : "bg-transparent" } p-[10px]`}>
            {Icon && <Icon className="text-brand-primary" />}
        </div>
    )
}

function CircleEyeIcon() {
    return (
        <CircleIcon Icon={Eye} />
    )
}

function SquareEyeIcon() {
    return (
        <SquareIcon Icon={Eye} />
    )
}

export {
    CircleEyeIcon,
    SquareEyeIcon,
    CircleIcon,
    SquareIcon
}