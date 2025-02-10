import { Button } from "@heroui/react";

export default function TButton({ key, label, icon, className, iconClassName }) {
  return <Button key={key} className={className}>{icon && <span className={iconClassName}>{icon}</span>} {label}</Button>;
}
