# Core idea

The idea behind `w` is that web pages should be easily composable. Yes, there are a lot of other template engines out there, but some times you just don't want all that complexity in your life. You want something simple. Let's take an example.

You start a simple static website. You make an `index.html` file. After a while, you add CSS, JS, and assets.

```
/project ⬎
  index.html
  css/ ⬎
    style.css
  js/ ⬎
    main.js
  assets/ ⬎
    logo.png
    banner-img.jpg
```

Everything looks good so far. Now in your `index.html`, you probably have a `header`, `nav` and `footer` element each. You create a new page, `about`.

```
/project ⬎
  index.html
  /css ⬎
    style.css
  /js ⬎
    main.js
  /assets ⬎
    logo.png
    banner-img.jpg
  /about ⬎
    index.html
```

You probably want the same `header`, `nav` and `footer` in `about/index.html` as well. The only way to do this as of now is to make a copy of them. This isn't ideal of course because if anything changes in them, it has to be changed across all the index files. You'll also want to link to the CSS, JS, and static files. Enter `w`.

The idea is that instead of `html` files, you'll make `w` files. Oh no, I need to learn ANOTHER syntax, you ask? Not at all. `w` files are just `html` with templates built in. Let's go with the earlier example. What will this look like with `w`?

```
/project ⬎
  w.json
  /comps ⬎
    header.w
    nav.w
    footer.w
  /source ⬎
    index.w
    about.w
    contact.w
  /assets ⬎
    logo.png
    banner-img.jpg
  /css ⬎
    style.css
  /js ⬎
    main.js
```

Now in `/source/index.w`, you add this:

```
<html>

  <head>
    ...
  </head>

  <body>
    <w-nav>
    <w-header>
    <div>
      Some normal HTML content
    </div>
    <w-footer>
  </body>

</html>
```

A command like `w build .` in the root should now be able to load your `w.json` file, read the list and build the website at `/public`. Once this is done, you can simply publish your `/public` folder to the web! Anything else in the project root other than `/comps` and `/source` are simply placed in the `/public`, but with the advantage that you don't have to use relative or absolute paths for them. Simply use `w~assets/logo.png` to refer to the logo.