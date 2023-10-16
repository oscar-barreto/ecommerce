import Container from "./Container";
import FooterList from "./FooterList";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-slate-200 text-sm mt-16">
        <Container>
            <div className="flex flex-col md:flex-row justify-between pb-8 pt-16">
                <FooterList>
                    <h3 className="text-base font-bold mb-2 ">Shop Categories</h3>
                    <Link href='#'>Phones</Link>
                    <Link href='#'>Laptops</Link>
                    <Link href='#'>Desktop</Link>
                    <Link href='#'>TVs</Link>
                    <Link href='#'>Accesories</Link>
                  </FooterList>
                  <FooterList>
                    <h3 className="text-base font-bold mb-2 ">Customer Service</h3>
                    <Link href='#'>Contact Us</Link>
                    <Link href='#'>Shipping Policy</Link>
                    <Link href='#'>Returns & Exchanges</Link>
                    <Link href='#'>FAQs</Link>
                  </FooterList>
                 <div className="w-full md:w-1/3 mb-6 md:mb-0">
                 <h3 className="text-base font-bold mb-2 ">About Us</h3>
                 <p></p>

                 </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer