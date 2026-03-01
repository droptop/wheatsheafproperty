"use client";

import { Content, type BuilderContent } from "@builder.io/sdk-react-nextjs";
import type { RegisteredComponent } from "@builder.io/sdk-react-nextjs";

interface RenderBuilderContentProps {
  content: BuilderContent;
  model: string;
  apiKey: string;
  customComponents?: RegisteredComponent[];
}

export default function RenderBuilderContent({
  content,
  model,
  apiKey,
  customComponents,
}: RenderBuilderContentProps) {
  return (
    <Content
      content={content}
      model={model}
      apiKey={apiKey}
      customComponents={customComponents}
    />
  );
}
