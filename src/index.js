import Resolver from '@forge/resolver';

const resolver = new Resolver();

resolver.define('getText', (req) => {
  console.log(req);
  let arr = [];


  // return '¡Hola mundo! 🌍';
  return '';
});

export const handler = resolver.getDefinitions();
