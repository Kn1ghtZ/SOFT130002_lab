/*
1.
背景：
    每隔五秒运行一次函数直到某一整分钟停止，比如从20:55:45运行到20:56:00停止；
    或者运行10次，先到的为准。从1开始每过五秒，输入框内数值翻倍。初始值为1。
注意：
    你可以在函数 timeTest内部 和 timeTest外部 写代码使得该功能实现。
要求：
    ①要求使用JS闭包的方式使得计数实现局部私有，不可以在全局区域声明计数变量。
    ②使用console.log打印计数即可，到达一分钟提前停止也需要console.log相应的提示语句。
*/

function testTime() {
    var maxbel = 1;
    var changeTimes = 10;
    var startSecond = new Date().getSeconds();
    var newChangeTimes = parseInt((60 - startSecond) / 5);
    console.log(maxbel);
    // console.log(startSecond);
    function timeTest() {
        if (startSecond <= 10) {
            changeTimes--;
            maxbel *= 2;
            console.log(maxbel);
            if (changeTimes == 0) {
                clearInterval(timer);
                console.log("已运行10次，运行结束");
            }
        } else {
            if(startSecond<=55){
                newChangeTimes--;
            maxbel *= 2;
            console.log(maxbel);
            }
        
            if (newChangeTimes == 0) {
                console.log("已到达整分，运行提前结束");
                clearInterval(timer);
            }
        }
    }
    var timer = setInterval(timeTest, 5000);
}
// testTime();
/*
2.
要求：
    ①能够对传入的、移动手机电话（11位）、邮箱字符串（上网查找其要求）进行正则判定。
    ②使用console.log打印即可，例如，电话不符合要求但是邮箱符合要求，则console.log("The telephone is right and the mail is wrong!")。
    ③邮箱字符串的正则匹配的理解需写入lab文档。
    ④telephone与mail均是字符串。
*/
function testMail(telephone,mail) {
var telephoneNumber = /^1(3[4-9]|4[478]|5[012789]|7[28]|8[23478]|9[8])\d{8}$/;
var mailBox = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

console.log("The telephone is "+telephoneNumber.test(telephone)+" and the mail is "+mailBox.test(mail)+"!")
}
/*
3.
要求：
    ①输入一段全英文语句，要求使用正则表达式找到相邻的重复单词放入一个Set，如果集合中元素超过10个，则按照首字母顺序取前10个于集合。
    ②使用console.log打印即可，将该集合打印出来。
    ③例如：输入"Is is the iS is cost of of gasoline going up up"，输出：Set { 'Is is', 'iS is', 'of of', 'up up' }。
    ④对该函数中用的正则匹配的理解需写入lab文档。
    ⑤str为字符串。
*/
function testRedundancy(str) {
    var patt = /\b([a-z]+) \1\b/i   ;                                     //正则判断相邻的重复单词
    var result ; 
    var arr = [];
    while ((result = patt.exec(str)) != null)  {
        var tend = result[1];
        str = str.replace(tend,' ');
        arr[arr.length]=result[0];
        arr.sort(function(a, b) {                                         //按首字母顺序排序
            if (a.toLowerCase() < b.toLowerCase()) return -1;
            if (a.toLowerCase() > b.toLowerCase()) return 1;   
            return 0; 
          });
       }
       var finalArr = Array.from(new Set(arr));
       var finalSet;
       if(finalArr.length <= 10){
           finalSet = new Set(finalArr);
       }
       if(finalArr.length > 10){
           finalSet = new Set([finalArr[0],finalArr[1],finalArr[2],finalArr[3],finalArr[4],finalArr[5],finalArr[6],finalArr[7],finalArr[8],finalArr[9]]);
       }

       console.log(finalSet);   
}
// testRedundancy("up up up Is is  the iS is cost of Of of OF of gasoline going of  Of of  ai ai Bi bi CC cc CC cC  ");

/*  
4.
背景：
    旧键盘上坏了几个键，于是在敲一段文字的时候，对应的字符就不会出现。
    现在给出应该输入的一段文字、以及实际被输入的文字，请你使用Set列出肯定坏掉的那些键。
    例如：输入7_This_is_a_test和_hs_s_a_es    输出：Set { '7', 'T', 'I' }
要求：
    ①需要使用Set。
    ②只能使用一次循环。
    ③使用console.log打印即可，将该集合打印出来。
    ④wantInput和actualInput为字符串。
注意：
    ①注意联系生活，并注意观察我给的上述例子。
*/
function testKeyBoard(wantInput, actualInput) {
    var arr = [];                                                  //i和j分别是want的actual的字符序列
for (var i = 0, j = 0; i<wantInput.length;){                       //将want与actual从第一项开始比较，如果不相同说明键盘失灵
    if(wantInput.charAt(i)!=actualInput.charAt(j)){
      if(/[a-zA-Z]/.test(wantInput.charAt(i))){
        arr[arr.length]=wantInput.charAt(i).toUpperCase();
      }else{
        arr[arr.length]=wantInput.charAt(i);
      }
      i++;
    }
    else{
        if(j<actualInput.length-1){
           i++;
        j++; 
        }else{
            i++;
        }
        
    }
}
var finalArr = Array.from(new Set(arr));                         //使用set去重
var finalSet = new Set(finalArr);
console.log(finalSet);
}
// testKeyBoard('7_This_is_a_test','_hs_s_a_es');      
/*
5.
背景：
    给定一个输入英文语句字符串，反转该语句。例如the sky is blue变成blue is sky the。
要求：
    ①如果输入的字符串前后有空格，输出中应该去除前后空格。如果输入字符串中间出现连续的两个空格，输出应该变为一个。
    比如输入是“  hello  world!  ”，输出应该是“world! hello”。
    ②请使用Array。
    ③使用console.log打印即可，将该字符串打印出来。
    ④只能显式使用一次循环。
    ⑤str为字符串。
*/
function testSpecialReverse(str) {
    var arr = str.split(" ");
    var reverseArr = [];
    for(var i = 0 ,j = 0 ; i < arr.length; ){        
        if(arr[i]==""){                              
           i++;
        }else{
            reverseArr[arr.length-1-j] = arr[i];
            i++;
            j++;
        }   
    }
var finalArr = reverseArr.filter(function (s) {                     //去除空元素，防止出现多余的空格。
    return s && s.trim();
 });
    var reverseStr = finalArr.join(" "); 
    console.log(reverseStr);
}
// testSpecialReverse("  hello  world!  ");

