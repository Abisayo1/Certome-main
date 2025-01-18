import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import  Contact  from './pages/Contact'
import Blogs from './pages/Blogs'
import CompanySes from './pages/CompanySes'
import FAQ from './pages/FAQ'
import APISection from './pages/APISection'
import FeaturesSession from './pages/FeaturesSession'
import Pricing from './pages/Pricing'
import Industries from './pages/Industries'




function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/CompanySes" element={<CompanySes />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/APISection" element={<APISection />} />
          <Route path="Blogs" element={<Blogs />} />
          <Route path="FeaturesSession" element={<FeaturesSession />} />
          <Route path="Pricing" element={<Pricing />} />
          <Route path="Industries" element={<Industries />} />
        </Route>
      </Routes>
    </Router>
  )


}

export default App
