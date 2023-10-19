export default function StatisticsCard({
  icon,
  title,
  description,
  className,
}) {
  return (
    <div
      className={`statistics__card bg-white w-96 px-8 py-12 max-w-full relative ${className}`}
    >
      <div className="icon bg-[#3b3054] w-fit p-4 rounded-full absolute top-0 -translate-y-1/2">
        <img src={icon} alt="icon brand recognition" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-[#35323e]">{title}</h3>
      <p className="text-[#9e9aa7]">{description}</p>
    </div>
  );
}
