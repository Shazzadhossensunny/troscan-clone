"use client";

import Image from "next/image";
import { useRef } from "react";

const News = () => {
  const ref = useRef(null);

  const newsItems = [
    {
      id: 1,
      image: "/images/blog1.jpeg",
      date: "February 5, 2022",
      title: "The Art of Minimalist Interiors",
      subtitle: "Less is More: Designing Spaces That Speak Simplicity",
    },
    {
      id: 2,
      image: "/images/blog2.jpeg",
      date: "February 22, 2022",
      title: "Timeless Furniture Pieces Every Home Needs",
      subtitle: "Building a Home That Never Goes Out of Style",
    },
    {
      id: 3,
      image: "/images/blog3.jpeg",
      date: "January 21, 2023",
      title: "Psychology in Interior Design",
      subtitle: "Shaping Emotions Through Thoughtful Color Choices",
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-12 xl:px-16 bg-[#f5f0eb]"
      style={{ maxWidth: "1920px", margin: "0 auto" }}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6 md:gap-0">
        <div>
          <p className="text-[#8b5a3c] text-sm sm:text-base font-medium mb-2">
            • News
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#8b5a3c] leading-tight">
            Stay Inspired with
            <br />
            Interior Trends
          </h2>
        </div>
        <button className="bg-[#8d493a] hover:bg-[#a0664a] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-[5px] font-medium transition-colors duration-300">
          View All News
        </button>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl mb-6 h-96 sm:h-[26rem] md:h-[28rem] lg:h-[30rem]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1024px) 50vw,
                       33vw"
              />
            </div>

            {/* Content */}
            <div className="space-y-3">
              <p className="text-[#8b5a3c] text-sm sm:text-base font-medium">
                • {item.date}
              </p>

              <h3 className="text-xl sm:text-2xl lg:text-2xl font-light text-[#8b5a3c] leading-tight group-hover:text-[#a0664a] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-[#8b5a3c] text-sm sm:text-base leading-relaxed">
                {item.subtitle}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default News;
