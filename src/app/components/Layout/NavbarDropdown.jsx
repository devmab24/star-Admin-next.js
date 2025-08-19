
// components/Layout/NavbarDropdown.jsx
export default function NavbarDropdown() {
  const categories = [
    {
      name: "Bootstrap Bundle",
      description: "This is a Bundle featuring 16 unique dashboards",
    },
    {
      name: "Angular Bundle",
      description: "Everything you'll ever need for your Angular projects",
    },
    {
      name: "VUE Bundle",
      description: "Bundle of 6 Premium Vue Admin Dashboard",
    },
    {
      name: "React Bundle",
      description: "Bundle of 8 Premium React Admin Dashboard",
    },
  ];

  return (
    <li className="nav-item dropdown d-none d-lg-block">
      <a
        className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
        id="messageDropdown"
        href="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Select Category
      </a>
      <div
        className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
        aria-labelledby="messageDropdown"
      >
        <a className="dropdown-item py-3">
          <p className="mb-0 fw-medium float-start">Select category</p>
        </a>
        <div className="dropdown-divider"></div>
        {categories.map((category, index) => (
          <a key={index} className="dropdown-item preview-item">
            <div className="preview-item-content flex-grow py-2">
              <p className="preview-subject ellipsis fw-medium text-dark">
                {category.name}
              </p>
              <p className="fw-light small-text mb-0">{category.description}</p>
            </div>
          </a>
        ))}
      </div>
    </li>
  );
}