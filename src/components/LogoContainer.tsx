import { Link } from "react-router-dom"


const LogoContainer = () => {
  return (
    <Link to={"/"} className="flex items-center gap-2">
        <img src="/svg/logo.svg" className="min-w-10 min=h=10 object-contain"/>

    </Link>
  )
}

export default LogoContainer