function IconContainer({
  Icon,
  variant = "circle",
}: {
  Icon?: React.ComponentType<{ className?: string }>;
  variant?: "circle" | "square";
}) {
  return (
    <div
      className={`w-[32px] h-[32px] flex items-center justify-center p-[10px] ${
        variant === "circle" ? "rounded-full" : "rounded-md"
      } ${Icon ? "bg-brand-muted" : "bg-transparent"}`}
    >
      {Icon && <Icon className="w-[15px] h-[15px] scale-[1.5] text-brand-primary" />}
    </div>
  );
}

function CircleIcon({ Icon }: { Icon?: React.ComponentType<{ className?: string }> }) {
    return (
        <IconContainer Icon={Icon}/>
    )
}

function SquareIcon({ Icon }: { Icon?: React.ComponentType<{ className?: string }> }) {
    return (
        <IconContainer Icon={Icon} variant="square"/>
    )
}

export {
    CircleIcon,
    SquareIcon
}