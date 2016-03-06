import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /', function(assert) {
  visit('/');

  andThen(() => {
    assert.equal(currentURL(), '/');
    assert.equal(find('.test-result').text(), 'Howdy');
  });
});
