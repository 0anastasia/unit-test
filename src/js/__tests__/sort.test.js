import sortUnits from '../sort';

test('sort tobe mistake', () => {
  const heroesBefore = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const heroesAfter = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortUnits(heroesBefore);
  expect(result).not.toBe(heroesAfter);
});

test('sort toEqual success', () => {
  const heroesBefore = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];
  const heroesAfter = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  const result = sortUnits(heroesBefore);
  expect(result).toEqual(heroesAfter);
});
