import "./news-letter.css";
import newsletter from "../../images/newsletterimage.jpg";

const NewsLetter = () => {
  return (
    <div className="news-letter">
      <div className="news-letter-container">
        <div className="news-letter-image-wrapper">
          <img src={newsletter} alt="news-letter" className="news-letter-img" />
        </div>
        <div className="news-letter-content">
          <h2 className="news-letter-content-title">
            Your Dubai itinerary is wating
          </h2>
          <p className="news-latter-content-desc">
            Recieve a curated 48-hour itinerary featuring the most iconic
            experience in Dubai,straight to your inbox
          </p>
          <div className="news-letter-inputs">
            <input type="text" placeholder="Your Email" className="news-letter-input"/>
            <button className="news-letter-btn">
                Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
