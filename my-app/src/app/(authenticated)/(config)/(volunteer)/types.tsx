export interface SideNavItem {
  title: string;
  path: string;
  icon: JSX.Element;
  active?: boolean;
  position?: string;
  submenu?: boolean;
  subMenuItems?: SideNavItem[];
}