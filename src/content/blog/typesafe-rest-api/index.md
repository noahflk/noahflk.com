---
title: 'Making a REST API typesafe with React Query and Zod'
pubDate: '2024-08-01'
summary: 'Using React Query alongside TypeScript and Zod, we can achieve a type-safe, efficient data fetching process in React that ensures consistency'
---

I have been a proponent of using tRPC for building end-to-end type-safe APIs for a long time now. It's an amazing library that allows you to directly call your backend functions from the frontend with full type safety. It infers the types automatically, so you won't have to worry about code generation like with GraphQL. In addition, it wraps React Query. This means you'll get to enjoy all the state management benefits that React Query provides.

The big drawback is that tRPC requires not only your frontend but also your backend to be written in TypeScript. And even if that is the case, you'll also need to put everything into a monorepo for type inference between frontend and backend. On many projects, that's a non-starter, since you might already have a fully defined REST API in a completely different technology. So let's assume we're working with a REST API written in Django that we'll call from our React frontend written in TypeScript. How can we get the best developer experience?

Remark: This won't be a full tutorial that shows you how to configure these libraries in your codebase. The official documentation can help you with that. Instead, consider this a conceptual overview of how to combine the technologies for the best possible developer experience.

## Data Fetching with React Query

React Query, also known as TanStack Query since it's been ported to different web frameworks, has rightfully become one of the most popular React libraries. I reach for it on every project I'm involved in, either directly or through tRPC. A common myth is that React Query is a data fetching library, which it is not. It is a tool that makes asynchronous state synchronous. So you'll still need a data fetching tool. The built-in `fetch` browser API is the default choice. What React Query does is wrap an asynchronous fetch function and give it back to you as synchronous data through a React hook. Let's look at an example:

The traditional way to fetch data in a React component goes like this:

- Initiate empty `useState` for data
- Trigger data fetch on mount in `useEffect`
- Store result data with `setState`
- Saved data in state triggers re-render with data

In code form:

```jsx
function DataFetchingComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.example.com/data');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
```

With React Query we can simplify this to:

```jsx
function DataFetchingComponent() {
  const fetchData = async () => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
  };

  const { data, isLoading } = useQuery('data', fetchData);

  if (!isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
```

Much more elegant, isn't it? But that's not all. Now imagine the custom code you would have to write to handle the following things:

- Accessing the same data in multiple components without duplicate fetches
- Refreshing data during mutations
- Caching and cache invalidation
- Optimistic updates
- Background refetching

React Query handles all of this for you! So it's not surprising that it has become a core technology in my projects. What you'll notice is that both examples don't have any TypeScript types associated. So let's fix that.

## Manual API Type Safety

The previous code samples have no way of knowing the types. We fetch the data from a regular HTTP endpoint that doesn't provide any type information, both with or without React Query. A common way to make it type-safe is by setting a TypeScript type. Some projects do this with code generation, meaning there is a script that figures out the types from the backend and then generates a type definition file in your frontend. This is a valid strategy, but it requires a complex setup and build process. So a lot of projects choose to manually set the types.

```tsx
// example data, could be anything
interface FetchedData {
  id: number;
  name: string;
}

function DataFetchingComponent() {
  const fetchData = async (): Promise<FetchedData> => {
    const response = await fetch('https://api.example.com/data');
    return response.json();
  };

  const { data, isLoading } = useQuery('data', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```

This works well. Your `data` object now has the defined type `FetchedData`. But there is one big problem: **you cannot guarantee consistency** between the response and your types. TypeScript gives you a false sense of security that a certain property will always be there. You have no way of knowing if the API suddenly no longer includes this property in the response.

## Zod Validation

To ensure consistency, we need a way to validate the API response. Here, Zod comes into play. You define a schema that describes how the API response should look like:

```tsx
import { z } from 'zod';

const FetchedDataSchema = z.object({
  id: z.number(),
  name: z.string(),
});
```

So far this looks just like our type definition, but with a slightly different syntax. But the best part is, we can automatically generate a type definition based on this schema.

```tsx
type FetchedData = z.infer<typeof FetchedDataSchema>;
```

Now we can use this to validate the API response:

```tsx
const FetchedDataSchema = z.object({
  id: z.number(),
  name: z.string(),
});

type FetchedData = z.infer<typeof FetchedDataSchema>;

function DataFetchingComponent() {
  const fetchData = async (): Promise<FetchedData> => {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return FetchedDataSchema.parse(data);
  };

  const { data, isLoading } = useQuery('data', fetchData);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <pre>{JSON.stringify(data)}</pre>
    </div>
  );
}
```

The `parse(data)` function will raise an error if the response does not match the schema. You can then handle that error however you like. Now we have the full workflow of how to call REST APIs in a type-safe manner from React using React Query and Zod. In a production app, you would move the schemas and fetch function to separate files so they can be re-used across your application. But apart from that, we have the full setup that can scale to large apps.
