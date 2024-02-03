import "../styles/components/informational.css"


function Informational(props:any) {
    return (
        <div className={'informational ' + props.optional_class }>
          <div className='informational-container'>
            <h1>{props.title}</h1>
            <div className = "informational-underline"/>
            <div>
                {props.children}
            </div>
          </div>
        </div>
    )
}


export default Informational;