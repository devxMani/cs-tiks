import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const Signup = () => {
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
              <h1 className="text-2xl font-light mb-2">Create account</h1>
              <p className="text-sm text-muted-foreground">Start your CS mastery journey</p>
            </div>

            {/* Form */}
            <div className="glass-card-strong p-8">
              <form className="space-y-5">
                <div>
                  <label className="block text-sm text-muted-foreground mb-2">Username</label>
                  <input
                    type="text"
                    className="glass-input"
                    placeholder="coolcoder123"
                  />
                </div>
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
                  <p className="text-[10px] text-muted-foreground mt-2">At least 8 characters</p>
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" className="mt-1 rounded border-border/50 bg-transparent" />
                  <label className="text-xs text-muted-foreground">
                    I agree to the{" "}
                    <a href="#" className="text-foreground hover:underline">Terms</a>
                    {" "}and{" "}
                    <a href="#" className="text-foreground hover:underline">Privacy Policy</a>
                  </label>
                </div>
                <button
                  type="submit"
                  className="glass-button w-full"
                >
                  Create Account
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
                  Sign up with Google
                </button>
                <button className="glass-button-outline w-full flex items-center justify-center gap-3">
                  <span className="font-bold">⬡</span>
                  Sign up with GitHub
                </button>
              </div>
            </div>

            {/* Link */}
            <p className="text-sm text-muted-foreground text-center mt-8">
              Already have an account?{" "}
              <Link to="/login" className="text-foreground hover:underline">
                Sign in
              </Link>
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
