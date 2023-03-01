import { Redeem, Settings, Language } from "@mui/icons-material";
import Link from 'next/link'

type Props = {}

export default function Navbar({}: Props) {
  return (
    <div className="Navbar">
      <div className="NavbarWrapper">
          <div className="topLeft">
          </div>
          <div className="topCenter">
            <Link href="/">
              <span className="logo"> Secret Santa </span>
            </Link>
          </div>
          <div className="topRight">
            <div className="NavbarIconContainer">
              <Redeem />
              <span className="topIconBadge">2</span>
            </div>
            <div className="NavbarIconContainer">
              <Language />
            </div>
            <div className="NavbarIconContainer">
              <Settings />
            </div>
          </div>
        </div>
        </div>
    )
}