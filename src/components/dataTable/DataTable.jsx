import React from 'react'
import "./dataTable.scss"
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
// import {LiaEditSolid} from "react-icons/lia"
// import {RiDeleteBinLine} from "react-icons/ri"
// import { Link } from 'react-router-dom'

const DataTable = (props) => {
   
//  const handleDelete =( id)=>{
//    console.log(id + "has been deleted!");
//  }

    // const actionColumn ={
    //   field: "action",
    //   headerName: "Action",
    //   width:200,
    //   renderCell:(params) =>{
    //     return (
    //         <div className = "action">
    //          <Link to={`/${props.slug}/${params.row.id}`}><LiaEditSolid/></Link>
    //          <div className='delete' onClick={()=>handleDelete(params.row.id)}>
    //          <RiDeleteBinLine/>
    //          </div>
    //         </div>
    //     )
    //     }
    //   }
    

  return (
    <div className='dataTable'>
        <DataGrid
        className='dataGrid'
        rows={props.row}
        columns={props.column}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{toolbar:GridToolbar}}
        slotProps={{
            toolbar:{
                showQuickFilter:true,
                quickFilterProps:{debounceMs: 500},
            },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
      />
    </div>
  )
}

export default DataTable

