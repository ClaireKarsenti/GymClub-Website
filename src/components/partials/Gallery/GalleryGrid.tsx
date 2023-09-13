import { useState } from 'react';
import { galleryImg } from '../../../data/pages/GalleryData';
import SmallButton from '../../globals/buttons/SmallButton';
import { scrollTop } from '../../../utils/helpers/scrollTopHelper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

function GalleryGrid() {
  const itemsPerPage = 9;
  const totalPages = Math.ceil(galleryImg.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentImgs = galleryImg.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    scrollTop();
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-7 md1000:grid-cols-2 min540:grid-cols-1">
        {currentImgs.map((image) => (
          <div key={image.id}>
            <img alt="gallery_img" className="w-full h-auto" src={image.img} />
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-32">
        {currentPage > 1 && (
          <SmallButton
            onClick={() => handlePageChange(currentPage - 1)}
            to={`/gallery/page-${currentPage - 1}`}
            className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white"
          >
            <FontAwesomeIcon icon={faAnglesLeft} />
          </SmallButton>
        )}
        {Array.from({ length: totalPages }).map((_, index) => (
          <SmallButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            to={`/gallery/page-${index + 1}`}
            className={`${
              currentPage === index + 1
                ? 'bg-[#ff0336] text-white'
                : 'bg-white text-black'
            } text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md`}
          >
            {index + 1}
          </SmallButton>
        ))}
        {currentPage < totalPages && (
          <SmallButton
            onClick={() => handlePageChange(currentPage + 1)}
            to={`/gallery/page-${currentPage + 1}`}
            className="text-black inline-flex items-center justify-center text-center text-[18px] border border-solid border-[#dee2e6] w-[48px] h-[45px] font-medium rounded-md bg-white"
          >
            <FontAwesomeIcon icon={faAnglesRight} />
          </SmallButton>
        )}
      </div>
    </>
  );
}

export default GalleryGrid;
