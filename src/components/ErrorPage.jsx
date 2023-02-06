import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="space-y-8">
      <h1 className="text-center text-blue-900 font-extralight text-6xl">
        CRM - Clientes
      </h1>
      <p className="text-center">Hubo un error</p>
      <p className="text-center">{error.statusText || error.message}</p>
    </div>
  );
};
