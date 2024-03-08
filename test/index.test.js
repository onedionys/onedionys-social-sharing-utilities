const assert = require('assert');
const socialSharingUtils = require('../src/socialSharingUtils');

describe('Social Sharing Utilities', function() {
  describe('#shareOnFacebook()', function() {
    it('should return a URL to share on Facebook', function() {
      const url = 'https://example.com';
      const expected = 'https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fexample.com';
      assert.strictEqual(socialSharingUtils.shareOnFacebook(url), expected);
    });
  });

  describe('#shareOnTwitter()', function() {
    it('should return a URL to share on Twitter', function() {
      const url = 'https://example.com';
      const text = 'Check out this link';
      const expected = 'https://twitter.com/intent/tweet?url=https%3A%2F%2Fexample.com&text=Check%20out%20this%20link';
      assert.strictEqual(socialSharingUtils.shareOnTwitter(url, text), expected);
    });
  });

  // Add more tests for other social sharing platforms if needed
});
