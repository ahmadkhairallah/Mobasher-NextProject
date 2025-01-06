import { Subcategory } from "@/types/Category";
import Link from "next/link";
import { FiChevronRight } from "react-icons/fi";

interface Props {
  item: Subcategory;
  categoryId: string;
}

const SubCategoryItem = (props: Props) => {
  const { categoryId, item } = props;
  const { id, name } = item;
  return (
    <div className="flex items-center justify-between bg-secondary p-4 rounded-md shadow hover:shadow-lg hover:bg-secondary/90 transition">
      <Link
        href={`./${categoryId}/${id}`}
        className="flex items-center justify-between w-full hover:text-primary transition duration-300"
      >
        <span>{name}</span>
        <FiChevronRight size={20} />
      </Link>
    </div>
  );
};

export default SubCategoryItem;
