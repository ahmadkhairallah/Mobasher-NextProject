import { Category } from "@/types/Category";
import Link from "next/link";

const CategoryItem = ({ item }: { item: Category }) => {
  const { id, name, subcategories } = item;
  return (
    <div
      key={item.id}
      className="flex flex-col text-center sm:flex-row sm:justify-between sm:items-center border-b pb-2 last:border-b-0 py-2"
    >
      <span className="text-textDark font-semibold mb-2 sm:mb-0">{name}</span>

      {subcategories && subcategories?.length > 0 ? (
        <Link
          href={"/categories/" + id}
          className="text-primary font-medium hover:underline transition duration-300"
        >
          View Subcategories ({subcategories.length})
        </Link>
      ) : (
        <span className="text-textLight">No Subcategories</span>
      )}
    </div>
  );
};

export default CategoryItem;
