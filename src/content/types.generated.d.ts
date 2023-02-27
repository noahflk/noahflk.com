declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		typeof entryMap[C][keyof typeof entryMap[C]] & Render;

	type BaseCollectionConfig<S extends import('astro/zod').ZodRawShape> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<import('astro/zod').ZodObject<S>>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends import('astro/zod').ZodRawShape>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	export function getEntry<C extends keyof typeof entryMap, E extends keyof typeof entryMap[C]>(
		collection: C,
		entryKey: E
	): Promise<typeof entryMap[C][E] & Render>;
	export function getCollection<
		C extends keyof typeof entryMap,
		E extends keyof typeof entryMap[C]
	>(
		collection: C,
		filter?: (data: typeof entryMap[C][E]) => boolean
	): Promise<(typeof entryMap[C][E] & Render)[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		import('astro/zod').ZodObject<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			injectedFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blog": {
"managing-deps-with-renovate/index.mdx": {
  id: "managing-deps-with-renovate/index.mdx",
  slug: "managing-deps-with-renovate",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"multilang-next-app/index.mdx": {
  id: "multilang-next-app/index.mdx",
  slug: "multilang-next-app",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"next-image-optimization/index.mdx": {
  id: "next-image-optimization/index.mdx",
  slug: "next-image-optimization",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"plausible-astro/index.mdx": {
  id: "plausible-astro/index.mdx",
  slug: "plausible-astro",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"react-accessibility/index.mdx": {
  id: "react-accessibility/index.mdx",
  slug: "react-accessibility",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"supabase-the-good-parts/index.mdx": {
  id: "supabase-the-good-parts/index.mdx",
  slug: "supabase-the-good-parts",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
"supabase-typescript-trpc/index.mdx": {
  id: "supabase-typescript-trpc/index.mdx",
  slug: "supabase-typescript-trpc",
  body: string,
  collection: "blog",
  data: InferEntrySchema<"blog">
},
},

	};

	type ContentConfig = typeof import("./config");
}
