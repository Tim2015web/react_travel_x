import { useEffect, useState } from "react";
import { Header } from "./components/header/Header";
import { PreLoader } from "./components/preLoader/PreLoader";
import { SecondSection } from "./components/secondSection/SecondSection";

export function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <PreLoader visible={loading} />
      <Header />
      <SecondSection />
    </>
  );
};