import { useNavigate } from "react-router"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <div className='text-center max-w-md px-4'>

        <h1 className='text-9xl font-bold text-gray-900 tracking-tighter'>404</h1>
        <div className='w-12 h-1 bg-violet-500 rounded mx-auto my-4'></div>

        <h2 className='text-2xl font-semibold text-gray-800 mb-3'>Page not found</h2>
        <p className='text-gray-500 mb-8'>
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className='flex gap-3 justify-center'>
          <button
            onClick={() => navigate('/')}
            className='btn bg-violet-500 text-white rounded-lg px-6'
          >
            Go home
          </button>
          <button
            onClick={() => navigate(-1)}
            className='btn btn-outline rounded-lg px-6'
          >
            Go back
          </button>
        </div>

      </div>
    </div>
  )
}

export default NotFound