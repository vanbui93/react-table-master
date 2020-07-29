import React from 'react';
import { useTable } from 'react-table';
import './style.scss';

import makeData from './../../makeData';
import Pagination from './Pagination';



function Example01() {
  const data = React.useMemo(() => makeData(100), []);
  const columns = React.useMemo(
    () => [
      {
        Header: "First Name",
        accessor: "firstName",
        minWidth: 300
      },
      {
        Header: "Last Name",
        accessor: "lastName",
        minWidth: 300
      },
      {
        Header: "Age",
        accessor: "age",
        minWidth: 300
      },
      {
        Header: "Status",
        accessor: "status",
        minWidth: 300
      },
      {
        Header: "Visits",
        accessor: "visits",
        minWidth: 300
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 3px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold',
                 }}
               >
                 {column.render('Header')}
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {rows.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                       padding: '10px',
                       border: 'solid 1px gray',
                       background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     <Pagination></Pagination>
     </table>
  );
}

export default Example01;