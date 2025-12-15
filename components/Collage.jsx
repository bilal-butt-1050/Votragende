"use client";

import { Video, Music, FileText, BookOpen, Youtube, Headphones, FileMusic } from 'lucide-react';

export default function Collage() {
  const lessons = [
    {
      title: "Video Lessons",
      description: "Step-by-step guitar tutorials from beginner to advanced techniques",
      icon: Video,
      color: "from-blue-500 to-purple-600",
      comingSoon: true,
      features: ["Live demonstrations", "Multiple camera angles", "Play-along tracks"]
    },
    {
      title: "Tabs & Notation",
      description: "Accurate transcriptions of popular songs and original compositions",
      icon: FileMusic,
      color: "from-green-500 to-emerald-600",
      comingSoon: true,
      features: ["Interactive tabs", "Standard notation", "Practice exercises"]
    },
    {
      title: "Ambient Guitar Breakdowns",
      description: "Learn atmospheric and cinematic guitar techniques",
      icon: Headphones,
      color: "from-purple-500 to-pink-600",
      comingSoon: true,
      features: ["Soundscape creation", "Effects chain breakdowns", "Mood-based lessons"]
    },

    {
      title: "Songwriting Guides",
      description: "Comprehensive guides to crafting memorable songs",
      icon: FileText,
      color: "from-yellow-500 to-amber-600",
      comingSoon: true,
      features: ["Melody development", "Lyric writing", "Arrangement techniques"]
    },
    {
      title: "Composition Mastery",
      description: "Advanced techniques for creating original music",
      icon: BookOpen,
      color: "from-indigo-500 to-blue-600",
      comingSoon: true,
      features: ["Chord progression theory", "Harmonic analysis", "Creative exercises"]
    },
  ];

  return (
    <section id="lessons" className="lessons">
      <div className="section-header fade-up">
        <h2>Lessons & Learning</h2>
        <p className="text-lg">Coming soon: Educational resources for aspiring musicians</p>
      </div>
      
      <div className="lessons-grid">
        {lessons.map((lesson, index) => (
          <div key={index} className={`lesson-card fade-up stagger-${index % 3}`}>
            <div className="lesson-card-inner">
              {/* Icon with gradient background */}
              <div className={`lesson-icon-container bg-gradient-to-br ${lesson.color}`}>
                <lesson.icon className="lesson-icon" size={24} />
              </div>
              
              {/* Coming Soon Badge */}
              {lesson.comingSoon && (
                <div className="coming-soon-badge">
                  Coming Soon
                </div>
              )}
              
              {/* Content */}
              <div className="lesson-content">
                <h3 className="lesson-title">{lesson.title}</h3>
                <p className="lesson-description">{lesson.description}</p>
                
                {/* Features List */}
                <ul className="lesson-features">
                  {lesson.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="lesson-feature">
                      <span className="feature-bullet">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
        ))}
      </div>
      <div>    
      </div>
    </section>
  );
}