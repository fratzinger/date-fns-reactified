import { isExists as _isExists } from "date-fns";
import { reactify } from "@vueuse/shared";

export const isExists = reactify(_isExists);