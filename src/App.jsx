import { useState } from 'react'
import './App.css'

function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [bmi, setBmi] = useState(null) 
  const [bmiCategory, setBmiCategory] = useState('')  
  const [photo, setPhoto] = useState('') 

  const calculate = () => {
    const heightInMeters = height / 100
    const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2)   
    let category = ''
    let photo = ''

    
    if (calculatedBmi < 18.5) {
      category = 'Underweight'
      photo = 'https://draxe.com/wp-content/uploads/2017/08/GainWeightFast_Graphic-e1680610940972.jpg'  
    } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
      category = 'Normal'
      photo = 'https://www.careinsurance.com/cpproject/rhiclfrontend/assets/public/images/bmi-desktop.png'  
    } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
      category = 'Overweight'
      photo = 'https://wordpresscmsprodstor.blob.core.windows.net/wp-cms/2022/05/36a-1-scaled.webp'  
    } else {
      category = 'Obese'
      photo = 'https://etimg.etb2bimg.com/photo/101307670.cms'  
    }

    setBmi(calculatedBmi)    
    setBmiCategory(category)  
    setPhoto(photo)          
  }

  
  const getCategoryColor = () => {
    switch(bmiCategory) {
      case 'Underweight':
        return 'text-yellow-500'
      case 'Normal':
        return 'text-green-500'
      case 'Overweight':
        return 'text-orange-500'
      case 'Obese':
        return 'text-red-500'
      default:
        return ''
    }
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-5">
        <h1 className="text-3xl font-bold mb-6">Enter Your Height And Your Weight</h1>
        
        <div className="w-full max-w-xs">
          <input 
            type="number" 
            placeholder="Enter Your Height (cm)"  
            value={height} 
            onChange={(e) => setHeight(e.target.value)}  
            className="mb-4 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          <input 
            type="number" 
            placeholder="Enter Your Weight (kg)" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
            className="mb-4 px-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          />
          
          <button 
            onClick={calculate} 
            className="bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600 transition duration-300"
          >
            Calculate
          </button>
        </div>

        {/* Display the BMI value */}
        {bmi && (
          <h1 className="text-2xl font-semibold mt-6">Your BMI is: {bmi}</h1>
        )}

        {/* Display the BMI category with conditional color */}
        {bmiCategory && (
          <>
            <h2 className={`text-2xl font-semibold mt-4 ${getCategoryColor()}`}>
              Category: {bmiCategory}
            </h2>
            {/* Display the body shape image */}
            {photo && (
              <img src={photo} alt={bmiCategory} className="mt-4 w-64 h-auto" />
            )}
          </>
        )}
      </div>
    </>
  )
}

export default App
