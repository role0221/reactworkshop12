
const Photo = ({alt_description , urls:{regular}}) => {
  return (
    <div className="Single-photo">
        
        <img src={regular} alt={alt_description}/>
        
    </div>
  )
}

export default Photo