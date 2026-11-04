export default function GrowthPage() {
  return (
    <div>
      <section className="bg-gradient-to-r from-[#111111] to-[#2a2a2a] text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Growth & Future Projects
          </h1>
          <div className="w-20 h-1 bg-[#F58220] mx-auto"></div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { title: "Ideation", desc: "Brainstorming ideas to incorporate into our strategies." },
              { title: "Implementation", desc: "Executing ideas is key in initiating growth." },
              { title: "Monitoring", desc: "Tracking implemented ideas to stay competitive." },
            ].map((step) => (
              <div key={step.title} className="border border-gray-200 rounded-lg p-6">
                <div className="w-12 h-1 bg-[#F58220] mb-4"></div>
                <h3 className="text-xl font-bold text-[#111111] mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#111111] to-[#2a2a2a] text-white rounded-lg p-10 text-center">
            <p className="text-[#F58220] font-semibold tracking-widest mb-3">
              FUTURE PROJECT
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Moxy Hotels by Marriott
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Coming soon to Pokhara, Nepal — bringing world-class hospitality
              with views of the majestic mountains.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}