import React, { useEffect, useState } from 'react';

const ReportedItems = () => {

    const [report, setReport] = useState([])
    console.log(report)
    useEffect(() => {

        fetch('http://localhost:5000/report')
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setReport(data)


            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])


    return (
        <div>
            Reported Items

           
            <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    {
                report.map(p=><tr>
                    <th>{p.name}</th>
                    <td>{p.productName}</td>
                    <td>{p.price}</td>
                    <td>Blue</td>
                  </tr>)
            }
      
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ReportedItems;