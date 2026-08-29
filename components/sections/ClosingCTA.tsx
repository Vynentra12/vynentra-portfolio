export function ClosingCTA() {
  return (
    <section id="contact" className="py-16 md:py-20 px-6 bg-brand-midnight border-t border-brand-softwhite/10 flex justify-center items-center">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
        {/* Unified Section Header Centered */}
        <div className="flex flex-col items-center gap-3 mb-10">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-[2px] bg-brand-energyblue"></div>
            <span className="text-[11px] md:text-xs font-medium text-brand-softwhite uppercase tracking-wider">
              CONTACT US
            </span>
          </div>
          <h2 className="text-[32px] md:text-[44px] lg:text-[48px] font-semibold text-brand-softwhite tracking-tight leading-[1.1]">
            Ready to power your future?
          </h2>
          <p className="text-[14px] md:text-[15px] text-brand-softwhite/70 max-w-2xl leading-relaxed mt-2">
            Get in touch with our team to discuss your renewable energy requirements and explore how Vynentra can help.
          </p>
        </div>
        
        {/* CTA */}
        <button className="px-6 h-11 inline-flex items-center justify-center bg-brand-energyblue border border-transparent text-brand-midnight font-semibold text-[15px] rounded-full hover:bg-brand-softwhite transition-all duration-300 shadow-sm">
          Get in touch
        </button>
      </div>
    </section>
  );
}
