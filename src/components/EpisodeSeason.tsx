import React from "react";

interface Episode {
  data: {
    season: number;
  };
}
interface EpisodeSeasonProps {
  episode: Episode;
}

const EpisodeSeason: React.FC<EpisodeSeasonProps> = ({ episode }) => {
  return <div>Season: {episode.data.season}</div>;
};

export default EpisodeSeason;
