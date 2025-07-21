import Image from "next/image";

const boxes = [
  {
    icon: "/assets/Location.svg",
    title: "Address",
    value: "Dhaka Bangladesh",
  },
  {
    icon: "/assets/call.svg",
    title: "Contact",
    value: "+165045707551",
  },
  {
    icon: "/assets/mail.svg",
    title: "Email",
    value: "Contact@Leadhuntio.Com",
  },
];

export default function ContactInfoBoxes() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 py-10">
      {boxes.map((box) => (
        <div
          key={box.title}
          className="relative bg-[#0B1746] border-2 border-[#1A4D9B] rounded-2xl flex flex-col items-center justify-center px-10 py-8 shadow-lg"
          style={{ minWidth: 260, boxShadow: "0 0 24px 0 #1A4D9B" }}
        >
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#1A4D9B] rounded-full p-4 shadow-lg">
            <Image src={box.icon} alt={box.title} width={48} height={48} />
          </div>
          <div className="mt-8 text-center">
            <div className="text-white text-2xl font-bold mb-2">
              {box.title}
            </div>
            <div className="text-[#B8D0F6] text-lg break-all">{box.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
