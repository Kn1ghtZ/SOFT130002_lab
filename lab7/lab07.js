const works = [
    { author: "Micheal Jackson",lifetime:"1022-1055",tips: "Human", photos: ["human1.jpg","human2.jpg","human3.jpg"] },
    { author: "Maria JK",lifetime:"1920-2001", tips: "Classical", photos: ["classical1.jpg","classical2.jpg"] },
    { author: "John Herry UY", lifetime:"1894-1928",tips: "Abstract", photos: ["abstract1.jpg","abstract2.jpg","abstract3.jpg","abstract4.jpg","abstract5.jpg"] },
    { author: "Coco",lifetime:"1777-1799", tips: "Beauty",  photos: ["beauty1.jpg","beauty2.jpg"] }
];
var justify = document.querySelector(".justify"); //最外部的容器

for(var i = 0 ; i < works.length ; i++){

var item = document.createElement("div");         //四个容器
item.setAttribute('class','item');

var genre = document.createElement('h4');         //第一行的genre
genre.innerHTML='Genre : '+works[i].tips;
item.appendChild(genre);

var div1 = document.createElement('div');         //innerbox 作者和出生
div1.setAttribute('class','inner-box');
item.appendChild(div1);

var authorName = document.createElement('h3');    //作者姓名
authorName.innerHTML=works[i].author;
authorName.style.display='inline';
div1.appendChild(authorName);

var birthday = document.createElement('h5');      //作者的生卒年
birthday.style.display='inline';
birthday.style.marginLeft='1em';
birthday.innerHTML='lifetime:'+works[i].lifetime;
div1.appendChild(birthday);

var div2 = document.createElement('div');         //innerbox 作品展示
div2.setAttribute('class','inner-box');
item.appendChild(div2);

var populorPhotos = document.createElement('h3');  //标题popular photos
populorPhotos.innerHTML='Popular Photos';
div2.appendChild(populorPhotos);

var showPhotos = document.createElement('div');    //放图片的div

for( var k = 0; k < works[i].photos.length;k++){
    var pic = document.createElement('img');           //图片
    pic.setAttribute('class','photo');
    pic.src=works[i].photos[k];

    showPhotos.appendChild(pic);
}

div2.appendChild(showPhotos);


var button = document.createElement('button');     //按钮
button.innerHTML='Visit';
item.appendChild(button);

justify.appendChild(item);
}
