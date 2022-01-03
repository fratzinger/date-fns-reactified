import { isEqual as _isEqual } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isEqual = reactify(_isEqual);