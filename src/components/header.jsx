import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { IoIosSearch, IoIosVideocam } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";

const Header = () => {
  const [params] = useSearchParams();
  const query = params.get("search_query");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = e.target[0].value;
    navigate(`/results?search_query=${text}`);
  };
  return (
    <header className="px-2 py-[17px] sm:px-4 flex justify-between items-center">
      <Link to="/" className="flex justify-center align-items-center gap-[6px]">
        <img
          src="/youtube.png"
          alt="youtube logo"
          className="w-[41px] sm:w-12"
        ></img>
        <h1 className="text-[21px] sm:text-2xl font-mono">Premium</h1>
      </Link>
      <form
        onSubmit={handleSubmit}
        className="flex border border-gray-400 rounded-[20px] overflow-hidden"
      >
        <input
          type="text"
          className="bg-black px-2 sm:px-5 py-1 sm:py-2 border border-transparent focus:border-blue-500 rounded-l-[20px]"
          defaultValue={query}
        ></input>
        <button className="px-3 sm:px-4 sm:text-2xl  bg-zinc-800 hover:bg-zinc-600 transition duration-300">
          <IoIosSearch />
        </button>
      </form>
      <div className="flex gap-3 text-xl cursor-pointer max-sm:hidden">
        <FaBell className="hover:text-gray-400" />
        <MdVideoLibrary className="hover:text-gray-400" />
        <IoIosVideocam className="hover:text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
