function TableRow(props){
    return <tr> <td>{props.name}</td> </tr>
};



const TableElement = () => {
  let table_data = ["Lisa", "Ram", "Firoz", "Lyka"]
  return (<table>
      <tr>
        <th>Name</th>
      </tr>
        {table_data.map((data)=> <TableRow name={data} />)}
    </table>);
};


export default TableElement;