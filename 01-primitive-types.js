"use strict";
// 変数の宣言にはletが必要
// let (変数名): (型名) = 値
var userName = "山田太郎";
var age = 20;
var isAdult = true;
var test = "AAA";
console.log(userName);
console.log(age);
console.log(isAdult);
console.log(test);
userName = "田中花子";
// userName = 1 //　userNameがstring型なのでエラーになる
age = 30;
// age = "30" // エラーになる
// anyは何でも代入することが出来てしまう
test = "テスト";
test = 0;
test = false;
// 型宣言は省略も可能
var testName = "テストネーム";
// testName = 0 // エラーになる
