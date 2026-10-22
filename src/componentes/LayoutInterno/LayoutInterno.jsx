import HeaderInterno from "./HeaderInterno/HeaderInterno";
import FooterInterno from "./FooterInterno/FooterInterno";
import "./tokens.css";
import "./LayoutInterno.css";

export default function LayoutInterno({ activo, onNavegar, children }) {
  return (
    <div className="lz-layout">
      <HeaderInterno activo={activo} onNavegar={onNavegar} />
      <div className="lz-layout__contenido">{children}</div>
      <FooterInterno onNavegar={onNavegar} />
    </div>
  );
}