import Image from "next/image";

const boxes = [
  {
    icon: "/assets/LocationWhite.svg",
    title: "Address",
    value: "Dhaka Bangladesh",
  },
  {
    icon: "/assets/callWhite.svg",
    title: "Contact",
    value: "+165045707551",
  },
  {
    icon: "/assets/mailWhite.svg",
    title: "Email",
    value: "Contact@Leadhuntio.Com",
  },
];

export default function ContactInfoBoxes() {
  return (
    <div className="hidden md:flex w-full flex-col md:flex-row items-center justify-center gap-8 py-10">
      {boxes.map((box) => (
        <div
          key={box.title}
          className="relative bg-[#032356] border-2 border-[#085592] rounded-2xl flex flex-col items-center justify-center shadow-lg"
          style={{
            width: 365,
            height: 230,
            boxShadow: "0 0 24px 0 #1A4D9B",
            padding: "2rem 2.5rem",
          }}
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#024EC2] rounded-full p-4 shadow-lg">
            <Image src={box.icon} alt={box.title} width={48} height={48} />
          </div>
          <div className="mt-8 text-center">
            <div className="text-white text-[28px] font-bold mb-2">
              {box.title}
            </div>
            <div className="text-[#D8D8D8] text-[19px] break-all">
              {box.value}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
