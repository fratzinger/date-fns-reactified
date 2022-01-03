import { isValid as _isValid } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isValid = reactify(_isValid);