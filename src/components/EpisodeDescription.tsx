import React from "react";

interface Episode {
  data: {
    description: string;
  };
}

interface DescriptionProps {
  episode: Episode;
}

const EpisodeDescription: React.FC<DescriptionProps> = ({ episode }) => {
  return (
    <div>
      <p>Descrição do episódio: {episode.data.description}</p>
    </div>
  );
};

export default EpisodeDescription;
