import React, { useState } from 'react'

const COURSE_DATA = [
  {
    id: 1,
    title: "Class 10 Board Accelerator",
    category: "High School",
    duration: "Full Year Batch",
    description: "Intense, result-driven prep designed specifically for cracking board exam patterns with absolute confidence.",
    subjects: ["Mathematics", "Science", "Social Science", "English"],
    features: ["Weekly Mock Test Series", "Previous 10-Year Paper Auditing", "Personalized Mistake Track-Log"]
  },
  {
    id: 2,
    title: "Class 12 Science Masterclass",
    category: "High School",
    duration: "Full Year Batch",
    description: "Deep dive into core conceptual mechanics for higher secondary exams and foundational entrance competitive tracking.",
    subjects: ["Physics", "Chemistry", "Mathematics", "Biology"],
    features: ["Concept-First Laboratory Lectures", "Live Numerical Problem Workshops", "Daily Practice Sheets (DPPs)"]
  },
  {
    id: 3,
    title: "Class 9 Conceptual Foundations",
    category: "Middle School",
    duration: "9 Months Track",
    description: "Bridging structural gaps in advanced logic to prepare students ahead of time for heavy high school curriculums.",
    subjects: ["Mathematics", "Science", "English"],
    features: ["Mental Aptitude Training", "Interactive Animated Visual Modules", "Bi-Weekly Progress Reports"]
  },
  {
    id: 4,
    title: "Class 8 Foundation & Olympiad",
    category: "Middle School",
    duration: "9 Months Track",
    description: "Fostering early critical analytical thinking, mathematical problem agility, and comprehensive talent exam targeting.",
    subjects: ["Mathematics", "Basic Sciences", "Logical Reasoning"],
    features: ["Olympiad Sample Paper Drilling", "Brain Teaser Workshops", "1-on-1 Concept Clearance Support"]
  },
  {
    id: 5,
    title: "Class 11 Core Transition Track",
    category: "High School",
    duration: "Full Year Batch",
    description: "Managing the steep step-up jump between secondary and higher secondary concepts with specialized mental maps.",
    subjects: ["Physics", "Chemistry", "Maths / Biology"],
    features: ["Formula Derivation Breakdowns", "Derivation Guide Booklets", "Regular Assessment Audits"]
  }
]

const Courses = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  // Filter and search computation engine
  const filteredCourses = COURSE_DATA.filter(course => {
    const matchesCategory = activeFilter === 'All' || course.category === activeFilter
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          course.subjects.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-blue-50/30 to-white text-slate-800 py-16 px-4 sm:px-6 lg:px-8 antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest bg-blue-600/10 text-blue-700 px-3 py-1 rounded-md">
            Our Curriculum Engine
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mt-3 mb-4">
            Programs Structured for Peak Achievement
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Select your academic roadmap. Every stream features small batch constraints, expert faculty mentorship channels, and exhaustive testing architectures.
          </p>
        </div>

        {/* Filters and Utilities Control Strip */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-8 mb-12">
          
          {/* Segmented Control Filter Chips */}
          <div className="flex gap-2 bg-slate-100 p-1.5 rounded-xl self-start">
            {['All', 'High School', 'Middle School'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === tab
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Quick Search Input */}
          <div className="relative w-full md:max-w-xs">
            <input
              type="text"
              placeholder="Search subjects or classes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 px-4 py-2.5 pl-10 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-slate-900 shadow-xs"
            />
            <span className="absolute left-3.5 top-3 text-slate-400 text-sm">🔍</span>
          </div>
        </div>

        {/* Dynamic Courses Display Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <div 
                key={course.id} 
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-xl shadow-slate-900/5 hover:-translate-y-1 hover:shadow-blue-900/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Meta Label Header info */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                      {course.category}
                    </span>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      ⏳ {course.duration}
                    </span>
                  </div>

                  {/* Course Title and Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-sm text-slate-600 line-clamp-3 mb-6 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Core Subjects Tag Loop */}
                  <div className="mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">Covered Modules:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.subjects.map((sub, idx) => (
                        <span key={idx} className="bg-slate-50 border border-slate-200 text-slate-700 text-xs px-2.5 py-1 rounded-lg font-medium">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Checkmark Feature Points List */}
                  <div className="border-t border-slate-100 pt-5 mb-6">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">What's Included:</div>
                    <ul className="space-y-2">
                      {course.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs font-medium text-slate-700 leading-tight">
                          <span className="text-emerald-500 shrink-0 mt-0.5">✓</span>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Interactive Action Button Footer */}
                <button className="w-full mt-2 bg-slate-900 hover:bg-blue-600 text-white font-bold text-xs py-3 rounded-xl transition-all tracking-wide cursor-pointer uppercase shadow-xs">
                  Request Batch Schedule
                </button>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search Fallback Template State */
          <div className="text-center py-20 bg-slate-50 border border-dashed border-slate-200 rounded-2xl max-w-md mx-auto">
            <span className="text-4xl block mb-3">📁</span>
            <h3 className="text-lg font-bold text-slate-900">No matching programs found</h3>
            <p className="text-sm text-slate-500 mt-1 px-6">
              Try modifying your text search parameters or altering the high school / middle school category chips.
            </p>
          </div>
        )}

      </div>
    </div>
  )
}

export default Courses