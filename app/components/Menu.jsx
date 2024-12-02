import Link from "next/link";
import { headerStyle } from "../style/HeaderStyle";

const Menu = () => {
  return (
    <nav className="w-full flex py-3 border-b-2 border-indigo-200">
      <div className="w-2/12 text-center text-2xl">
        {" "}
        <Link href="/">ITCOFFEE</Link>
      </div>

      <ul className="w-5/12 flex justify-between text-center">
        <Link href="/menu">
          <li className={headerStyle.flexCenterPackage}>MENU</li>
        </Link>
        <Link href="/brand">
          <li className={headerStyle.flexCenterPackage}>BRAND</li>
        </Link>
        <Link href="/franchise">
          <li className={headerStyle.flexCenterPackage}>FRANCHISE</li>
        </Link>

        <Link href="/store">
          <li className={headerStyle.flexCenterPackage}>STORE</li>
        </Link>
        <Link href="/news">
          <li className={headerStyle.flexCenterPackage}>NEWS</li>
        </Link>
        <Link href="/goods">
          <li className={headerStyle.flexCenterPackage}>Goods</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Menu;
