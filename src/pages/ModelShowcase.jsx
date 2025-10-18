import { useNavigate } from 'react-router-dom';
import showcasePDF from '../assets/files/modelShowcase.pdf';
import '../components/CompCardPage/CompCardPage.css';

const ModelShowcase = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = showcasePDF;
    link.download = 'Ebony_March_Model_Showcase.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        <iframe
          src={showcasePDF}
          className="comp-card-pdf"
          title="Ebony March Model Showcase"
        />
      </div>
    </div>
  );
};

export default ModelShowcase;
