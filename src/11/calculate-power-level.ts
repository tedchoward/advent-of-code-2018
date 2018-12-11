export function calculatePowerLevel(x: number, y: number, gridSerial: number) {
  const rackID = x + 10;

  let powerLevel = (rackID * y + gridSerial) * rackID;
  powerLevel = ((powerLevel % 1000) - (powerLevel % 100)) / 100;
  powerLevel -= 5;
  return powerLevel;
}
