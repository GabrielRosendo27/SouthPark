import React from "react";

interface Episode {
  data: {
    episode: number;
  };
}
interface EpisodeNumberProps {
  episode: Episode;
}

const EpisodeNumber: React.FC<EpisodeNumberProps> = ({ episode }) => {
  return (
    <div>
      <p>Nº do Episódio:{episode.data.episode}</p>
    </div>
  );
};

export default EpisodeNumber;
