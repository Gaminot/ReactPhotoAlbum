import React from 'react';
import AlbumThumb from './AlbumThumb';

const Albums = props => {
  // возвращаем каждому альбому его свойства
  const albums = props.albums.map((album, i) => {
    return (
      <AlbumThumb name={album.name} img={album.photos[0].img} id={i} key={i} />
    );
  });
  return <div className="thumbContainer">{albums}</div>;
};

export default Albums;
