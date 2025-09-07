"use client";
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
      className="py-20 relative min-h-screen"
      style={{
        maxWidth: "1920px",
        margin: "0 auto",
        width: "100%",
        padding: "80px 50px",
        backgroundColor: "#f5f0eb",
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-16">
        <div>
          <p className="text-[#8b5a3c] text-sm font-medium mb-2">• News</p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-light text-[#8b5a3c] leading-tight">
            Stay Inspired with
            <br />
            Interior Trends
          </h2>
        </div>
        <button className="bg-[#8b5a3c] hover:bg-[#a0664a] text-white px-8 py-4 rounded-full font-medium transition-colors duration-300">
          View All News
        </button>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <article key={item.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative overflow-hidden rounded-2xl mb-6 h-80">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="space-y-4">
              <p className="text-[#8b5a3c] text-sm font-medium">
                • {item.date}
              </p>

              <h3 className="text-xl lg:text-2xl font-light text-[#8b5a3c] leading-tight group-hover:text-[#a0664a] transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
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
