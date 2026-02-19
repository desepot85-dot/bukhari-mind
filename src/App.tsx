import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Library from "./pages/Library";
import BookDetail from "./pages/BookDetail";
import Chat from "./pages/Chat";
import Search from "./pages/Search";
import QuizPage from "./pages/QuizPage";
import QuranPage from "./pages/QuranPage";
import RamadanPage from "./pages/RamadanPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/library" element={<Library />} />
            <Route path="/library/:bookId" element={<BookDetail />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/search" element={<Search />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/quran" element={<QuranPage />} />
            <Route path="/ramadan" element={<RamadanPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Navbar />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
