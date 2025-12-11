import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const DownloadCV: React.FC = () => {
  // Google Drive direct download link
  const cvUrl =
    "https://drive.google.com/uc?export=download&id=1-6JLpX_8J3O_VAY0oYyXp7huh8JWR-kk";

  return (
    <div className="max-w-4xl mx-auto p-6 text-center">
      <a
        href={cvUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn space-button"
      >
        📄 Download My CV
      </a>
    </div>
  );
};

export default DownloadCV;
