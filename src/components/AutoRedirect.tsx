import {useNavigate} from "react-router";
import {useEffect} from "react";

const AutoRedirect = () => {
  const navigate = useNavigate();
  // navigate('/examples');

    useEffect(() => {
        const timer: number = setTimeout(() => {
            navigate('/examples/name-changer'); // Redirect to the Name Changer page
        }, 5000); // Redirect after 5 seconds

        return () => clearTimeout(timer); // Cleanup the timer on unmount

    }, []);

    return (
      <>
          <h1 className="text-center text-2xl mb-4">
                Redirecting in 5 secs...
          </h1>
      </>
  )
}

export default AutoRedirect;