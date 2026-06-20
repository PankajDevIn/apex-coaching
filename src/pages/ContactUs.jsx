import React, { useState } from 'react'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    targetClass: 'Class 10',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Process form logic here (e.g., Supabase, Firebase, or an API endpoint)
    setIsSubmitted(true)
    setFormData({ name: '', phone: '', email: '', targetClass: 'Class 10', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 via-blue-50/20 to-white text-slate-800 py-16 px-4 sm:px-6 lg:px-8 antialiased">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest bg-blue-600/10 text-blue-700 px-3 py-1 rounded-md">
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-slate-900 mt-3 mb-4">
            Begin Your Journey to the Top
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Have questions about upcoming batches, fee structures, or scheduling a diagnostic test? Drop us a line and our admissions desk will call you back.
          </p>
        </div>

        {/* Main Two-Column Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Office Contact Details */}
          <div className="lg:col-span-5 space-y-8 text-left lg:sticky lg:top-24">
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight mb-2">
                Apex Learning Headquarters
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Parents and students are always welcome to visit our central campus for an in-person academic consultation.
              </p>
            </div>

            {/* Quick Informational Links */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200/60 rounded-xl shadow-xs">
                <span className="text-xl p-2 bg-blue-50 rounded-lg shrink-0">📍</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Main Campus Address</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    102-105, Apex Academic Tower, Sector 4, Main Commercial Belt, Mumbai, MH – 400001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200/60 rounded-xl shadow-xs">
                <span className="text-xl p-2 bg-blue-50 rounded-lg shrink-0">📞</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Admissions Helpline</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    +91 98765 43210 / +91 98765 43211
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200/60 rounded-xl shadow-xs">
                <span className="text-xl p-2 bg-blue-50 rounded-lg shrink-0">✉️</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Electronic Mail support</h4>
                  <p className="text-xs text-slate-600 mt-0.5 font-medium">
                    admissions@apexcoaching.edu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white border border-slate-200/60 rounded-xl shadow-xs">
                <span className="text-xl p-2 bg-blue-50 rounded-lg shrink-0">⏰</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Operating Consultation Hours</h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Monday to Saturday: 09:00 AM – 08:00 PM <br />
                    Sunday: 10:00 AM – 02:00 PM (Prior Appointment Only)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Intake Lead Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 border border-slate-200/80 rounded-3xl shadow-xl shadow-slate-900/5">
            <div className="mb-8 text-left">
              <h3 className="text-xl font-black text-slate-900 tracking-tight">Request a Callback / Free Trial</h3>
              <p className="text-xs text-slate-500 mt-1">Fill out the variables below and our counselors will organize your diagnostics slot.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center animate-fade-in">
                <span className="text-4xl block mb-3">✅</span>
                <h4 className="text-xl font-bold text-emerald-900">Form Received Successfully!</h4>
                <p className="text-sm text-emerald-700 mt-1.5 leading-relaxed">
                  Thank you for connecting with Apex. An academic representative will contact you on the provided number within the next 12 working hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                
                {/* Full Name Input Field */}
                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1.5">Student / Parent Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g., Ramesh Kumar"
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 shadow-inner"
                  />
                </div>

                {/* Grid row for Contact Links (Phone + Email) */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1.5">Mobile Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="98765XXXXX"
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 shadow-inner"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1.5">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 shadow-inner"
                    />
                  </div>
                </div>

                {/* Target Batch Selection Field */}
                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1.5">Target Class Stream</label>
                  <select
                    name="targetClass"
                    value={formData.targetClass}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 transition-all text-slate-800 shadow-inner"
                  >
                    <option value="Class 8">Class 8 Foundations Track</option>
                    <option value="Class 9">Class 9 Integrated Mastery</option>
                    <option value="Class 10">Class 10 Board Accelerator</option>
                    <option value="Class 11">Class 11 Transition Batch</option>
                    <option value="Class 12">Class 12 Core Science/Boards</option>
                  </select>
                </div>

                {/* Message Custom Field */}
                <div>
                  <label className="block text-xs uppercase font-extrabold tracking-wider text-slate-400 mb-1.5">Specific Academic Concerns (Optional)</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about specific subjects causing difficulty, target scores, or routine limitations..."
                    className="w-full bg-slate-50 border border-slate-200 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 shadow-inner resize-none"
                  ></textarea>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm py-4 rounded-xl shadow-lg shadow-blue-100 transition-all duration-200 uppercase tracking-wide cursor-pointer mt-2"
                >
                  Submit Registration Request →
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}

export default ContactUs