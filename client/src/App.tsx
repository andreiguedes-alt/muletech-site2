/*
  MuleTech App.tsx – Cinematic Dark Tech
  Routes: /, /produto, /tecnologia, /app, /sobre, /contato
  Layout: Navbar + Page + Footer
*/

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Produto from "./pages/Produto";
import Tecnologia from "./pages/Tecnologia";
import AppPage from "./pages/App";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: "#070D1A", minHeight: "100vh" }}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/produto" component={() => <Layout><Produto /></Layout>} />
      <Route path="/tecnologia" component={() => <Layout><Tecnologia /></Layout>} />
      <Route path="/app" component={() => <Layout><AppPage /></Layout>} />
      <Route path="/sobre" component={() => <Layout><Sobre /></Layout>} />
      <Route path="/contato" component={() => <Layout><Contato /></Layout>} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
