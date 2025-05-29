export default function WDropdownHeader({ text }: { text: React.ReactNode }) {
    return (
        <span className="text-label-xs text-fg-secondary bg-background px-[10px] py-[2px] w-[184px]">{text}</span>
    )
}