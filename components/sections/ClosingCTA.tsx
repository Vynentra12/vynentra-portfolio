export function ClosingCTA() {
  return (
    <section id="contact" className="py-16 md:py-20 px-6 bg-brand-midnight border-t border-brand-softwhite/10 flex justify-center items-center">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
        {/* Heading Area */}
        <h2 className="text-2xl md:text-[28px] font-light tracking-tight text-brand-softwhite mb-4">
          Ready to power your future?
        </h2>
        
        {/* Supporting Text Area */}
        <p className="text-[17px] text-brand-titanium mb-10 max-w-2xl leading-relaxed">
          Get in touch with our team to discuss your renewable energy requirements and explore how Vynentra can help.
        </p>
        
        {/* CTA */}
        <button className="px-6 h-11 inline-flex items-center justify-center bg-brand-energyblue border border-transparent text-brand-midnight font-semibold text-[15px] rounded-full hover:bg-brand-softwhite transition-all duration-300 shadow-sm">
          Get in touch
        </button>
      </div>
    </section>
  );
}
