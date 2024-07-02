import React, { SVGProps } from 'react';

interface IconPropsWithTitle extends SVGProps<SVGSVGElement> {
  title?: string;
}

interface CollecticonProps extends IconPropsWithTitle {
  meaningful?: boolean;
  size?: string;
}

export type Collecticon = React.ForwardRefExoticComponent<
  CollecticonProps & React.RefAttributes<SVGSVGElement>
>;

/**
 * Creates a collecticons component.
 *
 * @param {function} creatorFn Function to create the collecticon.
 */
export function createCollecticon(
  creatorFn: (props: IconPropsWithTitle) => JSX.Element,
  iconSvgProps: IconPropsWithTitle = {}
): Collecticon {
  const Collecticon = React.forwardRef<SVGSVGElement, CollecticonProps>(
    (props, ref) => {
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
        <svg {...iconProps} ref={ref}>
          {title && (<title>{title}</title>)}
          {creatorFn(iconProps)}
        </svg>
      );
    }
  );

  Collecticon.displayName = 'Collecticon';

  return Collecticon;
}
