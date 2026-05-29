import { AppRoutes } from "./app/routes/AppRoutes";
import { ToastProvider } from "./context/toast/ToastProvider";

function App() {
  return (
    <ToastProvider>
      <AppRoutes />
    </ToastProvider>
  );
}

export default App;
