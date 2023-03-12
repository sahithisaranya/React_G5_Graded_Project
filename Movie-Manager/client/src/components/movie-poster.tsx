import React from 'react';

interface Props {
  posterName: string;
}

const MoviePoster: React.FC<Props> = ({ posterName }) => {
  const imagePath = require(`./Images/img/${ posterName }`);

  return (
    <img src={imagePath.default} alt={ posterName } />
  );
}

export default MoviePoster;