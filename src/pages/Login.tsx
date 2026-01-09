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
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-foreground mb-4">
                <span className="text-background text-sm font-semibold">//</span>
              </Link>
              <h1 className="text-2xl font-light mb-2">Welcome back</h1>
              <p className="text-sm text-muted-foreground">Sign in to continue</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-sm focus:outline-none focus:border-foreground/50 transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-sm focus:outline-none focus:border-foreground/50 transition-colors"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  Remember me
                </label>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Sign In
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Social */}
            <div className="space-y-2">
              <button className="w-full py-3 text-sm border border-border rounded-lg hover:bg-card/50 transition-colors flex items-center justify-center gap-2">
                <span className="font-medium">G</span>
                Continue with Google
              </button>
              <button className="w-full py-3 text-sm border border-border rounded-lg hover:bg-card/50 transition-colors flex items-center justify-center gap-2">
                <span className="font-medium">⬡</span>
                Continue with GitHub
              </button>
            </div>

            {/* Link */}
            <p className="text-sm text-muted-foreground text-center mt-6">
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
