declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
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

	type ContentConfig = typeof import("../src/content/config");
}
