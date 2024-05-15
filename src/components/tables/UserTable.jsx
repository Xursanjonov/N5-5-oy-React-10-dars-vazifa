import React, { useState, useEffect } from 'react'
import mainUrl from '../../api';

const UserTable = () => {

    const [products, setProducts] = useState([]);

    const handleDelete = (id) => {
        if (!confirm('User o`chirilsinmi ? 🤔')) return null
        const newProducts = products?.filter(item => item.id !== id);
        setProducts(newProducts);
    };

    async function getData() {
        const res = await (await mainUrl.get(`users`)).data.users
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
                            <td className='tdImg'>
                                <img src={user.image} alt={user.lasttName} style={{ width: '50px', height: '50px' }} />
                                {user.firstName}
                            </td>
                            <td>{user.birthDate}</td>
                            <td>${user.height}</td>
                            <td>{user.weight}</td>
                            <td>{user.phone}</td>
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

export default UserTable