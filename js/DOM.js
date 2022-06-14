/*

DOM:
	Document Object Model

Object	=> Create, Get, Modify, Remove


# We can get the element by

1. Id
2. ClassName
3. Name
4. TagName
5. QuerySelector
	Single 
	Multiple Tag



getElementByID ==> a single element
getElementsBy***    => HTML Collections

querySelector		=> Single Element
querySelectorAll    => Node List

*/


//css query selector
Element = document.querySelectorAll("div")

// for (i in Element){
// 	Element[i].innerHTML = "Hi"
// 	Element[i].style.fontSize = "20px" 
// 	Element[i].setAttribute("title","hello")
// 	Element[i].classList.add("title","hello")
// 	Element[i].classList.remove("redDiv")
// 	Element[i].textContent = "Hello World"
// 	Element[i].innerText += "Jai"
// }





some = document.createElement("p")
some.innerHTML = " Hey Hi"

document.body.appendChild(some)

division4 = document.getElementById("division4")
document.body.removeChild(division4)

// HTML Collections	=> for loop properties like for each
// Node Lists			=> u can use for each


// for (i in nodeCollections)
// {
// 	nodeList[i].style.color =  "red"	
// }
