import React from 'react';
import './App.css';

const MyComponent = () => {
    return (
      <div className='image-container'>
        <div className='item'>
            <img id="pic1" src={require('./assets/pic1.png')} alt="pic1" />
            <img id="pic3" src={require('./assets/pic3.png')} alt="pic3" />
            <div className='text-container'>
                <h3>Miasta, w których pojawia się najwięcej ofert pracy.</h3>
                <p>Miastami, które najczęściej przewijają się w ogłosznich o pracę są - tak jak widać na załączonym wykresie - w dużej mierze największe polskie miasta, 
                stolice wojewódzkie (takie jak Warszawa, Gdańsk, czy Łódź) oraz okoliczne miejscowości (takie jak Gdynia i Sopot), których dużą część stanowią Parki naukowo-technologiczne lub prężnie rozwijające się firmy.
                Widoczne jest jednak, że największą czcionką napisana jest nazwa polskiej stolicy, co oznacza tyle, że w tamtym rejonie
                jest najwięcej miejsc pracy i jest to najczęstsza lokalizacja ustawiana przy publikacji ogłoszeń o pracę.</p>
            </div>
        </div>
        <div className="item">
          <img id="pic2" src={require('./assets/pic2.png')} alt="pic2" />
          <img id="pic6" src={require('./assets/pic6.png')} alt="pic6" />
          <div className='text-container'>
          <h3>Technologie, do których poszukuje się najwięcej specjalistów.</h3>
                <p>Na ostatnim wykresie zaprezentowana została analiza technologii, których znajomość jest wymagana przez pracodawców. Na pierwszy 
                    rzut oka widać, że największe zapotrzebowanie jest na znawców języka SQL, następnie Pythona, C i Javy, a także znajomość technologii Git. 
                    Reszta języków programowania jest mniej więcej podobnej wielkości, co znaczy, że rynek tych względnie mniej popularnych, stoi na bardzo
                    wyrównanym poziomie.
                </p>
            </div>
        </div>
        
        <div className="item">
            <img id="pic4" src={require('./assets/pic4.png')} alt="pic4" />
            <div className='text-container'>
                <h3>Najczęściej pojawiające się nazwy stanowisk w ofertach pracy.</h3>
                <p>Załączony wykres przedstawia najczęściej pojawiające się stanowiska, na jakie poszukiwani są pracownicy. Podobnie jak w przypadku Warszawy, największą czcionką
                    zapisane zostały nazwy Engineer i Developer. Świadczy to o tym, że największe zapotrzebowanie na rynku pracy it jest właśnie na deweloperów i inżynierów,
                    następnie poszukiwani są specjaliści i administratorzy. Dosyć dużymi literami zostało zapisane słowo sernior, które jest wyznacznikiem wysokości stanowiska
                    w hierarchii. Stąd można wywnioskować, że poszukiwani są ludzie z doświadczeniam - na stanowisko, np. Senior Developera.
                </p>
            </div>
        </div>
        <div className="item">
        <img id="pic5" src={require('./assets/pic5.png')} alt="pic5" />
        <div className='text-container'>
                <h3>Najczęściej pojawiające się stopnie stanowisk w ofertach pracy.</h3>
                <p>Podobnie jak na powyższym wykresie, gdzie przeanalizowane zostały także stopnie w hierarchii stanowisk pracy, tutaj mamy do czynienia
                    tylko i wyłącznie z poszukiwanym poziomem doświadczenia przyszłego potencjalnego pracownika. Co się rzuca w oczy, to to, że najwięcej
                    na rynku pracy IT potrzeba szerokopojętych specjalistów, midów oraz regularów. Mniej natomiast porzeba ekspertów, koordynatorów i praktykantów,
                    najmniej natomiast dyrektorów i asystentów.
                </p>
            </div>
        </div>
      </div>
    )
  }
  export default MyComponent;