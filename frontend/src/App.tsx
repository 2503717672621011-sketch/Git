import { useEffect, useState } from "react";

interface User {
  id: string;
  name: string;
  email: string;
  age: string;
}

export function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading , setloading] = useState(true)

  useEffect(() => {
  const timer = setTimeout(async () => {
    try {
      const response = await fetch("http://localhost:5000/getuser");

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const data: User[] = await response.json();
      setUsers(data);
      setloading(false)
    } catch (error) {
      console.log(error);
    }
  }, 2000);

  return () => {
    clearTimeout(timer);
  };
}, []);

    return(
      <>
      {loading &&
        <p>Loading...</p>
      }
      <div style={{display:"grid",gridTemplateColumns:"repeat(5,1fr)"}}>
        {users.map((user)=>(
          <div key={user.id} style={{backgroundColor:'#333',margin:'20px',padding:'20px' ,minWidth:'200px',maxWidth:'200px',border:'solid 2px wheat' ,borderRadius:'5px'}}>
          <h3 style={{color:'white'}}>{user.name}</h3>
          <p style={{color:'white'}}>{user.email}</p>
          <p style={{color:'white'}}>{user.age}</p>
        </div>
        ))}
      </div>
      </>
    );
} 