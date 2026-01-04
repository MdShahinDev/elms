
import React from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../components/Home/CourseCard';
// Fix: Import BatchType from types
import { Course, CourseType, BatchType } from '../types';

const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Advanced Calculus for IIT-JEE',
    subject: 'Mathematics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.OFFER,
    // Fix: Add missing batchType property
    batchType: BatchType.ONLINE,
    price: 49,
    originalPrice: 199,
    image: 'https://picsum.photos/seed/math1/600/400',
    offerExpiresAt: new Date(Date.now() + 86400000).toISOString(),
    description: 'Master derivatives, integrals, and differential equations with shortcut techniques.'
  },
  {
    id: '2',
    title: 'Quantum Mechanics Essentials',
    subject: 'Physics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.PAID,
    // Fix: Add missing batchType property
    batchType: BatchType.OFFLINE,
    price: 89,
    image: 'https://picsum.photos/seed/phys1/600/400',
    description: 'A deep dive into the world of atoms, particles, and wave-particle duality.'
  },
  {
    id: '3',
    title: 'Basic Algebra Crash Course',
    subject: 'Mathematics',
    instructor: 'Dr. Sarah Sigma',
    type: CourseType.FREE,
    // Fix: Add missing batchType property
    batchType: BatchType.ONLINE,
    price: 0,
    image: 'https://picsum.photos/seed/math2/600/400',
    description: 'Get your foundations right with this comprehensive 2-hour starter course.'
  }
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#013C7F] rounded-xl flex items-center justify-center text-white font-black text-xl italic">Σ</div>
            <span className="text-2xl font-black text-[#013C7F] tracking-tight">SIGMA ACADEMY</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="px-6 py-2.5 rounded-xl font-bold text-[#013C7F] hover:bg-slate-50 transition-all">
              Login
            </Link>
            <Link to="/login" className="px-6 py-2.5 bg-[#013C7F] text-white rounded-xl font-bold shadow-lg shadow-[#013C7F]/20 hover:bg-[#002d61] transition-all">
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#013C7F]/5 rounded-full text-[#013C7F] font-bold text-sm">
              <span className="w-2 h-2 bg-[#E91040] rounded-full animate-pulse"></span>
              New Batches Starting for 2025
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-[#013C7F] leading-[1.1]">
              Master Math & Physics with <span className="text-[#E91040]">Expert Guidance.</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto lg:mx-0 font-medium">
              Transform your understanding of the universe. Specialized coaching for Board Exams, SAT, and elite Engineering Entrance preparation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/login" className="px-10 py-5 bg-[#013C7F] text-white rounded-2xl font-black text-lg shadow-2xl shadow-[#013C7F]/30 hover:-translate-y-1 transition-all">
                Login to Explore Courses
              </Link>
              <button className="px-10 py-5 bg-white text-[#013C7F] border-2 border-[#013C7F] rounded-2xl font-black text-lg hover:bg-slate-50 transition-all">
                View Free Resources
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#013C7F]/5 to-transparent rounded-full blur-3xl"></div>
            <img 
              src="https://picsum.photos/seed/hero/800/600" 
              alt="Learning" 
              className="rounded-3xl shadow-2xl border-8 border-white"
            />
          </div>
        </div>
      </section>

      {/* Teacher Brand Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <img 
                src="https://picsum.photos/seed/teacher/600/700" 
                alt="Instructor" 
                className="rounded-[40px] shadow-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs border border-slate-100">
                <div className="text-4xl font-black text-[#013C7F]">12+</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Years of Teaching Excellence</div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-black text-[#013C7F]">Meet Your Instructor</h2>
              <h3 className="text-2xl font-bold text-[#E91040]">Dr. Sarah Sigma, Ph.D.</h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                A researcher turned educator, Sarah has helped over 5,000 students crack the world's toughest competitive exams. Her methodology focuses on "Intuitive Logic" over rote memorization.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-200">
                  <div className="font-black text-[#013C7F] text-2xl">98%</div>
                  <div className="text-xs font-bold text-slate-400 uppercase mt-1">Success Rate</div>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-slate-200">
                  <div className="font-black text-[#013C7F] text-2xl">500+</div>
                  <div className="text-xs font-bold text-slate-400 uppercase mt-1">Rank Holders</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black text-[#013C7F] mb-4">Our Featured Programs</h2>
              <p className="text-slate-500 max-w-lg font-medium">Comprehensive courses tailored for students who refuse to settle for anything less than excellence.</p>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 rounded-full border border-slate-200 font-bold hover:bg-slate-50 transition-all">All</button>
              <button className="px-6 py-2 rounded-full border border-slate-200 font-bold hover:bg-slate-50 transition-all">Math</button>
              <button className="px-6 py-2 rounded-full border border-slate-200 font-bold hover:bg-slate-50 transition-all">Physics</button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MOCK_COURSES.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#013C7F] text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-black mb-20">Why Study with Sigma?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <h3 className="text-xl font-bold">Concept Clarity</h3>
              <p className="text-white/60">We don't just solve problems; we build the intuition required to tackle unseen challenges.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-bold">Structured Batches</h3>
              <p className="text-white/60">Organized schedules with weekly mock tests and personalized performance reports.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
              </div>
              <h3 className="text-xl font-bold">Dual Support</h3>
              <p className="text-white/60">Get instant doubt resolution through our online portal or scheduled offline sessions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#E91040] rounded-[40px] p-12 md:p-20 text-center text-white space-y-8 shadow-2xl shadow-[#E91040]/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <h2 className="text-4xl md:text-5xl font-black leading-tight">Your Journey to Top Ranks Starts Here.</h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">Create a free account to unlock exclusive resources and take the first step towards academic mastery.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <Link to="/login" className="px-10 py-5 bg-white text-[#E91040] rounded-2xl font-black text-lg hover:bg-slate-100 transition-all">
                Join Now for Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <div className="w-8 h-8 bg-[#013C7F] rounded-lg flex items-center justify-center text-white font-black text-lg italic">Σ</div>
                <span className="text-xl font-black text-[#013C7F]">SIGMA ACADEMY</span>
              </div>
              <p className="text-slate-400 text-sm font-medium">Precision in learning. Excellence in results.</p>
            </div>
            <div className="flex gap-10">
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-[#013C7F]">Terms</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-[#013C7F]">Privacy</a>
              <a href="#" className="text-sm font-bold text-slate-500 hover:text-[#013C7F]">Support</a>
            </div>
            <div className="text-slate-400 text-sm font-bold">
              © 2024 Sigma Academy. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
