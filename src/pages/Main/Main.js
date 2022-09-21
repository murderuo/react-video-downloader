import MainStyle from '../../Styles/Main.module.css';
import { useState } from 'react';
import axios from 'axios';
const TOKEN = process.env.REACT_APP_BEARER_TOKEN;

function Main() {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const handleInputChange = e => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
    setError('');
  };

  const handleInputSubmit = () => {
    if (inputValue.includes('twitter.com')) return getVideoUrl(inputValue);
    setError('Lütfen geçerli bir twitter linki giriniz.');
    // setUrl(inputValue);
  };

  const getVideoUrl = async inputValue => {
    const _token = TOKEN;
    const tweetInfo = await urlCheck(inputValue);
    const header = { Authorization: _token };
    const requestUrl = `https://api.twitter.com/1.1/statuses/show/${tweetInfo.tweetId}.json?&tweet_mode=extended`;
    const response = await axios.get(requestUrl, { headers: header });
    const videoUrl =
      response.data.extended_entities.media[0].video_info.variants;
    console.log(videoUrl);
  };

  const urlCheck = input => {
    //https://twitter.com/i/status/1572542444176289794
    const tweetData = { user: '', tweetId: '' };

    const tweetUrl = inputValue.split('?', 1)[0];
    // console.log(tweetUrl);
    tweetData.user = tweetUrl.split('/')[3];
    tweetData.tweetId = tweetUrl.split('/')[5];
    return tweetData;
  };

  return (
    <>
      <main className={MainStyle.main}>
        <div className={MainStyle.container}>
          <div className={MainStyle.inputdiv}>
            <h2>Bir video indirmek için sadece bağlantıyı girin!</h2>
            <input
              type="text"
              placeholder="Video bağlantınızı buraya yapıştırın"
              value={inputValue}
              onChange={handleInputChange}
            />
            <h3>{error}</h3>
            <h5>
              Hizmetimizi kullanarak Hizmet Şartlarımızı ve Gizlilik
              Politikamızı kabul etmiş olursunuz
            </h5>
          </div>
          <div className={MainStyle.content}>
            <h2>Medya dosyalarını indirmek için Şimdi indir' e tıklayın!</h2>
            <button onClick={handleInputSubmit}>
              Şimdi İndir
              <i className="fa-regular fa-circle-down" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
