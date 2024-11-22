import { NavLink } from "react-router-dom";
import { GrOverview } from "react-icons/gr";

import { TbLogout2 } from "react-icons/tb";
import { BiHomeHeart } from "react-icons/bi";
import useUserData from "../../hooks/useUserData";
import { MdOutlineInventory2 } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import UseAuth from "../../hooks/UseAuth";

const sellerRoutes = [
  {
    id: 1,
    route: "/dashboard/my-products",
    title: "My-Products",
    icon: <MdOutlineInventory2 />,
  },
  {
    id: 2,
    route: "/dashboard/add-products",
    title: "Add-Products",
    icon: <IoMdAddCircleOutline />,
  },
];

const Sidebar = () => {
  const userData = useUserData();
  const { Logout } = UseAuth()
  // console.log(data);

  return (
    <div className="bg-orange-300 min-h-screen px-8 py-16">
      <div className="flex gap-2 mb-8">
        <img className="size-10 " src="/accessory.png" alt="" />
        <h1 className="text-3xl text-gray-900 font-bold">Glam Cart</h1>
      </div>
      <ul className="flex flex-col gap-2">
        <li className="btn btn-ghost btn-md place-content-stretch">
          <NavLink className="flex items-center gap-2" to="/dashboard/overview">
            <GrOverview />
            <p>Overview</p>
          </NavLink>
        </li>
        {userData.role === "seller" &&
          sellerRoutes.map((route) => (
            <li
              key={route.id}
              className="btn btn-ghost btn-md place-content-stretch"
            >
              <NavLink className="flex items-center gap-2" to={route.route}>
                <>{route.icon}</>
                <p>{route.title}</p>
              </NavLink>
            </li>
          ))}
        <li className="btn btn-ghost btn-md place-content-stretch">
          <NavLink className="flex items-center gap-2" to="/">
            <BiHomeHeart />
            <p>Home</p>
          </NavLink>
        </li>
        <li
          className="btn btn-ghost btn-md place-content-stretch"
          onClick={() => Logout()}
        >
          <NavLink className="flex items-center gap-2" to="/">
            <TbLogout2 />
            <p>Logout</p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
