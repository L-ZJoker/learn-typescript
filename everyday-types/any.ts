/*
 * 
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃　
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug　　
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 * 
 * @Author: ZJoker
 * @Date: 2022-11-21 14:11:01
 * @LastEditTime: 2022-11-21 14:12:13
 * @LastEditors: ZJoker
 * @Description: 
 * @FilePath: \learn-typescript\数据类型\any.ts
 * 生活百般滋味，人生需要笑对
 */

let message: any = 'message'
console.log(message);
message = 123
console.log(message);
message = true
console.log(message);
message()

let num: number
num = message
export {}