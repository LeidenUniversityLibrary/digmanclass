# Digital Manuscripts in the Classroom

Digital Manuscripts in the Classroom is a website that features digitised
manuscripts from the Special Collections at Leiden University Libraries.
The manuscripts are presented with contextual information and questions to
let non-experts explore and learn about manuscript production and culture.

For more details, please see the [colophon](about.md).

## Install

This is a Jekyll website and requires Ruby and the `bundler` gem to be
installed.

```sh
# After installing Ruby
gem install bundler
bundle install
```

## Build

To build the website once, so that it can be deployed, run:

```sh
bundle exec jekyll build
```

To continuously build the website on every change, run:

```sh
bundle exec jekyll serve
```
And open the locally served page: <http://localhost:4000/>.

## Deploy

To deploy the built website, copy all the contents of the `_site` directory
to the directory that is served as the root of [DigManClass].

[DigManClass]: https://digmanclass.universiteitleiden.nl/

## Contributing

We are currently not looking for contributions.
However, if you find mistakes in grammar, spelling or factual errors, we would
welcome issues or pull requests that address them.

## License

Currently Leiden University Libraries reserve all rights.
