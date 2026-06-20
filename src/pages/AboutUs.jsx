import React from 'react'

const PILLARS = [
  {
    icon: "🎯",
    title: "Concept-First Architecture",
    description: "We completely reject rote memorization. Our teachers focus heavily on first-principles thinking so that students can easily decode unfamiliar problem structures during major board and final exams."
  },
  {
    icon: "📊",
    title: "Granular Analytics Tracking",
    description: "Every single mock examination score is fed into an individual performance track-log. This allows us to map precise logical errors and conceptual weak spots down to sub-chapters."
  },
  {
    icon: "🤝",
    title: "Empathetic Mentorship",
    description: "Academic pressure across classes 8 to 12 can be highly stressful. Our coaches don't just lecture; they work closely with students to build confidence, manage time constraints, and eliminate test anxiety."
  }
]

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-blue-50/20 text-slate-800 py-16 px-4 sm:px-6 lg:px-8 antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Section 1: Hero Identity Block */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24 pt-4">
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="text-xs font-bold uppercase tracking-widest bg-blue-600/10 text-blue-700 px-3 py-1 rounded-md">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Democratizing Elite Academic Coaching for Tomorrow’s Leaders.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Founded with a clear, singular vision, Apex Coaching bridges structural learning gaps for students across Classes 8 to 12. We don't believe in crowded classrooms or mass-produced lecture formulas. Instead, we engineer hyper-focused micro-batches designed to unlock a student's full conceptual capability.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Whether a student is building middle-school foundations for science or stepping into the intense pressure of Class 10 and 12 Board Exams, our ecosystem provides the direct tools, elite faculties, and testing models required to secure top-tier marks.
            </p>
          </div>

          {/* Graphical Callout Accent Container */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="absolute inset-0 bg-blue-500 rounded-3xl opacity-5 blur-xl transform -rotate-2"></div>
            <div className="relative bg-slate-900 text-white p-8 rounded-3xl shadow-xl shadow-slate-900/10 flex flex-col justify-between max-w-md aspect-square">
              <div>
                <span className="text-4xl block mb-4">📢</span>
                <h3 className="text-xl font-bold tracking-tight mb-2">Our Core Promise</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  "To turn academic confusion into absolute execution. Every student who enters our batch receives equal analytical attention, regardless of their starting diagnostic test scores."
                </p>
              </div>
              <div className="border-t border-slate-800 pt-4 mt-6">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400">Apex Institutional Motto</div>
                <div className="text-sm font-semibold text-slate-200 mt-0.5">Clarity. Consistency. Conquest.</div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Core Values / Performance Pillars */}
        <div className="border-t border-slate-200/80 pt-20 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-4">
              The Three Pillars of the Apex Method
            </h2>
            <p className="text-slate-600">
              Standard commercial tuition centers focus strictly on finishing syllabus pages. At Apex, we measure our success by the level of conceptual independence our students achieve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((pillar, index) => (
              <div 
                key={index}
                className="bg-white border border-slate-200/60 p-8 rounded-2xl shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-6">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2.5 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Simple Statistical Track-Record */}
        <div className="bg-blue-600 rounded-3xl p-8 sm:p-12 text-white shadow-xl text-center">
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2">
            Proven Systems, Exponential Results.
          </h3>
          <p className="text-blue-100 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
            Our pedagogical approach consistently helps our students rank among the highest percentiles in regional and national boards year over year.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black">94.8%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Average Board Score</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black">15:1</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Student-Teacher Ratio</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black">400+</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Full Mock Exams Run</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black">100%</div>
              <div className="text-xs font-bold uppercase tracking-wider text-blue-200">Dedicated Concept Focus</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutUs