import { Toaster } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import Home from "./pages/Home";
import DieselTruckDetail from "./pages/DieselTruckDetail";
import DieselTruck2Detail from "./pages/DieselTruck2Detail";
import ElectricTruckDetail from "./pages/ElectricTruckDetail";
import ElectricTruck2Detail from "./pages/ElectricTruck2Detail";
import SolarChargingStationDetail from "./pages/SolarChargingStationDetail";
import HumanoidRobotDetail from "./pages/HumanoidRobotDetail";
import MassageRobotPage from "./pages/MassageRobotPage";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Store from "./pages/Store";
import News from "./pages/News";

function Router() {
  return (
    <>
      <Navbar />

      <Switch>
        <Route path="/products/diesel-truck" component={DieselTruckDetail} />
        <Route path="/products/diesel-truck-2" component={DieselTruck2Detail} />
        <Route path="/products/electric-truck" component={ElectricTruckDetail} />
        <Route
          path="/products/electric-truck-2"
          component={ElectricTruck2Detail}
        />
        <Route
          path="/products/solar-charging-station"
          component={SolarChargingStationDetail}
        />
        <Route
          path="/products/humanoid-robot"
          component={HumanoidRobotDetail}
        />

        {/* Massage AI Page */}
        <Route path="/massage-ai" component={MassageRobotPage} />

        <Route path="/about" component={About} />
        <Route path="/store" component={Store} />
        <Route path="/news" component={News} />
        <Route path="/" component={Home} />
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster
              theme="dark"
              toastOptions={{
                style: {
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "#ffffff",
                  fontFamily: "'DM Sans', sans-serif",
                },
              }}
            />
            <Router />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;