module.exports = function(source) {
  console.log('■■■■■■■■■■■ This is baz-loader ■■■■■■■■■■');
  return `export default ${ JSON.stringify(source) }`;
};
