import { Form, useNavigate, redirect } from "react-router-dom";
import { deleteClient } from "../data/Clientes";

export async function action({ params }) {
  await deleteClient(params.id);
  return redirect("/");
}

export const Cliente = ({ cliente }) => {
  const navigate = useNavigate();
  const { nombre, empresa, email, telefono, id } = cliente;

  const handleEdit = (id) => {
    navigate(`/clientes/${id}/editar`);
  };

  const handleDelete = (evt) => {
    if (!confirm("Deseas Eliminar este registro")) {
      evt.preventDefault();
    }
  };
  return (
    <tr className="border-b">
      <td className="p-6 space-y-2">
        <p className="text-2xl text-gray-800">{nombre}</p>
        <p>{empresa}</p>
      </td>
      <td className="p-6">
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">email: </span>{" "}
          {email}
        </p>
        <p className="text-gray-600">
          <span className="text-gray-800 uppercase font-bold">telefono: </span>{" "}
          {telefono}
        </p>
      </td>
      <td className="p-6 flex gap-3">
        <button
          onClick={() => handleEdit(id)}
          type="button"
          className="text-blue-600 hover:text-blue-700 uppercase font-bold text-sm"
        >
          Editar
        </button>

        <Form
          method="post"
          action={`/clientes/${id}/eliminar`}
          onSubmit={handleDelete}
        >
          <button
            type="submit"
            className="text-red-600 hover:text-red-700 uppercase font-bold text-sm"
          >
            Eliminar
          </button>
        </Form>
      </td>
    </tr>
  );
};
