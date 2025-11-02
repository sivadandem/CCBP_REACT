const Button = props => {
  //  Write your code here.
  return <button className={props.color}>{props.name}</button>
}

const element = (
  //  Write your code here.
  <div className='bg-container'>
    <h1>Social Buttons</h1>
    <div>
      <Button name='Like' color='yellow' />
      <Button name='Comment' color='white' />
      <Button name='Share' color='blue' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
