/*document.querySelector("html").addEventListener("click", function () {alert("browser dialogue");});
//^anyonymous hypertext (index."<html>") element (from document page (from Website\mysiteindex.html)) of browser query notation^
//***adds event listener (the "{src}" is an attribute of the image element is a target reference of query attribute
//"<img>" which references the attributed query of the element in the <html>
//is an attribute of document.querySelector is an attribute of the webpage console)
//for "click" event (alert -> browser dialogue)***/
/*document.querySelector("html").addEventListener("click", () => {alert("browser dialogue");});
//^lambda hypertext (index."<html>") element (from document page (from Website\mysiteindex.html)) of browser query notation^
//***adds event listener for "click" event (alert -> browser dialogue)***/
//417x634 px., img src ="C:\Users\jmea4\Desktop\Website\images\AD366CB9-DDDC-402F-B5B0-C4B37807279E.jpg"
const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/AD366CB9-DDDC-402F-B5B0-C4B37807279E.jpg"){
        myImage.setAttribute("src", "images/897we5q23267345678346t87");
    } else{
        myImage.setAttribute("src", "images/AD366CB9-DDDC-402F-B5B0-C4B37807279E.jpg");
    }
};
//let myButton = document.querySelector("buton");
//localStorage.setItem();//local storage API