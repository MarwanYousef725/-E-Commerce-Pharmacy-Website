import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/products/product-detail-view";
import { getProductById, getRelatedProducts } from "@/lib/data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.name} | SereneMeds`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) notFound();

  const related = getRelatedProducts(product);

  return <ProductDetailView product={product} related={related} />;
}
