import { Link, useSearchParams } from "react-router-dom";
import { categories } from "../../utils/constants";

const Sidebar = () => {
  const [params] = useSearchParams();
  const selectedCategory = params.get("category");

  return (
    <aside className="p-1 md:p-4">
      {categories.map((item, uniqueKey) => (
        <Link
          to={item.path == "/" ? "/" : `/?category=${item.path}`}
          key={uniqueKey}
        >
          <div
            className="flex items-center gap-2 py-3 px-2 md:px-3 md:text-lg cursor-pointer rounded-md hover:bg-[#2d2d2d] transition"
            style={{
              background:
                (selectedCategory === item.path ||
                  (item.name === "Anasayfa" && !selectedCategory)) &&
                "#242424",
            }}
          >
            <span className="max-md:text-2xl">{item.icon}</span>
            <span className="max-md:hidden">{item.name}</span>
          </div>
          {item.divider && <hr></hr>}
        </Link>
      ))}
    </aside>
  );
};

export default Sidebar;
