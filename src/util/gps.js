export function distance(elementOne, elementTwo) {
  // Source: http://www.guymon.de/wordpress/2010/01/25/entfernung-zwischen-zwei-latlong-werten-berechnen/
  const lat_1 = elementOne.latitude;
  const lat_2 = elementTwo.latitude;
  const lon_1 = elementOne.longitude;
  const lon_2 = elementTwo.longitude;
  const rho = 3960.0;
  const phi_1 = (90.0 - lat_1)*Math.PI/180.0;
  const phi_2 = (90.0 - lat_2)*Math.PI/180.0;
  const theta_1 = lon_1*Math.PI/180.0;
  const theta_2 = lon_2*Math.PI/180.0;
  const d = rho*Math.acos( Math.sin(phi_1)*Math.sin(phi_2)*Math.cos(theta_1 - theta_2) + Math.cos(phi_1)*Math.cos(phi_2) );
  return 1.609344*d;
}