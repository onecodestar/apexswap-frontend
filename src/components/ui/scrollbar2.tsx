import cn from 'classnames';
import {
  OverlayScrollbarsComponent,
  OverlayScrollbarsComponentProps,
} from 'overlayscrollbars-react';
import 'overlayscrollbars/css/OverlayScrollbars.css';

interface ScrollbarProps extends OverlayScrollbarsComponentProps {
  style?: React.CSSProperties;
  className?: string;
  autoHide?: 'never' | 'scroll' | 'leave' | 'move';
}

export default function Scrollbar({
  options,
  style,
  className,
  autoHide = 'scroll',
  ...props
}: React.PropsWithChildren<ScrollbarProps>) {
  return (
    <OverlayScrollbarsComponent
    options={{ scrollbars: { autoHide: "scroll" } }}
    extensions={["extensionA", "extensionB"]}
    ></OverlayScrollbarsComponent>
  );
}
