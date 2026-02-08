import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreatePage() {

    const [code, setCode] = useState('');
    const [client, setClient] = useState('');
    const [description, setDescription] = useState('');
    const [orderStatus, setStatus] = useState('OPEN');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post("http://localhost:3000/service-orders", {code: code, client: client, description: description, status: orderStatus, date: date})
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

                <h1>Nova Ordem de Serviço</h1>

                

                <div className="grid gap-2">
                    <label htmlFor="code" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                        Código:
                    </label>
                    <input
                        id="code"
                        name="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Código da OS"
                        required
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
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Cliente da OS"
                        required
                    />
                </div>

                <div className="grid gap-2">
                    <label htmlFor="date" className="text-sm leading-none font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-50">
                        Data:
                    </label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Data da OS"
                        required
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
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-base shadow-sm transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Descrição"
                        required
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