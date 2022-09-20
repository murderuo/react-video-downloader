import FooterStyle from '../../Styles/Footer.module.css';

function Footer() {
  return (
    <>
      <div className={FooterStyle.container}>
        <h1>Çevrimiçi video indir</h1>
        <h3>
          Not: dosya indirme ve kaydetme ile ilgili ayrıntıları görmek ve bu kaynaktan dosya indirmek için web
          kaynağının adını tıklayınız.
        </h3>
        <div className={FooterStyle.external}>
          <ul>
            <li>
              <a href="#" className={FooterStyle.twitter}>
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className={FooterStyle.facebook}>
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className={FooterStyle.instagram}>
                instagram
              </a>
            </li>
            <li>
              <a href="#" className={FooterStyle.youtube}>
                Youtube
              </a>
            </li>
          </ul>
        </div>

        <div className={FooterStyle.content}>
          <h2>Son İndirilen videolar</h2>
          <ul>
            <li>Linkssssss</li>
            <li>Linkssssss</li>
            <li>Linkssssss</li>
            <li>Linkssssss</li>
            <li>Linkssssss</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
