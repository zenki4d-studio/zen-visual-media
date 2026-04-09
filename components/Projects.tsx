import React, { useState, useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ProjectCategory, Project } from '../types';
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const CATEGORIES: ProjectCategory[] = ['All', '3D TVC', '3D FOOH', '3D Product', '3D Explainer', 'AI Production'];
const PROJECTS_PER_PAGE = 6;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { t, language } = useLanguage();
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement | null }>({});

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const pagedProjects = filteredProjects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Handle video playback control
  useEffect(() => {
    Object.values(videoRefs.current).forEach(video => {
      if (video) {
        if (selectedProject) {
          video.pause();
        } else {
          // Only play if it was intended to (autoPlay is true on these videos)
          video.play().catch(() => {
            // Browser might block autoplay if not muted or user hasn't interacted
          });
        }
      }
    });
  }, [selectedProject]);

  return (
    <section id="projects" className="py-32 bg-dark relative overflow-hidden">
      
      {/* 3D Landscape Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <img 
            src="./pictures/Zen-family.jpg" 
            alt="Zen Family Background" 
            className="w-full h-full object-cover opacity-20 filter grayscale contrast-125"
         />
         <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
             <div className="flex flex-col gap-4">
                <span className="text-gold text-xs font-bold tracking-[0.4em] uppercase">{t.projects.badge}</span>
                <h2 className="text-4xl md:text-6xl font-display font-black text-white tracking-tighter mix-blend-screen uppercase leading-none">
                    {t.projects.title}
                </h2>
             </div>
             <div className="flex flex-wrap gap-4">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`text-[10px] font-bold uppercase tracking-widest px-4 py-2 border transition-all duration-300 backdrop-blur-sm ${
                        filter === cat 
                        ? 'border-gold text-gold bg-black/50' 
                        : 'border-white/10 text-gray-500 hover:border-white hover:text-white bg-black/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
             </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20 min-h-[600px]">
          {pagedProjects.map((project) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col gap-6 cursor-pointer"
            >
              <div className={`relative overflow-hidden bg-gray-900 border border-white/5 transition-all duration-500 group-hover:border-gold/30 ${
                (project.category === '3D TVC' || project.category === '3D FOOH' || project.category === '3D Product' || project.category === '3D Explainer' || project.category === 'AI Production') ? 'aspect-square' : 'aspect-video'
              }`}>
                {project.videoUrl ? (
                  <video
                    ref={el => videoRefs.current[project.id] = el}
                    src={project.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover transition-all duration-700 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  />
                ) : (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-all duration-700 grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105"
                  />
                )}
                
                <div className="absolute top-4 left-4 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-gold text-black text-[7px] font-black px-1.5 py-1 tracking-tighter uppercase">{t.projects.directed}</span>
                    <span className="bg-white/10 text-white text-[7px] font-black px-1.5 py-1 tracking-tighter uppercase backdrop-blur-md">{t.projects.produced}</span>
                </div>

                <div className="absolute bottom-4 right-4 text-white p-2 rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 backdrop-blur-md">
                    <ArrowUpRight size={18} />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                 <div className="flex items-center gap-3">
                    <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase">{project.category}</span>
                    <div className="h-[1px] w-8 bg-gold/30"></div>
                 </div>
                 <h3 className="text-lg md:text-xl font-display font-bold text-white tracking-tight uppercase group-hover:text-gold transition-colors duration-300">
                    {language === 'en' ? project.titleEn || project.title : language === 'jp' ? project.titleJp || project.titleEn || project.title : language === 'kr' ? project.titleKr || project.titleEn || project.title : project.title}
                 </h3>
                 <span className="text-gray-500 text-[10px] font-bold tracking-widest uppercase opacity-60">
                    {project.client || "Creative Lab"}
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-20">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className={`p-2 border border-white/10 rounded-full transition-all duration-300 ${
                currentPage === 1 ? 'opacity-20 cursor-not-allowed' : 'hover:border-gold hover:text-gold text-white/50'
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-8 h-8 text-[10px] font-bold rounded-full border transition-all duration-300 ${
                    currentPage === i + 1 
                    ? 'border-gold text-gold bg-gold/10' 
                    : 'border-white/5 text-gray-500 hover:border-white/20 hover:text-white'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className={`p-2 border border-white/10 rounded-full transition-all duration-300 ${
                currentPage === totalPages ? 'opacity-20 cursor-not-allowed' : 'hover:border-gold hover:text-gold text-white/50'
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/98 backdrop-blur-xl">
           <div className={`bg-dark w-full max-w-[95vw] lg:max-w-7xl border border-white/10 flex flex-col relative shadow-2xl shadow-gold/10 overflow-hidden ${
             (selectedProject.category === '3D TVC' || selectedProject.category === '3D FOOH' || selectedProject.category === '3D Product' || selectedProject.category === '3D Explainer' || selectedProject.category === 'AI Production') ? 'md:flex-row md:h-[85vh]' : 'md:h-auto'
           }`}>
              <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 z-[110] text-white/50 hover:text-gold transition-colors p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10"
                >
                  <X size={28} />
              </button>

              <div className={`bg-black flex items-center justify-center relative group overflow-hidden ${
                (selectedProject.category === '3D TVC' || selectedProject.category === '3D FOOH' || selectedProject.category === '3D Product' || selectedProject.category === '3D Explainer' || selectedProject.category === 'AI Production') ? 'w-full md:w-[70%] h-1/2 md:h-auto' : 'w-full aspect-video'
              }`}>
                 {selectedProject.videoUrl ? (
                    <video 
                      src={selectedProject.videoUrl} 
                      controls 
                      autoPlay 
                      loop
                      className="w-full h-full object-contain shadow-2xl"
                    />
                 ) : (
                    <img src={selectedProject.thumbnail} className="w-full h-full object-cover" />
                 )}
              </div>

              <div className={`p-8 md:p-12 flex flex-col bg-charcoal/50 backdrop-blur-sm ${
                (selectedProject.category === '3D TVC' || selectedProject.category === '3D FOOH' || selectedProject.category === '3D Product' || selectedProject.category === '3D Explainer' || selectedProject.category === 'AI Production') ? 'w-full md:w-[30%] border-l border-white/10 overflow-y-auto' : 'w-full'
              }`}>
                 <div className="flex flex-col gap-8">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-gold text-[10px] font-bold tracking-[0.3em] uppercase px-3 py-1 border border-gold/20">{selectedProject.category}</span>
                            <span className="text-white/20 text-[10px] font-bold uppercase tracking-widest">Zen Visual Media</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl font-display font-black text-white tracking-tight uppercase mb-6 leading-tight">
                            {language === 'en' ? selectedProject.titleEn || selectedProject.title : language === 'jp' ? selectedProject.titleJp || selectedProject.titleEn || selectedProject.title : language === 'kr' ? selectedProject.titleKr || selectedProject.titleEn || selectedProject.title : selectedProject.title}
                        </h3>
                    </div>
                    
                    <div className={`grid gap-8 ${(selectedProject.category === '3D TVC' || selectedProject.category === '3D FOOH' || selectedProject.category === '3D Product' || selectedProject.category === '3D Explainer' || selectedProject.category === 'AI Production') ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-4'}`}>
                        <div>
                            <span className="block text-gray-600 text-[10px] uppercase tracking-widest mb-2">{t.projects.direction}</span>
                            <span className="text-white text-base font-bold">{selectedProject.category}</span>
                        </div>
                        <div>
                            <span className="block text-gray-600 text-[10px] uppercase tracking-widest mb-2">{t.projects.force}</span>
                            <span className="text-white text-base font-bold">Zen Visual Media</span>
                        </div>
                        <div>
                            <span className="block text-gray-600 text-[10px] uppercase tracking-widest mb-2">{t.projects.client}</span>
                            <span className="text-white text-base">{selectedProject.client || "Creative Lab"}</span>
                        </div>
                        <div className={(selectedProject.category === '3D TVC' || selectedProject.category === '3D FOOH' || selectedProject.category === '3D Product' || selectedProject.category === '3D Explainer' || selectedProject.category === 'AI Production') ? '' : 'md:col-span-1'}>
                             <span className="block text-gray-600 text-[10px] uppercase tracking-widest mb-2">{t.projects.badge}</span>
                             <p className="text-gray-400 text-xs leading-relaxed font-light whitespace-pre-line">
                                {language === 'en' ? selectedProject.descriptionEn || selectedProject.description : language === 'jp' ? selectedProject.descriptionJp || selectedProject.descriptionEn || selectedProject.description : language === 'kr' ? selectedProject.descriptionKr || selectedProject.descriptionEn || selectedProject.description : selectedProject.description}
                             </p>
                        </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}
    </section>
  );
};

export default Projects;