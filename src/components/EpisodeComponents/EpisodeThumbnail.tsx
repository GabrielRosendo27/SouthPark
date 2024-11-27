import React from "react";

interface Episode {
  data: {
    thumbnail_url: string;
  };
}

interface ThumbnailProps {
  episode: Episode;
}
const EpisodeThumbnail: React.FC<ThumbnailProps> = ({ episode }) => {
  const getFormattedThumbUrl = (url: string) => {
    const baseUrl = url.split("/revision")[0];
    return baseUrl;
  };
  const formatedUrl = getFormattedThumbUrl(episode.data.thumbnail_url);

  return (
    <div>
      <img src={formatedUrl} />
    </div>
  );
};

export default EpisodeThumbnail;
