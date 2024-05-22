import  { useState } from 'react';
import styles from './SearchPage.module.css';

const SearchPage: React.FC = () => {
  const [searchType, setSearchType] = useState<'recipes' | 'chefs'>('recipes');
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = () => {
    // Здесь будет вызов API для поиска
    // Для примера оставим пустым
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>What to eat today?</h1>
      <div className={styles.buttonGroupWrapper}>
        <div className={styles.buttonBackground}></div>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${searchType === 'recipes' ? styles.active : ''}`}
            onClick={() => setSearchType('recipes')}
          >
            Recipes
          </button>
          <button
            className={`${styles.button} ${searchType === 'chefs' ? styles.active : ''}`}
            onClick={() => setSearchType('chefs')}
          >
            Chefs
          </button>
        </div>
      </div>
      <div className={styles.searchInputWrapper}>
        <input
          className={styles.searchInput}
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <span className={styles.searchIcon}>🔍</span>
      </div>
      <h2 className={styles.resultsTitle}>Search results</h2>
      <div className={styles.resultsContainer}>
        {results.length > 0 ? (
          results.map((result, index) => (
            <div className={styles.resultCard} key={index}>
              {/* Здесь будет отображение результата поиска */}
            </div>
          ))
        ) : (
          <p className={styles.noResults}>No results found</p>
        )}
      </div>
      <button className={styles.addRecipeButton} onClick={() => setShowModal(true)}>
        Add your recipe
      </button>
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Edit your recipe</h2>
            {/* Форма редактирования рецепта */}
            <button className={styles.closeButton} onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
