import "./TripStyles.css";
import TripData from "./TripData";


function Trip() {
  return (
    <div className="trip">
      <h1 style={{marginTop:"80px"}}>Hizmetlerimiz</h1>
      <p style={{fontSize:"20px",fontWeight:"300",marginBottom:"70px"}}>Birçok Tesisimizi Keşfedebilirsiniz</p>
      <div className="tripcard">
         <TripData 
            image={"https://www.ureticihaber.com/files/uploads/news/default/20240202-baskan-kavus-meram-gelecege-cok-daha-guclu-hazirlanacak-419691-5164e90049181f93fd03.jpg"}
            heading="Başkanın Mesajı"
            text=" Birlikte Yönetiyoruz !                                                                                                                                        Seçim çalışmalarımızda bir söz verdik ve seçimlerden sonra da sürekli hemşehrilerimizin arasında olacağımızı, onların görüş ve önerileri doğrultusunda Meram’ı birlikte yönetmek istediğimizi söylemiştik. Şimdi yine onların arasındayız ve beraber olmaya devam edeceğiz.    Öncelikle, şehrimizin bugüne kadar elde ettiği başarıları ve kat ettiği mesafeyi kutlamak istiyorum. Şehrimiz, geçmişten bugüne, birlik ve beraberlik içinde, çalışkan ve vizyoner insanlarının çabalarıyla büyük bir ilerleme kaydetmiştir.Önümüzdeki dönemde daha büyük ve daha iddialı adımlar atmamız gerektiğini de biliyoruz.  Sanat, spor, festivaller gibi etkinlikleri destekleyerek şehrimizin kültürel hayatını zenginleştirecek ve vatandaşlarımızın bir araya gelerek etkileşimde bulunmasını sağlayacağız.
            
            Sevgili vatandaşlarımız, hep birlikte el ele vererek, şehrimizi daha yaşanabilir, daha sürdürülebilir ve daha güçlü bir geleceğe taşıyacağımıza inanıyorum. Bizler, sizlerin desteğiyle, bu hedeflere ulaşmak için kararlılıkla çalışacağız.
            
            Sağlıklı, mutlu ve başarılı bir gelecek diliyorum.
            
            Teşekkür ederim.

            "
         />
         <TripData 
            image={"https://static.daktilo.com/sites/1085/uploads/2023/10/31/konya-ili-meram-belediye-baskanligi-10-memur-alacak-1698730763.jpg"}
            heading="Gelişen Belediye"
            text="Gelişen belediyecilik, öncelikle toplumun ihtiyaçlarına odaklanan ve vatandaş odaklı bir yaklaşımı benimsemektedir. Vatandaş memnuniyeti ve toplumsal refahı artırmak için çeşitli hizmetler sunan belediyeler, bu hizmetleri etkili bir şekilde planlayarak ve uygulayarak kentlerin daha yaşanabilir ve sürdürülebilir hale gelmesine katkıda bulunmaktayız. Gelecekte, gelişen belediyecilik yaklaşımlarıyla birlikte kentlerimizin daha güzel ve daha sağlıklı bir geleceğe doğru ilerlemesini umut ediyoruz.Teknolojik gelişmeler, belediyelerin hizmet sunumunda devrim yaratacağız. Akıllı şehir uygulamaları, sensörler, veri analizi ve yapay zeka gibi teknolojiler, altyapıyı daha verimli bir şekilde kullanmayı sağlayarak enerji tasarrufu, trafik yönetimi, atık yönetimi gibi alanlarda önemli kazanımları hedefliyoruz. Ayrıca, mobil uygulamalar ve çevrimiçi hizmetler, vatandaşların belediyelerle etkileşimini kolaylaştırarak hizmetlerin erişilebilirliğini arttıracağız .
"
         />
         <TripData 
            image={"https://www.meram.bel.tr/upload/medya/1_353.jpg"}
            heading="Dinamik & Üretken"
            text=" Üretkenliği artırmak için çeşitli stratejiler ve yaklaşımlar bulunmaktayız.Birlikte çalışma, fikir alışverişi ve bilgi paylaşımı, belediyemizdeki her birim arasında güçlü bir sinerjimiz bulunmaktadır.
            Teknolojik araçlar, üretkenliği artırmak için güçlü bir araçtır. Dijital platformlar, otomasyon ve verimlilik araçları, belediyemizin işleyişini daha akıllı ve daha hızlı hale getirebilir. Bu nedenle, teknolojiyi doğru şekilde kullanarak, iş süreçlerimizi optimize etmeli ve verimliliği artırmalıyız.
            
            Eğitim ve gelişim, üretkenliği desteklemenin önemli bir parçasıdır. Çalışanlarımıza sürekli eğitim ve gelişim fırsatları sunarak, yeteneklerini ve bilgi birikimlerini artırabiliriz. Bu da belediyemizin daha yetenekli ve daha etkili bir iş gücüne sahip olmasını sağlayacaktır.
            
            Sonuç olarak, üretkenlik belediyemizin başarısı için kritik bir öneme sahiptir. Hep birlikte, daha etkin iletişim, daha iyi işbirliği ve daha akıllı teknoloji kullanımı ile üretkenliği artırabiliriz. Belediyemizin hizmetlerini daha iyi ve daha verimli bir şekilde sunarak, vatandaşlarımızın yaşam kalitesini artırabilir ve şehrimizi daha güzel bir yer haline getirebiliriz. Birlikte çalışarak, daha üretken bir gelecek inşa etmek için el ele verelim."
         />
       </div>
    </div>
  );
}

export default Trip;
