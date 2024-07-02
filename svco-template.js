const template = (variables, { tpl }) => {
  // Keep just the children and wrap them in a React.Fragment
  const coreJsx = {
    type: 'JSXElement',
    openingElement: {
      type: 'JSXOpeningElement',
      name: { type: 'JSXIdentifier', name: 'React.Fragment' },
      attributes: [],
      selfClosing: false
    },
    closingElement: {
      type: 'JSXClosingElement',
      name: { type: 'JSXIdentifier', name: 'React.Fragment' }
    },
    children: variables.jsx.children,
    selfClosing: null
  };

  return tpl`
${variables.imports};
import { createCollecticon } from '../collecticon-creator';

const ${variables.componentName} = createCollecticon(() => (
  ${coreJsx}
));

${variables.exports};
`;
};

module.exports = template;
