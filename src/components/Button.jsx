import { Button } from "@heroui/react";

export default function TButton({ label, onPress, icon, className, iconClassName }) {
  return <Button onPress={onPress} className={className}>{icon && <span className={iconClassName}>{icon}</span>} {label}</Button>;
}
