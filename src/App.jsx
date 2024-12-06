import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './Components/Themebtn';
import Card from './Components/Card';
import { ThemeProvider } from './Context/theme';

function App() {
  const [themeMode, setThemeMode] = useState('light');

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }

  //Actual Cange in Theme

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode)
  },
    [themeMode])

  return (
      <ThemeProvider value= {{themeMode, lightTheme, darkTheme}}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        {/* Theme Button */}
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* Card UI */}
                       <Card />
                    </div>
                </div>
            </div>
            </ThemeProvider>
  )
}

export default App
