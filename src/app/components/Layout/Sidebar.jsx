// components/Layout/Sidebar.jsx
import SidebarMenuItem from "./SidebarMenuItem";

export default function Sidebar() {
  const menuItems = [
    {
      title: "Dashboard",
      icon: "mdi mdi-grid-large",
      href: "/",
    },
    {
      title: "UI Elements",
      icon: "mdi mdi-floor-plan",
      isCategory: true,
      collapseId: "ui-basic",
      subItems: [
        { title: "Buttons", href: "/components/ui" },
        { title: "Dropdowns", href: "/components/dropdown" },
        { title: "Typography", href: "/components/typhography" },
      ],
    },
    {
      title: "Form elements",
      icon: "mdi mdi-card-text-outline",
      collapseId: "form-elements",
      subItems: [
        { title: "Basic Elements", href: "/components/form" },
      ],
    },
    {
      title: "Charts",
      icon: "mdi mdi-chart-line",
      collapseId: "charts",
      subItems: [
        { title: "ChartJs", href: "/components/chart" },
      ],
    },
    {
      title: "Tables",
      icon: "mdi mdi-table",
      collapseId: "tables",
      subItems: [
        { title: "Basic table", href: "/components/table" },
      ],
    },
    {
      title: "Icons",
      icon: "mdi mdi-layers-outline",
      collapseId: "icons",
      subItems: [
        { title: "Font Awesome", href: "/components/fonts" },
      ],
    },
    {
      title: "User Pages",
      icon: "mdi mdi-account-circle-outline",
      collapseId: "auth",
      subItems: [
        { title: "Blank Page", href: "/blankpage" },
        { title: "404", href: "/error404" },
        { title: "500", href: "/error500" },
        { title: "Login", href: "/login" },
        { title: "Register", href: "/signup" },
      ],
    },
    {
      title: "Documentation",
      icon: "mdi mdi-file-document",
      href: "docs/documentation.html",
    },
  ];

  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        {menuItems.map((item, index) => (
          <SidebarMenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
}