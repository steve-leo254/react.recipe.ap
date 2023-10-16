  import pexels from "./assets/pexels-demid-druz-18278385.jpg"
  import "./card.css"
  export default function Card(){
    return<>
     <div className="card">
        <div className="image">
            <img src={pexels} alt="my photo" srcset="image" 
            width={100}
            />
        </div>
        <div className="information">
          <div className="name">lady in a dress</div>
          <div className="type">this is the type</div>
          <div className="native">kajiado</div>
        </div>
     </div>
    
    </>
  }