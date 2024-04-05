/* eslint-disable react/prop-types */
export default function NewsCategories({ categories }) {
  return (
    <div className=" sticky top-0">
      <ul className="space-y-4">
        {categories?.map(({ id, name }) => {
          return (
            <li
              className={`${
                name === "All News"
                  ? " bg-primary bg-opacity-30 font-medium py-1 px-2 cursor-pointer"
                  : "cursor pointer px-3"
              }`}
              key={id}
            >
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
