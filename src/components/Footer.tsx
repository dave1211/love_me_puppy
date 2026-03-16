import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-4 py-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="mb-4 flex items-center justify-center gap-2">
          <Heart className="h-5 w-5 text-primary" strokeWidth={1.5} fill="hsl(var(--primary))" />
          <span className="font-display text-lg font-bold text-foreground">$CUDDLE</span>
        </div>
        <p className="text-sm text-muted-foreground">
          $CUDDLE is a community token on Solana. This is not financial advice.
          <br />
          Always do your own research.
        </p>
        <div className="mt-6 flex items-center justify-center gap-6">
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Twitter
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Telegram
          </a>
          <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Discord
          </a>
        </div>
        <p className="mt-8 text-xs text-muted-foreground/60">
          © 2026 $CUDDLE. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
