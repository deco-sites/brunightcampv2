import type { Product } from "apps/commerce/types.ts";
import { HorizontalProductCard } from "$components/product/HorizontalProductCard.tsx";
import { asset } from "$fresh/runtime.ts";
import { clx } from "deco-sites/brunightcampv2/sdk/clx.ts";
import { ProductCardFlagProps } from "deco-sites/brunightcampv2/flags/multivariate.ts";

export interface HorizontalProductSectionProps {
  forceError?: boolean;
  products: ProductCardFlagProps;
  animation?: boolean;
  layout:
    | "max-w-xl"
    | "max-w-2xl"
    | "max-w-3xl"
    | "max-w-4xl"
    | "max-w-5xl"
    | "max-w-6xl"
    | "max-w-7xl"
    | "max-w-full";
}

export function loader(props: HorizontalProductSectionProps, _req: Request) {
  if (props.forceError) {
    throw new Error("Not implemented");
  }

  return props;
}

const HorizontalProductSection = ({
  products,
  animation,
  layout,
}: HorizontalProductSectionProps) => {
  if (!products?.length) return null;

  return (
    <div
      class={clx(
        "container flex items-center justify-center gap-x-4 flex-wrap py-4 w-full bg-neutral-content p-2 sm:p-4 md:p-6 rounded-xl ",
        layout,
      )}
    >
      {products.map((product) => (
        <HorizontalProductCard animation={animation} product={product} />
      ))}
    </div>
  );
};

export function LoadingFallback() {
  return (
    <div class="container flex justify-center py-4">
      <div class="flex max-sm:flex-col gap-4">
        <div class="skeleton h-52 w-52 shrink-0"></div>
        <div class="px-2 flex flex-col gap-1 self-stretch shrink-0 w-64">
          <div class="skeleton h-4"></div>
          <div class="skeleton h-4 w-full mb-auto"></div>
          <div class="skeleton h-4 w-14"></div>
          <div class="skeleton h-4 w-18 mb-4"></div>
          <div class="skeleton h-12 w-full"></div>
        </div>
      </div>
    </div>
  );
}

export function ErrorFallback({ error: _error }: { error?: Error }) {
  return (
    <div class="flex flex-col mx-auto max-w-96 gap-3">
      <img
        src={asset("/image/carnaval-rio-de-janeiro.png")}
        alt={"Carnaval Rio de Janeiro"}
        height={400}
        width={400}
      />
      <p class={"font-bold"}>Carnaval Rio de Janeiro</p>
      <p>
        Venha conhecer o carnaval do Rio de Janeiro e se apaixonar pela cultura
        brasileira
      </p>
      <a
        href="/culturas"
        class="btn btn-block bg-transparent hover:bg-primary border border-white hover:border-transparent"
      >
        Para saber mais
      </a>
    </div>
  );
}

export default HorizontalProductSection;
