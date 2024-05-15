import React from 'react'
import AdminNavbar from '../../components/tables/AdminNavbar'
import PostsTable from '../../components/tables/PostsTable'

const Posts = () => {
    return (
        <div className='admin__products'>
            <AdminNavbar title={'Posts'} />
            <PostsTable />
        </div>
    )
}

export default Posts