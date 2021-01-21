function ShowStirred(props) { 
  //console.log(props.shaken)  
  //console.log(props.stirred)
  // const { shaken, getShaken } = props  
  const { stirred, getStirred} = props
  // useEffect(() => { 
  //  console.log("Hi") 
  //   setToggle(prev => !prev)
  // }, []);
  //console.log(shaken) 
  console.log(stirred)
 
  return (
    <div> 
      <h1>Stirred</h1>
      {stirred && <div>
      {stirred.map((cocktail, index) => {
        return (<div key={index}>{cocktail.fields.name}</div>)
      })}</div>}
      </div>
  )
} 

export default ShowStirred;