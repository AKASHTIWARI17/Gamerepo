import { useNavigate } from "react-router-dom";

export function useMoveBack() {
  const navigate = useNavigate();

  const moveBack = () => {
    if (isMobile()) {
      window.history.back(); // Navigate back in browser history for mobile devices
    } else {
      navigate(-1); // Use React Router's navigate function for other devices
    }
  };

  return moveBack;
}

// Function to detect if the user is on a mobile device
function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}
