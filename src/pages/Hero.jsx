import React, { useState } from 'react'
import Navbar from '../component/Navbar'

function Hero() {
  const [selectedClass, setSelectedClass] = useState('Class 10')
  const [emailInput, setEmailInput] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleCallbackSubmit = (e) => {
    e.preventDefault()
    if (emailInput.trim()) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 4000)
      setEmailInput('')
    }
  }

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-blue-50 via-blue-100 to-slate-50 flex flex-col p-4 md:p-6 text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      {/* Structural Navbar Container */}
      

      {/* Main Hero Content Area */}
      <main className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center pt-8 pb-16 md:pt-16 md:pb-24 px-2 sm:px-4">
        
        {/* Left Column: Core Value Proposition */}
        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
          
          {/* Animated Batch Open Tag */}
          <div className="inline-flex max-w-fit items-center gap-2 bg-blue-600/10 text-blue-700 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
            New Academic Session 2026 Batch Starting
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-sans tracking-tight leading-[1.15] text-slate-900">
            Score High with <span className="bg-linear-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">Apex Coaching</span>: Your Path to Academic Excellence!
          </h1>

          {/* Subtitle / Focus Areas */}
          <p className="text-lg sm:text-xl font-normal font-sans text-slate-600 leading-relaxed max-w-2xl">
            Exam-focused comprehensive coaching for <strong className="text-slate-900 font-semibold">Classes 8 to 12</strong>. We bridge structural gap mechanics through radical concept clarity, regular scheduled mock tests, and intense targeted board exam practice.
          </p>

          {/* Feature highlights grid layout */}
          <div className="grid sm:grid-cols-3 gap-4 border-t border-b border-slate-200/80 py-6 my-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">✓</div>
              <span className="text-sm font-semibold text-slate-700">Crystal Concept Clarity</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">✓</div>
              <span className="text-sm font-semibold text-slate-700">Weekly Mock Papers</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">✓</div>
              <span className="text-sm font-semibold text-slate-700">95%+ Board Success Rate</span>
            </div>
          </div>

          {/* Interactive Fast Class Selector & Call-To-Action Form */}
          <div className="bg-white p-4 rounded-2xl shadow-xl shadow-blue-900/5 border border-slate-200 max-w-xl">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wide mb-3">Select Your Class to Start Setup:</div>
            
            {/* Quick Chips Selection */}
            <div className="flex flex-wrap gap-2 mb-4">
              {['Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'].map((cls) => (
                <button
                  key={cls}
                  onClick={() => setSelectedClass(cls)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    selectedClass === cls
                      ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-200'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cls}
                </button>
              ))}
            </div>

            {/* Email Submit Action Line */}
            <form onSubmit={handleCallbackSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter parent or student email..."
                className="flex-1 bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-200 text-sm whitespace-nowrap cursor-pointer"
              >
                Book Free Trial for {selectedClass} →
              </button>
            </form>

            {isSubmitted && (
              <p className="text-xs text-emerald-600 font-semibold mt-2.5 flex items-center gap-1.5 animate-fade-in">
                🎉 Success! Demo slot reserved. Check your email inbox shortly.
              </p>
            )}
          </div>
        </div>

        {/* Right Column: Visual Showcase Block */}
        <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-end">
          
          {/* Main Background Structural Badge Decoration */}
          <div className="absolute inset-0 bg-linear-to-tr from-blue-400 to-indigo-500 rounded-3xl opacity-10 blur-2xl transform rotate-3"></div>

          {/* Yellow Interactive Stats Banner */}
          <div className="relative w-full max-w-md bg-yellow-100 p-6 sm:p-8 rounded-3xl shadow-xl border border-yellow-200 text-gray-950 transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center font-black text-yellow-800 text-xl">
              ★
            </div>
            
            <div className="mb-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-amber-800 bg-amber-400/20 px-2.5 py-1 rounded-md">
                Result Driven Architecture
              </span>
              <h2 className="text-2xl font-black tracking-tight text-slate-900 mt-3">
                Why Apex Matters for Board Prep
              </h2>
            </div>

            {/* Micro Stats Counter Cards Grid */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-yellow-300/60 shadow-xs">
                <div className="text-2xl font-black text-blue-700">10,000+ Hours</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Of conceptual classroom learning delivered module-by-module.</div>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-yellow-300/60 shadow-xs">
                <div className="text-2xl font-black text-indigo-700">1-on-1 Analysis</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Individual mistake track-log mapping for every regular mock test.</div>
              </div>

              <div className="bg-white/80 backdrop-blur-xs p-4 rounded-xl border border-yellow-300/60 shadow-xs">
                <div className="text-2xl font-black text-amber-700">Batch Control</div>
                <div className="text-xs font-semibold text-slate-600 mt-0.5">Limited seats per batch to preserve hyper-focused interaction channels.</div>
              </div>
            </div>

            {/* Quick Contact Footer Badge */}
            <div className="mt-6 pt-4 border-t border-yellow-300/60 flex justify-between items-center text-xs font-bold text-amber-900">
              <span>📍 Locations: Nationwide Centers</span>
              <span className="underline cursor-pointer hover:text-amber-950">View center maps</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero