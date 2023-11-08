interface TemplateProps extends JSX.ElementChildrenAttribute {
  deprecatedLegacyContext?: any;
  firstName: string;
}

export const Template = ({ firstName }: TemplateProps) => (
  <>
    <h1>Welcome, {firstName}!</h1>
    <img src="img/test.png" alt="test" />
    <p>Thanks for trying our product. We're thrilled to have you on board!</p>
  </>
);
