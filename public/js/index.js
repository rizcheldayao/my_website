function getSite(val) {
  switch (val) {
    case 'blog':
      window.open('https://rizcheldayaoblog.wordpress.com/');
      break;
    case 'website':
      window.open('https://github.com/rizcheldayao/personal-website');
      break;
    case 'javascript':
      window.open('http://codepen.io/rizcheldayao/full/ZLGede/');
      break;
    case 'react':
      window.open('http://codepen.io/rizcheldayao/full/jVPPPR/');
      break;
    case 'api':
      window.open('https://github.com/rizcheldayao/api-project');
      break;
    case 'hackademy':
      window.open('https://ha12--four4now.mybluemix.net');
      break;
    default:
      return;
  }
}
