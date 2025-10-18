import { useNavigate } from 'react-router-dom';
import HERO from '../../assets/HERO.jpg';
import P08 from '../../assets/P-08.jpg';
import P01 from '../../assets/P-01.jpg';
import './CompCardPage.css';

const CompCardPage = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="comp-card-page">
      <div className="comp-card-controls no-print">
        <button onClick={() => navigate('/')} className="close-btn">
          ← Back to Portfolio
        </button>
        <button onClick={handleDownload} className="download-btn">
          Download PDF
        </button>
      </div>

      <div className="comp-card-container">
        <div className="comp-card">
          <div className="comp-card-left">
            <div className="comp-photos">
              <div className="comp-photo comp-photo-main">
                <img src={P01} alt="Ebony March Portfolio" />
              </div>
              <div className="comp-photo">
                <img src={HERO} alt="Ebony March" />
              </div>
              <div className="comp-photo">
                <img src={P08} alt="Ebony March" />
              </div>
            </div>
          </div>

          <div className="comp-card-right">
            <div className="comp-header">
              <h1>EBONY MARCH</h1>
              <div className="comp-tagline">FASHION & EDITORIAL MODEL</div>
            </div>

            <div className="comp-stats">
              <div className="comp-stats-grid">
                <div className="comp-stat">
                  <span className="comp-stat-label">Height</span>
                  <span className="comp-stat-value">5'6" / 168 cm</span>
                </div>
                <div className="comp-stat">
                  <span className="comp-stat-label">Bust</span>
                  <span className="comp-stat-value">36" / 93 cm</span>
                </div>
                <div className="comp-stat">
                  <span className="comp-stat-label">Waist</span>
                  <span className="comp-stat-value">27" / 68 cm</span>
                </div>
                <div className="comp-stat">
                  <span className="comp-stat-label">Hips</span>
                  <span className="comp-stat-value">38" / 96 cm</span>
                </div>
                <div className="comp-stat">
                  <span className="comp-stat-label">Shoes</span>
                  <span className="comp-stat-value">38 EU</span>
                </div>
                <div className="comp-stat">
                  <span className="comp-stat-label">Hair</span>
                  <span className="comp-stat-value">Brown</span>
                </div>
                <div className="comp-stat">
                  <span className="comp-stat-label">Eyes</span>
                  <span className="comp-stat-value">Blue</span>
                </div>
                <div className="comp-stat">
                  <span className="comp-stat-label">Location</span>
                  <span className="comp-stat-value">Australia</span>
                </div>
              </div>
            </div>

            <div className="comp-contact">
              <div className="comp-contact-item">contact@ebonyash.fashion</div>
              <div className="comp-contact-item">ebonyash.fashion</div>
              <div className="comp-contact-item">@ebony.ash</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompCardPage;
