import Part from './Part'
function Content({parts}){
    console.log("parts", parts)
    
    
return(
    <div>
        <Part part={parts[0]}/>
        <Part part={parts[1]}/>
        <Part part={parts[2]}/>

    </div>

)
}
export default Content