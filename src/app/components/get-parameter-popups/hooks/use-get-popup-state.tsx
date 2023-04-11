/* global clearTimeout */
import { useState, useEffect, useMemo } from "react";

import { GET_PARAMS } from "./../const";
import { useGetParameter } from "@hook";

let timeout;

export const useGetPopupState = () => {
  const popupName = useGetParameter(GET_PARAMS.popup);
  const [mountedPopupName, setMountedPopupName] = useState(popupName);

  useEffect(() => {
    if (popupName) {
      timeout && clearTimeout(timeout);
      setMountedPopupName(popupName);
    } else {
      timeout = setTimeout(() => {
        setMountedPopupName(null);
      }, 500);
    }
  }, [popupName]);

  useEffect(() => {
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, []);

  const isOpened = useMemo(() => Boolean(popupName), [popupName]);

  return {
    mountedPopupName,
    isOpened
  };
};
