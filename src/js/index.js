function getSite(val) {
  switch (val) {
    case 'blog':
      window.open('https://medium.com/@rizchel.a.dayao');
      break;
    case 'website':
      window.open('https://github.com/rizcheldayao/personal-website');
      break;
    case 'javascript':
      window.open('http://codepen.io/rizcheldayao/full/ZLGede/');
      break;
    case 'react':
      window.open('https://github.com/rizcheldayao/react-location-api-example');
      break;
    case 'api':
      window.open('https://github.com/rizcheldayao/anagramsAPI');
      break;
    case 'react-redux':
      window.open('https://github.com/rizcheldayao/react-redux-api-example');
      break;
    default:
      return;
  }
}
