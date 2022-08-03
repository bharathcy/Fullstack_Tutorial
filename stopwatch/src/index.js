  import React from 'react';
  import ReactDOM from 'react-dom';
  import App from './App';

  let root = document.getElementById("root");
  ReactDOM.render(<App />, root);



// import React from "react";
// import {createRoot} from "react-dom/client";
// import axios from "axios";

// function TableRow(props){
//   return <tr key={props.data.id}>
//   <td>{props.data.name}</td>
//   <td>{props.data.language}</td> 
//   <td>{props.data.description}</td> 
//   <td>{props.data.size}</td> </tr>
// };

// export default function App() {
//   const baseURL = "https://api.github.com/users/";
//   const inputRef = React.useRef('');
//   const [posts, setPosts] = React.useState([]);


//   // const handleSearch = (event) => {
//   //   let search_key = inputRef.current.value;
//   //   axios.get(baseURL+search_key+"/repos").then((response) => {
//   //       setPosts(response.data);
//   //   }
//   //   ).catch(setPosts([]));
//   // }  
  
//   const [inpRef, setInputRef] = React.useState('');


//   React.useEffect(() => {
//     let search_key = inpRef;
//     axios.get(baseURL+search_key+"/repos").then((response) => {
//         setPosts(response.data);
//     }
//     ).catch(AxiosError =>setPosts([]))
//   }, [inpRef]);



//   return (
//     <div>
//       <input type='text' ref={inputRef}/>
//       {/* <input type='button' value="Search" onClick={handleSearch}/> */}
//       <input type='button' value="Search" onClick={()=>setInputRef(inputRef.current.value)}/>
//       {(posts.length === 0) ? <h1>No Data Found</h1>:
//       <table>
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Language</th>
//           <th>Description</th>
//           <th>Size</th>
//         </tr>
//         </thead>
//       <tbody>
//         {posts.map((repo) => <TableRow data={repo} />)}
//       </tbody>
//     </table>}
//     </div>
//   );
// }
// const root = createRoot(document.getElementById('root'));
// root.render(<App />);
