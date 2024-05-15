import React, { useEffect, useState } from 'react';
import mainUrl from '../../api';
import './dataTable.scss'

const DataTable = () => {

    const [products, setProducts] = useState([]);

    const handleDelete = (id) => {
        if (!confirm('User o`chirilsinmi ? 🤔')) return null
        const newProducts = products?.filter(item => item.id !== id);
        setProducts(newProducts);
    };

    async function getData() {
        const res = await (await mainUrl.get(`products`)).data.products
        setProducts(res)
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
                                <img src={user.images[0]} alt={user.lasttName} style={{ objectFit:'cover',width: '50px', height: '50px' }} />
                                {user.brand}
                            </td>
                            <td>{`${user.id}.${user.stock/10}`}</td>
                            <td style={{color:'lime',fontWeight: 600}}>${user.stock}.0</td>
                            <td style={{ color: 'red', fontWeight: 600 }}>${user.rating}0</td>
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

export default DataTable;
