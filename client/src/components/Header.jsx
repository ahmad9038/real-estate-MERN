import { FaSearch } from "react-icons/fa";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");

    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className=" bg-slate-200 shadow-md">
      <div className=" flex justify-between max-w-6xl mx-auto p-3 items-center">
        <Link to="/">
          <h1 className="  font-bold text-small sm:text-xl flex flex-wrap">
            <span className=" text-slate-500">Ahmad</span>
            <span className=" text-slate-700">Estate</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className=" bg-slate-100 p-3 rounded-lg flex items-center"
        >
          <input
            type="text"
            placeholder="Search..."
            className=" bg-transparent focus:outline-none w-24 sm:w-64 mr-2"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button>
            <FaSearch className=" text-slate-600" />
          </button>
        </form>

        <ul className=" flex gap-4">
          <Link to="/">
            <li className=" hidden sm:inline text-slate-700 hover:underline cursor-pointer font-semibold">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className=" hidden sm:inline text-slate-700 hover:underline cursor-pointer font-semibold">
              About
            </li>
          </Link>

          {currentUser ? (
            <Link to="/profile">
              <img
                className=" rounded-full h-7 w-7 object-cover cursor-pointer"
                src={currentUser.avatar}
                alt="profile"
              />
            </Link>
          ) : (
            <Link to="sign-in">
              <li className=" cursor-pointer text-slate-700 font-semibold hover:underline">
                Sign in
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
