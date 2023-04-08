import { Redeem, Settings, Language } from "@mui/icons-material";
import Link from 'next/link'


export default function Navbar() {
  return (
    <div className="h-40 bg-emerald-300">
            <Link href="/">
              <span className="font-mono p-2 text-6xl"> Secret Santa </span>
            </Link>
        </div>
    )
}