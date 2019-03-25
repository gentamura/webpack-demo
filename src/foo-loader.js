module.exports = function(source) {
  console.log('■■■■■■■■■■■ This is foo-loader ■■■■■■■■■■');
  return `export default ${ JSON.stringify(source) }`;
};