/*
6.
背景：
    给定一个整数数组和一个值，找出相加为该值的两个元素下标并保存在一个数组中。
    例如给定 [2, 7, 11, 15]和9,
    打印结果为[0,1]
要求：
    ①使用Map。
    ②只能显式使用一次循环。
    ③使用console.log打印即可，将满足条件的数组打印出来。
    ④nums为数字数组，如[1,2,3,4],target为数字,如5，那么输出为
    [ 0, 3 ]
    [ 1, 2 ]
*/

function twoSum(nums, target) {
    let targetMap = new Map();
    let arr = [];
    for (let i = 0 , j = 0 ; i < nums.length; i++) {
      const key = target - nums[i];                    //对应每一个数值都有一个与目标值的差值，并检测map中是否存有对应的key，若有，其value就是下标。
      if (targetMap.has(key)) {
          arr[j]=[targetMap.get(key),i];
          j++;  
      }
      targetMap.set(nums[i], i);                       //将数值和对应的下标放入map中
    }
    console.log(arr);
}
// twoSum([1,2,3,4],5);

/*
7.
背景：
    打印最长的包含不同字符串的子字符串长度。
要求：
    ①使用Map。
    ②例如：输入"abbbbb",输出2，输入"bbbbb",输出1；
    ③只能显式使用一次循环。
    ④使用console.log打印即可。
    ⑤str为字符串。
*/
function lengthOfLongestSubstring(str) {
    let map = new Map(), max = 0
    var arr = str.split('');
    for(let i = 0, j = 0; j < arr.length; j++) {
            if(map.has(arr[j])) {                      //检测到相同字符，i变化为该相同字符下一位，此时j-i+1为最新的无重复字符串长度，并与max比较
                i = Math.max(map.get(arr[j]) + 1, i)
            }
            max = Math.max(max, j - i + 1)
            map.set(arr[j], j)                         //将字符与对应的下标放入map中    
        }
    console.log(max);
}

/*
8.
背景：
    该部分只是为了让你们自己动动手更好地感受不同继承方式。
要求：
    ①借助构造函数、原型链、和Object.create分别编写DevelopingCountry、PoorCountry、DevelopedCountry以实现对Country的继承，
    并在三者分别添加sayHi、saySad、sayHappy函数分别打印"Hi,i am a developing country."、"I am a sad poor country."、"I am a Happy developed country."
    ②请调用他们并打印相关语句即可。
*/
function Country() {
    this.name = "国家";
}
//子类DevelopingCountry对父类Country的继承
function DevelopingCountry() {
    Country.call(this);
    this.name = "developing country";
}
DevelopingCountry.prototype = Object.create(Country.prototype);
DevelopingCountry.prototype.constructor = DevelopingCountry;
DevelopingCountry.prototype.sayHi = function () {
console.log("Hi,i am a "+this.name+".");    
};
//子类PoorCountry对父类Country的继承
function PoorCountry() {
    Country.call(this);
    this.name = "poor country";
}
PoorCountry.prototype = Object.create(Country.prototype);
PoorCountry.prototype.constructor = PoorCountry;
PoorCountry.prototype.saySad = function () {
console.log("I am a sad "+this.name+".");    
};
//子类DevelopedCountry对父类Country的继承
function DevelopedCountry() {
    Country.call(this);
    this.name = "developed country";
}
DevelopedCountry.prototype = Object.create(Country.prototype);
DevelopedCountry.prototype.constructor = DevelopedCountry;
DevelopedCountry.prototype.sayHappy = function () {
console.log("I am a Happy "+this.name+".");    
};

function testCountry(){
    var develoningCountry = new DevelopingCountry();
    var poorCountry = new PoorCountry();
    var develonpedCountry = new DevelopedCountry();
    develoningCountry.sayHi();
    poorCountry.saySad();
    develonpedCountry.sayHappy();
}
function test(){
    testTime();
    testMail(13511540215,"13231@qq.com");
    testRedundancy("up up up Is is  the iS is cost of Of of OF of gasoline going of  Of of  ai ai Bi bi CC cc CC cC  ");
    testKeyBoard('7_This_is_a_test','_hs_s_a_es');
    testSpecialReverse("  hello  world!  ");
    twoSum([1,2,3,4],5);
    lengthOfLongestSubstring("abbbbb");
    testCountry()
};
test();





