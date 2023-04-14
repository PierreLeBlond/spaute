export type Constraints = Partial<{
  pattern: string;
  min: string | number;
  max: string | number;
  required: boolean;
  step: number;
  minlength: number;
  maxlength: number;
}>
