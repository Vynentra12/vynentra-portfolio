export function ProcessSection() {
  const steps = [
    { num: "01", title: "Site Assessment" },
    { num: "02", title: "System Design" },
    { num: "03", title: "Installation & Execution" },
    { num: "04", title: "Operations & Maintenance" },
  ];

  return (
    <section className="py-24 md:py-32 px-6 bg-gradient-to-r from-[#DBEDF7] to-[#BFDBE8]">
      <div className="max-w-[1400px] mx-auto">
        <h2 className="text-2xl md:text-[28px] font-light text-[#071426] tracking-tight mb-16 text-center">
          Our Process
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.num}
              className="bg-[#F3F6F8] border border-[#071426]/5 p-8 rounded-[2rem] flex flex-col items-start min-h-[300px]"
            >
              <span className="text-[#4DA3FF] text-xl font-bold mb-8">{step.num}</span>
              <h3 className="text-2xl font-bold text-[#071426] mb-4">{step.title}</h3>
              <p className="text-[#20252B] text-sm mt-auto">
                [Placeholder content for process step details.]
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
