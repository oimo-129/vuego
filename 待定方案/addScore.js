// file: addScore.js

const students = ['小明', '小芳', '小刚', '小丽', '小强'];
const scores = [66, 77, 88, 92, 73];

//这个函数设计思路很值得借鉴
// 将学生和成绩映射到一个对象里
function addStu_Scor(target, stuArr, scoreArr) {
  stuArr.forEach((name, idx) => {
    target[name] = scoreArr[idx];
  });
}

const mytest = {};
addStu_Scor(mytest, students, scores);

console.log('统计结果：');
console.log(mytest);

//这边可以完善，做成js使用的表格