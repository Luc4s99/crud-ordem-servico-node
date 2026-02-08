import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditPage() {

    const [code, setCode] = useState('');
    const [client, setClient] = useState('');
    const [description, setDescription] = useState('');
    const [orderStatus, setStatus] = useState('OPEN');
    const [date, setDate] = useState('');
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(id){
            axios.get("http://localhost:3000/service-orders/"+ id)
            .then(res => {
                setCode(res.data.code);
                setDescription(res.data.description);
                setClient(res.data.client);
                setStatus(res.data.status);
                setDate(new Date(res.data.date).toLocaleDateString());
            });
        }
    }, [id]);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.put("http://localhost:3000/service-orders/" + id, {code: code, client: client, description: description, status: orderStatus, date: date})
            .then(() => navigate('/'));
    }
    
    return (
        <>
            <Link
            to="/" 
            className="mb-4 px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Voltar
            </Link>

            <form onSubmit={submit} className="space-y-6 mt-4 max-w-md mx-auto">

                <h1>Editar Ordem de Serviço</h1>

                

                <div className="grid gap-2">
                    <label htmlFor="code" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20">
                        Código:
                    </label>
                    <input
                        id="code"
                        name="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                        placeholder="Código da OS"
                        disabled
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="client" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                        Cliente:
                    </label>
                    <input
                        id="client"
                        name="client"
                        value={client}
                        onChange={(e) => setClient(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                        placeholder="Cliente da OS"
                        disabled
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="date" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                        Data:
                    </label>
                    <input
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                        placeholder="Data da OS"
                        disabled
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="orderStatus" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                        Status:
                    </label>
                    <select
                        id="orderStatus"
                        name="orderStatus"
                        defaultValue="OPEN"
                        value={orderStatus}
                        onChange={(e) => setStatus(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required>
                        <option value="OPEN">Aberta</option>
                        <option value="IN_PROGRESS">Em progresso</option>
                        <option value="DONE">Pronta</option>
                        <option value="CANCELED">Cancelada</option>
                    </select>
                </div>

                <div className="grid gap-2">
                    <label htmlFor="description" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                        Descrição:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20"
                        placeholder="Descrição"
                        disabled
                    >
                    </textarea>
                </div>
            
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-4 rounded-md transition"
                >
                    Salvar
                </button>
            
            </form>
        </>
    );
}