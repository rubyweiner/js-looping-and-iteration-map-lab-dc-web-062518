function lowerCaseDrivers(drivers){
  return drivers.map(function(name) {return name.toLowerCase()});
}

function nameToAttributes(list) {
  return list.map(function (driver) {
    const fn = driver.split(' ')[0];
    const ln = driver.split(' ')[1];

    return {
      firstName: fn,
      lastName: ln };
    }
  );
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {return `${driver.name} is from ${driver.hometown}`});
}
