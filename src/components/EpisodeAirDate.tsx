import React from "react";

interface Episode {
  data: {
    air_date: string;
  };
}
interface EpisodeAirDateProps {
  episode: Episode;
}

const EpisodeAirDate: React.FC<EpisodeAirDateProps> = ({ episode }) => {
  return (
    <div>
      <p> Data que foi ao ar: {episode.data.air_date}</p>
    </div>
  );
};

export default EpisodeAirDate;
