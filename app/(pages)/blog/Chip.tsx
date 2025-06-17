export function Chip(props: CategoryChipProps) {
  return (
    <div
      className={`cursor-pointer border rounded-full px-3 py-1 text-xl transition-all select-none
                  ${
                    props.selected ? "bg-primary text-tertiary" : "bg-tertiary hover:bg-gray-100"
                  }`}
      onClick={() => {
        if (props.onClick) {
          props.onClick(props.title);
        }
      }}
    >
      {props.title}
    </div>
  );
}

export function MiniChip(props: { title: string }) {
  return (
    <div className="bg-primary text-tertiary font-bold text-xs rounded-full px-2 py-1">{props.title}</div>
  );
}
