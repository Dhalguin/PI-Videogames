import React from "react";

function AddGameForm({ styles, videogame, handleOnChange, handleOnSubmit }) {
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
        <div className="form-group text-center">
          <button onClick={handleOnSubmit}>APPEND</button>
        </div>
      </form>
    </div>
  );
}

export default AddGameForm;
