export type Constraints = Partial<{
  pattern: string;
  min: string | number;
  max: string | number;
  required: boolean;
  step: number | "any";
  minlength: number;
  maxlength: number;
}>
