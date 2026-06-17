# Images

Drop the client's photos here. Reference them from components with the
Next.js `<Image>` component, e.g.:

```tsx
import Image from "next/image";

<Image src="/images/hero.jpg" alt="Our dogs" width={800} height={600} priority />
```

Anything in `public/` is served from the site root, so `public/images/hero.jpg`
is available at `/images/hero.jpg`.
