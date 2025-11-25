import { FaRectangleXmark } from "react-icons/fa6";
import { MdSlowMotionVideo } from "react-icons/md";
import { useState } from "react";

function FilmModal({ film, isOpen, onClose }) {
    const [showTrailer, setShowTrailer] = useState(false);
    
    if (!isOpen || !film) return null;
    
    // Extraer el ID del video de YouTube
    const getYoutubeId = (url) => {
        if (!url) return null;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };
    
    const youtubeId = getYoutubeId(film.trailer);
    
    const handleTrailerClick = () => {
        if (film.trailer) {
            setShowTrailer(true);
        }
    };
    
    const handleCloseModal = () => {
        setShowTrailer(false);
        onClose();
    };
        
    return (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4" onClick={handleCloseModal}>
            <div className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-5xl max-h-5xl w-full flex flex-col md:flex-row max-h-[70vh]" onClick={(e) => e.stopPropagation()}>
                {/* Mostrar trailer si está activo */}
                {showTrailer && youtubeId ? (
                    <div className="w-full h-full flex items-center justify-center bg-black p-4 relative">
                        <button 
                            className="absolute top-4 right-4 text-white hover:text-red-700 transition text-3xl font-bold cursor-pointer z-10"
                            onClick={() => setShowTrailer(false)}
                            title="Cerrar trailer"
                        >
                            <FaRectangleXmark />
                        </button>
                        <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                ) : (
                    <>
                        {/* Imagen del póster */}
                        <div className="md:w-2/5 relative">
                            {film.tickets_sold === 0 && (
                                <div className="absolute top-0 left-0 right-0 bg-red-700 text-white px-4 py-3 text-center font-bold text-base z-10">
                                    PRÓXIMAMENTE EN CINES
                                </div>
                            )}
                            <img 
                                className="w-full h-full object-cover"
                                src={film.coverImage} 
                                alt={film.title}
                            />
                        </div>
                        
                        {/* Contenido de la información */}
                        <div className="md:w-3/5 p-6 overflow-y-auto">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-3xl font-bold text-gray-900">{film.title}</h2>
                                <div className="flex items-center gap-3">
                                    {film.trailer && (
                                        <button 
                                            className="text-gray-500 hover:text-blue-700 transition text-2xl font-bold cursor-pointer"
                                            onClick={handleTrailerClick}
                                            title="Ver trailer"
                                        >
                                            <MdSlowMotionVideo />
                                        </button>
                                    )}
                                    <button 
                                        className="text-gray-500 hover:text-red-700 transition text-2xl font-bold cursor-pointer"
                                        onClick={handleCloseModal}
                                    >
                                        <FaRectangleXmark />
                                    </button>
                                </div>
                            </div>
                            
                            <div className="space-y-5 mt-5">
                                <div className="grid grid-cols-3 gap-4">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800 uppercase">Directores</h3>
                                        <p className="text-gray-800">{film.directors}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800 uppercase">Duración</h3>
                                        <p className="text-gray-800">{film.duration}</p>
                                    </div>
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-800 uppercase">Estreno</h3>
                                        <p className="text-gray-800">{film.release_date}</p>
                                    </div>
                                </div>
                                
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800 uppercase">Reparto</h3>
                                    <p className="text-gray-800">{film.actors}</p>
                                </div>
                                
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-800 uppercase mb-2">Sinopsis</h3>
                                    <p className="text-gray-700 leading-relaxed text-justify">{film.sinopsis}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default FilmModal;