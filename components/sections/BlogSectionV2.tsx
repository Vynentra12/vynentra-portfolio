'use client';
import { ArrowLeft, ArrowRight, ArrowRight as ArrowRightSmall } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function BlogSectionV2() {
  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=800&auto=format&fit=crop",
      category: "Wind Energy",
      title: "Harnessing the Invisible Force That Powers the Future.",
    },
    {
      image: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop",
      category: "Technology",
      title: "Smart Turbines, Smarter Tomorrow for your energy needs.",
    },
    {
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop",
      category: "Sustainability",
      title: "Building a Cleaner, Greener Tomorrow: A Step by Step Guide.",
    },
    {
      image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=800&auto=format&fit=crop",
      category: "Innovation",
      title: "The Future of Offshore Wind Farms and Ocean Energy.",
    }
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dotCount, setDotCount] = useState(0);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      
      const maxScroll = scrollWidth - clientWidth;
      // 1px tolerance for rounding issues
      setCanScrollRight(Math.ceil(scrollLeft) < maxScroll - 1);

      const child = scrollContainerRef.current.children[0] as HTMLElement;
      if (child) {
        const itemWidth = child.offsetWidth + 24; // Card width + gap-6 (24px)
        
        if (maxScroll <= 0) {
          setDotCount(0);
          setActiveIndex(0);
        } else {
          // Calculate total required scroll steps
          const totalDots = Math.ceil(maxScroll / itemWidth) + 1;
          setDotCount(totalDots);
          
          // If we are scrolled all the way to the right
          if (Math.ceil(scrollLeft) >= maxScroll - 1) {
            setActiveIndex(totalDots - 1);
          } else {
            setActiveIndex(Math.round(scrollLeft / itemWidth));
          }
        }
      }
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      // Wait for layout calculation then check
      setTimeout(checkScroll, 100);
      
      window.addEventListener('resize', checkScroll);
      return () => {
        container.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[0] as HTMLElement;
      if (child) {
        const itemWidth = child.offsetWidth + 24; 
        container.scrollBy({ left: direction === 'left' ? -itemWidth : itemWidth, behavior: 'smooth' });
      }
    }
  };

  const scrollTo = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const child = container.children[0] as HTMLElement;
      if (child) {
        const itemWidth = child.offsetWidth + 24;
        container.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="blog" className="relative w-full bg-brand-midnight text-brand-softwhite py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12">

        {/* Unified Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-10 md:mb-14 border-t border-brand-softwhite/10 pt-6">
          <div className="flex flex-col gap-3 md:max-w-md">
            {/* Standardized Badge */}
            <div className="flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-[2px] bg-brand-energyblue"></div>
              <span className="text-[11px] md:text-xs font-medium text-brand-softwhite uppercase tracking-wider">
                BLOG & INSIGHTS
              </span>
            </div>
            {/* Standardized Title */}
            <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-brand-softwhite tracking-tight leading-[1.1]">
              Our Latest <br />
              Blogs
            </h2>
          </div>
          
          <div className="md:w-[35%] flex items-start md:items-end md:h-full pb-2">
            {/* Standardized Subtitle */}
            <p className="text-[14px] md:text-[15px] text-brand-softwhite/70 max-w-2xl leading-relaxed">
              Explore how our renewable energy solutions are transforming sites, improving energy performance, and creating long-term value for a sustainable future.
            </p>
          </div>
        </div>

        {/* Blog Cards Carousel */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 mb-12 pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {blogs.map((blog, idx) => (
            <div 
              key={idx} 
              className="w-[280px] md:w-[340px] lg:w-[380px] shrink-0 snap-start bg-brand-graphite rounded-[4px] p-2 flex flex-col group cursor-pointer border border-brand-softwhite/5 shadow-md hover:shadow-xl hover:border-brand-softwhite/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full aspect-[16/9] overflow-hidden bg-brand-midnight rounded-[2px]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="pt-4 px-3 pb-3 flex flex-col flex-1">
                <span className="text-brand-titanium text-[12px] font-medium mb-2.5">
                  {blog.category}
                </span>
                
                <h3 className="text-[17px] font-medium text-brand-softwhite leading-[1.4] mb-6 tracking-tight group-hover:text-brand-energyblue transition-colors">
                  {blog.title}
                </h3>
                
                {/* Action Link */}
                <div className="mt-auto flex items-center gap-2 text-[13px] font-medium text-brand-titanium group-hover:text-brand-energyblue transition-colors">
                  Read Blog <ArrowRightSmall className="w-4 h-4" strokeWidth={2} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Navigation (Line + Next/Prev Buttons) */}
        <div className="flex items-center justify-between gap-8 mt-4">
          {/* Horizontal Line */}
          <div className="flex-1 h-[1px] bg-brand-softwhite/10"></div>
          
          {/* Next/Prev Buttons */}
          <div className="flex items-center gap-4 shrink-0">
            <button 
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                canScrollLeft 
                  ? 'border-brand-softwhite/20 text-brand-softwhite hover:bg-brand-energyblue hover:border-brand-energyblue hover:text-brand-midnight cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.2)]' 
                  : 'border-brand-softwhite/10 text-brand-softwhite/10 cursor-not-allowed'
              }`}
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button 
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 flex items-center justify-center rounded-full border transition-all duration-300 ${
                canScrollRight 
                  ? 'border-brand-softwhite/20 text-brand-softwhite hover:bg-brand-energyblue hover:border-brand-energyblue hover:text-brand-midnight cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.2)]' 
                  : 'border-brand-softwhite/10 text-brand-softwhite/10 cursor-not-allowed'
              }`}
            >
              <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
