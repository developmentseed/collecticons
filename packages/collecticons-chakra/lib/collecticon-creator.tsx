import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

interface IconPropsWithTitle extends IconProps {
  title?: string;
}

interface CollecticonChakraProps extends IconPropsWithTitle {
  meaningful?: boolean;
  size?: IconProps['width'];
}

export type CollecticonChakra = React.ForwardRefExoticComponent<
  CollecticonChakraProps & React.RefAttributes<SVGSVGElement>
>;

/**
 * Creates a collecticons component.
 *
 * @param {function} creatorFn Function to create the collecticon.
 */
export function createCollecticon(
  creatorFn: (props: IconPropsWithTitle) => JSX.Element,
  iconSvgProps: IconPropsWithTitle = {}
): CollecticonChakra {
  const CollecticonChakra = React.forwardRef<
    SVGSVGElement,
    CollecticonChakraProps
  >((props, ref) => {
    const { title, size, meaningful, ...rest } = props;

    const s = typeof size !== 'undefined' ? size : '1rem';

    const iconProps: IconPropsWithTitle = {
      title,
      width: s,
      height: s,
      fill: 'currentColor',
      role: 'img',
      viewBox: '0 0 16 16',
      xmlns: 'http://www.w3.org/2000/svg',
      // By default icons are rendered decoratively (aria hidden true) Using
      // "meaningful" prop (together with a descriptive title) will enable the
      // icon to be understood by assistive technologies.
      'aria-hidden': !meaningful,
      ...iconSvgProps,
      ...rest
    };
    return (
      <Icon {...iconProps} ref={ref}>
        {creatorFn(iconProps)}
      </Icon>
    );
  });

  CollecticonChakra.displayName = 'CollecticonChakra';

  return CollecticonChakra;
}
