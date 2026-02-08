import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function IndexPage() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/service-orders').then((res) => {
            setOrders(res.data);
        });
    })

    const deleteOrder = (id: number) => {
        if(confirm("Deseja realmente deletar essa OS?")){
            axios.delete("http://localhost:3000/service-orders/" + id).then(() => {
                setOrders(orders.filter( p => p.id !== id));
            });
        }
    }

    return (
        <>
            <div className="p-3">
                <h1 className="text-2xl font-bold mb-4">Gerenciador de OS</h1>
                <Link
                    to="/new" 
                    className="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    Create
                </Link>
                <div className="overflow-x-auto mt-4">

                    <table className="w-full text-sm text-left text-gray-700">
                        <thead className="text-xs uppercase bg-gray-50 text-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Código
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cliente
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descrição
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Data
                            </th>
                            <th scope="col" className="px-6 py-3 w-70">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => 
                                <tr key={order.id} className="odd:bg-white even:bg-gray-50 border-b border-gray-200">
                                    <td className="px-6 py-2 font-medium text-gray-900">{ order.code }</td>
                                    <td className="px-6 py-2 text-gray-700">{ order.client }</td>
                                    <td className="px-6 py-2 text-gray-700">{ order.description }</td>

                                    {order.status === 'OPEN' && <td className="text-purple-600 px-6 py-2 text-gray-700">Aberta</td>}
                                    {order.status === 'IN_PROGRESS' && <td className="text-yellow-600 px-6 py-2 text-gray-700">Em progresso</td>}
                                    {order.status === 'DONE' && <td className="text-green-600 px-6 py-2 text-gray-700">Pronta</td>}
                                    {order.status === 'CANCELED' && <td className="text-red-600 px-6 py-2 text-gray-700">Cancelada</td>}

                                    <td className="px-6 py-2 text-gray-700">{ new Date(order.date).toLocaleDateString() }</td>
                                    <td className="px-6 py-2 space-x-1">
                                        <Link 
                                            to={`/edit/${order.id}`}
                                            className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                            Editar Status
                                        </Link>
                                        <Link
                                            to={`/show/${order.id}`} 
                                            className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300">
                                            Ver OS
                                        </Link>
                                        <button onClick={() => deleteOrder(order.id)} className="cursor-pointer px-3 py-2 text-xs font-medium text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300">
                                            Deletar
                                        </button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>

                        

                </div>
            </div>
        </>
    );
}