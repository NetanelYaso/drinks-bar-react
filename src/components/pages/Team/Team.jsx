import "./Team.css";
import { useEffect, useState } from "react";
import { getUsersApi } from "../../services/Profile.service";
import Table from 'react-bootstrap/Table';

function Team() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUsersApi()
    // .then((res)=>console.log(res)) 
    .then(result => setUser(result))
  }, [])
  return (
    <div className="team table-striped">
      {
        user.map((item) => 
          <Table striped bordered hover>
            <thead>
              <tr>
         
                <th>Full Name</th>
                <th>Code Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
             
                <td>{item.profile.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
              </tr>
           
            </tbody>
          </Table>

        )
      }
    </div>
  );
};

export default Team;
