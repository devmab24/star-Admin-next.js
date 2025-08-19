
// components/Layout/SearchForm.jsx
export default function SearchForm() {
  return (
    <li className="nav-item">
      <form className="search-form" action="#">
        <i className="icon-search"></i>
        <input
          type="search"
          className="form-control"
          placeholder="Search Here"
          title="Search here"
        />
      </form>
    </li>
  );
}