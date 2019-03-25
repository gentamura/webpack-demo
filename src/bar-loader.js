module.exports = function(source) {
  console.log('■■■■■■■■■■■ This is bar-loader ■■■■■■■■■■');
  return `export default ${ JSON.stringify(source) }`;
};
