import { Redeem, Settings, Language } from "@mui/icons-material";

type Props = {}

export default function Topbar({}: Props) {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
          <div className="topLeft">
          </div>
          <div className="topCenter">
            <span className="logo"> Secret Santa </span>
          </div>
          <div className="topRight">
            <div className="topbarIconContainer">
              <Redeem />
              <span className="topIconBadge">2</span>
            </div>
            <div className="topbarIconContainer">
              <Language />
            </div>
            <div className="topbarIconContainer">
              <Settings />
            </div>
          </div>
        </div>
        {/* </div> */}
        </div>
    )
}