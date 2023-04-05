import React from 'react';
import { Link } from 'react-router-dom';
import styles from './KnowledgeBaseDetailsSection.module.css';

interface KnowledgeBaseDetailsSectionI {
  pageTitle: string;
}

const KnowledgeBaseDetailsSection: React.FC<KnowledgeBaseDetailsSectionI> = ({ pageTitle }) => {
  const { cover, baOverlay, subtitle, title, wrapper } = styles;
  return (
    <div className={cover}>
      <div className={baOverlay}>
        <div className="container">
          <Link to={'/'} className={subtitle}>
            Главная /{' '}
            <Link to={'/knowledgeBase'} className={subtitle}>
              База знаний /{' '}
              <Link to={pageTitle} style={{ color: 'rgb(235 51 73)' }}>
                {pageTitle}
              </Link>
            </Link>
          </Link>
          <p className={title}>{pageTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBaseDetailsSection;
