# Manga Panel Project

Manga Panel is a small project using angular framework.

# How It Works?

Here you can add a panel by copying the url of an image, insert a title and the number of the chapter.
The panel is displayed in the All Panels component. There you can remove it (When a favorite panel is removed from the All Panels is also removed from the Favorite)
or favorite it.
The panels that are favorite, are displayed in the Favorite component. Here you can remove it.

# Angular Features First Time Used

# Interface

```typescript

interface Manga {
  title: string;
  chapter: string;
  image: string;
}

```

The interface Manga is a TypeScript interface that defines a contract for objects that represent manga. In this case, it specifies that a Manga object should have three properties:

title: a property of type string, which represents the title of the manga.
chapter: a property of type string, which represents the chapter of the manga.
image: a property of type string, which represents the image of the manga.
By defining an interface, you can specify the expected shape of an object in your TypeScript code. Objects that implement this interface must adhere to this contract by providing properties with the specified names and types.

For example, if you have a function that expects an object of type Manga as an argument, you can ensure that the passed object conforms to the Manga interface by checking that it has the title, chapter, and image properties of the correct types. This can help catch potential bugs or errors at compile-time, providing better type checking and code completion in TypeScript development.



# Services



# Reactive Forms





