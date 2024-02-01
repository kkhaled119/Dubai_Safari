import HeroHeader from "../../components/hero-header/HeroHeader";
import Pagination from "../../components/pagination/Pagination";
import Services from "../../components/services/Services";
import TourList from "../../components/tours/TourList";
import SortInput from "../../components/sort-input/SortInput";
import Banner from "../../components/banner/Banner";
import NewsLetter from "../../components/news-letter/NewsLetter";
import { toursList } from "../../data";
import { paginate } from "../../utils/pagination";
import { useState } from "react";
const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortItem, setSortItem] = useState("recomended");

  /*Sort*/

  const sortedTourList =
    sortItem === "low"
      ? toursList.sort((a, b) => a.priceFrom - b.priceFrom)
      : sortItem === "high"
      ? toursList.sort((a, b) => b.priceFrom - a.priceFrom)
      : toursList.sort((a, b) => b.rating - a.rating);
  const { pages, orderedTourList } = paginate(
    sortedTourList.length,
    sortedTourList,
    currentPage
  );
  return (
    <div>
      <HeroHeader />
      <Services />
      <SortInput
        setSortItem={setSortItem}
        sortItem={sortItem}
        toursLength={toursList.length}
      />
      <TourList toursList={orderedTourList} />
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Banner />
      <NewsLetter />
    </div>
  );
};

export default Home;
