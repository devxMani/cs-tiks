import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <section className="min-h-screen pt-28 pb-20 flex items-center justify-center">
        <div className="container px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-md mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-10">
              <Link to="/" className="inline-flex items-center justify-center w-12 h-12 rounded-xl glass-card mb-5">
                <span className="text-foreground text-sm font-bold">//</span>
              </Link>
              <h1 className="text-2xl font-light mb-2">Welcome back</h1>
              <p className="text-sm text-muted-foreground">Sign in to continue</p>
            </div>

            {/* Form */}
            <div className="glass-card-strong p-8">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Email</label>
                  <input
                    type="email"
                    className="glass-input"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Password</label>
                  <input
                    type="password"
                    className="glass-input"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                    <input type="checkbox" className="rounded border-border/50 bg-transparent" />
                    Remember me
                  </label>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="glass-button w-full"
                >
                  Sign In
                </button>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 my-6">
                <div className="flex-1 glass-divider" />
                <span className="text-xs text-muted-foreground">or</span>
                <div className="flex-1 glass-divider" />
              </div>

              {/* Social */}
              <div className="space-y-3">
                <button className="glass-button-outline w-full flex items-center justify-center gap-3">
                  <span className="font-bold">G</span>
                  Continue with Google
                </button>
                <button className="glass-button-outline w-full flex items-center justify-center gap-3">
                  <span className="font-bold">⬡</span>
                  Continue with GitHub
                </button>
              </div>
            </div>

            {/* Link */}
            <p className="text-sm text-muted-foreground text-center mt-8">
              Don't have an account?{" "}
              <Link to="/signup" className="text-foreground hover:underline">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
