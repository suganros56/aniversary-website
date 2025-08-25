import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import { EmailInterface } from "./components/email-interface";
import LetterInterface from "./components/LetterInterface";
import MainLove from "./components/MainLove";
import HomePageLove from "./components/HomePageLove";


export default function Home() {
  return (
    <main>     
{/* <MainLove/> */}
<HomePageLove/>
    </main>
  );
}
