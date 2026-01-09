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
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-8">
              <Link to="/" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-foreground mb-4">
                <span className="text-background text-sm font-semibold">//</span>
              </Link>
              <h1 className="text-2xl font-light mb-2">Create account</h1>
              <p className="text-sm text-muted-foreground">Start your CS mastery journey</p>
            </div>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Username</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-card/50 border border-border rounded-lg text-sm focus:outline-none focus:border-foreground/50 transition-colors"
                  placeholder="coolcoder123"
                />
              </div>
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
                <p className="text-[10px] text-muted-foreground mt-1">At least 8 characters</p>
              </div>
              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 rounded border-border" />
                <label className="text-xs text-muted-foreground">
                  I agree to the{" "}
                  <a href="#" className="text-foreground hover:underline">Terms</a>
                  {" "}and{" "}
                  <a href="#" className="text-foreground hover:underline">Privacy Policy</a>
                </label>
              </div>
              <button
                type="submit"
                className="w-full py-3 text-sm font-medium bg-foreground text-background rounded-lg hover:bg-foreground/90 transition-colors"
              >
                Create Account
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
                Sign up with Google
              </button>
              <button className="w-full py-3 text-sm border border-border rounded-lg hover:bg-card/50 transition-colors flex items-center justify-center gap-2">
                <span className="font-medium">⬡</span>
                Sign up with GitHub
              </button>
            </div>

            {/* Link */}
            <p className="text-sm text-muted-foreground text-center mt-6">
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
