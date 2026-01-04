
import React, { useState } from 'react';
// Fix: Import BatchType from types
import { Course, CourseType, BatchType } from '../types';
import CourseCard from '../components/Home/CourseCard';

const ENROLLED_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Calculus for IIT-JEE',
    subject: 'Mathematics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.OFFER,
    // Fix: Add missing batchType property
    batchType: BatchType.ONLINE,
    price: 49,
    image: 'https://picsum.photos/seed/math1/600/400',
    progress: 45,
    description: 'Master derivatives, integrals, and differential equations with shortcut techniques.'
  },
  {
    id: '4',
    title: 'Electromagnetism 101',
    subject: 'Physics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.PAID,
    // Fix: Add missing batchType property
    batchType: BatchType.ONLINE,
    price: 99,
    image: 'https://picsum.photos/seed/phys2/600/400',
    progress: 12,
    description: 'Understanding Maxwell equations, magnetic fields, and circuits.'
  }
];

const SidebarItem: React.FC<{ label: string; active?: boolean; icon: React.ReactNode }> = ({ label, active, icon }) => (
  <button className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all ${
    active ? 'bg-[#013C7F] text-white shadow-lg shadow-[#013C7F]/20' : 'text-slate-500 hover:bg-slate-50'
  }`}>
    {icon}
    <span>{label}</span>
  </button>
);

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-80 bg-white border-r border-slate-200 p-8 hidden lg:flex flex-col gap-10">
        <div className="flex items-center gap-2 px-2">
          <div className="w-10 h-10 bg-[#013C7F] rounded-xl flex items-center justify-center text-white font-black text-xl italic">Σ</div>
          <span className="text-2xl font-black text-[#013C7F] tracking-tight">SIGMA</span>
        </div>

        <div className="space-y-2">
          <SidebarItem 
            label="Dashboard" 
            active={activeTab === 'Dashboard'} 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>}
          />
          <SidebarItem 
            label="My Courses" 
            active={activeTab === 'My Courses'} 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>}
          />
          <SidebarItem 
            label="Free Resources" 
            active={activeTab === 'Free Resources'} 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>}
          />
          <SidebarItem 
            label="Profile" 
            active={activeTab === 'Profile'} 
            icon={<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>}
          />
        </div>

        <div className="mt-auto">
          <button className="w-full flex items-center gap-4 px-6 py-4 rounded-xl font-bold text-[#E91040] hover:bg-red-50 transition-all">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-24 bg-white border-b border-slate-200 px-10 flex items-center justify-between sticky top-0 z-10 glass-effect">
          <div className="flex items-center gap-4">
            <button className="lg:hidden p-2 text-slate-500">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <h1 className="text-2xl font-black text-[#013C7F]">Dashboard</h1>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-slate-400 hover:text-[#013C7F]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#E91040] rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-black text-[#013C7F]">Aman Sharma</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Class 12 - PCM</div>
              </div>
              <img src="https://picsum.photos/seed/user1/100/100" className="w-12 h-12 rounded-xl border-2 border-[#013C7F]/10" alt="Profile" />
            </div>
          </div>
        </header>

        <div className="p-10 max-w-7xl mx-auto space-y-10">
          {/* Welcome Section */}
          <div className="bg-gradient-to-r from-[#013C7F] to-[#0052a3] rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-[#013C7F]/20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="relative z-10 space-y-4 max-w-xl">
              <h2 className="text-4xl font-black">Welcome back, Aman! 👋</h2>
              <p className="text-white/80 font-medium text-lg leading-relaxed">
                You're making great progress! You completed <span className="text-white font-bold underline">Calculus Section 4</span> yesterday. Ready to dive back in?
              </p>
              <button className="bg-white text-[#013C7F] px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Resume Last Lesson
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content: Courses */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-[#013C7F]">My Enrolled Courses</h3>
                <button className="text-sm font-bold text-slate-500 hover:text-[#013C7F]">View All</button>
              </div>
              <div className="grid sm:grid-cols-2 gap-8">
                {ENROLLED_COURSES.map(course => (
                  <CourseCard key={course.id} course={course} isEnrolled />
                ))}
              </div>

              <div className="space-y-6 pt-10">
                <h3 className="text-2xl font-black text-[#013C7F]">Free Resources for You</h3>
                <div className="grid gap-4">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-[#013C7F]/20 transition-all cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-500">
                          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                          <h4 className="font-bold text-[#013C7F]">Previous Year Question Papers - 2023</h4>
                          <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-0.5">PDF • 4.2 MB</p>
                        </div>
                      </div>
                      <button className="p-2 bg-slate-50 rounded-lg text-slate-400 group-hover:bg-[#013C7F] group-hover:text-white transition-all">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Content: Offers & Announcements */}
            <div className="space-y-10">
              <div className="bg-[#E91040] rounded-3xl p-8 text-white space-y-6 shadow-xl shadow-[#E91040]/20 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM9 5h6v2H9V5zm11 15H4V9h16v11z"/></svg>
                </div>
                <div className="bg-white/20 inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">Limited Time</div>
                <h4 className="text-2xl font-black">70% OFF on Live Revision Series</h4>
                <p className="text-white/80 text-sm font-medium">Valid for the next 4 hours only for existing students.</p>
                <button className="w-full bg-white text-[#E91040] py-4 rounded-2xl font-black hover:bg-slate-100 transition-all">
                  Claim Offer
                </button>
              </div>

              <div className="bg-white rounded-3xl p-8 border border-slate-200 space-y-6">
                <h4 className="text-lg font-black text-[#013C7F]">Announcements</h4>
                <div className="space-y-6">
                  {[
                    { date: 'Oct 15', text: 'Live Doubt Clearing Session at 6:00 PM today.' },
                    { date: 'Oct 12', text: 'Mock Test-4 Results are out. Check your inbox.' },
                    { date: 'Oct 10', text: 'New Geometry Module added to Math Advance Course.' }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-[#013C7F] text-xs font-black text-center leading-tight">
                        {item.date.split(' ')[0]}<br/>{item.date.split(' ')[1]}
                      </div>
                      <p className="text-sm font-medium text-slate-600 pt-1">{item.text}</p>
                    </div>
                  ))}
                </div>
                <button className="w-full py-4 rounded-2xl font-black text-slate-400 hover:bg-slate-50 transition-all border border-slate-100">
                  View Notice Board
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
