import React from 'react'
import AdminNavbar from '../../components/tables/AdminNavbar'
import UserTable from '../../components/tables/UserTable'

const User = () => {
    return (
        <div className='admin__products'>
            <AdminNavbar title={'Users'} />
            <UserTable />
        </div>
    )
}

export default User