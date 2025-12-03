import { useState } from 'react'

const Card = ({cardName, images}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const currentImage = images[currentIndex];

  return (
    <div className="flex flex-col justify-self-center items-center">
      <h2 className="text-[1.5rem] text-white font-semibold mb-2">{cardName}</h2>
      <div className="relative w-96 h-64">
        <img src={currentImage.src} alt={`${cardName} ${currentIndex + 1}`} className={`w-full h-full object-cover rounded-lg shadow-lg ${currentImage.position || 'object-center'}`} />
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 -left-10 z-2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:animate-[pulse_1.2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        >&#10094;</button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 -right-10 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:animate-[pulse_1.2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
        >&#10095;</button>
      </div>


    </div>
  )

}

export default Card;