import { NavLink } from "react-router";

export default function Navbar() {
  const Nav = [
    {
      id: 1,
      text: "Home",
      link: "/",
    },
    {
      id: 2,
      text: "Countries",
      link: "/countries",
    },
    {
      id: 1,
      text: "About",
      link: "/about",
    },
  ];

  return (
    <div className="container flex flex-col items-center justify-between gap-6 p-5 md:flex-row md:border-r-black md:justify-start ">
      <h1 className="text-3xl font-bold text-center">
        REST<span className="text-blue-700 tracking-tight">Explorer</span>
      </h1>
      <ul className="flex flex-row gap-6 items-center justify-center md:border-l md:border-[#bcbcbcd8] md:pl-8">
        {Nav.map((item) => {
          return (
            <li className="font-medium text-center  hover:text-gray-300">
              <NavLink to={item.link}>{item.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
