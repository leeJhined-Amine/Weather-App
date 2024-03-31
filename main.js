let temp = document.getElementById('temp');
let axios = window.axios
let useless = document.getElementsByClassName('homeContainer')
let location = document.getElementById('loc')
let image = document.getElementById('image')


location.onsearch = async function(){
    console.log('test')
    let loc = location.value
    async function ramadan(){
        const {data} = await axios.get(`http://api.weatherapi.com/v1/current.json?key=7169d014e7df4c85860224924243003&q=${loc}&aqi=no`)
        return data;
    }
    let data = await ramadan()
    temp.innerText = data.current.temp_c;
    image.innerHTML = `<img src ='${data.current.condition.icon}' width="200">`
}
// async function ramadan(){
//     const {data} = await axios.get(`http://api.weatherapi.com/v1/current.json?key=1a0ffa250fb447caa3880124242103&q=${loc}&aqi=yes`)
//     return data;
// }
// let data = await ramadan()
// temp.innerText = data.current.temp_c;
// for(let racism of useless){
//     let current = racism.querySelector('.leftSide');
//     current.innerHTML+= `<img src ='${data.current.condition.icon}' width="200">`
// }