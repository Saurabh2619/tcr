import Marquee from "react-fast-marquee";

export default function MarqueePage() {
  return (
    <Marquee speed={50} pauseOnHover={true} gradient={false} className="bg-gray-200 py-3 w-full">
      <div className="flex gap-12 items-center">
        <img src="/images/mcd.png" alt="logo" className="h-16 w-auto mx-4" />
        <img src="/images/sam.png" alt="logo" className="h-16 w-auto mx-4" />
        <img src="/images/ske.png" alt="logo" className="h-16 w-auto mx-4" />
        <img src="/images/uox.png" alt="logo" className="h-16 w-auto mx-4" />
      </div>
    </Marquee>
  );
}
