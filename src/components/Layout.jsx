import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import TopBar from "./TopBar";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="flex mb-10 lg:mx-0">
        <div id="page" className="w-full lg:w-10/12 mx-auto">
          {/* TOP BAR */}
          <TopBar />
          {/* TOPBAR */}
          <div className="bg-white flex justify-center py-2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
