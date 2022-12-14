import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Pages from './components/PageLinks';
import './App.css';
import { Navigation } from './components/always/Navigation';
import { ContactButton } from './components/always/ContactButton';
import { Loading } from './components/loading/Loading'
import { Footer } from './components/always/Footer';

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 6000)
  }, [])

  return (
    <>
      {loading === false ? (
         <BrowserRouter>
            <div className="App">
              {/* サイト案内トグルメニューのボタン */}
              <Navigation />
              {/* サイドバーにあるSNSやメールボタン */}
              <ContactButton />
              <Pages />
              <Footer />
            </div>
          </BrowserRouter>
        ) : (
          <Loading />
        )
      }
    </>
  );
}

export default App;