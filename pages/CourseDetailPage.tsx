
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { MOCK_COURSES } from './CoursesPage';
import Countdown from '../components/UI/Countdown';
import { CourseType } from '../types';

const CourseDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = MOCK_COURSES.find(c => c.id === id);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center p-10 text-center">
        <div>
          <h1 className="text-4xl font-black text-[#013C7F] mb-4">Course Not Found</h1>
          <button onClick={() => navigate('/courses')} className="text-[#E91040] font-bold hover:underline">Back to all courses</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#013C7F] rounded-xl flex items-center justify-center text-white font-black text-xl italic">Σ</div>
            <span className="text-2xl font-black text-[#013C7F] tracking-tight">SIGMA</span>
          </Link>
          <button onClick={() => navigate('/courses')} className="text-sm font-bold text-slate-500 hover:text-[#013C7F] flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
            Browse Courses
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-1.5 bg-[#013C7F]/5 text-[#013C7F] rounded-full text-xs font-bold uppercase tracking-wider">{course.subject}</span>
                <span className="px-4 py-1.5 bg-[#E91040]/5 text-[#E91040] rounded-full text-xs font-bold uppercase tracking-wider">{course.batchType}</span>
              </div>
              <h1 className="text-5xl font-black text-[#013C7F] leading-tight">{course.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">{course.description}</p>
            </div>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-[#013C7F]">What you'll learn</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.learningOutcomes?.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 bg-slate-50 rounded-2xl">
                    <div className="shrink-0 w-6 h-6 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="font-bold text-[#013C7F] text-sm leading-tight">{item}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-2xl font-black text-[#013C7F]">Course Features</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {course.features?.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-600">
                    <div className="w-10 h-10 bg-[#013C7F]/5 rounded-xl flex items-center justify-center text-[#013C7F]">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <span className="font-bold">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-amber-50 rounded-3xl p-8 border border-amber-100 flex gap-6 items-start">
              <div className="w-12 h-12 bg-amber-200 rounded-2xl flex items-center justify-center text-amber-600 shrink-0">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-black text-amber-900">Access Restricted</h3>
                <p className="text-amber-700 font-medium">You must be logged in to view and purchase this course. Existing students please login to access your content.</p>
                <Link to="/login" className="inline-block mt-2 font-black text-amber-900 underline hover:no-underline">Go to Login</Link>
              </div>
            </section>
          </div>

          {/* Right Column: Pricing & Sticky Card */}
          <div className="relative">
            <div className="sticky top-32 space-y-8">
              <div className="bg-white rounded-[40px] overflow-hidden border border-slate-100 custom-shadow">
                <div className="aspect-video">
                   <img src={course.image} className="w-full h-full object-cover" alt={course.title} />
                </div>
                <div className="p-10 space-y-8">
                  <div className="flex justify-between items-end">
                    <div>
                      {course.originalPrice && (
                        <div className="text-slate-400 line-through font-bold text-lg">${course.originalPrice}</div>
                      )}
                      <div className="text-5xl font-black text-[#013C7F]">{course.price === 0 ? 'FREE' : `$${course.price}`}</div>
                    </div>
                    {course.type === CourseType.OFFER && course.offerExpiresAt && (
                      <div className="text-right space-y-2">
                        <div className="text-[10px] font-bold text-[#E91040] uppercase tracking-widest">Offer ends in:</div>
                        <Countdown targetDate={course.offerExpiresAt} />
                      </div>
                    )}
                  </div>

                  <div className="space-y-4">
                    <button 
                      onClick={() => navigate(`/checkout/${course.id}`)}
                      className="w-full py-5 bg-[#013C7F] text-white rounded-2xl font-black text-xl shadow-2xl shadow-[#013C7F]/20 hover:-translate-y-1 transition-all"
                    >
                      Enroll Now
                    </button>
                    <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-widest">30-Day Money Back Guarantee</p>
                  </div>

                  <div className="pt-8 border-t border-slate-100 space-y-4">
                    <h4 className="font-black text-[#013C7F] uppercase text-xs tracking-widest">This course includes:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Full lifetime access
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Access on mobile and TV
                      </li>
                      <li className="flex items-center gap-3 text-sm font-bold text-slate-600">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        Certificate of completion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
