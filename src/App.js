import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '~/layouts/MainLayout';
function App() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
