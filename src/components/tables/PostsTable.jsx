import React, { useState, useEffect } from 'react'
import mainUrl from '../../api';

const PostsTable = () => {

    const [products, setProducts] = useState([]);

    const handleDelete = (id) => {
        if (!confirm('User o`chirilsinmi ? 🤔')) return null
        const newProducts = products?.filter(item => item.id !== id);
        setProducts(newProducts);
    };

    async function getData() {
        const res = await (await mainUrl.get(`posts`)).data.posts
        console.log(res);
        setProducts(await res)
    }

    useEffect(() => {
        getData()
    }, [])
    useEffect(() => {
    }, [products])

    return (
        <div className='data__table'>
            <table className='data__table__layout'>
                <thead>
                    <tr>
                        <th>Owner</th>
                        <th>End Date</th>
                        <th>Profits</th>
                        <th>Losses</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className='data__table__layout_map'>
                    {products?.map(user => (
                        <tr key={user.id}>
                            <td style={{fontSize: '10px'}}>{user.title}</td>
                            <td>{`${user.userId}/${user.id <= 12? user.id: 3}/${user.reactions}`}</td>
                            <td style={{color:'lime',fontWeight: 600}}>${user.reactions+111*2}.00</td>
                            <td style={{ color: 'red', fontWeight: 600 }}>${user.id*13}.00</td>
                            <td>No</td>
                            <td>
                                <button className='btn__del' onClick={() => handleDelete(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostsTable