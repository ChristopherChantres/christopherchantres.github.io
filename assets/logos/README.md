# Logos

Drop company / organization logo images here (e.g. `uber.svg`, `udlap.png`,
`apple.svg`). Square images work best since they're shown inside a circle.

To use one instead of the initials placeholder, add a `logoSrc` field to the
matching entry in `js/data/portfolio.js`:

```js
{
  title: 'Software Engineer Fellow',
  org: 'Uber',
  logo: 'U',                       // fallback initials
  logoSrc: 'assets/logos/uber.svg', // shown instead of the initials
  // ...
}
```

If `logoSrc` is omitted, the circular initials placeholder is used.
