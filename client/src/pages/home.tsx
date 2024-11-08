import { Button } from "@/components/ui/button"
// import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const {user , loginWithRedirect , isAuthenticated , logout} = useAuth0();
  console.log('User is ' , user);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-4">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Personal Task Manager</h1>
        <p className="text-xl text-gray-700 mb-8">
          Welcome to your AI-based Personal Task Manager. Organize your tasks efficiently and boost your productivity with the power of AI.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4">
          {
            isAuthenticated ? (
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white mb-4 sm:mb-0" onClick={(e) => logout()}>Logout</Button>
            ) : (
              <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white mb-4 sm:mb-0" onClick={(e) => loginWithRedirect()}>Sign In</Button>
            )
          }
            
          
      
            <Button className="w-full sm:w-auto bg-green-500 hover:bg-green-700 text-white">Dashboard</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
