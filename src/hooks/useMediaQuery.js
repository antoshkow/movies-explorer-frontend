import { useEffect, useState } from "react";
import { throttle } from '../constants/config';

const useMediaQuery = () => {
  const [displayMovies, setDisplayMovies] = useState(null);
  const [moreDisplayMovies, setMoreDisplayMovies] = useState(null);

  const callback = throttle(() => {
    if (window.innerWidth >= 1279) {
      setDisplayMovies(12);
      setMoreDisplayMovies(3);
    } else if (window.innerWidth >= 768) {
      setDisplayMovies(8);
      setMoreDisplayMovies(2);
    } else if (window.innerWidth <= 480) {
      setDisplayMovies(5);
      setMoreDisplayMovies(1);
    }
  }, 1000)

  useEffect(() => {
    window.addEventListener('resize', callback);

    return () =>
      window.removeEventListener('resize', callback);
  }, [callback]);

  return { displayMovies, moreDisplayMovies, setDisplayMovies, callback }
}

export default useMediaQuery;
