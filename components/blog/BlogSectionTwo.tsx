"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

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
    desc: "An insight into the world of fashion photography and its impact on the industry.",
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

export default function BlogSectionTwo() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 60 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
      className="w-full py-16 px-6 lg:px-20 pb-60"
      style={{
        background:
          "linear-gradient(180deg, #0B1746 0%, #070F2D 55.95%, #000 100%)",
      }}
    >
      <div
        className="max-w-[1440px] mx-auto"
        style={{
          borderRadius: 4,
          background: "rgba(0, 18, 88, 0.87)",
          padding: "2rem",
        }}
      >
        <h2 className="text-4xl sm:text-[54px] font-semibold text-white mb-12">
          <span className="text-white">Latest </span>
          <span className="text-[#AEEE6A]">Post</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogData.map((blog, idx) => (
            <Link href={`/blogDetails/${blog.id}`} key={blog.id}>
              <motion.div
                className="bg-[#081152] rounded-xl p-2 pb-4 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                initial="hidden"
                animate={controls}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 60,
                    scale: 0.85,
                    rotate: -8,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    transition: {
                      duration: 0.7,
                      delay: 0.18 * idx,
                      type: "spring",
                      stiffness: 120,
                    },
                  },
                }}
              >
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt="Blog Thumbnail"
                    width={400}
                    height={176}
                    className="w-full h-44 object-cover rounded-lg"
                    style={{
                      borderRadius: 8,
                      border: "4px solid #2D69D1",
                    }}
                  />
                </div>
                <div className="mt-4 px-2">
                  <p className="text-[#7B91B0] text-[19px] mb-1">
                    <span className="text-[#2D69D1]">Category</span> • 8 Min
                    Read
                  </p>
                  <h3 className="text-white text-[23px] font-bold leading-snug">
                    {blog.title}
                  </h3>
                  <div className="flex items-center mt-3 space-x-2">
                    <Image
                      src={blog.dp}
                      alt="Author"
                      width={33}
                      height={33}
                      className="w-8 h-8 rounded-full border border-white"
                    />
                    <div className="text-white text-sm leading-tight">
                      <p className="text-[#BEBEBE] text-sm font-semibold">
                        {blog.author}
                      </p>
                      <p className="text-[#747474] text-xs">{blog.date}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
