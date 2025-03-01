import React, { FC } from 'react';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import Button from '../Button/Button';
import BlockIcon from '../Icons/jsx/BlockIcon';
import CheckIcon from '../Icons/jsx/CheckIcon';
import CloseIcon from '../Icons/jsx/CloseIcon';
import 'react-toastify/dist/ReactToastify.css';

type NotificationType = 'success' | 'error';

interface Notification {
  type: NotificationType;
}

const transition = cssTransition({
  enter: 'notificationIn',
  exit: 'notificationOut',
  collapseDuration: 750,
});

const CloseButton = ({ closeToast }: { closeToast?: () => void }) => (
  <Button icon onClick={closeToast} color="transparent" className="notification-close">
    <CloseIcon />
  </Button>
);

const Notification: FC<React.PropsWithChildren<Notification>> = ({ type, children }) => (
  <>
    <div className="notification-icon">
      {type === 'success' && <CheckIcon className="notification-icon-success" />}
      {type === 'error' && <BlockIcon className="notification-icon-error" />}
    </div>
    <div className="notification-message">{children}</div>
  </>
);

const NotificationsContainer: FC<React.PropsWithChildren<unknown>> = () => (
  <ToastContainer className="notification-container" transition={transition} closeOnClick={false} autoClose={5000} />
);

export default NotificationsContainer;

export const notify = (text: string | React.ReactNode, type: NotificationType) => {
  toast(<Notification type={type}>{text}</Notification>, {
    draggable: true,
    draggablePercent: 60,
    className: `notification -${type}`,
    progressClassName: 'notification-progress',
    closeButton: <CloseButton />,
  });

  return null;
};
