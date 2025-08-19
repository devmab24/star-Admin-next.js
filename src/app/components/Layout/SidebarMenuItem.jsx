
// components/Layout/SidebarMenuItem.jsx
export default function SidebarMenuItem({ item }) {
  if (item.isCategory) {
    return <li className="nav-item nav-category">{item.title}</li>;
  }

  if (item.subItems) {
    return (
      <li className="nav-item">
        <a
          className="nav-link"
          data-bs-toggle="collapse"
          href={`#${item.collapseId}`}
          aria-expanded="false"
          aria-controls={item.collapseId}
        >
          <i className={`menu-icon ${item.icon}`}></i>
          <span className="menu-title">{item.title}</span>
          <i className="menu-arrow"></i>
        </a>
        <div className="collapse" id={item.collapseId}>
          <ul className="nav flex-column sub-menu">
            {item.subItems.map((subItem, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href={subItem.href}>
                  {subItem.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </li>
    );
  }

  return (
    <li className="nav-item">
      <a className="nav-link" href={item.href}>
        <i className={`menu-icon ${item.icon}`}></i>
        <span className="menu-title">{item.title}</span>
      </a>
    </li>
  );
}