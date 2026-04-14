import { MessageSquare, Zap, Shield, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-base-100 flex flex-col items-center justify-center -mt-16 pt-16">
      {/* Hero Section */}
      <div className="hero min-h-[70vh]">
        <div className="hero-content text-center px-4">
          <div className="max-w-3xl">
            <div className="flex justify-center mb-8">
              <div className="size-24 rounded-3xl bg-primary/10 flex items-center justify-center animate-bounce shadow-xl shadow-primary/20">
                <MessageSquare className="size-12 text-primary" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              Connect and <span className="text-primary">Yap</span> seamlessly.
            </h1>
            <p className="py-6 text-xl text-base-content/70 md:px-12">
              Yapster is the ultimate platform for real-time messaging. Experience high-quality conversations, secure connections, and a beautiful interface designed for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link to="/signup" className="btn btn-primary btn-lg shadow-lg shadow-primary/30 rounded-full px-8">Get Started</Link>
              <Link to="/login" className="btn btn-ghost btn-lg rounded-full px-8">Sign In</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="py-24 bg-base-200/50 w-full flex justify-center border-t border-base-300">
        <div className="max-w-6xl w-full px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="card bg-base-100/50 backdrop-blur-sm border border-base-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-secondary/10 rounded-2xl mb-4 text-secondary">
                <Zap className="size-8" />
              </div>
              <h2 className="card-title text-2xl font-bold">Lightning Fast</h2>
              <p className="text-base-content/70 mt-2">Real-time messaging with zero delay. Your messages arrive instantly, keeping the conversation flowing.</p>
            </div>
          </div>
          <div className="card bg-base-100/50 backdrop-blur-sm border border-base-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-accent/10 rounded-2xl mb-4 text-accent">
                <Shield className="size-8" />
              </div>
              <h2 className="card-title text-2xl font-bold">Secure & Private</h2>
              <p className="text-base-content/70 mt-2">Your conversations are protected with enterprise-grade security and privacy. You're in control.</p>
            </div>
          </div>
          <div className="card bg-base-100/50 backdrop-blur-sm border border-base-300 shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1">
            <div className="card-body items-center text-center">
              <div className="p-4 bg-primary/10 rounded-2xl mb-4 text-primary">
                <Globe className="size-8" />
              </div>
              <h2 className="card-title text-2xl font-bold">Connect Globally</h2>
              <p className="text-base-content/70 mt-2">Yap with friends, family, and colleagues from anywhere in the world without any friction.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer minimal */}
      <div className="w-full py-8 text-center text-base-content/50 border-t border-base-300 flex justify-center items-center gap-2">
         <MessageSquare className="size-4" /> <p>© {new Date().getFullYear()} Yapster. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Landing;
