import { Outlet, Link, useLocation } from "react-router-dom";
export const Layout = () => {
  const { pathname } = useLocation();

  return (
    <>
      <div className="md:flex md:min-h-screen">
        <aside className="md:w-1/4 bg-blue-900 px-5 py-10">
          <h2 className="text-2xl font-black text-center text-white">
            CRM - Clientes
          </h2>
          <nav className="mt-10">
            <Link
              className={`${
                pathname === "/" ? "text-blue-300" : "text-white"
              } text-2xl block mt-2 hover:text-blue-300`}
              to="/"
            >
              Clientes
            </Link>
            <Link
              to="/clientes/nuevo"
              className={`${
                pathname === "/clientes/nuevo" ? "text-blue-300" : "text-white"
              } text-2xl block mt-2 hover:text-blue-300`}
            >
              Nuevo Cliente
            </Link>
          </nav>
        </aside>
        <main className="md:w-3/4 p-10 md:h-screen md:overflow-scroll">
          <Outlet />
        </main>
      </div>
    </>
  );
};
