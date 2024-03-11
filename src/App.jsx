import Card from './Components/Card';
// import Button from './Components/Button.jsx'
function App(){
  let personName = 'Amit KYs';
  let description = 'Lorem ipsum dolor sit  soidf si8vlw slg sor fikjiooi  et exercitationem id delectus eos quasi?';
  let ButtonPro = [
    {
      color: 'bg-red-500',
      name: 'Github'
    },
    {
      color: 'bg-green-500',
      name: 'LinkedIn'
    }
  ]
  
  return(
    <div className = 'h-screen w-screen bg-black'>
      <Card profileSource = 'photo/profile.jpg' personName = {personName} desc = {description} btn1_color = {ButtonPro[0].color} btn1_name = {ButtonPro[0].name}
      btn2_color = {ButtonPro[1].color} btn2_name = {ButtonPro[1].name}></Card>
    </div>
  )
}

export default App;