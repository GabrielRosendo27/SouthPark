import React from "react";
import EpisodeTitle from "./components/EpisodeTitle";
import ButtonEP from "./components/ButtonEP";
import EpisodeAirDate from "./components/EpisodeAirDate";
import EpisodeDescription from "./components/EpisodeDescription";
import EpisodeNumber from "./components/EpisodeNumber";
import EpisodeThumbnail from "./components/EpisodeThumbnail";
import EpisodeSeason from "./components/EpisodeSeason";
// import QuoteX from "./components/QuoteX";

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
interface Season {
  epInicial: number;
  epFinal: number;
}

// interface Quote {
//   quote: string;
//   character: string;
// }

function App() {
  const [episode, setEpisode] = React.useState<Episode[]>([]);
  // const [quotes, setQuotes] = React.useState<Quote[] | null>(null);

  // const seasons: Record<string, Season> = {
  //   season1: { epInicial: 1, epFinal: 13 },
  //   season2: { epInicial: 14, epFinal: 27 },
  // };
  const seasonsData: Record<string, Season> = {
    "Season 1": { epInicial: 1, epFinal: 13 },
    "Season 2": { epInicial: 14, epFinal: 31 },
  };

  async function apiFetch(season: string): Promise<void> {
    const requests = [];
    const seasonInfo = seasonsData[season];

    if (!seasonInfo) {
      console.error("Temporada não encontrada");
      return;
    }

    for (let i = seasonInfo.epInicial; i <= seasonInfo.epFinal; i++) {
      const url = `https://spapi.dev/api/episodes/${i}`;
      requests.push(fetch(url).then((response) => response.json()));
    }
    // for (let key in seasons) {
    //   if (seasons.hasOwnProperty(key)) {
    //     const epInicial = seasons[key].epInicial;
    //     const epFinal = seasons[key].epFinal;
    //     for (let i = epInicial; i <= epFinal; i++) {
    //       const url = `https://spapi.dev/api/episodes/${i}`;
    //       requests.push(fetch(url).then((response) => response.json()));
    //     }
    //   }
    // }

    const episodes = await Promise.all(requests);
    setEpisode(episodes);
  }
  // async function quoteApiFetch(): Promise<void> {
  //   const response = await fetch("https://southparkquotes.onrender.com/v1/quotes/3");
  //   const data = await response.json();
  //   setQuotes(data);
  // }

  if (episode) {
    console.log(episode);
  }
  // if (quotes) {
  //   console.log(quotes);
  // }
  return (
    <>
      {/* {quotes && (
        <div>
          <QuoteX quotes={quotes} />
        </div>
      )} */}

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
        {/* <ButtonEP apiFetch={quoteApiFetch} /> */}
      </div>
    </>
  );
}

export default App;
