import React, { useState } from 'react';
import Modal from "./Modal"
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData'
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import ContactForm  from './OrderForm';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

const columns: GridColDef[] = [
    { field: 'id', headerName: "Order ID", flex:1 },
    { field: 'burger', headerName: "Burger Type", flex: 1},
    { field: 'fries', headerName: "Fries", flex: 1},
    { field: 'drink', headerName: "Drink", width: 90, flex: 1},
    { field: 'total', headerName: "Total", flex: 1},
];

interface gridData {
    data: {
        id?:string
    }
  }

export const DataTable = () => {
    let { contactData, getData } = useGetData();
    let [open, setOpen] = useState(false);
    let [gridData, setData] = useState<gridData>({data:{}});
    const [selectionModel, setSelectionModel] = useState<string[]>([]);

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }
    
    const deleteData = () => {
        server_calls.delete(selectionModel[0])
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => {window.location.reload()}, 500)
    }


 
    return (
        <>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={() => handleClose}
            />
        <div className="flex flex-row bg-gray-200">
            <div>
                <button
                    className="p-3 bg-red-400 font-semibold rounded m-5 hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >Add Order</button>
            </div> 
            <div>
                <button
                    className="p-3 bg-red-300 rounded m-5 font-semibold hover:bg-slate-800 hover:text-white"
                    onClick={() => handleOpen()}
                >Update Order</button>
            </div> 
            <div>
                <button
                    className="p-3 bg-red-200 rounded m-5 font-semibold hover:bg-slate-800 hover:text-white"
                    onClick={() => deleteData()}
                >Delete Order</button>
            </div> 
        </div>
        <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
            style={{ height: 400, width: '100%'}}
        >
            <h2 className="p-3 bg-orange-200 my-4 text-center font-bold rounded">Order Here<ArticleOutlinedIcon sx={{ m:1, bgcolor: 'primary', fontSize:22 }}>
              <ArticleOutlinedIcon />
            </ArticleOutlinedIcon></h2>
            <DataGrid rows={contactData} columns={columns}
            checkboxSelection={true} 
            onSelectionModelChange={ (item:any) => {
                setSelectionModel(item);
            }}
            componentsProps={{
                pagination: {
                    rowsPerPageOptions: [10]
                    
                }
            }}
            />
        </div>
    </>
  )
}

export default DataTable