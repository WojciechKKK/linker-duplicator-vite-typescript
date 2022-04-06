import { useEffect, useState } from 'react';

const TIME_TO_VISIBLE_ALERT = 1500;

interface UseAlert {
  visibleAlert: boolean,
  openAlert: () => void
};

export const useAlert = (): UseAlert => {
  const [visibleAlert, setVisibleAlert] = useState(false)
  
  const openAlert = () => {
    setVisibleAlert(true);
    return setTimeout(() => {
      setVisibleAlert(false);
    }, TIME_TO_VISIBLE_ALERT)
  }

  useEffect(() => {
    return () => clearTimeout(openAlert())
  },[])

  return { visibleAlert, openAlert }
}