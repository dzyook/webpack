function loader2(sourceCode) {
  console.log('join loader2');
  return sourceCode + `\n const loader2 = '嘿嘿嘿嘿'`;
}

module.exports = loader2;