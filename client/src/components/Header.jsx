import { Navbar, TextInput, Button, Dropdown, Avatar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

const Header = () => {
  const path = useLocation().pathname;
  const currentUser = useSelector((state) => state.currentUser);
  console.log(currentUser);

  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          Aman's
        </span>{" "}
        Blog
      </Link>
      <form>
        <TextInput
          type="search"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="sm:inline lg:hidden"
        />
      </form>
      <Button className="w-12 h-10 lg:inline" color="gray" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex md:order-2 gap-2">
        <Button className="w-12 h-10 sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        {currentUser ? (
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User" img={currentUser.profilePicture} rounded />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">{currentUser.username}</span>
              <span className="block truncate text-sm font-medium">
                {currentUser.email}
              </span>
            </Dropdown.Header>

            <Link to="/dashboard?tab=profile">
              <Dropdown.Item>Profile</Dropdown.Item>
            </Link>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        ) : (
          <Link to="/signin">
            <Button gradientDuoTone="purpleToBlue" outline>
              Sign In
            </Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link
          to="/"
          className={path === "/" ? "text-blue-500" : "text-gray-500"}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={path === "/about" ? "text-blue-500" : "text-gray-500"}
        >
          About
        </Link>
        <Link
          to="/projects"
          className={path === "/projects" ? "text-blue-500" : "text-gray-500"}
        >
          Projects
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
