
module.exports = function(txt,reg){
  if(reg.global) return txt.match(reg).length;
  return txt.match(reg) ? 1 : 0;
};

