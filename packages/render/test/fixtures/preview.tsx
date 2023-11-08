import type { FC } from 'hono/jsx';

interface PreviewProps {}

export const Preview: FC<Readonly<PreviewProps>> = () => (
  <>
    <div data-id="@jsx-email/preview">This should be hidden from plain text</div>
    <h1>This should be rendered in plain text</h1>
  </>
);
