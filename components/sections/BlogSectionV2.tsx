'use client';
import { ArrowUpRight, Leaf } from 'lucide-react';

export function BlogSectionV2() {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
      category: "WIND ENERGY",
      date: "Mar 17, 2026",
      title: "Harnessing the Invisible Force That Powers the Future",
      excerpt: "Exploring how wind energy is transforming natural forces into scalable and intelligent power systems."
    },
    {
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
      category: "TECHNOLOGY",
      date: "Apr 08, 2026",
      title: "Smart Turbines, Smarter Tomorrow",
      excerpt: "How advanced technology and real-time data are redefining efficiency in wind energy."
    },
    {
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
      category: "SUSTAINABILITY",
      date: "May 22, 2026",
      title: "Building a Cleaner, Greener Tomorrow",
      excerpt: "Our commitment to sustainability through responsible energy production and a cleaner planet."
    }
  ];

  return (
    <section id="blog" className="w-full bg-[#F5F5F7] py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">

        {/* Header Row */}
        <div className="border-t border-[#1D1D1F]/10 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#1D1D1F]"></div>
            <span className="text-xs font-normal text-[#1D1D1F] uppercase tracking-wider">
              BLOG & INSIGHTS
            </span>
          </div>
          <h2 className="text-2xl md:text-[28px] font-light text-[#1D1D1F] text-left max-w-md leading-[1.25] tracking-tight">
            Exploring Innovations, Strategies, And The Future.
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {blogs.map((blog, idx) => (
            <div 
              key={idx} 
              className="bg-[#ffffff] rounded-[24px] p-5 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-[#1D1D1F]/5 flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]"
            >
              {/* Image */}
              <div className="w-full aspect-[1.6/1] overflow-hidden rounded-[16px] mb-6">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Meta */}
              <div className="flex justify-between items-center mb-4">
                <span className="px-3 py-1.5 bg-[#F5F5F7] rounded-full text-[9px] font-semibold tracking-wider text-[#1D1D1F] uppercase">
                  {blog.category}
                </span>
                <span className="text-[11px] font-medium text-[#1D1D1F]/60">
                  {blog.date}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-[19px] font-medium text-[#1D1D1F] leading-[1.3] mb-3 tracking-tight">
                {blog.title}
              </h3>
              <p className="text-[13px] text-[#1D1D1F]/60 leading-relaxed font-medium mb-8 flex-1">
                {blog.excerpt}
              </p>

              {/* Footer */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-[#F5F5F7] flex items-center justify-center text-[#1D1D1F] group-hover:bg-[#1D1D1F] group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight className="w-4 h-4" strokeWidth={2} />
                </div>
                <span className="text-[13px] font-semibold text-[#1D1D1F]">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border border-[#1D1D1F]/5 rounded-[24px] bg-[#ffffff] p-5 lg:p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-[0_4px_20px_rgb(0,0,0,0.03)]">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-[14px] bg-[#F5F5F7] flex items-center justify-center shrink-0">
              <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-[#1D1D1F]" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#1D1D1F] mb-1 tracking-tight">
                Insights today. Impact tomorrow.
              </h4>
              <p className="text-[13px] text-[#1D1D1F]/60 font-medium">
                Stay updated with the latest ideas, innovations, and<br className="hidden sm:block" /> industry perspectives shaping the future of wind energy.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-auto shrink-0">
            <button className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#1D1D1F] text-white px-6 h-[44px] rounded-[10px] font-medium text-[13px] hover:bg-[#1D1D1F]/90 transition-colors group">
              View All Articles 
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
