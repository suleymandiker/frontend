import React from 'react';
import './Suggestions.css';

const Suggestions = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Öneriler</h1>
      </div>
      <ul className="recommendations">
        <li>Siz Ne Biçim Yazar – Sınız? (Bir Soru, Bir Cevap, Biraz Da Şarap)</li>
        <li>Yarım Saate Ordayım. Sürse Sürse Ne Kadar Sürer Ki Zaten?</li>
        <li>Bir Yabancı İle Aynı Evde Yaşamak: Sen Makarnayı Haşla, Salatayı Ben Yaparım.</li>
        <li>Bizden Çiçek Olmaz</li>
        <li>Cennet Ve Cehennem Olmasaydı!</li>
        <li>Hobi Edinmek İsteyenlere Eğlenceli Ve İlginç Hobi Fikirleri</li>
        <li>İnsan Neden Yazar Ki? | Yazın İnsanların Ortak Noktası Nedir?</li>
        <li>İçimizdeki Yalancı | İnsan En Az Kendine Nankör, En Çok Kendine Yalancıdır!</li>
      </ul>
      <div className="footer">
        <span>Kategori: 26</span>
        <span>Yazı: 324</span>
        <span>Yorum: 2154</span>
      </div>
    </div>
  );
};

export default Suggestions;
