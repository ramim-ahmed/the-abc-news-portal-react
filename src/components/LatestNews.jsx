import Marquee from "react-fast-marquee";
export default function LatestNews() {
  return (
    <div className="flex items-center">
      <div className="w-52">
        <button className="bg-primary text-white px-6 py-2">Latest</button>
      </div>
      <div>
        <Marquee>
          <p className="border-b ml-10 border-primary text-primary cursor-pointer">
            Israel’s war on Gaza live: 7 killed aid workers ‘targeted
            systematically....’
          </p>
          <p className="border-b ml-10 border-primary text-primary cursor-pointer">
            More than a dozen Pakistani judges receive letters with ‘toxic’
            powder....
          </p>
        </Marquee>
      </div>
    </div>
  );
}
