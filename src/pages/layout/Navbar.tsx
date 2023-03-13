import { Redeem, Settings, Language } from "@mui/icons-material";
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className="w-full h-60 sticky top-0 bg-emerald-300 min-h-20 flex items-center">
          <div className=" center flex">
            <Link href="/">
              <span className="font-mono p-2 text-6xl"> 🎄 Secret Santa </span>
            </Link>
          </div>
        </div>
    )
}