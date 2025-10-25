import "../css/MovieCard.css"

function MovieCard({movie}) {
    const onFavClick = () => {
        alert("clicked")
    }
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={() => {onFavClick()}}>💗</button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p>{movie.releaseDate}</p>
            </div>
        </div>
    )
}

export default MovieCard