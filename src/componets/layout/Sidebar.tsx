import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";

// Sample menu items for dynamic rendering
const menuItems = [
  { name: "Dashboard", path: "/dashboard" },
  {
    name: "Doctors",
    items: [
      { name: "All Doctors", path: "/doctors" },
      { name: "Add Doctor", path: "/company" },
      { name: "Edit Doctor", path: "/company" },
      { name: "Doctor Profile", path: "/company" },
    ],
  },
  
  // { name: "Settings", path: "/settings" },
];

const NavSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null); // Track open dropdown
  const router = useRouter();

  const handleNavigation = (path: any) => {
    router.push(path);
  };

  const toggleDropdown = (index: any) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  const isActive = (path: any) => router.pathname === path;
  console.log(isActive, "isActive..");
  return (
    <div className={``}>
      {/* Sidebar Header */}
      <div className="flex items-center gap-2 justify-center py-6  cursor-pointer">
        <img
          src="https://www.einfosoft.com/templates/admin/cliniva/source/light/assets/images/logo.png"
          alt=""
        />
        <h2 className="text-2xl font-bold">Cliniva</h2>
      </div>
      <div className="my-4">
        <div className="flex justify-center ">
          <img
            src="https://www.einfosoft.com/templates/admin/cliniva/source/light/assets/images/user/admin.jpg"
            className="w-20 h-20  border-gray-50 border-[2px] shadow-md rounded-[8px] cursor-pointer"
            alt=""
          />
        </div>

        <h2 className="font-semibold flex justify-center mt-3">Sarah Smith</h2>
        <p className="flex justify-center text-[12px] font-light mt-1">Admin
        </p>
      </div>
      <div className="px-8 text-[14px] font-light">MAIN</div>
      {/* Navigation Links */}
      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map((menu, index) => (
            <li key={index}>
              {menu.items ? (
                // Dropdown Menu
                <>
                  <button
                    className="block w-full text-[14px] text-left px-4 py-3 rounded-md text-gray-800 hover:bg-gray-100"
                    onClick={() => toggleDropdown(index)}
                  >
                    {menu.name}
                    <span className="float-right">
                      {openDropdownIndex === index ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                  {openDropdownIndex === index && (
                    <ul className="pl-6 space-y-2">
                      {menu.items.map((subItem, subIndex) => (
                        <li key={subIndex} className="flex items-center">
                        {isActive(subItem.path) &&  <IoIosArrowForward  size={14}/>}
                          <Link href={subItem.path} legacyBehavior>
                            <a
                              className={`block px-4 py-3 rounded-md text-[14px] text-gray-800 w-full ${
                                isActive(subItem.path)
                                  ? ""
                                  : "hover:bg-gray-100"
                              }`}
                              onClick={() => handleNavigation(subItem.path)}
                            >
                              {subItem.name}
                            </a>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                // Single Link
                <Link href={menu.path} legacyBehavior>
                  <a
                    className={`block px-4 py-3 rounded-md text-[14px] text-gray-800 ${
                      isActive(menu.path)
                        ? "bg-gray-100 font-bold"
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => handleNavigation(menu.path)}
                  >
                    {menu.name}
                  </a>
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavSidebar;
