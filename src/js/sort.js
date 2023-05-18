export default function sortUnits(units) {
  units.sort((a, b) => b.health - a.health);
  return units;
}

const heroesBefore = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
sortUnits(heroesBefore);
