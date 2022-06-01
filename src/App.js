import './App.css';
import airplane from './airplane.png';
import { dataNYC } from "./dataNYC";
import { dataDC } from "./dataDC";
import { dataChicago } from "./dataChicago";
import { dataLV } from "./dataLV";
import { dataSF } from "./dataSF";
import { dataAtl } from "./dataAtl";
import { useState } from 'react';

import CarouselChicago from './CarouselChicago';
import CarouselDC from './CarouselDC';
import CarouselNYC from './CarouselNYC';
import CarouselLV from './CarouselLV';
import CarouselSF from './CarouselSF';
import CarouselAtl from './CarouselAtl';

function App() {
  const [itemsNYC] = useState(dataNYC);
  const [itemsDC] = useState(dataDC);
  const [itemsChicago] = useState(dataChicago);
  const [itemsLV] = useState(dataLV);
  const [itemsSF] = useState(dataSF);
  const [itemsAtl] = useState(dataAtl);

  let length = itemsNYC.length + itemsDC.length + itemsChicago.length 
  + itemsLV.length + itemsSF.length + itemsAtl.length;
  const [count, setCount] = useState(length);

  const deleteCity1 = () => {
    document.querySelector('#nyc').style.display = 'none';

    setCount(count => {
      count--;
      return count;
    })  
  }

  const deleteCity2 = () => {
    document.querySelector('#dc').style.display = 'none';

    setCount(count => {
      count--;
      return count;
    })
  }

  const deleteCity3 = () => {
    document.querySelector('#chicago').style.display = 'none';

    setCount(count => {
      count--;
      return count;
    })
  }

  const deleteCity4 = () => {
    document.querySelector('#lv').style.display = 'none';

    setCount(count => {
      count--;
      return count;
    })
  }

  const deleteCity5 = () => {
    document.querySelector('#sf').style.display = 'none';

    setCount(count => {
      count--;
      return count;
    })
  }

  const deleteCity6 = () => {
    document.querySelector('#atl').style.display = 'none';

    setCount(count => {
      count--;
      return count;
    })
  }
  

  const deleteAll = () => {
    const container = document.querySelector('#allCities');
    container.style.display = 'none';

    setCount(count => {
      return count = 0;
    })
  }

  const repeatFlight = () => {
    const airplane = document.querySelector('#airplane');

    airplane.classList.add('airplane');
  }


  return (
    <div className='App-main-container'>
      <div className='App-header-container'>
        <h1 className='App-header'>{count} <span className='App-us'>US</span> Cities to Visit</h1>
        <img className='App-airplane' id='airplane' src={airplane} alt='plane' onClick={repeatFlight}/>
      </div>

          <div className='App-cities-container' id='allCities' >
              <div className='App-cities'>

                    <div className='App-eachCity-container' id='nyc'> 
                      <CarouselNYC nyc={itemsNYC}/>
                      <button className='Carousel-remove-btn' onClick={() => deleteCity1()}>Visited</button> 
                    </div>

                    <div className='App-eachCity-container' id='dc'>
                      <CarouselDC dc={itemsDC}/>
                      <button className='Carousel-remove-btn' onClick={() => deleteCity2()}>Visited</button> 
                    </div>

                    <div className='App-eachCity-container' id='chicago'> 
                      <CarouselChicago chicago={itemsChicago}/>
                      <button className='Carousel-remove-btn' onClick={() => deleteCity3()}>Visited</button> 
                    </div>

                    <div className='App-eachCity-container' id='lv'> 
                      <CarouselLV lv={itemsLV}/>
                      <button className='Carousel-remove-btn' onClick={() => deleteCity4()}>Visited</button> 
                    </div>

                    <div className='App-eachCity-container' id='sf'> 
                      <CarouselSF sf={itemsSF}/>
                      <button className='Carousel-remove-btn' onClick={() => deleteCity5()}>Visited</button> 
                    </div>

                    <div className='App-eachCity-container' id='atl'> 
                      <CarouselAtl atl={itemsAtl}/>
                      <button className='Carousel-remove-btn' onClick={() => deleteCity6()}>Visited</button> 
                    </div>
            </div>
            <button className='App-deleteAll-btn' onClick={() => deleteAll()}>ALL VSITED</button>
          </div>
    </div>
  )
}

export default App;