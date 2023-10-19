import illustration from "../images/illustration-working.svg";

export default function Hero() {
  return (
    <div className="hero flex justify-between pl-28">
      <div className="mt-10">
        <h1
          className="text-[60px] font-bold text-[#35323e] leading-[4rem]"
          style={{
            fontSize: "clamp(1.5rem, 60px, 7rem)",
            maxWidth: "444px",
          }}
        >
          More than just shorter links
        </h1>
        <p className="text-[#9e9aa7] mb-6 text-lg w-[500px]">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="btn--cyan">Get Started</button>
      </div>
      <img
        src={illustration}
        style={{ transform: "translateX(120px)" }}
        alt="illustration working"
      />
    </div>
  );
}
