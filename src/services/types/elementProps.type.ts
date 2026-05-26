export interface ElementProps {
  field: string;
  label: string;
  format: (data: any, row?: any[]) => any;
}
