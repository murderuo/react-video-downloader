import MainStyle from "../../Styles/Main.module.css";
import { useState, useContext } from "react";

import axios from "axios";
import GlobalContext from "../Context/globalContext";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { videoInfo, setVideoInfo } = useContext(GlobalContext);

  console.log(videoInfo);

  const handleInputChange = (e) => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
    setError("");
  };

  const handleInputSubmit = () => {
    if (inputValue.includes("twitter.com")) return getVideoUrl(inputValue);
    setError("Lütfen geçerli bir twitter linki giriniz.");
    // setUrl(inputValue);
  };

  const getVideoUrl = async () => {
    setLoading(true);
    const tweetInfo = await urlCheck();
    const url = `https://twitter-downloader-backend.herokuapp.com/${tweetInfo.tweetId}`;
    // const url = `${tweetInfo.tweetId}`;
    const config = {
      method: "get",
      url: url,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": "true",
      },
    };

    const response = await axios.get(config);
    console.log(response.data);
    setVideoInfo({
      ...videoInfo,
      video_url: response.data.media_url,
      latest_videos: response.data.latest_videos,
    });
    setLoading(false);
  };

  const urlCheck = () => {
    //https://twitter.com/i/status/1572542444176289794
    const tweetData = { user: "", tweetId: "" };
    const tweetUrl = inputValue.split("?", 1)[0];
    // console.log(tweetUrl);
    tweetData.user = tweetUrl.split("/")[3];
    tweetData.tweetId = tweetUrl.split("/")[5];
    return tweetData;
  };

  return (
    <>
      <main className={MainStyle.main}>
        <div className={loading ? MainStyle.loadblur : MainStyle.container}>
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
            <button onClick={handleInputSubmit} disabled={loading}>
              {loading ? "İndiriliyor..." : "Şimdi indir"}
              <i className="fa-regular fa-circle-down" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
