import Table from 'react-bootstrap/Table'

function TableRow(props){
    return <tr> <td>{props.name}</td> </tr>
};

const TableElement = () => {
  let table_data = ["Lisa", "Ram", "Firoz", "Lyka"]
  return (
        <div>
          <input type='button' className="m-5 btn btn-primary btn-block" value='Submit'/>
        </div>)};


export default TableElement;


// import Table from 'react-bootstrap/Table';
// function TableRow(props){
//     return <tr> <td>{props.name}</td> </tr>
// };


// function TableElement() {
//   return (
//     <Table striped="columns">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>First Name</th>
//           <th>Last Name</th>
//           <th>Username</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>1</td>
//           <td>Mark</td>
//           <td>Otto</td>
//           <td>@mdo</td>
//         </tr>
//         <tr>
//           <td>2</td>
//           <td>Jacob</td>
//           <td>Thornton</td>
//           <td>@fat</td>
//         </tr>
//         <tr>
//           <td>3</td>
//           <td colSpan={2}>Larry the Bird</td>
//           <td>@twitter</td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// }


// export default TableElement;