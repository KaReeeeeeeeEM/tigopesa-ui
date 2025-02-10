import { Button } from "@heroui/react";

export default function TButton({ label, icon, className, iconClassName }) {
  return <Button className={className}>{icon && <span className={iconClassName}>{icon}</span>} {label}</Button>;
}
