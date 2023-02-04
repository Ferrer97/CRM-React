import { useNavigate, Form, useActionData } from "react-router-dom";
import { Error, Formulario } from "../components";

export async function action({ request }) {
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
}

export const NewClient = () => {
  const navigate = useNavigate();
  const errors = useActionData();

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
          <Formulario />

          <input
            type="submit"
            value="Registrar Cliente"
            className="mt-5 w-full bg-blue-800 text-white text-lg uppercase cursor-pointer"
          />
        </Form>
      </div>
    </>
  );
};
