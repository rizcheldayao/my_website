function getSite(val) {
  switch (val) {
    case 'blog':
      window.open('https://rizcheldayaoblog.wordpress.com/');
      break;
    case 'website':
      window.open('https://github.com/rizcheldayao/personal-website');
      break;
    case 'babel':
      window.open('https://github.com/rizcheldayao/babel_setup');
      break;
    case 'react':
      window.open('http://codepen.io/rizcheldayao/pen/jVPPPR?editors=1010');
      break;
    case 'api':
      window.open('https://github.com/rizcheldayao/api-project');
      break;
    case 'resume':
      window.open('https://www.linkedin.com/in/rizchel-dayao-425a3243');
      break;
    default:
      return;
  }
}