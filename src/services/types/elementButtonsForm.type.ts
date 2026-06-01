export interface ElementButtonForm {
  text: string;
  type?: "button" | "reset" | "submit";
  showIcon?: boolean;
  action: () => void;
}

export interface ElementButtonsForm {
  confirm: ElementButtonForm;
  cancel: ElementButtonForm;
}
