import { Line, ToggleButton } from "@/tasiomindUi";
import { type NavItem } from "@/types";

const NavigationElement = ({ item, isActive }: { item: NavItem; isActive: boolean }) => (
  <>
    {item.lineLift && <Line vert background="neutral-alpha-strong" aria-hidden="true" />}
    <ToggleButton
      role="button"
      prefixIcon={item.icon}
      href={item.path}
      selected={isActive}
      aria-label={item.label || `button to ${item.path.slice(1)}`}
      aria-current={isActive ? "page" : undefined}
      tooltip={item.label}
      size="l"
    />
    {item.lineRight && <Line vert background="neutral-alpha-strong" aria-hidden="true" />}
  </>
);
NavigationElement.displayName = "NavigationElement";
export { NavigationElement };
