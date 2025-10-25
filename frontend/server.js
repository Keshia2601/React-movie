import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/suggestions", async (req, res) => {
  try {
    const suggestionUrl =
      "https://movie-database-api1.p.rapidapi.com/list_movies.json?limit=20&page=1&quality=all&genre=all&minimum_rating=0&query_term=0&sort_by=date_added&order_by=desc&with_rt_ratings=false";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a2febf07bcmsh7b1a63ad500e4d4p134e28jsn523a056802b1",
        "x-rapidapi-host": "movie-database-api1.p.rapidapi.com",
      },
    };

    const response = await fetch(suggestionUrl, options);
    const result = await response.json();
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch suggested movies" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// const searchUrl = 'https://movie-database-api1.p.rapidapi.com/search/movie';

// export const searchMovies = async () => {
//     const response = await fetch (`${searchUrl}?query=${encodeURIComponent(movieTitle)}`, options)
//     const result= await response.json();
//     console.log("searresultttt", result)
//     return result;
// }
