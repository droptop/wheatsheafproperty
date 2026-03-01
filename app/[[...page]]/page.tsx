import { fetchOneEntry, getBuilderSearchParams } from "@builder.io/sdk-react-nextjs";
import { notFound } from "next/navigation";
import RenderBuilderContent from "@/components/builder/RenderBuilderContent";
import heroSection from "@/components/HeroSection";

const BUILDER_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: Promise<{ page?: string[] }>;
  searchParams: Promise<Record<string, string>>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const urlPath = "/" + (resolvedParams.page?.join("/") ?? "");

  const content = await fetchOneEntry({
    model: "page",
    apiKey: BUILDER_API_KEY,
    options: getBuilderSearchParams(resolvedSearchParams),
    userAttributes: { urlPath },
  });

  if (!content) {
    notFound();
  }

  return (
    <RenderBuilderContent
      content={content}
      model="page"
      apiKey={BUILDER_API_KEY}
      customComponents={[heroSection]}
    />
  );
}
