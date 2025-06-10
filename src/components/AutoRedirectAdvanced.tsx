import {useNavigate} from "react-router";
import {useEffect, useState} from "react";

const AutoRedirectAdvanced = () => {
  const navigate = useNavigate();
  const [secondsLeft, setSecondsLeft] = useState(5);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecondsLeft((prevSeconds:number) => prevSeconds - 1);
        }, 1000); // Update every second

        const timer: number = setTimeout(() => {
            navigate('/examples/name-changer'); // Redirect to the Name Changer page
        }, 5000); // Redirect after 5 seconds

        return () => {
            clearInterval(intervalId);
            // Cleanup the interval on unmount
            clearTimeout(timer);
        } // Cleanup the timer on unmount

    }, []);

    return (
      <>
          <h1 className="text-center text-2xl mb-4">
                Redirecting in {secondsLeft} sec{secondsLeft !== 1 && "s"}...
          </h1>
      </>
  )
}

export default AutoRedirectAdvanced;