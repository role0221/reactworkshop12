
import { useEffect, useState } from 'react';
import './App.css';
import Photo from './Components/Photo';

function App() {
  const [photo,setPhoto]= useState([])
  const [page,setPage] =useState(1)
  const [isLoading,setisLoading] = useState(false)
  const apikey =`KoQON6VcbS6CfH71N4mLeXaX4lMO96PaKg0BmCkK0og`
  
  
  const fetchImage=async()=>{
    setisLoading(true)
    try {
    const apiUrl = `https://api.unsplash.com/photos/?client_id=${apikey}&page=${page}`
    const response = await fetch(apiUrl)
    const data = await response.json();
    setPhoto((oldData)=>{
      return [...oldData,...data]
    })
    } catch (error) {
      console.log(error) 
    }
    setisLoading(false)
  }
  useEffect(()=>{
    fetchImage()
    // eslint-disable-next-line
  },[page])

  useEffect(()=>{
    const event = window.addEventListener('scroll',()=>{
      if(window.innerHeight+window.scrollY>document.body.offsetHeight-500 && !isLoading){
        setPage((oldPage)=>{
          return oldPage+1
        })
      }

    })
    return ()=>window.removeEventListener('scroll',event)
    // eslint-disable-next-line
  },[])

  return (
    <main>
        <h1>Infinite Scroll Photo | Unplash API</h1>
        <section className='Photos'>
                <div className='display-photo'>
                  {photo.map((data,index)=>{
                      return <Photo key={index} {...data} />
                  })}
                </div>
        </section>
    </main>
  );
}

export default App;
