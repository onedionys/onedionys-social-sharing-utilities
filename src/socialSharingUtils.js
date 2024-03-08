function shareOnFacebook(url) {
    return `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
  }
  
  function shareOnTwitter(url, text) {
    return `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
  }
  
  // Add more functions for other social sharing platforms if needed
  
  module.exports = {
    shareOnFacebook,
    shareOnTwitter
  };
  