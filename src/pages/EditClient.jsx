import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigate,
} from "react-router-dom";
import { Formulario, Error } from "../components";
import { getClientById, updateClient } from "../data/Clientes";

export async function loader({ params }) {
  const cliente = await getClientById(params.id);
  if (Object.values(cliente).length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "No hay resultados",
    });
  }
  return cliente;
}

export async function accion({ request, params }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const email = formData.get("email");

  // validacion
  const errors = [];
  if (Object.values(data).includes("")) {
    errors.push("Todos los campos son obligatorio");
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  if (!regex.test(email)) {
    errors.push("El email no es valido");
  }
  if (Object.keys(errors).length) {
    return errors;
  }
  // Actulizar cliente
  await updateClient(params.id, data);

  return redirect("/");
}

export const EditClient = () => {
  const cliente = useLoaderData();
  const errors = useActionData();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      {" "}
      <h1 className="font-black text-blue-900 text-center"> Nuevo Cliente</h1>
      <p className="mt-3">
        LLena todos los campos para registrar un nuevo cliente
      </p>
      <div className="flex justify-end">
        <button
          className="bg-blue-800 text-white px-3 font-bold uppercase"
          onClick={handleClick}
          type="button"
        >
          volver
        </button>
      </div>
      <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">
        {errors?.length &&
          errors.map((error, i) => <Error key={i}>{error}</Error>)}

        <Form method="post" noValidate>
          <Formulario cliente={cliente} />

          <input
            type="submit"
            value="Actulizar Cliente"
            className="mt-5 w-full bg-blue-800 text-white text-lg uppercase cursor-pointer"
          />
        </Form>
      </div>
    </>
  );
};
