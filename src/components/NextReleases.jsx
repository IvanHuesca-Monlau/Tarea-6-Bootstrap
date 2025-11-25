import { useState } from 'react';
import FilmCard from './FilmCard';
import FilmModal from './FilmModal';
import filmsData from '../assets/json/films.json';

function NextReleases() {
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextReleases = filmsData.filter(film => film.tickets_sold === 0);

  const handleFilmClick = (film) => {
    setSelectedFilm(film);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedFilm(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Próximos estrenos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {nextReleases.map((film, index) => (
          <FilmCard 
            key={index} 
            film={film} 
            topFilmsSection={false}
            showComingSoon={film.tickets_sold === 0}
            onClick={() => handleFilmClick(film)}
          />
        ))}
      </div>
      <FilmModal 
        film={selectedFilm} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default NextReleases;
