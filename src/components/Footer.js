import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="top">
            <div className="text">
                <h1>Meram Belediyesi</h1>
                <p>Tevazu, Samimiyet, Gayretle</p>
            </div>
            <div>
              <a href=""> <i className="fa-brands fa-facebook-square"></i></a>
              <a href=""> <i className="fa-brands fa-instagram-square"></i></a>
              <a href=""> <i className="fa-brands fa-twitter-square"></i></a>
             
            </div>
        </div>

        <div className="bottom">
            <div>
              <h4>Hizmetler</h4>
              <a href="/">İyi Ki Doğdun Bebek</a>
              <a href="/">Vergi Takvimi</a>
              <a href="/">Sosyal Tesisler</a>
              <a href="/">Çalışma yöntemleri</a>
              <a href="/">Planlamalar</a>
            </div>
            <div>
              <h4>Bizim Meram</h4>
              <a href="/">Üretken Topraklar</a>
              <a href="/"> Sosyal Yardım</a>
              <a href="/">Meram adres ve telefon </a>
              <a href="/"> Talepler</a>
              <a href="/"> Nöbetçi Eczaneler </a>
              <a href="/"> Meram’da spor</a>
              <a href="/">Projeler</a>
            </div>
            <div>
              <h4>Yardım</h4>
              <a href="/">Sıkça Sorulan Sorular
</a>
              <a href="/">Destek</a>
              <a href="/">İletişim</a>
            </div>
            <div>
              <h4>Diğer</h4>
              <a href="/">Kullanım Koşulları</a>
              <a href="/">Gizlilik Politikası</a>
              <a href="/">Lisanslar</a>
            </div>
        </div>
    </div>
  );
};
export default Footer;