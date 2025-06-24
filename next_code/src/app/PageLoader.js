"use client";

import { useEffect } from "react";
import HeaderOutlet from "@/components/headerOutlet/HeaderOutlet";
import FooterOutlet from "@/components/footerOutlet/FooterOutlet";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function PageLoader({ children }) {
  const currentPage = usePathname();
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const noHeaderPage = ["/auth/login", "/auth/register"];
  const noFooterPage = ["/auth/login", "/auth/register"];
  const authPages = ["/clients", "/clients/add-client", "/dashboard"];
  const noAuthPages = ["/auth/login", "/auth/register"];

  const isAllowShowHeader = !noHeaderPage.includes(currentPage);
  const isAllowShowFooter = !noFooterPage.includes(currentPage);
  const isAuthPage = authPages.includes(currentPage);
  const isNoAuthPage = noAuthPages.includes(currentPage);

  useEffect(() => {
    setTimeout(() => {
      if (isAuthPage && !isAuthenticated) {
        router.push("/auth/login");
      } else if (isNoAuthPage && isAuthenticated) {
        router.push("/");
      }
    }, 100);
  }, [currentPage, isAuthenticated, isAuthPage, isNoAuthPage, router]);


  return (
    <>
      {isAllowShowHeader && <HeaderOutlet profileImg="/assets/imgs/profile.png" />}
      {children}
      {isAllowShowFooter && <FooterOutlet />}
    </>
  );
}
