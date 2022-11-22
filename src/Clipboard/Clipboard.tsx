import React, { MutableRefObject, useState } from 'react';
import { CheckCircleIcon, CopyIcon as CopyIconUi } from '../Icons/jsx';
import Tooltip from '../Tooltip/Tooltip';

interface ClipboardProps {
  copy?: React.ReactElement | string;
  element: MutableRefObject<HTMLInputElement | undefined>;
}

const Clipboard: React.FC<ClipboardProps> = ({ copy, element }) => {
  const [canBeCopied, setCanBeCopied] = useState(true);

  const iconHandler = () => {
    if (element.current?.value) {
      element.current?.select();
      document.execCommand('copy');
      setCanBeCopied(false);

      setTimeout(() => {
        setCanBeCopied(true);
      }, 1600);
    }
  };

  const CopyButton = () => <button className="clipboard__button" onClick={iconHandler}><CopyIconUi className="clipboard__icon" /></button>;

  const CopyIcon = () => (copy ? <Tooltip maxWidth={'auto'} content={copy} position="top"><CopyButton /></Tooltip> : <CopyButton />);

  return <div className="clipboard">{canBeCopied ? <CopyIcon /> : <CheckCircleIcon className="clipboard__done-icon" />}</div>;
};

export default Clipboard;
