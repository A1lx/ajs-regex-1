import Validator from "../Validator";

test.each([
  ['na_me-name', true],
  ['name-name0', false],
  ['name00name', true],
  ['name0000name', false]
])('testing Validator', (name, result) => {
  const val = new Validator();
  expect(val.validateUsername(name)).toBe(result);
});