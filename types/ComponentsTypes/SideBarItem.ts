type SideBarItem = {
  title: string;
  to: string;
  icon: string;
  name?: string;
  children?: SideBarItem[];
  disabled?: boolean;
}

export default SideBarItem
