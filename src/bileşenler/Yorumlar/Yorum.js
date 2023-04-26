// Bu dosyayı değiştirmenize gerek yok
import React from 'react';

const Yorum = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumBilesen } = props;

  return (
    <div className='comment-text'>
      <span className='user'>{yorumBilesen.username}</span>
      {' '}
      <span className='comment'>{yorumBilesen.text}</span>
    </div>
  );
};


export default Yorum;
