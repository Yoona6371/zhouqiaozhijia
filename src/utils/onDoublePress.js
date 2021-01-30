let times = 0;
export function onDoublePress() {
  times++;
  if (times === 1) {
    let timeID = setTimeout(() => {
      times = 0;
      clearTimeout(timeID);
      return false;
    }, 300);
  } else if (times === 2) {
    times = 0;
    return true;
  }
}

// eg
// import { onDoublePress } from '...'
// <TouchableOpacity onPress={this.doublePress}></TouchableOpacity>
// doublePress=()=>{
//   if(onDoublePress){
//     // 双击执行的内容
//   }
// }
