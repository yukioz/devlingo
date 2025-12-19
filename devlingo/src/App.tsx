import LoadingScreen from './components/LoadingScreen';
import { useEffect, useState } from 'react';

function App() {

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFadingOut, setIsFadingOut] = useState<boolean>(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setIsFadingOut(true);

      const fadeOutTimer = setTimeout(() => {
        setIsLoading(false);


        console.log('is loading: ', isLoading);
      }, 500);

      console.log('is fadingout: ', isFadingOut);

      return () => clearTimeout(fadeOutTimer);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return isLoading ? (
    <>
      <LoadingScreen isFadingOut={isFadingOut} />
    </>
  ) : (
    <>
      <h1>Entrei</h1>
    </>
  )
}

export default App
