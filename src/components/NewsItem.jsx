import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function NewsItem({ news } = {}) {
  const { _id, title, image_url } = news;
  return (
    <div className="mb-10 border rounded p-5">
      <div className="flex justify-between items-center bg-gray-200 p-3">
        <div>author</div>
        <div>share section</div>
      </div>
      <div>
        <h1 className="pt-4 text-xl font-medium">{title}</h1>
        <img src={image_url} className="py-4" alt="" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quis
            similique neque, sint debitis corrupti ex error earum voluptatem
            facilis necessitatibus quo sequi commodi recusandae eaque
            consectetur. Voluptas, recusandae beatae...
          </p>
          <Link to={`/news/${_id}`} className=" text-primary font-medium">
            Read More
          </Link>
        </div>
        <div className="border-b border-gray-200 my-6"></div>
        <div className="flex justify-between items-center">
          <div>rating</div>
          <div>Views</div>
        </div>
      </div>
    </div>
  );
}
