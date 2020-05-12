# Lab07设计文档
19302010034   陆勇雍
## 困难与解决方案
1. 一开始，当我想用  
`var justify = document.getElementsByClassName('justify')`  
获得类名为justify的div时，发现在调用appendChild方法时会报错:justify.appendChild不是一个方法。
通过百度得知，是对返回类型的判断出现了问题。document.getElementsByClassName返回的是一个数组，所以如果用  
`justify[0].appendChild`  
就正确了。
但之后还是采用了querySelector方法来获取元素。
2. 关于使用js修改css，通过百度学习到修改style属性即可。
如：`a.style.marginLeft='1em';`
3. 当我写完了一个item，发现一共由四个item要实现，并且在js的开头也定义了一个数组，所以转而采用了for循环来生成文档节点。  
并且发现每个item里面的photo的个数是不同的，2-5个不等，所以采用了在for循环内再使用一次循环来遍历photo。
4. 一开始对着一张空白的页面不知道怎么下手，后来知道了自己得先按照自己写一个网页的顺序来，对照着示例图片想如果自己来做，哪里要用到哪些元素，再对照css文件已经给出的线索，就可以做了。