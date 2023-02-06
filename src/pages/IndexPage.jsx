import { useLoaderData } from "react-router-dom";
import { Cliente } from "../components";
import { getClients } from "../data/Clientes";

export function loader() {
  const clientes = getClients();
  return clientes;
}
export const IndexPage = () => {
  const clientes = useLoaderData();
  return (
    <>
      <h1 className="font-black text-blue-900 text-center">Clientes</h1>
      <p className="mt-3">Administra tus clientes</p>
      {clientes.length ? (
        <table className="w-full bg-white shadow mt-5 table-auto">
          <thead className="bg-blue-800 text-white">
            <tr>
              <th className="p-2">Clientes</th>
              <th className="p-2">Contacto</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <Cliente key={cliente.id} cliente={cliente} />
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center mt-10">No hay Clientes aun</p>
      )}
    </>
  );
};
