import { getImageUrl } from "../../utils/getImageUrl";
import "./BrandLogo.css";

type BrandLogoProps = {
  logoBackground: string;
  company: string;
};

export const BrandLogo = ({ logoBackground, company }: BrandLogoProps) => {
  return (
    <div className="brand-logo" style={{ backgroundColor: logoBackground }}>
      <img src={getImageUrl(company)} alt={`logo from company ${company}`} />
    </div>
  );
};
