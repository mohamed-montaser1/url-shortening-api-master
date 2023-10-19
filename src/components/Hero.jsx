import illustration from "../images/illustration-working.svg";

export default function Hero() {
  return (
    <div className="hero flex justify-between pl-28 relative min-h-[482px]">
      <div className="mt-10">
        <h1
          className="font-bold text-[#35323e] leading-[4rem] max-[336px]:px-5"
          style={{
            fontSize: "clamp(40px, 8vw, 60px)",
            maxWidth: "444px",
          }}
        >
          More than just shorter links
        </h1>
        <p className="text-[#9e9aa7] mb-6 text-lg max-w-[500px] max-[464px]:max-w-[346px] max-[336px]:px-5">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn--cyan">Get Started</button>
      </div>
      <img
        src={illustration}
        className="absolute -right-52 hero__illustration"
        alt="illustration working"
      />
    </div>
  );
}
