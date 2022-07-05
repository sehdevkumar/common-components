export interface ConfirmationMessageType {
  message?: string;
  title?: string;
  backgroundColor?: string;
  okButtonColor?: string;
  cancelButtonColor?: string;
  okButtonText?: string;
  cancelButtonText?: string;
  dismissAllowed?: boolean;
}

export enum MessageType {
  SUCCESS = 'SUCCESS',
  WARNING = 'WARNING',
  DANGER = 'DANGER',
}
