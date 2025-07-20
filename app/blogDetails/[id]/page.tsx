import Image from "next/image";

const blogData = [
  {
    id: "1",
    image: "/assets/textile2.jpg",
    author: "Mr. Sheikh Saadi",
    date: "Oct 25, 2021",
    title: "Style Caring is The New Marketing",
    desc: "We are specialized in circular knit garments field. From basic to fashion item we do various type product with different type of yarn composition & fabric construction.",
    dp: "/assets/dp.jpg",
  },
  {
    id: "2",
    image: "/assets/textile3.jpg",
    author: "Mr. John Doe",
    date: "Nov 10, 2021",
    title: "The Future of Fashion",
    desc: "Exploring the latest trends and technologies shaping the future of the fashion industry.",
    dp: "/assets/dp.jpg",
  },
  {
    id: "3",
    image: "/assets/textile4.jpg",
    author: "Ms. Jane Doe",
    date: "Dec 5, 2021",
    title: "Sustainable Fashion: A Necessity",
    desc: "Discussing the importance of sustainability in fashion and how to achieve it.",
    dp: "/assets/dp.jpg",
  },
  {
    id: "4",
    image: "/assets/textile5.jpg",
    author: "Mr. Richard Roe",
    date: "Jan 20, 2022",
    title: "Fashion Marketing in the Digital Age",
    desc: "How digital marketing is revolutionizing the fashion industry.",
    dp: "/assets/dp.jpg",
  },
  {
    id: "5",
    image: "/assets/textile6.jpg",
    author: "Ms. Mary Major",
    date: "Feb 15, 2022",
    title: "The Art of Fashion Photography",
    desc: "Explore the art of content creation, including blog writing, video production, graphic design, and storytelling techniques. Offer guidance on developing content strategies, optimizing content for search engines and social media, and creating engaging multimedia content that resonates with target audiences across different platforms.",
    dp: "/assets/dp.jpg",
  },
  {
    id: "6",
    image: "/assets/textile7.jpg",
    author: "Mr. Alan Smithee",
    date: "Mar 10, 2022",
    title: "Breaking into the Fashion Industry",
    desc: "Tips and tricks for aspiring fashion professionals to break into the industry.",
    dp: "/assets/dp.jpg",
  },
  {
    id: "7",
    image: "/assets/textile8.jpg",
    author: "Ms. Ellen Ripley",
    date: "Apr 5, 2022",
    title: "The Evolution of Fashion Trends",
    desc: "A look back at the fashion trends that have shaped the industry over the decades.",
    dp: "/assets/dp.jpg",
  },
  {
    id: "8",
    image: "/assets/textile9.jpg",
    author: "Mr. Bruce Wayne",
    date: "May 1, 2022",
    title: "Glamour and Grunge: A Fashion Paradox",
    desc: "Exploring the contrasting elements of glamour and grunge in modern fashion.",
    dp: "/assets/dp.jpg",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const blog = blogData.find((b) => b.id === awaitedParams.id);

  if (!blog) {
    return <div className="text-white p-10">Blog not found.</div>;
  }

  return (
    <section
      className="w-full min-h-screen py-50 px-6 pb-100 lg:px-50 text-white"
      style={{
        background:
          "linear-gradient(180deg, #0B1746 0%, #070F2D 55.95%, #000 100%)",
      }}
    >
      <div className="mx-auto">
        <h1 className="text-[54px] font-semibold mb-6">{blog.title}</h1>
        <div className="flex items-center gap-3 mb-6">
          <Image
            src={blog.dp}
            alt={blog.author}
            width={40}
            height={40}
            className="rounded-full aspect-square border border-white object-cover max-h-[564px]"
            style={{ maxHeight: 564 }}
          />
          <div>
            <p className="text-[#CCCCCC] text-lg font-semibold">
              {blog.author}
            </p>
            <p className="text-[#888888] text-sm">{blog.date}</p>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden mb-6">
          <Image
            src={blog.image}
            alt={blog.title}
            width={600}
            height={300}
            className="w-full h-auto object-cover rounded-lg max-h-[564px]"
            style={{
              borderRadius: 8,
              border: "4px solid #2D69D1",
              maxHeight: 564,
            }}
          />
        </div>
        <p className="text-[23px] font-medium leading-relaxed">{blog.desc}</p>
        <br />
        <h1 className="text-[31px] font-semibold mb-4">
          Digital Marketing Strategies:
        </h1>
        <p className="text-[23px] font-medium leading-relaxed">
          Educate your audience on digital advertising platforms such as Google
          Ads, Facebook Ads, LinkedIn Ads, and Twitter Ads. Share tips and best
          practices for creating effective ad campaigns, targeting specific
          audiences, optimizing ad performance, and maximizing return on ad
          spend (ROAS). Discuss emerging trends in paid advertising and
          strategies for achieving cost-effective results.
        </p>
      </div>
    </section>
  );
}
