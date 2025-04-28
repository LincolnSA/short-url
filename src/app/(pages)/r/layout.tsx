import { Metadata } from "next";

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Redirecting...",
  description: "Redirecting...",
};

export default function RedirectLayout(props: Props) {
  const { children } = props;
  return <>{children}</>;
}
