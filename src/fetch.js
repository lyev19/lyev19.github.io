

export async function lorem_fetch (){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8d980e85b2mshd2144c69dc7d4c2p190177jsn62d8fab18411',
            'X-RapidAPI-Host': 'montanaflynn-lorem-text-generator.p.rapidapi.com'
        }
    };
    try {
        const res = await fetch('https://montanaflynn-lorem-text-generator.p.rapidapi.com/paragraph?count=1&length=3', options)
        const res1 = await res.json()
        console.log(res1)
        return res1;
    } catch (error) {
        console.log(error)
        return []
    } 
  
   
}

export async function user_fetch (){
    const res = await fetch("https://randomuser.me/api/")
    const res1 = await res.json()
    console.log(res1)
    return res1
}