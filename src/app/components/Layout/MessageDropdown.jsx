
// components/Layout/MessageDropdown.jsx
export default function MessageDropdown() {
  const messages = [
    {
      name: "Marian Garner",
      message: "The meeting is cancelled",
      image: "/images/faces/face10.jpg",
    },
    {
      name: "David Grey",
      message: "The meeting is cancelled",
      image: "/images/faces/face12.jpg",
    },
    {
      name: "Travis Jenkins",
      message: "The meeting is cancelled",
      image: "/images/faces/face1.jpg",
    },
  ];

  return (
    <li className="nav-item dropdown">
      <a
        className="nav-link count-indicator"
        id="countDropdown"
        href="#"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className="icon-mail icon-lg"></i>
      </a>
      <div
        className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
        aria-labelledby="countDropdown"
      >
        <a className="dropdown-item py-3">
          <p className="mb-0 fw-medium float-start">You have 7 unread mails</p>
          <span className="badge badge-pill badge-primary float-end">
            View all
          </span>
        </a>
        <div className="dropdown-divider"></div>
        {messages.map((message, index) => (
          <a key={index} className="dropdown-item preview-item">
            <div className="preview-thumbnail">
              <img
                src={message.image}
                alt="image"
                className="img-sm profile-pic"
              />
            </div>
            <div className="preview-item-content flex-grow py-2">
              <p className="preview-subject ellipsis fw-medium text-dark">
                {message.name}
              </p>
              <p className="fw-light small-text mb-0">{message.message}</p>
            </div>
          </a>
        ))}
      </div>
    </li>
  );
}
