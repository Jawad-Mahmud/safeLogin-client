import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AllUsers = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/admin/allUsers?page=1&limit=5`, {
          method: 'GET',
          credentials: 'include',
        });

        const data = await res.json();
        console.log(data.users);

        if (data.success) {
          setUsers(data.users);
        } else {
          console.error(data.msg);
        }
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow w-[90%] md:w-[600px]"> 
        <h1 className="text-xl font-bold mb-4">Admin Panel</h1>  
        
        {users.length === 0 ? (
          <p>No user found</p>      
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user._id} className="border-b py-2">
                <div>
                  <p className="font-semibold">{user.name}</p>
                  <p className="text-gray-600">{user.email}</p>
                </div>
                <span className={`text-xs px-2 py-1 rounded ${user.role === "admin" ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {user.role}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-[90%] md:w-[600px]">
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded w-full"
          onClick={async () => {
            await fetch("http://localhost:3000/api/auth/logout", {
              method: "POST",
              credentials: "include",
            });
            navigate("/login");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};
