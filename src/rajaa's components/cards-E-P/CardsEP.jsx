import React, { useEffect, useState } from 'react';
import CardEP from '../card-E-P/CardEP.jsx';
import { fetchGroups } from '../firebase/firebaseService.jsx'; 
import '../card-E-P/CardEP.css'

function CardsEP() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGroups();
      setGroups(data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="mb-4  d-flex ">
        <h1 className='fs-3 fw-bold'>Explore Groups</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-1 row-cols-xl-3 px-md-2 ">
        {groups.map(group => (
          <div key={group.id} className="col mb-4">
            <CardEP data={group} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsEP; 