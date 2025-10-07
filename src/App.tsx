import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Mentors from "./pages/Mentors";
import Communities from "./pages/Communities";
import Resources from "./pages/Resources";
import Funding from "./pages/Funding";
import Messages from "./pages/Messages";
import Membership from "./pages/Membership";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><Index /></Layout>} />
          <Route path="/events" element={<Layout><Events /></Layout>} />
          <Route path="/mentors" element={<Layout><Mentors /></Layout>} />
          <Route path="/communities" element={<Layout><Communities /></Layout>} />
          <Route path="/resources" element={<Layout><Resources /></Layout>} />
          <Route path="/funding" element={<Layout><Funding /></Layout>} />
          <Route path="/messages" element={<Layout><Messages /></Layout>} />
          <Route path="/membership" element={<Layout><Membership /></Layout>} />
          <Route path="/admin" element={<Layout><Admin /></Layout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
