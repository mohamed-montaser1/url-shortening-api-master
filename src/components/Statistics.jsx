import ShortenLink from "./ShortenLink";
import StatisticsCard from "./StatisticsCard";

import IconBrandRecognition from "../images/icon-brand-recognition.svg";
import IconDetailedRecords from "../images/icon-detailed-records.svg";
import IconFullyCustomizable from "../images/icon-fully-customizable.svg";

const data = [
  {
    icon: IconBrandRecognition,
    title: "Brand Recognition",
    description: `Boost your brand recognition with each click. Generic links don't mean a
        thing. Branded links help instil confidence in your content.`,
  },
  {
    icon: IconDetailedRecords,
    title: "Detailed Records",
    description: `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decision.`,
    className: "translate-y-8",
  },
  {
    icon: IconFullyCustomizable,
    title: "Fully Customizable",
    description: `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
    className: "translate-y-16",
  },
];

export default function Statistics() {
  return (
    <section className="statistics bg-[#f0f1f6]  h-screen mt-32 pb-[63rem]">
      <ShortenLink />
      <h2 className="text-3xl text-center font-bold text-[#35323e]">
        Advanced Statistics
      </h2>
      <p className="block mx-auto text-center text-sm mt-3 w-[397px] text-[#9e9aa7]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="container-p mt-16 pb-3">
        <div className="mx-auto flex gap-10 relative w-fit max-w-full">
          <div className="absolute top-1/2 -translate-y-1/2 h-3 bg-[#2acfcf] container-inline max-w-full"></div>
          {data.map(({ icon, title, description, className }) => (
            <StatisticsCard
              icon={icon}
              title={title}
              description={description}
              className={className}
              key={Math.random() * 10000 + 5 / 2 - 3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
