import { Box } from "@mui/material";
import Image from "next/image";

function Logo() {
  const companyLogo = "/logoipsum-362.svg";
  return (
    <Box sx={{ position: "relative", width: 84, height: 84 }}>
      <Image
        className="cursor-pointer"
        src={companyLogo}
        fill
        alt={companyLogo}
        priority
      />
    </Box>
  );
}
export default function Loading() {
  return (
    <Box className="animate-custom-pulse absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center p-6 z-[2000]">
      <Logo />
    </Box>
  );
}
