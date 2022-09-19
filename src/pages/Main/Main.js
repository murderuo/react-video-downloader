import MainStyle from '../../Styles/Main.module.css';

function Main() {
  return (
    <>
      <main className={MainStyle.main}>
        <div className={MainStyle.container}>
          <div className={MainStyle.inputdiv}>
            <h2>Bir video indirmek için sadece bağlantıyı girin!</h2>
            <input
              type="text"
              placeholder="Video bağlantınızı buraya yapıştırın"
            />
            <h5>
              Hizmetimizi kullanarak Hizmet Şartlarımızı ve Gizlilik
              Politikamızı kabul etmiş olursunuz
            </h5>
          </div>
          <div className={MainStyle.content}>
            <h2>Medya dosyalarını indirmek için Şimdi indir' e tıklayın!</h2>
            <button>
              Şimdi İndir
              <i class="fa-regular fa-circle-down" />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Main;
