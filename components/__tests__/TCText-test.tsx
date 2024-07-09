import * as React from 'react';
import renderer from 'react-test-renderer';

import { TCText } from '../TCText';

it(`renders correctly`, () => {
  const tree = renderer.create(<TCText>Snapshot test!</TCText>).toJSON();

  expect(tree).toMatchSnapshot();
});
