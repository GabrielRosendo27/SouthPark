import React from "react";
import EpisodeTitle from "./EpisodeTitle";
import EpisodeAirDate from "./EpisodeAirDate";
import EpisodeDescription from "./EpisodeDescription";
import EpisodeNumber from "./EpisodeNumber";
import EpisodeThumbnail from "./EpisodeThumbnail";
import EpisodeSeason from "./EpisodeSeason";
import ButtonEP from "../ButtonEP";

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

function inEpisode() {
  const [episode, setEpisode] = React.useState<Episode[]>([]);
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

    const episodes = await Promise.all(requests);
    setEpisode(episodes);
  }
  return (
    <>
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
      </div>
      <ButtonEP apiFetch={apiFetch} />
    </>
  );
}
export default inEpisode;
