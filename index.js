
const scuberHqLocation= 42;
const distanceFromHqInBlocks = function(pickUpLocation){
  return Math.abs(pickUpLocation - scuberHqLocation);
};
const distanceFromHqInFeet = function(pickUpLocation){
  return Math.abs(pickUpLocation - scuberHqLocation) * 264;
  };
  const distanceTravelledInFeet = function (locationA, locationB){
    return Math.abs(locationA - locationB) * 264;

  };
  const calculatesFarePrice = function (start, destination){
    const distanceSqFeet = Math.abs (destination - start) * 264;
    let fare; 
     if (distanceSqFeet <= 400){
      fare = 0;
      return fare;
     } else if (distanceSqFeet > 400 && distanceSqFeet < 2000) {
      fare = (distanceSqFeet - 400 ) * (2 / 100);
      return fare;
     }else if (distanceSqFeet > 2000 && distanceSqFeet < + 2500){
      fare = 25;
      return fare;
     } else if (distanceSqFeet > 2500){
      return "cannot travel that far";
     }
  }

