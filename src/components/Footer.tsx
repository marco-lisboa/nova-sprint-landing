import { Instagram } from "lucide-react";
import logo from "@/assets/logo-ns.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="New Sprint" className="h-[200px] w-auto -my-16" />
          <span className="font-heading font-bold text-foreground">
            New<span className="text-primary">Sprint</span>
          </span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} New Sprint. Todos os direitos reservados.
        </p>
        <a
          href="https://www.instagram.com/new.sprint/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <Instagram size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
