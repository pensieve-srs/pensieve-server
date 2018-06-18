const Session = require('../../../src/models/session');
const fixtures = require('../../fixtures/sessions');

const { cards, user1, sessions } = fixtures;

describe('Session model', () => {
  describe('get', () => {
    it('should return single session object for user', async () => {
      const session = await Session.get(sessions[0]._id, user1);

      expect(session._id).to.deep.equal(sessions[0]._id);
    });
    it('should return populated card objects for session', async () => {
      const session = await Session.get(sessions[0]._id, user1);

      expect(session.cards[0]._id).to.deep.equal(cards[0]._id);
      expect(session.cards[1]._id).to.deep.equal(cards[1]._id);
    });
  });
  describe('new', () => {
    it('should create single session object for user', async () => {
      const type = 'learn';
      const session = await Session.new(type, user1, cards);

      expect(session.cards[0]._id).to.exist;
      expect(session.type).to.equal(type);
      expect(session.user).to.deep.equal(user1._id);
    });
  });
});
