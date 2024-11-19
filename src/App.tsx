import React from "react";
import EpisodeTitle from "./components/EpisodeTitle";
import ButtonEP from "./components/ButtonEP";
import EpisodeAirDate from "./components/EpisodeAirDate";
import EpisodeDescription from "./components/EpisodeDescription";
import EpisodeNumber from "./components/EpisodeNumber";
import EpisodeThumbnail from "./components/EpisodeThumbnail";
import EpisodeSeason from "./components/EpisodeSeason";
import QuoteX from "./components/QuoteX";

interface Episode {
  data: {
    name: string;
    air_date: string;
    description: string;
    episode: number;
    thumbnail_url: string;
    season: number;
  };
}

interface Quote {
  quote: string;
  character: string;
}

function App() {
  const [episode, setEpisode] = React.useState<Episode[]>([]);
  const [quotes, setQuotes] = React.useState<Quote[] | null>(null);

  async function apiFetch(): Promise<void> {
    const requests = [];

    for (let i = 1; i <= 11; i++) {
      const url = `https://spapi.dev/api/episodes/${i}`;
      requests.push(fetch(url).then((response) => response.json()));
    }
    const episodes = await Promise.all(requests);

    setEpisode(episodes);
  }
  async function quoteApiFetch(): Promise<void> {
    const response = await fetch("https://southparkquotes.onrender.com/v1/quotes/3");
    const data = await response.json();
    setQuotes(data);
  }

  if (episode) {
    console.log(episode);
  }
  if (quotes) {
    console.log(quotes);
  }
  return (
    <>
      {quotes && (
        <div>
          <QuoteX quotes={quotes} />
        </div>
      )}

      <div>
        {episode.map((episode, index) => (
          <div key={index}>
            {" "}
            <EpisodeTitle episode={episode} />
            <EpisodeAirDate episode={episode} />
            <EpisodeDescription episode={episode} />
            <EpisodeNumber episode={episode} />
            <EpisodeSeason episode={episode} />
            <EpisodeThumbnail episode={episode} />
          </div>
        ))}

        <ButtonEP apiFetch={apiFetch} />
        <ButtonEP apiFetch={quoteApiFetch} />
      </div>
    </>
  );
}

export default App;
