export interface ElementButtonForm {
  text: string;
  type?: "button" | "reset" | "submit" | undefined;
  showIcon?: boolean;
  action: () => void;
}

export interface ElementButtonsForm {
  confirm: ElementButtonForm;
  cancel: ElementButtonForm;
}
