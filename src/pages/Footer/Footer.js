import { useContext } from 'react';
import FooterStyle from '../../Styles/Footer.module.css';
import GlobalContext from '../Context/globalContext';

function Footer() {
  const { videoInfo } = useContext(GlobalContext);

  return (
    <>
      <div className={FooterStyle.container}>
        {videoInfo.video_url && (
          <video src={videoInfo.video_url} controls></video>
        )}
        <h1>Çevrimiçi video indir</h1>
        <h3>
          Not: dosya indirme ve kaydetme ile ilgili ayrıntıları görmek ve bu
          kaynaktan dosya indirmek için web kaynağının adını tıklayınız.
        </h3>
        <div className={FooterStyle.external}>
          <ul>
            <li>
              <a href="#top" className={FooterStyle.twitter}>
                Twitter
              </a>
            </li>
            <li>
              <a href="#top" className={FooterStyle.facebook}>
                Facebook
              </a>
            </li>
            <li>
              <a href="#top" className={FooterStyle.instagram}>
                instagram
              </a>
            </li>
            <li>
              <a href="#top" className={FooterStyle.youtube}>
                Youtube
              </a>
            </li>
          </ul>
        </div>

        {videoInfo.latest_videos.length > 0 && (
          <div className={FooterStyle.content}>
            <h2>Son İndirilen videolar</h2>
            <ul>
              {videoInfo.latest_videos.reverse().map((video, index) => (
                <li key={index}>
                  {/* <a href={video}>{video}</a> */}
                  <video src={video} controls></video>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Footer;
