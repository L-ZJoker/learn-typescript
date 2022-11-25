/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                神兽保佑            永无BUG
 * 
 * @Author: ZJoker
 * @Date: 2022-11-24 11:38:54
 * @LastEditTime: 2022-11-24 11:44:20
 * @LastEditors: ZJoker
 * @Description: 
 * @FilePath: \learn-typescript\数据类型\function\callSignatures.ts
 * 生活百般滋味，人生需要笑对
 */


// 调用签名，实际上一个object type, 包含了 properties of function 和 function
// 在对function声明类型时和函数表达式类型() => void略有不同，这时的函数类型被写作 ():void
type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

// 上边的例子来自官方
function foo(num: number): boolean{
  return !!num
}

foo.description = 'foo'

doSomething(foo)


type callSignatures = {
  person: string,
  (): string
}

const sayHello = (fn: callSignatures) => {
  console.log(`${fn()} ${fn.person}`);
}
const Hello = () => 'Hello'
Hello.person = 'ZJoker'

sayHello(Hello)

export {}