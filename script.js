fetch("https://api.github.com/users")
.then((res) => res.json())
.then((data) => {  

//card1
document.getElementById("displayPic1").setAttribute("src",data[0].avatar_url);
document.getElementById("userName1").innerText = data[0].login;
document.getElementById("linkBtn1").setAttribute("href",data[0].html_url);

//card2
document.getElementById("displayPic2").setAttribute("src",data[1].avatar_url);
document.getElementById("userName2").innerText = data[1].login;
document.getElementById("linkBtn2").setAttribute("href",data[1].html_url);

//card3
document.getElementById("displayPic3").setAttribute("src",data[2].avatar_url);
document.getElementById("userName3").innerText = data[2].login;
document.getElementById("linkBtn3").setAttribute("href",data[2].html_url);

// card4
document.getElementById("displayPic4").setAttribute("src",data[3].avatar_url);
document.getElementById("userName4").innerText = data[3].login;
document.getElementById("linkBtn4").setAttribute("href",data[3].html_url);

//card5
document.getElementById("displayPic5").setAttribute("src",data[4].avatar_url);
document.getElementById("userName5").innerText = data[4].login;
document.getElementById("linkBtn5").setAttribute("href",data[4].html_url);

//card6
document.getElementById("displayPic6").setAttribute("src",data[5].avatar_url);
document.getElementById("userName6").innerText = data[5].login;
document.getElementById("linkBtn6").setAttribute("href",data[5].html_url);

// card7
document.getElementById("displayPic7").setAttribute("src",data[6].avatar_url);
document.getElementById("userName7").innerText = data[6].login;
document.getElementById("linkBtn7").setAttribute("href",data[6].html_url);

//card8
document.getElementById("displayPic8").setAttribute("src",data[7].avatar_url);
document.getElementById("userName8").innerText = data[7].login;
document.getElementById("linkBtn8").setAttribute("href",data[7].html_url);

//card9
document.getElementById("displayPic9").setAttribute("src",data[8].avatar_url);
document.getElementById("userName9").innerText = data[8].login;
document.getElementById("linkBtn9").setAttribute("href",data[8].html_url);

//card10
document.getElementById("displayPic10").setAttribute("src",data[9].avatar_url);
document.getElementById("userName10").innerText = data[9].login;
document.getElementById("linkBtn10").setAttribute("href",data[9].html_url);

//card11
document.getElementById("displayPic11").setAttribute("src",data[10].avatar_url);
document.getElementById("userName11").innerText = data[10].login;
document.getElementById("linkBtn11").setAttribute("href",data[10].html_url);

//card12
document.getElementById("displayPic12").setAttribute("src",data[11].avatar_url);
document.getElementById("userName12").innerText = data[11].login;
document.getElementById("linkBtn12").setAttribute("href",data[11].html_url);

});
 