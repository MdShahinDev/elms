
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Course, CourseType } from '../../types';
import Countdown from '../UI/Countdown';

interface CourseCardProps {
  course: Course;
  isEnrolled?: boolean;
}

const CourseCard: React.FC<CourseCardProps> = ({ course, isEnrolled }) => {
  const navigate = useNavigate();

  const handleAction = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isEnrolled) {
      // Logic for continuing course
    } else {
      navigate(`/courses/${course.id}`);
    }
  };

  return (
    <div 
      onClick={() => navigate(`/courses/${course.id}`)}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 custom-shadow transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            course.type === CourseType.OFFER ? 'bg-[#E91040] text-white' : 
            course.type === CourseType.FREE ? 'bg-emerald-500 text-white' : 'bg-[#013C7F] text-white'
          }`}>
            {course.type}
          </span>
          <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-[#013C7F]">
            {course.batchType}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-semibold text-[#013C7F]/60 uppercase tracking-wide">
            {course.subject}
          </span>
          {course.type === CourseType.OFFER && course.offerExpiresAt && (
            <Countdown targetDate={course.offerExpiresAt} />
          )}
        </div>
        
        <h3 className="text-lg font-bold text-[#013C7F] mb-2 leading-tight">
          {course.title}
        </h3>
        
        <p className="text-sm text-slate-500 mb-4 line-clamp-2">
          {course.description}
        </p>

        {isEnrolled ? (
          <div className="space-y-3">
            <div className="w-full bg-slate-100 rounded-full h-2">
              <div 
                className="bg-[#013C7F] h-2 rounded-full transition-all duration-500" 
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-slate-500">{course.progress}% Completed</span>
              <button onClick={handleAction} className="text-sm font-bold text-[#013C7F] hover:underline">
                Continue Learning
              </button>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-col">
              {course.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  ${course.originalPrice}
                </span>
              )}
              <span className="text-xl font-extrabold text-[#013C7F]">
                {course.price === 0 ? 'FREE' : `$${course.price}`}
              </span>
            </div>
            <button 
              onClick={handleAction}
              className="px-5 py-2 bg-[#013C7F] text-white rounded-lg text-sm font-bold hover:bg-[#002d61] transition-colors"
            >
              View Course
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
