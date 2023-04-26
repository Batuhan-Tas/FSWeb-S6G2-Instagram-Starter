import React from 'react';
import Yorumlar from '../Yorumlar/Yorumlar';
import BeğenBölümü from './BeğenBölümü';
import GönderiBaşlığı from './GönderiBaşlığı';

const Gönderi = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderi, gonderiyiBegen } = props;

  return (
    <div className='post-border'>
      <GönderiBaşlığı
        username={gonderi.username}
        thumbnailUrl={gonderi.thumbnailUrl}
      />
      <div className='post-image-wrapper'>
        <img
          alt='post thumbnail'
          className='post-image'
          src={gonderi.imageUrl}
        />
      </div>
      {/* BeğenBölümü düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BeğenBölümü gonderiyiBegen={() => gonderiyiBegen(gonderi.id)}
      begeniGonder = {gonderi.likes}/>
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumGonder = {gonderi.comments } />
      
    </div>
  );
};

export default Gönderi;
