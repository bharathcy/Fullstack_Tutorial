let data =
`{
	
	"x":[

	{"url":"https://www.javascript.com",
	"heading":"JavaScript.com",
	"description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
	},

	{"url":"https://www.javascript.com",
	"heading":"JavaScript.com",
	"description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
	},

	{
	"url":"https://www.javascript.com",
	"heading":"JavaScript.com",
	"description":"JavaScript.com is a resource for the JavaScript community.  You will find resources and examples for JavaScript beginners as well as support for JavaScript ..."
	}]

}`

let convaerted_JS_OBJECT = JSON.parse(data)

console.log(convaerted_JS_OBJECT.x)

let div_element = ""
for (data of convaerted_JS_OBJECT.x){	
	div_element += `<div>
		<p>${data.url}</p>
		<h4>${data.heading}</h4>
		<p>${data.description}</p>
	</div>`

}

document.getElementById("body").innerHTML = div_element
