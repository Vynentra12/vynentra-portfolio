export function MissionSection() {
  return (
    <section id="about" className="py-16 md:py-20 px-6 bg-gradient-to-r from-[#DBEDF7] to-[#BFDBE8]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Top White Divider Line & Header Row */}
        <div className="border-t border-white/60 pt-6 mb-12 flex flex-col md:flex-row justify-between items-start gap-6">
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-2.5 h-2.5 rounded-[2px] bg-[#053A64]"></div>
            <span className="text-xs font-normal text-[#053A64] uppercase tracking-wider">MISSION</span>
          </div>
          <h2 className="text-2xl md:text-[28px] lg:text-[32px] font-light text-[#053A64] text-left max-w-md leading-[1.25] tracking-tight">
            Building A Sustainable Energy Future Technology.
          </h2>
        </div>

        {/* Side-by-Side Cards */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-stretch">
          
          {/* Left Side: Image Card */}
          <div className="w-full lg:w-1/2 relative rounded-[7px] border-[0.9px] border-white overflow-hidden min-h-[480px] lg:min-h-[540px] shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop" 
              alt="Wind turbines at sea"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Performance Card */}
            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-[#ECF7FF]/95 backdrop-blur-md rounded-[7px] border border-white p-4 px-5 shadow-sm min-w-[160px] md:min-w-[190px] flex flex-col justify-between">
              <div className="text-3xl md:text-[34px] font-light bg-gradient-to-b from-[#004581] to-[#4CA7F6] bg-clip-text text-transparent text-left mb-2">
                92%
              </div>
              <div className="text-[12px] md:text-[13px] font-normal text-[#053A64] text-right mt-auto">
                Performance Uplift
              </div>
            </div>
          </div>

          {/* Right Side: Content Card */}
          <div className="w-full lg:w-1/2 bg-[#ECF7FF] rounded-[7px] border-[0.9px] border-white p-6 md:p-10 lg:p-12 flex flex-col justify-between min-h-[480px] lg:min-h-[540px] shadow-sm">
            
            <div className="flex-grow flex flex-col justify-start">
              <h3 className="text-xl md:text-2xl lg:text-[26px] font-light text-[#071426] mb-6 tracking-tight">
                Unlocking India’s wind potential
              </h3>
              
              <div className="space-y-4 text-[15px] md:text-[16px] text-[#071426]/85 leading-relaxed font-light">
                <p>
                  India holds more than 695 GW of estimated onshore wind potential yet only a fraction has been developed.
                </p>
                <p>
                  By bringing wind to rooftops, institutions, businesses and captive power projects, Vynentra is expanding where wind can work and what it can power.
                </p>
                <p className="text-[#071426] font-normal pt-1">
                  The technology exists. The wind is everywhere. Our job is to put it to work the best.
                </p>
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="mt-8 pt-4">
              <p className="text-xs md:text-[14px] text-[#053A64]/80 font-light leading-relaxed mb-6 max-w-md">
                By simplifying workflows and decision-making, we help teams focus on what matters most delivering outcomes instead of managing overhead.
              </p>
              
              <button className="group inline-flex items-center justify-center gap-2.5 px-6 h-11 bg-black text-white font-medium text-[14px] rounded-full transition-all duration-300 hover:scale-105 hover:bg-white hover:text-black border border-white hover:border-black shadow-md">
                <div className="grid grid-cols-2 gap-[2px] w-3 h-3 group-hover:rotate-45 transition-transform duration-300">
                  <span className="w-full h-full rounded-[1px] bg-current" />
                  <span className="w-full h-full rounded-[1px] bg-sky-400" />
                  <span className="w-full h-full rounded-[1px] bg-current" />
                  <span className="w-full h-full rounded-[1px] bg-current" />
                </div>
                More About Us
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
