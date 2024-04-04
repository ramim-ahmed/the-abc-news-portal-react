import moment from "moment";
import brand from "../assets/brand.png";
export default function TopHeader() {
  return (
    <div className="flex justify-center py-8">
      <div>
        <img src={brand} alt="" />
        <div className="text-center mt-2">
          <p>Journalism Without Fear or Favour</p>
          <p>{moment().format("dddd, MMMM D, YYYY,")}</p>
        </div>
      </div>
    </div>
  );
}
