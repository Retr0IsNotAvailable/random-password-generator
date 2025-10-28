const chars = {
  upperCase: 'QWERTYUIOPLKJHGFDSAZXCVBNM',
  lowerCase: 'qwertyuioplkjhgfdsazxcvbnm',
  numbers: '0123456789',
  symbols: '#$%&()*+-/:;<=>?@[]^_{|}~'
}

chars['allChars'] = chars.upperCase + chars.lowerCase
  + chars.numbers + chars.symbols;

export default chars;