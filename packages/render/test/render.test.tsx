import { render } from '../src/render';

// import AirbnbEmail from '../../../apps/demo/emails/airbnb-review';
// import PlaidEmail from '../../../apps/demo/emails/plaid-verify-identity';
// import VercelEmail from '../../../apps/demo/staged/vercel-invite-user';

import { Preview } from './fixtures/preview';
import { Template } from './fixtures/template';

describe('render', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    vi.resetModules();
  });

  const Foo = Template as any;
  const Bat = Preview as any;

  it('converts a React component into HTML', async () => {
    const c = (
      <>
        <Foo firstName="Jim" />
      </>
    );
    const result = await render(c);
    expect(result).toMatchSnapshot();
  });

  it('converts a React component into PlainText', async () => {
    const result = await render(<Foo firstName="Jim" />, { plainText: true });
    expect(result).toMatchSnapshot();
  });

  it('converts to plain text and removes reserved ID', async () => {
    const result = await render(<Bat />, { plainText: true });
    expect(result).toMatchSnapshot();
  });

  // it('renders the airbnb demo template', async () => {
  //   expect(await render(<AirbnbEmail />)).toMatchSnapshot();
  //   expect(await render(<AirbnbEmail />, { pretty: true })).toMatchSnapshot();
  // });

  // it('renders the plaid demo template', async () => {
  //   expect(await render(<PlaidEmail />)).toMatchSnapshot();
  //   expect(await render(<PlaidEmail />, { pretty: true })).toMatchSnapshot();
  // });

  // it('renders the vercel demo template', async () => {
  //   expect(await render(<VercelEmail />)).toMatchSnapshot();
  //   expect(await render(<VercelEmail />, { pretty: true })).toMatchSnapshot();
  // });
});
