import React from "react";

interface Episode {
  data: {
    name: string;
  };
}
interface EpisodeTitleProps {
  episode: Episode;
}

const EpisodeTitle: React.FC<EpisodeTitleProps> = ({ episode }) => {
  return (
    <div>
      <p> Nome Do Episódio: {episode.data.name}</p>
    </div>
  );
};

export default EpisodeTitle;
