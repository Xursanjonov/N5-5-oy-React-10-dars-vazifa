import React from 'react'
import './adminproducts.scss'
import AdminNavbar from '../../components/tables/AdminNavbar'
import DataTable from '../../components/tables/DataTable'

const AdminProducts = () => {
    return (
        <div className='admin__products'>
            <AdminNavbar title={'Overview'} />
            <DataTable />
        </div>
    )
}

export default AdminProducts