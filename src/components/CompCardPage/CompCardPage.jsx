import { useNavigate } from 'react-router-dom';
import './CompCardPage.css';

const CompCardPage = () => {
  const navigate = useNavigate();
  const compCardPDF = '/files/compCard.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = compCardPDF;
    link.download = 'Ebony_March_CompCard.pdf';
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
          src={compCardPDF}
          className="comp-card-pdf"
          title="Ebony March Comp Card"
        />
      </div>
    </div>
  );
};

export default CompCardPage;
