function FilmCard({ film, topFilmsSection, showComingSoon, onClick }) {
    const roundedTickets = Math.floor(film.tickets_sold / 1000) * 1000;
    
    return (
        <div 
            className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
            onClick={onClick}
        >
            <div className="relative">
                {showComingSoon && (
                    <div className="absolute top-0 left-0 right-0 bg-red-700 text-white px-4 py-2.5 text-center font-bold text-sm z-10">
                        PRÓXIMAMENTE EN CINES
                    </div>
                )}
                {topFilmsSection && (
                    <div className="absolute top-0 left-0 right-0 bg-black/70 backdrop-blur-sm text-white px-4 py-2.5 text-center font-semibold text-sm z-10">
                        Más de {roundedTickets.toLocaleString('es-ES')} entradas vendidas
                    </div>
                )}
                <img 
                    className="w-full h-96 object-cover object-top" 
                    src={film.coverImage} 
                    alt={film.title}
                />
            </div>
            <div className="p-4">
                <h2 className="text-gray-900 text-xl font-bold">
                    {film.title}
                </h2>
            </div>
        </div>
    )
}

export default FilmCard;