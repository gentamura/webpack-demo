module.exports = function(source) {
  console.log('■■■■■■■■■■■ This is image-loader ■■■■■■■■■■');
  return `export default ${ JSON.stringify(source) }`;
};
