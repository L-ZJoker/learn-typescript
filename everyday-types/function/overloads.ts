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
 * @Date: 2022-11-24 10:55:15
 * @LastEditTime: 2022-11-24 10:59:25
 * @LastEditors: ZJoker
 * @Description:
 * @FilePath: \learn-typescript\数据类型\overload.ts
 * 生活百般滋味，人生需要笑对
 */

function add(num1: number, num2: number): number

function add(str1: string, str2: string): string

function add(num: number, str: string, num2: number): number

function add(arg1: any, arg2: any, arg3?: any) {
  if (arg3) {
    return arg1 + arg2 + arg3
  } else {
    return arg1 + arg2
  }
}

const result1 = add(1, 2) // 3

const result2 = add('Hello ', 'ZJoker') // ZJoker

const result3 = add(5, '2', 2) // 522
typeof result3 // string
