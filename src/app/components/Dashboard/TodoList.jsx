
// components/Dashboard/TodoList.jsx
export default function TodoList() {
  const todoItems = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      date: "24 June 2020",
      status: "Due tomorrow",
      statusClass: "badge-opacity-warning",
      hasFlag: true,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      date: "23 June 2020",
      status: "Done",
      statusClass: "badge-opacity-success",
      hasFlag: false,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      date: "24 June 2020",
      status: "Done",
      statusClass: "badge-opacity-success",
      hasFlag: false,
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing",
      date: "24 June 2020",
      status: "Expired",
      statusClass: "badge-opacity-danger",
      hasFlag: false,
    },
  ];

  return (
    <div className="row flex-grow">
      <div className="col-12 grid-margin stretch-card">
        <div className="card card-rounded">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex justify-content-between align-items-center">
                  <h4 className="card-title card-title-dash">Todo list</h4>
                  <div className="add-items d-flex mb-0">
                    <button className="add btn btn-icons btn-rounded btn-primary todo-list-add-btn text-white me-0 pl-12p">
                      <i className="mdi mdi-plus"></i>
                    </button>
                  </div>
                </div>
                <div className="list-wrapper">
                  <ul className="todo-list todo-list-rounded">
                    {todoItems.map((item, index) => (
                      <li key={index} className={index === todoItems.length - 1 ? "border-bottom-0" : "d-block"}>
                        <div className="form-check w-100">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            {item.text}
                            <i className="input-helper rounded"></i>
                          </label>
                          <div className="d-flex mt-2">
                            <div className="ps-4 text-small me-3">{item.date}</div>
                            <div className={`badge ${item.statusClass} me-3`}>
                              {item.status}
                            </div>
                            {item.hasFlag && <i className="mdi mdi-flag ms-2 flag-color"></i>}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}