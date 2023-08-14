const Table = ({ sat }) => {

  

  return (
      <table>
       <thead>
        <tr>

          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>

        </tr>
        </thead>
        <tbody>
    //The body of the table will use the map function to render the data based on which button a user selects.
          {sat.map( (data, id) =>{
            //Iterate through the sat prop using map; use the following callbacks: id and data. returns data to each row in the table.
            return (<tr key={id}>
              <td>{data.name}</td>
              <td>{data.type}</td>
              <td>{data.launchDate}</td>
              <td>{data.operational ? "Active": "Inactive" }</td>
            </tr>
            )
          })};
        </tbody>
      </table>
  );
};

export default Table;
