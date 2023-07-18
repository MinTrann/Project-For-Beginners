const btnEl = document.getElementById('btn');               
const jokeEl = document.getElementById('joke');
const API_KEY = "Afg76bFV0DZDjk+JMtW8Og==Cux6zeb5WyXgZj49";
const options ={
    method: "GET",
    headers: {
        "X-Api-Key" : API_KEY,
    },
};
const API_URl = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

btnEl.addEventListener("click", async function(){

    try {
        jokeEl.innerHTML = ".............";
        btnEl.disabled = true;
        btnEl.innerText ="Chờ xíu😊😊"
     const response = await fetch(API_URl, options);
     const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText =" Another story"
    jokeEl.innerHTML = data[0].joke;
    
    } catch (error) {
        jokeEl.innerText ="Không ổn rồi đại dương ơi 😑😑"
        btnEl.innerText =" Another story"

    }
})
