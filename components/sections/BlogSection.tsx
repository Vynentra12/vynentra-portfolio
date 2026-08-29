'use client';
import Image from 'next/image';

export function BlogSection() {
  return (
    <section id="blog" className="py-24 md:py-32 px-6 bg-brand-midnight">
      <div className="max-w-[1400px] mx-auto">

        {/* Top White Divider Line & Header Row */}
        <div className="border-t border-brand-softwhite/10 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-xs font-normal text-brand-energyblue uppercase tracking-wider">
              BLOG & INSIGHTS
            </span>
          </div>
          <h2 className="text-2xl md:text-[28px] font-light text-brand-softwhite text-left max-w-md leading-[1.25] tracking-tight">
            Exploring Innovations, Strategies, And The Future.
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10 items-stretch">

          {/* Card 1 (Wider Left Card: 8 cols) */}
          <div className="lg:col-span-8 bg-brand-graphite rounded-[7px] p-5 md:p-6 border-[0.9px] border-brand-softwhite/10 flex flex-col md:flex-row gap-6 md:gap-8 items-stretch group cursor-pointer transition-all duration-300 hover:shadow-sm">
            {/* Image Container */}
            <div className="w-full md:w-[45%] aspect-[4/3] relative rounded-md overflow-hidden bg-brand-midnight shrink-0">
              <img
                src="https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=800&auto=format&fit=crop"
                alt="Wind Energy Turbine Innovation"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content Details */}
            <div className="w-full md:w-[55%] flex flex-col justify-between h-full py-1">
              <div className="flex justify-between items-center text-xs md:text-[13px] font-light text-brand-titanium pb-2.5 border-b border-brand-softwhite/10 mb-4">
                <span>Wind Energy</span>
                <span>Mar 17, 2026</span>
              </div>
              <div className="mt-auto">
                <h3 className="text-lg md:text-[20px] font-normal text-brand-softwhite leading-snug mb-2 group-hover:text-brand-energyblue transition-colors">
                  Harnessing the Invisible Force That Powers the Future
                </h3>
                <p className="text-xs md:text-[13px] text-brand-titanium leading-relaxed font-light">
                  Exploring how wind energy is transforming natural forces into scalable and intelligent power systems.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 (Right Card: 4 cols) */}
          <div className="lg:col-span-4 bg-brand-graphite rounded-[7px] p-5 md:p-6 border-[0.9px] border-brand-softwhite/10 flex flex-col justify-between group cursor-pointer transition-all duration-300 hover:shadow-sm">
            <div className="flex justify-between items-center text-xs md:text-[13px] font-light text-brand-titanium pb-2.5 border-b border-brand-softwhite/10 mb-4">
              <span>Infrastructure</span>
              <span>Jun 18, 2025</span>
            </div>
            <div className="mt-auto">
              <h3 className="text-lg md:text-[20px] font-normal text-brand-softwhite leading-snug mb-2 group-hover:text-brand-energyblue transition-colors">
                Designing Wind Infrastructure For Building Future Growth
              </h3>
              <p className="text-xs md:text-[13px] text-brand-titanium leading-relaxed font-light">
                Understanding how modern wind infrastructure is built to support growing global energy demands.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Footer Row with Divider Line & CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
          <span className="text-xs md:text-sm text-brand-titanium font-normal">
            Explore more renewable insights.
          </span>
          <div className="hidden sm:block flex-1 h-[1px] bg-brand-softwhite/10 mx-8"></div>
          <button className="px-6 h-11 inline-flex items-center justify-center bg-brand-energyblue text-brand-midnight font-medium text-xs md:text-sm rounded-full shadow-sm hover:shadow-md hover:bg-brand-softwhite transition-all duration-300">
            Explore All Insights
          </button>
        </div>

      </div>
    </section>
  );
}
