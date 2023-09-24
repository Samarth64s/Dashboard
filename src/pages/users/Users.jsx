import React from 'react'
import "./users.scss"
import DataTable from '../../components/dataTable/DataTable'
import avatar from "../../img/avatar.png"
import { userRows } from '../../data';
import {LiaEditSolid} from "react-icons/lia"
 import {RiDeleteBinLine} from "react-icons/ri"


const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field:"avatar", headerName: "Avatar", width: 100,
      renderCell: (params)=>{
          return <img src={params.row.img || avatar } alt=''/>
      }
  },
  {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
  },
  {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
  },
  {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
  },
  {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field:"status",
    headerName: "Status",
    width: 100,
    type: "boolean",
  },
  {
      field:"actions", headerName: "Actions", width: 100,
      renderCell: (params)=>{
          return <div className='action'>
              <div className='view'><LiaEditSolid/></div>
              <div className='delete'><RiDeleteBinLine/></div>
          </div>
      }
  },
];

const Users = () => {
  return (

    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataTable slug="users" column={columns} row={userRows}/>
      
    </div>
  )

}

export default Users