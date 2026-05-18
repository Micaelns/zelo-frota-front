import "./App.css";
import { DashboardPage } from "./pages/Dashboard/DashboardPage";
import { DefaultLayout } from "./components/layouts/DefaultLayout";

function App() {
  return (
    <DefaultLayout>
      <DashboardPage></DashboardPage>
    </DefaultLayout>
  );
}

export default App;
