import React from "react";

function AddGameForm({
  styles,
  videogame,
  handleOnChange,
  handleOnSubmit,
  state,
  setGenres,
}) {
  const handleGenres = (e) => {
    if (document.getElementById(e.target.value).checked) {
      setGenres((state) => [...state, ...parseInt(e.target.value)]);
    } else {
      setGenres((state) =>
        state.filter((element) => element !== e.target.value)
      );
    }
  };

  return (
    <div className={`${styles.box} center`}>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={videogame.title}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            value={videogame.description}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="released">Released</label>
          <input
            type="date"
            name="released"
            id="released"
            value={videogame.released}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            name="rating"
            id="rating"
            value={videogame.rating}
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="platforms">Platforms</label>
          <input
            type="text"
            name="platforms"
            id="platforms"
            value={videogame.platforms}
            onChange={handleOnChange}
          />
        </div>
        <div>
          {state.genres.map((genre) => (
            <React.Fragment key={genre.id}>
              <input
                type="checkbox"
                id={genre.id}
                value={genre.id}
                onChange={handleGenres}
              />
              <label htmlFor={genre.id}>{genre.name}</label>
            </React.Fragment>
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
