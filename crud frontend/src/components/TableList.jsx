import React from "react";

const TableList = ({ onOpen }) => {
  const clients = [
    {
      id: 1,
      name: "Cy Ganderton",
      email: "gan@gmail.com",
      job: "Quality Control Specialist",
      rate: "100",
      isActive: true,
    },

    {
      id: 2,
      name: "Cy Ganderton",
      email: "gan@gmail.com",
      job: "Quality Control Specialist",
      rate: "100",
      isActive: true,
    },

    {
      id: 3,
      name: "Cy Ganderton",
      email: "gan@gmail.com",
      job: "Quality Control Specialist",
      rate: "100",
      isActive: false,
    },
  ];
  return (
    <div className="container mx-auto py-10">
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>L No</th>
              <th>Name</th>
              <th>Job</th>
              <th>Email</th>
              <th>Rate</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={client.id}>
                <th>{index + 1}</th>
                <td>{client.name}</td>
                <td>{client.job}</td>
                <td>{client.email}</td>
                <td>{client.rate}</td>
                <td>
                  <button
                    className={`btn rounded-full w-20 ${
                      client.isActive
                        ? "btn-primary"
                        : "btn-outline btn-primary"
                    }`}
                  >
                    {client.isActive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td>
                  <button className="btn btn-secondary " onClick={onOpen}>
                    Update
                  </button>
                </td>
                <td>
                  <button className="btn btn-accent">Delete</button>
                </td>
              </tr>
            ))}
            {/* <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
