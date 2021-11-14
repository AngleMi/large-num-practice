// 大整数加法实现逻辑
export default function add(a, b){ // a, b是字符串类型
  let i = a.length-1;
  let j = b.length-1;
  let carry = 0;
  let res = '';
  while(i >= 0 || j >= 0){
      let x = 0;
      let y = 0;
      let sum;
      if(i >= 0){
          x = a[i] - '0';
          i--;
      }
      if(j >=0 ){
          y = b[j] - '0';
          j--;
      }

      sum = x + y + carry;

      if(sum >=10 ){
          carry = 1;
          sum -= 10;
      } else {
          carry = 0;
      }

      res = sum + res;
  }
  //如果有进位的话需要把进位进行拼接
  if(carry){
    res = carry + res;
  }
  return res;
}

// add('999', '1')