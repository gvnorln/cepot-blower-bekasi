"use client";

import HeaderHome from "../components/HeaderHome";
import CatalogGrid from "../components/CatalogGrid";
import { SAMPLE_PRODUCTS } from "../../data/products";
import HeroSection from "../components/HeroSection";

const WHATSAPP_PHONE = "6281234567890";

export default function CatalogPageClient() {
  return (
    <>
      <HeaderHome WHATSAPP_PHONE={WHATSAPP_PHONE} />
      <CatalogGrid products={SAMPLE_PRODUCTS} WHATSAPP_PHONE={WHATSAPP_PHONE} />
      <HeroSection  />
    </>
  );
}
