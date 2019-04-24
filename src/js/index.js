function getSite(val) {
  switch (val) {
    case 'blog':
      window.open('https://medium.com/@rizchelwood');
      break;
    case 'website':
      window.open('https://github.com/rizchelwood/personal-website');
      break;
    case 'javascript':
      window.open('https://twobecomewood.com/');
      break;
    case 'react':
      window.open('https://github.com/rizchelwood/react-location-api-example');
      break;
    case 'api':
      window.open('https://github.com/rizchelwood/anagramsAPI');
      break;
    case 'react-redux':
      window.open('https://github.com/IBM/deploy-react-kubernetes');
      break;
    default:
      return;
  }
}
