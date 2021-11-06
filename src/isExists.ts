import { isExists as _isExists } from "date-fns";
import { reactify } from "@vueuse/core";

export const isExists = reactify(_isExists);