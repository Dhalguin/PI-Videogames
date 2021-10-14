import React from "react";

function AddGameForm({
  styles,
  videogame,
  handleOnChange,
  handleOnSubmit,
  genreState,
  setGenres,
  errors,
}) {
  const handleGenres = (e) => {
    let index = parseInt(e.target.value);
    if (document.getElementById(e.target.value).checked) {
      setGenres((state) => [...state, index]);
    } else {
      setGenres((state) => state.filter((element) => element !== index));
    }
  };

  return (
    <div className={`${styles.box} center`}>
      <form autoComplete="off">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            className={errors.title && styles.boxError}
            value={videogame.title}
            onChange={handleOnChange}
          />
          <p className={styles.textError}>{errors.title}</p>
        </div>
        <div className="form-group">
          <label htmlFor="img">Image URL</label>
          <input
            type="text"
            name="background_image"
            id="background_image"
            value={videogame.background_image}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            className={errors.description && styles.boxError}
            value={videogame.description}
            onChange={handleOnChange}
          ></textarea>
          <p className={styles.textError}>{errors.description}</p>
        </div>
        <div className="form-group">
          <label htmlFor="released">Released</label>
          <input
            type="date"
            name="released"
            id="released"
            className={errors.released && styles.boxError}
            value={videogame.released}
            onChange={handleOnChange}
          />
          <p className={styles.textError}>{errors.released}</p>
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            className={errors.rating && styles.boxError}
            value={videogame.rating}
            onChange={handleOnChange}
          />
          <p className={styles.textError}>{errors.rating}</p>
        </div>
        <div className="form-group">
          <label htmlFor="platforms">Platforms</label>
          <input
            type="text"
            name="platforms"
            id="platforms"
            className={errors.platforms && styles.boxError}
            value={videogame.platforms}
            onChange={handleOnChange}
          />
          <p className={styles.textError}>{errors.platforms}</p>
        </div>
        <div className={`form-group d-flex ${styles.genres}`}>
          {genreState.map((genre) => (
            <div key={genre.id}>
              <label htmlFor={genre.id}>
                <input
                  type="checkbox"
                  id={genre.id}
                  value={genre.id}
                  onChange={handleGenres}
                />
                {genre.name}
              </label>
            </div>
          ))}
        </div>
        <div className="form-group text-center">
          <button onClick={handleOnSubmit}>APPEND</button>
        </div>
      </form>
    </div>
  );
}

export default AddGameForm;
