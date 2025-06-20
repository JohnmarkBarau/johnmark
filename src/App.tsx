import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { AuthProvider } from './components/auth/AuthProvider.tsx';
import { Navigation } from './components/layout/Navigation.tsx';
import Dashboard from './pages/Dashboard.tsx';
import CreatePost from './pages/CreatePost.tsx';
import Calendar from './pages/Calendar.tsx';
import Analytics from './pages/Analytics.tsx';
import VideoGenerator from './pages/VideoGenerator.tsx';
import Teams from './pages/Teams.tsx';
import Settings from './pages/Settings.tsx';
import Login from './pages/Login.tsx';
import { ProtectedRoute } from './components/auth/ProtectedRoute.tsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <div className="flex">
                    <Navigation />
                    <main className="flex-1 ml-64">
                      <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/create" element={<CreatePost />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/analytics" element={<Analytics />} />
                        <Route path="/video" element={<VideoGenerator />} />
                        <Route path="/teams" element={<Teams />} />
                        <Route path="/settings" element={<Settings />} />
                      </Routes>
                    </main>
                  </div>
                </ProtectedRoute>
              }
            />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;