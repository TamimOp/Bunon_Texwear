"use client";
import { usePathname } from "next/navigation";
import { FooterContactSection } from "./Footer";
import ContactInfoBoxes from "./ContactInfoBoxes";

export default function FooterContactSwitcher() {
  const pathname = usePathname();
  if (pathname === "/contact") {
    return <ContactInfoBoxes />;
  }
  return <FooterContactSection />;
}
