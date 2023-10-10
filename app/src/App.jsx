import { useState } from 'react'
import './App.css'
import SocialCard from "./components/SocialCard/SocialCard.jsx";

import dataList from "./data/socialData.json";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="social-container">

          {
              dataList.map((data, index) => {
                  return (
                      <SocialCard
                          key={index}
                          title={data.title}
                          qr={data.url}
                          imgUrl={data.imageUrl}
                      />
                  )

              })
          }
      </div>
    </>
  )
}

export default App
