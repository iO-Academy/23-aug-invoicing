import PlusIcon from "../ui/PlusIcon";

const Toolbar = () => {
  return (
    <div className="row my-4 my-sm-0 mx-0">
      <div className="col d-flex justify-content-start p-0">
        <button className="btn dropdown-toggle btn-sm">Sort by</button>
        <button className="btn dropdown-toggle btn-sm">Filter by Status</button>
      </div>
      <div className="col d-flex justify-content-end p-0">
        <button className="btn btn-info text-white d-inline btn-sm d-flex align-items-center">
          <PlusIcon />
          New Invoice
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
