import Immutable from 'immutable';

function hydrate(usePrevious = null) {
  if(!usePrevious){
    return {
      mapStyle: null,
      userInterface: Immutable.fromJS({
        activeLayer: 'lotsareaburden-v102',
        zones: null,
        solarCoverage: 60,
        solarEfficiency: 15,
        eui: 40,
        minRentBurden: 0,
        popup: null
      })
    };
  }
}

const InitialState = hydrate();
export default InitialState;
