// /* eslint-disable react-hooks/exhaustive-deps */
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { unProtectedRoutes, protectedRoutes } from "../../static/routes";
// import Layout from "@/components/common/layout/layout";
// import { getToken, logout } from "@/service/utils/auth.util";
// import PageNotFoundPage from "@/pages/pagenotfound";
// import { currentPageData, peopleDataS } from "./jotai-Provider";
// import { useAtom } from "jotai";
// export const AuthChecker = ({ children }: any) => {
//   const [, setPeopleData] = useAtom(peopleDataS);
//   const [, setCurrentPage] = useAtom(currentPageData);

//   const token = getToken();
//   const router = useRouter();
//   const [mounted, setMounted] = useState(false);
//   const isUnProtected = unProtectedRoutes.find(
//     (routes) => router.pathname === routes.route
//   );
//   const isProtected = protectedRoutes.find(
//     (routes) => router.pathname === routes.route
//   );

//   useEffect(() => {
//     setMounted(true);
//     if (
//       process.env.NEXT_PUBLIC_REST_UNDER_MAINTENANCE &&
//       (process.env.NEXT_PUBLIC_REST_UNDER_MAINTENANCE.includes("maintenance") ||
//         process.env.NEXT_PUBLIC_REST_UNDER_MAINTENANCE.includes("production"))
//     ) {
//       token && logout();
//       router.push("/maintenance");
//     }

//     if (!router.isReady) return;

//     if (!token && !isUnProtected) {
//       router.push("/");
//     }
//     if (token && isUnProtected) {
//       router.push("/lead/search?type=People");
//     }
//     if (token && router?.pathname === "/login?from=appsumo") {
//       router?.push("/lead/search?type=People");
//     }
//     if (
//       router?.pathname === "/lead/save-leads" ||
//       router?.pathname === "/lead/search?type=Lookup" ||
//       router?.pathname === "/lead/export-search" ||
//       router?.pathname === "/product" ||
//       router?.pathname === "/setting/my-details" ||
//       router?.pathname === "/setting/password" ||
//       router?.pathname === "/nexus/onboarding" ||
//       router?.pathname === "/nexus/campaigns" ||
//       router?.pathname === "/nexus/email-accounts"
//     ) {
//       setCurrentPage(0)
//       setPeopleData([]);
//     }
//   }, [router,token, isUnProtected, isProtected]);

//   let ret: any = "";
//   if (router.isReady) {
//     if (token && !isUnProtected && isProtected?.isProtected) {
//       ret = <Layout>{children}</Layout>;
//     } else if (!token && isUnProtected && !isUnProtected?.isProtected) {
//       ret = children;
//     } else {
//       if (
//         router?.pathname.startsWith("/details") &&
//         isProtected?.isProtected &&
//         !token
//       ) {
//         window.location.href = "/";
//         return null; // Returning null since the component is redirected
//       } else {
//         ret = router?.pathname !== "/" && <PageNotFoundPage />;
//       }
//     }
//   }

//   return mounted && ret;
// };

import React from "react";
import { UnProtectedRoutes } from "@/static/routs";
import { usePathname } from "next/navigation";

const AuthChecker = () => {
  const pathname = usePathname();
  const unProtected = UnProtectedRoutes.find(
    (routes) => pathname === routes.route
  );

  return <div></div>;
};

export default AuthChecker;
