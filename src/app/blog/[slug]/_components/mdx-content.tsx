import * as runtime from 'react/jsx-runtime';
import * as Custom from './custom';
import * as Original from './original';

const sharedComponents = {
  // 特定の条件に合致した場合は、既存のHTML要素を拡張したカスタムコンポーネントを適用する
  h2: Custom.H2,
  h3: Custom.H3,
  h4: Custom.H4,
  ul: Custom.Ul,
  div: Custom.Div,
  figure: Custom.Figure,
  figcaption: Custom.Figcaption,
  pre: Custom.Pre,
  nav: Custom.Nav,
  img: Custom.Img,
  a: Custom.Anchor,
  p: Custom.P,

  // MDX内で直接importしなくとも使用できるオリジナルコーポ―ネントを提供する
  Callout: Original.Callout,
  CodeTabs: Original.CodeTabs,
  CodeSandbox: Original.CodeSandbox,
  StackBlitz: Original.StackBlitz,
  Playground: Original.Playground,
};

// MDXコードをReactコンポーネントとして解析し、レンダリングするための関数
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

interface MDXProps {
  code: string;
  components: Record<string, React.ComponentType> | null;
}

// MDXContent component
export const MDXContent = ({ code, components }: MDXProps) => {
  const Component = useMDXComponent(code);
  return <Component components={{ ...sharedComponents, ...components }} />;
};
