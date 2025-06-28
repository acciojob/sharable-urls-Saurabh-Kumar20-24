// your code here
const name= document.getElementById("name")
const year= document.getElementById("year")
const button= document.getElementById("button")
const url= document.getElementById("url")


button.addEventListener("click",(e)=>{
	e.preventDefault()
// alert(url.textContent+ name.value+ year.value)
	
	url.textContent = `${url.textContent}?name=${name.value}&year=${year.value}`
})