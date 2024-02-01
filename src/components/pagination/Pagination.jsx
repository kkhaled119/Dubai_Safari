import './pagination.css';

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  const generatePages = [];
  for (let i = 1; i <= pages; i++) {
    generatePages.push(i);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="pagination">
        <button disabled={currentPage===1} onClick={()=>setCurrentPage(prev=>prev-1)} className='page previous'>
        previous
        </button>
      {generatePages.map((page) => (
        <div
          key={page}
          className={`page ${currentPage === page ? "active" : ""}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </div>
      ))}
      <button disabled={currentPage===pages} onClick={()=>setCurrentPage(prev=>prev+1)} className='page next'>
        Next
        </button>
    </div>
  );
};

export default Pagination;
