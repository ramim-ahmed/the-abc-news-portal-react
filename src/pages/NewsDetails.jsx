import TopHeader from "@/components/TopHeader";
import { useParams } from "react-router-dom";
export default function NewsDetails() {
  const { id } = useParams();
  return (
    <div className=" max-w-6xl mx-auto ">
      <TopHeader />
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">details content:{id}</div>
        <div className="col-span-4">right bar</div>
      </div>
    </div>
  );
}
